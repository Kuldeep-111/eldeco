"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import Menu from "./Menu";
// import TransitionLink from "../typography/TransitionLink";
import Menu1 from "./Menu1";
import Menu2 from "./Menu2";
import TransitionLink from "../typography/TransitionLink";
import { usePathname } from "next/navigation";

type MenuType = "menu1" | "menu2"  | null;
type Menu2Type = "projects" | "terra" | null;

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  const headerRef = useRef<HTMLElement | null>(null);

  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<MenuType>(null);
  const [menu2Type, setMenu2Type] = useState<Menu2Type>(null);
  const headerState = useRef<"top" | "hidden" | "visible">("top");
   const pathname = usePathname();
   const [hoverEnabled, setHoverEnabled] = useState(true);


  const list: {
    label: string;
    link: string;
    menu: MenuType;
    type?: Menu2Type;
  }[] = [
    { label: "About us", link: "/about-us", menu: "menu1" },
    { label: "Projects", link: "/projects", menu: "menu2", type: "projects" },
    { label: "Terra Grade", link: "/terra-grade", menu: "menu2", type: "terra" },
  ];

  /* ---------------- SCROLL HEADER ---------------- */
  useEffect(() => {
    let lastScroll = window.scrollY;
    let ticking = false;

   const updateHeader = () => {
  const current = window.scrollY;

  // ----- TOP -----
  if (current <= 0) {
    if (headerState.current !== "top") {
      headerState.current = "top";
      gsap.to(headerRef.current, {
        yPercent: 0,
        backgroundColor: "transparent",
        duration: 0.25,
        ease: "power2.out",
      });
    }
    lastScroll = current;
    ticking = false;
    return;
  }

  if (!menuOpen) {
    // ----- SCROLL DOWN (HIDE) -----
    if (current > lastScroll && headerState.current !== "hidden") {
      headerState.current = "hidden";
      gsap.to(headerRef.current, {
        yPercent: -100,
        duration: 0.35,
        ease: "power2.out",
      });
    }

    // ----- SCROLL UP (SHOW) -----
    if (current < lastScroll && headerState.current !== "visible") {
      headerState.current = "visible";
      gsap.to(headerRef.current, {
        yPercent: 0,
        backgroundColor: "#fff",
        duration: 0.35,
        ease: "power2.out",
      });
    }
  }

  lastScroll = current;
  ticking = false;
};


    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateHeader);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [menuOpen]);

useEffect(() => {
  setActiveMenu(null);
  setMenu2Type(null);

  // temporarily disable hover
  setHoverEnabled(false);

  // re-enable hover after mouse movement
  const enableHover = () => {
    setHoverEnabled(true);
    window.removeEventListener("mousemove", enableHover);
  };

  window.addEventListener("mousemove", enableHover);
}, [pathname]);

  return (
    <>
      {/* ---------------- HEADER ---------------- */}
      <header
        ref={headerRef}
        className="fixed top-0 left-0 z-[99] h-[70px] w-full"
         onMouseLeave={() => {
    if (!hoverEnabled) return;
    setActiveMenu(null);
    setMenu2Type(null);
  }}
      >
        <div className="wrapper h-full">
          <div className="flex h-full items-center justify-between">
            <TransitionLink href="/">
              <Image
                src="/images/logo.png"
                alt="logo"
                width={150}
                height={100}
              />
            </TransitionLink>
            <div className="flex h-full items-center justify-between gap-[50px]">
            <ul className="hidden md:flex gap-[50px]">
              {list.map((item, index) => (
                <li
                  key={index}
                  onMouseEnter={() => {
                    setActiveMenu(item.menu);
                    if (item.menu === "menu2") {
                      setMenu2Type(item.type ?? null);
                    }
                  }}
                  className="uppercase tracking-[1px] cursor-pointer"
                >
                    {item.label}
                </li>
              ))}
            </ul>

            <button onClick={() => setMenuOpen(true)}>
              <RiMenu3Fill size={30} />
            </button>
            </div>
          </div>
        </div>
        
      {/* ---------------- HOVER MENUS ---------------- */}
      <div
        className="fixed top-[70px] left-0 w-full z-[98]"
      >
        {activeMenu === "menu1" && <Menu1 />}
        {activeMenu === "menu2" && <Menu2 type={menu2Type} />}
      </div>

      </header>

      {/* ---------------- MOBILE MENU ---------------- */}
      <Menu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
};

export default Header;
