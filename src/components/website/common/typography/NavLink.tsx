"use client";

import Link from "next/link";
import React from "react";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

const NavLink: React.FC<NavLinkProps> = ({
  href,
  children,
  className = "",
}) => {
  return (
    <Link
      href={href}
      className={`uppercase text-center text-[14px] tracking-[1px] transition-colors duration-300 ease-out hover:text-[var(--foreground)]
        ${className}
      `}
    >
      {children}
    </Link>
  );
};

export default NavLink;
