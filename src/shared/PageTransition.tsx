"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { usePathname } from "next/navigation";

const PageTransition = () => {
  const panel1 = useRef<HTMLDivElement>(null);
  const panel2 = useRef<HTMLDivElement>(null);
  const container = useRef<HTMLDivElement>(null);

  const pathname = usePathname();
  const isFirstLoad = useRef(true);

  // INITIAL + ENTER ANIMATION
  useGSAP(
    () => {
      // initial state
      gsap.set([panel1.current, panel2.current], {
        yPercent: 100,
      });

      const tl = gsap.timeline({ paused: true });

      tl.to(panel1.current, {
        yPercent: 0,
        duration: 0.6,
        ease: "power4.inOut",
      }).to(
        panel2.current,
        {
          yPercent: 0,
          duration: 0.6,
          ease: "power4.inOut",
          onComplete: () => {
            window.dispatchEvent(new Event("transition-in-complete"));
          },
        },
        "-=0.4"
      );

      const start = () => tl.play(0);
      window.addEventListener("start-transition", start);

      // cleanup handled automatically + event removal
      return () => {
        window.removeEventListener("start-transition", start);
      };
    },
    { scope: container }
  );

  // EXIT ANIMATION (route change)
  useGSAP(
    () => {
      if (isFirstLoad.current) {
        isFirstLoad.current = false;
        return;
      }
    //   gsap.set(panel1.current, { zIndex: 2 });
    // gsap.set(panel2.current, { zIndex: 1 });

      gsap
        .timeline()
        .to(panel2.current, {
          yPercent: -100,
          duration: 0.4,
          ease: "power2.in",
        })
        .to(
          panel1.current,
          {
            yPercent: -100,
            duration: 0.6,
            ease: "power2.in",
            onComplete: () => {
              window.dispatchEvent(new Event("transition-exit-complete"));
            },
          },
          "-=0.2"
        );
    },
    { scope: container, dependencies: [pathname] }
  );

  return (
    <div
      ref={container}
      className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden"
    >
      <div ref={panel1} className="absolute inset-0 bg-[var(--foreground)] " />
      <div ref={panel2} className="absolute inset-0 bg-[var(--background)]" />
    </div>
  );
};

export default PageTransition;



// "use client";

// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { usePathname } from "next/navigation";

// const PageTransition = () => {
//   const panel1 = useRef<HTMLDivElement>(null);
//   const panel2 = useRef<HTMLDivElement>(null);

//   const pathname = usePathname();
//   const isFirstLoad = useRef(true);

//   // INITIAL STATE (ONCE)
//   useEffect(() => {
//     gsap.set([panel1.current, panel2.current], {
//       yPercent: 100,
//     });
//   }, []);

//   // ENTER — cover screen
//   useEffect(() => {
//     const tl = gsap.timeline({ paused: true });

//     tl.to(panel1.current, {
//       yPercent: 0,
//       duration: 0.6,
//       ease: "power4.inOut",
//     }).to(
//       panel2.current,
//       {
//         yPercent: 0,
//         duration: 0.6,
//         ease: "power4.inOut",
//         onComplete: () => {
//           window.dispatchEvent(new Event("transition-in-complete"));
//         },
//       },
//       "-=0.4"
//     );

//     const start = () => tl.play(0);
//     window.addEventListener("start-transition", start);

//     return () => {
//       window.removeEventListener("start-transition", start);
//     };
//   }, []);

//   // EXIT — reveal new page
//   useEffect(() => {
//     if (isFirstLoad.current) {
//       isFirstLoad.current = false;
//       return;
//     }

//     gsap
//       .timeline()
//       .to(panel1.current, {
//         yPercent: -100,
//         duration: 0.6,
//         ease: "power3.out",
//       })
//       .to(
//         panel2.current,
//         {
//           yPercent: -100,
//           duration: 0.6,
//           ease: "power3.out",
//           onComplete: () => {
//             window.dispatchEvent(new Event("transition-exit-complete"));
//           },
//         },
//         "-=0.4"
//       );
//   }, [pathname]);

//   return (
//     <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
//       <div ref={panel1} className="absolute inset-0 bg-[var(--foreground)]" />
//       <div ref={panel2} className="absolute inset-0 bg-[var(--background)]" />
//     </div>
//   );
// };

// export default PageTransition;
