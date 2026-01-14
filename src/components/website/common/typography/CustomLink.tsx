"use client";

import React from "react";
import TransitionLink from "./TransitionLink";

type CustomLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

const CustomLink: React.FC<CustomLinkProps> = ({
  href,
  children,
  className = "",
}) => {
  return (
    <TransitionLink
      href={href}
      className={`
        text-[18px]
        font-light
        tracking-[2px]
        uppercase
        text-black
        transition-all
        duration-300
        ease-out
        border-b 
        hover:text-[var(--foreground)]
        hover:px-[20px]
        ${className}
      `}
    >
      {children}
    </TransitionLink>
  );
};

export default CustomLink;
