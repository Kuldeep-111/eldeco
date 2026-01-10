"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { IoCloseCircleOutline } from "react-icons/io5";

type SlideUpPanelProps = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
};

const SlideUpPanel: React.FC<SlideUpPanelProps> = ({
  open,
  onClose,
  children,
  className = "",
}) => {
  const panelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!panelRef.current) return;

    if (open) {
      gsap.to(panelRef.current, {
        height: "auto",
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
      });
    } else {
      gsap.to(panelRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.8,
        ease: "power3.in",
      });
    }
  }, [open]);

  return (
    <div
      ref={panelRef}
      style={{ height: 0, opacity: 0 }}
      className={`
        absolute
        left-0
        bottom-0
        w-full
        overflow-hidden
        bg-white
        ${className}
      `}
    >
        <div className="bg-[var(--background)] py-[50px]">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute z-10 top-4 right-4 text-[16px] uppercase tracking-wider pointer"
      >
        <IoCloseCircleOutline />
      </button>

      {/* Content */}
      <div className="p-1 md:p-6">
        {children}
      </div>
      </div>
    </div>
  );
};

export default SlideUpPanel;
