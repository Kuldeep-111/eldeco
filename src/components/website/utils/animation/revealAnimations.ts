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

  /* 🔹 1. SET INITIAL OFFSET (CRITICAL STEP) */
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

  /* 🔹 2. CREATE SCROLL ANIMATION */
  ScrollTrigger.batch(elements, {
    scroller,
    start: "top 80%",

    onEnter: (batch) => {
      gsap.to(batch, {
        x: 0,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.08,
        clearProps: "transform",
      });
    },

    onLeaveBack: (batch) => {
      batch.forEach((el: HTMLElement) => {
        const direction = (el.dataset.direction as RevealDirection) || "bottom";

        let x = 0;
        let y = 0;

        if (direction === "left") x = -120;
        if (direction === "right") x = 120;
        if (direction === "top") y = -120;
        if (direction === "bottom") y = 120;

        gsap.set(el, { x, y });
      });
    },
  });

  ScrollTrigger.refresh();
};

/* ================= IMAGE CLIP REVEAL ================= */
export const initImageReveals = () => {
  const smoother = getSmoother();
  const scroller = smoother?.wrapper() || window;

  gsap.utils.toArray<HTMLElement>(".img-reveal").forEach((wrapper) => {
    const img = wrapper.querySelector<HTMLImageElement>("img");
    if (!img) return;

    // 🔹 Set initial clip
    gsap.set(img, { clipPath: "inset(0 0 100% 0)" });

    gsap.to(img, {
      clipPath: "inset(0 0 0% 0)",
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: wrapper,
        scroller,
        start: "top 85%",
      },
    });
  });
};
