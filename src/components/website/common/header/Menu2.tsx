import React from "react";
import CustomLink from "../typography/CustomLink";
import Image from "next/image";

type Menu2Type = "projects" | "terra" | null;

type Menu2Props = {
  type: Menu2Type;
};

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

const terraGrade = [
  {
    label: "KASAULI HILLS",
    link: "",
    image: "/images/menu/kasauli.webp",
  },
  {
    label: "RISHIKESH HILLS",
    link: "",
    image: "/images/menu/rishikesh.webp",
  },
];

const Menu2: React.FC<Menu2Props> = ({ type }) => {
  const data = type === "terra" ? terraGrade : projectData;
  const gridCols = type === "terra" ? "grid-cols-2" : "grid-cols-3";

  return (
    <div className="w-full h-[70vh] bg-[var(--background)]">
      <div className="wrapper h-full">
        <div
          className={`grid ${gridCols} gap-[50px] items-center h-full`}
        >
          {data.map((item, index) => (
            <div key={index}>
              <CustomLink
                href={item.link}
                className="uppercase tracking-[1px] text-[18px] mx-auto block w-fit font-semibold transition-colors duration-300 hover:text-[var(--foreground)]"
              >
                {item.label}
              </CustomLink>

              <div className="relative mt-[30px] w-full h-[300px]">
                <Image
                  src={item.image}
                  alt={item.label}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu2;
