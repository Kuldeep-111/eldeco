"use client";

import React, { forwardRef } from "react";

type HeadingElement = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

type HeadingProps<T extends HeadingElement = "h2"> = {
  as?: T;
  children: React.ReactNode;
  className?: string;
} & Omit<React.ComponentPropsWithoutRef<T>, "as">; // cleaner than full ComponentPropsWithoutRef

const Heading = forwardRef<HTMLElement, HeadingProps>(({ 
  as = "h2", 
  children, 
  className = "", 
  ...rest 
}, ref) => {
  const Tag = as as HeadingElement;

  return (
    <Tag
      ref={ref as React.Ref<any>}                // ← now supports ref forwarding (crucial for GSAP, SplitText, etc.)
      className={`font-cormorant text-center text-[28px] md:text-[32px] leading-[38px] md:leading-[50px] font-light tracking-[1px] capitalize text-black ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
});

Heading.displayName = "Heading"; // good practice for React DevTools

export default Heading;