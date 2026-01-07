"use client";

import { useLayoutEffect, useRef, ReactNode } from "react";
import { usePathname } from "next/navigation";
import { createSmoother, getSmoother } from "../utils/gsapSmoother";
import { initImageReveals, initReveals } from "../utils/animation/revealAnimations";
import ScrollTrigger from "gsap/ScrollTrigger";

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

  useLayoutEffect(() => {
    if (!wrapperRef.current || !contentRef.current) return;

    // Create smoother only once
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

    // Scroll to top on route change
    smoother?.scrollTo(0, false);

    // Rescan parallax effects
    smoother?.effects("[data-speed], [data-lag]");

    // Re-init custom animations
    initReveals();
    initImageReveals();

    // Refresh ScrollTrigger
    ScrollTrigger.refresh(true);

    // 🔥 DYNAMIC PADDING FOR FIXED FOOTER
    const updateFooterPadding = () => {
      const footer = document.querySelector("footer");
      if (footer && contentRef.current) {
        const footerHeight = footer.getBoundingClientRect().height;
        // Add extra buffer so you can scroll a bit past the content
        contentRef.current.style.paddingBottom = `${footerHeight + 80}px`;
      }
    };

    // Run initially
    updateFooterPadding();

    // Update on window resize (footer height may change on mobile/desktop)
    window.addEventListener("resize", updateFooterPadding);

    // Cleanup
    return () => {
      window.removeEventListener("resize", updateFooterPadding);
      if (contentRef.current) {
        contentRef.current.style.paddingBottom = "";
      }
    };
  }, [pathname, smooth, effects]);

  return (
    <div id="smooth-wrapper" ref={wrapperRef}>
      <div id="smooth-content" ref={contentRef}>
        {children}
      </div>
    </div>
  );
}