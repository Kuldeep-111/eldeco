"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { IoClose } from "react-icons/io5";
import TransitionLink from "../typography/TransitionLink";
import Image from "next/image";
import { SlSocialLinkedin } from "react-icons/sl";
import { FiFacebook } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";
import CustomLink from "../typography/CustomLink";

const socialMedia=[
  {icon:<SlSocialLinkedin />,link:"/"},
  {icon:<FiFacebook />,link:"/"},
  {icon:<FaXTwitter />,link:""},
  {icon:<FaInstagram />,link:""},
]
const projectData = [
  {
    label: "Residential",
    link: "residential",
    image: "/images/menu/about.webp",
  },
  {
    label: "Commercial",
    link: "commercial",
    image: "/images/menu/team.webp",
  },
  {
    label: "Industrial",
    link: "industrial",
    image: "/images/menu/story.webp",
  },
];

const links =[
  {label:"terra grande",link:"terra-grade"},
  {label:"about us",
    items:[
      {label:"our team",link:"our-team"},
      {label:"our story",link:"our-story"},
      {label:"our testimonial",link:"testimonial"},
    ]
  },
  {label:"Investor Relation",
    items:[
      {label:"first",link:"/"},
      {label:"second",link:"/"},
      {label:"third",link:"/"},
    ]
  },
  {label:"Media Centre",
    items:[
      {label:"first",link:"/"},
      {label:"second",link:"/"},
      {label:"third",link:"/"},
    ]
  },
  {label:"Buying Desk",
    items:[
      {label:"first",link:"/"},
      {label:"second",link:"/"},
      {label:"third",link:"/"},
    ]
  },
  {label:"contact Us",link:"contact-us"},
]

interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const Menu: React.FC<MenuProps> = ({ isOpen, onClose }) => {
  const menuRef = useRef<HTMLDivElement | null>(null);
  const backdropRef = useRef<HTMLDivElement | null>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);


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
          yPercent: 100,
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
        className="fixed top-0 right-0 z-[999] h-[80vh] bg-[var(--background)] w-full  -translate-y-full"
      >
              
    {/* top header */}
      <div className="wrapper border-b h-fit">
          <div className=" flex h-[70px] items-center justify-between">

            <TransitionLink href="/">
              <Image
                src="/images/logo.png"
                alt="logo"
                width={150}
                height={100}
              />
            </TransitionLink>
             <div className="flex items-center gap-[50px] h-full">
             <div className='flex items-center justify-center gap-[20px]'>
                {socialMedia.map((item,index) =>(
                  <Link key={index} href={item?.link} className='text-[20px] hover:text-[var(--foreground)]'>{item?.icon}</Link>
                ))}
              </div>
              <div className="w-[1px] h-full bg-black/30"></div>

            <button onClick={onClose} className="w-[30px] h-[30px] flex items-center justify-center">
              <IoClose className="text-[var(--foreground)] text-[30px]"/>
            </button>
            </div>
            </div>
          </div>

          <div className="wrapper mt-[100px]">
            <div className="grid grid-cols-4 gap-[10px]">
              {projectData.map((item, index) => (
            <div key={index}>
              <CustomLink
                href={item.link}
                className="uppercase tracking-[1px] !px-0 text-[18px] font-semibold transition-colors duration-300 hover:text-[var(--foreground)]"
              >
                {item.label}
              </CustomLink>

              <div className="relative mt-[10px] w-full h-[350px]">
                <Image
                  src={item.image}
                  alt={item.label}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
           <div className="flex flex-col gap-[22px] pt-[40px]">
  {links.map((item, index) => {
    const isOpen = activeDropdown === index;
    const isAnyOpen = activeDropdown !== null;

    // hide other parents if one dropdown is open
    if (isAnyOpen && !isOpen) return null;

    return (
      <div key={index} className="relative text-end">
        {/* Parent label */}
        {item.items ? (
          <button
            onClick={() =>
              setActiveDropdown(isOpen ? null : index)
            }
            className="uppercase text-left !border-0 text-[16px] font-semibold tracking-[1px] hover:text-[var(--foreground)]"
          >
            {item.label}  <span className="ml-2 transform transition-transform duration-300">
                                                    {isOpen ? "▲" : "▼"}
                                                </span>
          </button>
        ) : (
          <CustomLink
            href={item.link}
            className="uppercase !border-0 text-[16px] !px-0 font-semibold tracking-[1px] hover:text-[var(--foreground)]"
          >
            {item.label}
          </CustomLink>
        )}

        {/* Dropdown */}
        {item.items && (
          <div
            className={`mt-[12px] overflow-hidden 
            ${
              isOpen
                ? "opacity-100 max-h-[300px]"
                : "opacity-0 max-h-0"
            }`}
          >
            <div className="flex flex-col gap-[10px] pl-[12px]">
              {item.items.map((sub, subIndex) => (
                <CustomLink
                  key={subIndex}
                  href={sub.link}
                  className="text-[14px] !border-0 text-black font-semibold !px-0 text-end !text-[14px] hover:text-[var(--foreground)] transition-colors"
                >
                  {sub.label}
                </CustomLink>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  })}
</div>

            </div>
          </div>
      </aside>
    </>
  );
};

export default Menu;
