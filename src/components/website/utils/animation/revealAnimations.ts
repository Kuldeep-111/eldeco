import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { getSmoother } from "../gsapSmoother";

gsap.registerPlugin(ScrollTrigger);

type RevealDirection = "left" | "right" | "top" | "bottom";

/* ================= TEXT REVEAL ================= */
export const initReveals = () => {
  const smoother = getSmoother();
  const scroller = smoother?.wrapper() || window;

  const elements = gsap.utils.toArray<HTMLElement>(".reveal");

  // 🔹 1. Set initial offsets
  elements.forEach((el) => {
    const direction = (el.dataset.direction as RevealDirection) || "bottom";

    let x = 0;
    let y = 0;

    if (direction === "left") x = -120;
    if (direction === "right") x = 120;
    if (direction === "top") y = -120;
    if (direction === "bottom") y = 120;

    gsap.set(el, { x, y });
  });

  // 🔹 2. Create scroll animations
  ScrollTrigger.batch(elements, {
    scroller,
    start: "top 80%",

    onEnter: (batch) => {
      batch.forEach((el) => {
        const htmlEl = el as HTMLElement;
        gsap.to(htmlEl, {
          x: 0,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          stagger: 0.08,
          clearProps: "transform",
        });
      });
    },

    onLeaveBack: (batch) => {
      batch.forEach((el) => {
        const htmlEl = el as HTMLElement;
        const direction = (htmlEl.dataset.direction as RevealDirection) || "bottom";

        let x = 0;
        let y = 0;

        if (direction === "left") x = -120;
        if (direction === "right") x = 120;
        if (direction === "top") y = -120;
        if (direction === "bottom") y = 120;

        gsap.set(htmlEl, { x, y });
      });
    },
  });

  ScrollTrigger.refresh();
};

/* ================= IMAGE CLIP REVEAL ================= */
export const initImageReveals = () => {
  const smoother = getSmoother();
  const scroller = smoother?.wrapper() || window;

  gsap.utils.toArray<Element>(".img-reveal").forEach((wrapper) => {
    const htmlWrapper = wrapper as HTMLElement;
    const img = htmlWrapper.querySelector<HTMLImageElement>("img");
    if (!img) return;

    // 🔹 Set initial clip
    gsap.set(img, { clipPath: "inset(0 0 100% 0)" });

    gsap.to(img, {
      clipPath: "inset(0 0 0% 0)",
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: htmlWrapper,
        scroller,
        start: "top 85%",
      },
    });
  });
};
