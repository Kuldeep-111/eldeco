"use client";

import { useLayoutEffect, useRef, ReactNode } from "react";
import { createSmoother } from "../utils/gsapSmoother";

interface SmoothScrollerProps {
  children: ReactNode;
  smooth?: number;
}

export default function SmoothScroller({
  children,
  smooth = 1.5,
}: SmoothScrollerProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!wrapperRef.current || !contentRef.current) return;

    createSmoother({
      wrapper: wrapperRef.current,
      content: contentRef.current,
      smooth,
    });

    return () => {
      // ❌ DO NOT kill smoother here
    };
  }, [smooth]);

  return (
    <div id="smooth-wrapper" ref={wrapperRef}>
      <div id="smooth-content" ref={contentRef}>
        {children}
      </div>
    </div>
  );
}
