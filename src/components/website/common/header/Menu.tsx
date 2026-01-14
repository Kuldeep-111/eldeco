"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { IoClose } from "react-icons/io5";

interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const Menu: React.FC<MenuProps> = ({ isOpen, onClose }) => {
  const menuRef = useRef<HTMLDivElement | null>(null);
  const backdropRef = useRef<HTMLDivElement | null>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    if (!menuRef.current || !backdropRef.current) return;

    tl.current = gsap.timeline({ paused: true });

    tl.current
      .to(backdropRef.current, {
        opacity: 1,
        pointerEvents: "auto",
        duration: 0.25,
        ease: "power2.out",
      })
      .to(
        menuRef.current,
        {
          xPercent: -100,
          duration: 0.6,
          ease: "power3.out",
        },
        "<"
      );
  }, []);

  useEffect(() => {
    if (!tl.current) return;

    if (isOpen) {
      tl.current.play();
    } else {
      tl.current.reverse();
    }
  }, [isOpen]);

  return (
    <>
      <div
        ref={backdropRef}
        onClick={onClose}
        className="fixed inset-0 z-[998] bg-black/40 opacity-0 pointer-events-none"
      />

      <aside
        ref={menuRef}
        className="fixed top-0 right-0 z-[999] h-full w-[400px] bg-white px-8 py-[50px] translate-x-full"
      >
        <button
          onClick={onClose}
          className="absolute bg-black text-white rounded-full w-[40px] h-[40px] flex items-center justify-center text-[24px]  right-6 top-[50px] text-3xl hover:rotate-90 transition-transform"
        >
          <IoClose />
        </button>

        <h1 className="mt-12 text-3xl font-semibold">Menu</h1>
      </aside>
    </>
  );
};

export default Menu;
