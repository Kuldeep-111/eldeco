import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

let smoother: ScrollSmoother | null = null;

export const createSmoother = ({
  wrapper,
  content,
  smooth,
  effects,
}: {
  wrapper: HTMLElement;
  content: HTMLElement;
  smooth: number;
  effects: boolean;
}) => {
  if (!smoother) {
    smoother = ScrollSmoother.create({
      wrapper,
      content,
      smooth,
      effects,
      normalizeScroll: true,
      ignoreMobileResize: true,
    });
  }

  return smoother;
};

export const getSmoother = () => smoother;

export const refreshSmoother = () => {
  if (smoother) {
    smoother.refresh();
    ScrollTrigger.refresh();
  }
};
