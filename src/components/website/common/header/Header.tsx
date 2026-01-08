"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Menu from "./Menu";

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  const headerRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const list = [
    { label: "About us", link: "/about-us" },
    { label: "Projects", link: "/projects" },
    { label: "Terra Grade", link: "/terra-grade" },
  ];

  useEffect(() => {
    let lastScroll = 0;

    ScrollTrigger.create({
      start: 0,
      end: "max",
      onUpdate: (self) => {
        if (menuOpen) return;
        const current = self.scroll();

        if (current > lastScroll && current > 100 && !menuOpen) {
          gsap.to(headerRef.current, {
            yPercent: -100,
            duration: 0.4,
            ease: "power2.out",
          });
        } else {
          gsap.to(headerRef.current, {
            yPercent: 0,
            duration: 0.4,
            ease: "power2.out",
          });
        }

        lastScroll = current;
      },
    });
  }, [menuOpen]);

  return (
    <>
      <header
        ref={headerRef}
        className="fixed top-0 left-0 z-[999] h-[70px] w-full bg-white"
      >
        <div className="wrapper h-full">
          <div className="flex h-full w-full items-center justify-between">
            <Link href="/">
            <Image
              src="/images/logo.png"
              alt="logo"
              width={150}
              height={100}
              className="object-contain"
            />
            </Link>

            <div className="flex items-center gap-[50px]">
              <ul className="hidden md:flex items-center gap-[50px] ">
                {list.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.link}
                      className="uppercase tracking-[1px] transition-colors duration-300 ease-out hover:text-[var(--foreground)]"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => setMenuOpen(true)}
                className="text-[30px] transition-colors duration-300 ease-out hover:bg-[var(--foreground)]/20"
              >
                <RiMenu3Fill className="text-[var(--foreground)]" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <Menu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
};

export default Header;
