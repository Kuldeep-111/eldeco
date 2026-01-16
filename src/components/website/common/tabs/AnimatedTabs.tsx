"use client";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

type Tab = {
  label: string;
  value: string;
};

type Props = {
  tabs: Tab[];
  active: string;
  onChange: (val: string) => void;
};

const AnimatedTabs: React.FC<Props> = ({ tabs, active, onChange }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const activeEl = containerRef.current?.querySelector(
      `[data-tab="${active}"]`
    ) as HTMLElement;

    if (!activeEl || !indicatorRef.current) return;

    gsap.to(indicatorRef.current, {
      x: activeEl.offsetLeft + activeEl.offsetWidth / 2,
      duration: 0.6,
      ease: "power3.out",
    });
  }, [active]);

  return (
    <div className="relative w-full">
      {/* Tabs */}
      <div
        ref={containerRef}
        className="flex justify-between relative border-b border-black/40 pb-[20px]"
      >
        {tabs.map((tab) => (
          <button
            key={tab.value}
            data-tab={tab.value}
            onClick={() => onChange(tab.value)}
            className={`uppercase tracking-[1px] text-[20px] font-medium transition-opacity
              ${active === tab.value ? "opacity-100" : "opacity-50"}`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Animated Draw Shape */}
      <div
        ref={indicatorRef}
        className="absolute left-0 top-full -translate-x-1/2"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="95" height="32" viewBox="0 0 95 32" fill="none" className="bg-[#e9f2ef] mt-[-1px]">
<line y1="-0.5" x2="56.3028" y2="-0.5" transform="matrix(0.834773 0.550595 -0.962699 0.270573 0 0.270508)" stroke="black"/>
<line y1="-0.5" x2="56.3028" y2="-0.5" transform="matrix(-0.834773 0.550595 0.962699 0.270573 95 0.270508)" stroke="black"/>
</svg>
      </div>
    </div>
  );
};

export default AnimatedTabs;
