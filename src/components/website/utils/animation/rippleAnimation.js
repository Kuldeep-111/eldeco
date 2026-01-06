import { gsap } from "gsap";

export const playRipple = (rippleEl, originEl, onComplete) => {
  if (!rippleEl || !originEl) return;

  const rect = originEl.getBoundingClientRect();

  const size = Math.max(window.innerWidth, window.innerHeight) * 2;

  gsap.set(rippleEl, {
    width: size,
    height: size,
    x: rect.left + rect.width / 2 - size / 2,
    y: rect.top + rect.height / 2 - size / 2,
    scale: 0,
  });

  gsap.to(rippleEl, {
    scale: 1,
    duration: 0.8,
    ease: "power3.inOut",
    onComplete,
  });
};
