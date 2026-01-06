"use client";

import { useRef, forwardRef } from "react";

const RippleOverlay = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="
        fixed
        top-0
        left-0
        w-[100px]
        h-[100px]
        rounded-full
        bg-black
        pointer-events-none
        z-[9999]
        scale-0
      "
    />
  );
});

RippleOverlay.displayName = "RippleOverlay";
export default RippleOverlay;
