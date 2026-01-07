"use client";

import { useEffect } from "react";
import { initImageReveals, initReveals } from "./utils/animation/revealAnimations";

const AnimationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    initReveals();
    initImageReveals();
  }, []);

  return <>{children}</>;
};

export default AnimationProvider;
