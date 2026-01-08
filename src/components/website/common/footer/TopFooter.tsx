"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";

// ================== TYPES ==================
type ProjectLink = {
  label: string;
  href: string;
};

type StatusGroup = {
  status: "New Launch" | "Completed" | "Under Construction";
  projects: ProjectLink[];
};

type Category = {
  id: "residential" | "commercial" | "industrial";
  title: string;
  items: StatusGroup[];
};

// ================== DATA ==================
const FOOTER_DATA: Category[] = [
  {
    id: "residential",
    title: "Residential",
    items: [
      {
        status: "New Launch",
        projects: [
          { label: "Platter One", href: "/" },
          { label: "Sky View", href: "/" },
        ],
      },
      {
        status: "Completed",
        projects: [{ label: "Green Valley", href: "/" }],
      },
      {
        status: "Under Construction",
        projects: [{ label: "Urban Nest", href: "/" }],
      },
    ],
  },
  {
    id: "commercial",
    title: "Commercial",
    items: [
      {
        status: "New Launch",
        projects: [{ label: "Biz Park", href: "/" }],
      },
      {
        status: "Completed",
        projects: [{ label: "Trade Center", href: "/" }],
      },
      {
        status: "Under Construction",
        projects: [{ label: "Office Hub", href: "/" }],
      },
    ],
  },
  {
    id: "industrial",
    title: "Industrial",
    items: [
      {
        status: "New Launch",
        projects: [{ label: "Logi Zone", href: "/" }],
      },
      {
        status: "Completed",
        projects: [{ label: "Steel Yard", href: "/" }],
      },
      {
        status: "Under Construction",
        projects: [{ label: "Manufact Park", href: "/" }],
      },
    ],
  },
];

// ================== COMPONENT ==================
const TopFooter: React.FC = () => {
  const [active, setActive] = useState<Category["id"]>("residential");

  const activeCategory = FOOTER_DATA.find((c) => c.id === active);

  return (
    <div className="py-[40px] md:py-[50px] bg-white">
      <div className=" md:w-[70%] mx-auto">
        {/* Tabs */}
        <div className="mb-5 grid gap-[10px] md:gap-10 grid-cols-3">
          {FOOTER_DATA.map((cat) => (
            <div  key={cat.id} className="text-center">
            <button
              onClick={() => setActive(cat.id)}
              className={`pb-2 relative ${active === cat.id ? "text-black" : "text-black/40 "} text-sm uppercase tracking-wider transition-all md:px-[30px]`}
            >
              {cat.title} {active === cat.id ? <MdOutlineKeyboardArrowDown className=" text-[20px] absolute right-0 top-0"/> : <MdOutlineKeyboardArrowUp className="text-[20px] absolute right-0 top-0"/> }
            </button>
            </div>
          ))}
        </div>

        {/* Status Grid */}
        <div className="grid grid-cols-2 gap-10 md:grid-cols-3">
          {activeCategory?.items.map((group) => (
            <div key={group.status} className="text-center">
              <h4 className="mb-4 text-sm font-medium uppercase tracking-wide">
                {group.status}
              </h4>

              <ul className="space-y-2">
                {group.projects.map((project) => (
                  <li key={project.label}>
                    <Link
                      href={project.href}
                      className="text-sm text-black/70 transition hover:text-black"
                    >
                      {project.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopFooter;
