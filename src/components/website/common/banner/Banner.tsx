"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface BannerProps {
  data: {
    heading: string;
    name: string;
    image: string;
  };
}

const Banner = ({ data }: BannerProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageWrapRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!sectionRef.current || !imageWrapRef.current || !textRef.current)
      return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=120%",
          scrub: true,
          pin: true,
        },
      });

      /* TEXT GOES UP */
      tl.to(
        textRef.current,
        {
          y: -120,
          opacity: 0,
          ease: "none",
        },
        0
      );

      /* IMAGE EXPANDS */
      tl.to(
        imageWrapRef.current,
        {
          width: "100%",
          height: "90svh",
          ease: "none",
        },
        0.2
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#e8f0ec] overflow-hidden"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center px-[8vw] min-h-[100svh]">
        
        {/* TEXT */}
        <div ref={textRef} className="max-w-[520px]">
          <h1 className="text-[clamp(40px,6vw,80px)] leading-tight font-serif">
            {data.heading}
          </h1>

          <p className="mt-10 uppercase tracking-widest text-sm">
            {data.name}
          </p>
        </div>

        {/* IMAGE */}
        <div className="relative flex justify-center">
          <div
            ref={imageWrapRef}
            className="w-[520px] h-[420px] overflow-hidden"
          >
            <img
              src={data.image}
              alt={data.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
