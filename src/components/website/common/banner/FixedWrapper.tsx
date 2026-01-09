"use client";

import { ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface FixedWrapperProps {
  children: ReactNode;
  className?: string;
}

const FixedWrapper = ({ children, className }: FixedWrapperProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const target = document.getElementById("fixed-components");
  if (!target) return null;

  return createPortal(
    <div className={className}>
      {children}
    </div>,
    target
  );
};

export default FixedWrapper;
