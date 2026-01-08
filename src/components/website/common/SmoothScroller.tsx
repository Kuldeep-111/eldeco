"use client";

import { useLayoutEffect, useRef, ReactNode } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";

import { createSmoother, getSmoother } from "../utils/gsapSmoother";
import { initImageReveals, initReveals } from "../utils/animation/revealAnimations";
import { useIsMobile } from "../hooks/useIsMobile";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

interface SmoothScrollerProps {
  children: ReactNode;
  smooth?: number;
  effects?: boolean;
}

export default function SmoothScroller({
  children,
  smooth = 1.5,
  effects = true,
}: SmoothScrollerProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const initialized = useRef(false);
  const pathname = usePathname();
  const isMobile = useIsMobile();

  useLayoutEffect(() => {
    if (!wrapperRef.current || !contentRef.current) return;

    /* ---------------- INIT SMOOTHER (ALL DEVICES) ---------------- */
    if (!initialized.current) {
      createSmoother({
        wrapper: wrapperRef.current,
        content: contentRef.current,
        smooth,
        effects,
      });
      initialized.current = true;
    }

    const smoother = getSmoother();
    smoother?.scrollTo(0, false);

    smoother?.effects("[data-speed], [data-lag]");
    initReveals();
    initImageReveals();

    let footerTween: gsap.core.Tween | null = null;

    /* ---------------- DESKTOP FOOTER ONLY ---------------- */
    if (!isMobile) {
      const footer = document.querySelector<HTMLElement>(".footer");
      const finalSection = document.querySelector<HTMLElement>(".final");

      if (footer && finalSection && contentRef.current) {
        const footerHeight = footer.offsetHeight;

        // space for fixed footer
        contentRef.current.style.paddingBottom = `${footerHeight}px`;

        // hide initially
        gsap.set(footer, {
          clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
          pointerEvents: "none",
        });

        footerTween = gsap.to(footer, {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "none",
          scrollTrigger: {
            trigger: finalSection,
            start: "bottom bottom",
            end: `+=${footerHeight}`,
            scrub: true,
            onEnter: () => (footer.style.pointerEvents = "auto"),
            onLeaveBack: () => (footer.style.pointerEvents = "none"),
          },
        });
      }
    }

    ScrollTrigger.refresh();

    /* ---------------- CLEANUP ---------------- */
    return () => {
      footerTween?.scrollTrigger?.kill();
      footerTween?.kill();

      if (contentRef.current) {
        contentRef.current.style.paddingBottom = "";
      }
    };
  }, [pathname, smooth, effects, isMobile]);

  return (
    <div id="smooth-wrapper" ref={wrapperRef}>
      <div id="smooth-content" ref={contentRef}>
        {children}
      </div>
    </div>
  );
}
