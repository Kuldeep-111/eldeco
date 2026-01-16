import React, { useState } from "react";
import CustomLink from "../typography/CustomLink";
import Image from "next/image";

const data = [
  { label: "about eldeco group", link: "about-us", image: "/images/menu/about.webp" },
  { label: "our team", link: "our-team", image: "/images/menu/team.webp" },
  { label: "our story", link: "our-story", image: "/images/menu/story.webp" },
  { label: "our testimonials", link: "testimonial", image: "/images/menu/about.webp" },
  { label: "CSR Initiatives", link: "csr", image: "/images/menu/story.webp" },
];

const Menu1 = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full h-[70vh] bg-[var(--background)]">
      <div className="wrapper h-full">
        <div className="grid grid-cols-2 gap-[60px] items-center h-full">

          {/* Left image */}
          <div className="relative h-[400px] overflow-hidden">
            {data.map((item, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-500 ease-out
                  ${activeIndex === index ? "opacity-100" : "opacity-0"}`}
              >
                <Image
                  src={item.image}
                  alt={item.label}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          {/* Right links */}
          <div className="flex flex-col gap-[18px] pl-[100px]">
            {data.map((item, index) => (
              <div
                key={index}
                onMouseEnter={() => setActiveIndex(index)}
                className="w-fit"
                >
              <CustomLink
                href={item.link}
                className="uppercase tracking-[1px] text-[18px] font-semibold hover:!px-[0px] transition-colors duration-300 hover:text-[var(--foreground)]"
              >
                {item.label}
              </CustomLink>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Menu1;
