


"use client";
import React, { useState, useRef } from "react";
import Heading from "../../common/typography/Heading";
import { GoDotFill } from "react-icons/go";
import Group from "./Group";

type ActiveCity = {
  image: string;
  x: number;
  y: number;
};

const data={
    heading:"Cities of Presence",
    cities:[
        {label:"Lucknow",image:"/images/logo.png"},
        {label:"Kanpur",image:"/images/projects/project-1.webp"},
        {label:"Agra",image:"/images/logo.png"},
        {label:"Greater Noida",image:"/images/logo.png"},
        {label:"Noida",image:"/images/logo.png"},
        {label:"Gurgaon",image:"/images/logo.png"},
        {label:"Panipat",image:"/images/logo.png"},
        {label:"Sonipat",image:"/images/logo.png"},
        {label:"Ludhiana",image:"/images/logo.png"},
        {label:"Jhansi",image:"/images/logo.png"},
        {label:"Bareilly",image:"/images/logo.png"},
        {label:"Panchkula",image:"/images/logo.png"},
        {label:"Neemrana",image:"/images/logo.png"},
        {label:"Delhi",image:"/images/logo.png"},
        {label:"Kasauli",image:"/images/logo.png"},
        {label:"Rudrapur",image:"/images/logo.png"},
        {label:"Gorakhpur",image:"/images/logo.png"},
        {label:"Rishikesh",image:"/images/logo.png"},
        {label:"Jalandhar",image:"/images/logo.png"},
    ]
}
const CitiesPresence = () => {
  const { heading, cities } = data;

  const [activeCity, setActiveCity] = useState<ActiveCity | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  return (
    <section className="py-[40px] md:py-[100px]">
      <div className="w-full md:w-[57%] mx-auto px-[20px]">
        <Heading>{heading}</Heading>

        <div
          ref={containerRef}
          className="relative flex justify-center flex-wrap gap-[8px] mt-[50px]"
        >
          {cities.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2 cursor-pointer"
              onMouseEnter={(e) => {
                if (!containerRef.current) return;

                const itemRect = e.currentTarget.getBoundingClientRect();
                const containerRect =
                  containerRef.current.getBoundingClientRect();

                setActiveCity({
                  image: item.image,
                  x:
                    itemRect.left -
                    containerRect.left +
                    itemRect.width / 2,
                  y: itemRect.top - containerRect.top,
                });
              }}
              onMouseLeave={() => setActiveCity(null)}
            >
              <Heading className="hover:text-black transition">
                {item.label}
              </Heading>
              <GoDotFill className="text-[12px] text-gray-400" />
            </div>
          ))}

          {activeCity && (
            <div
              className="pointer-events-none absolute z-50"
              style={{
                left: activeCity.x,
                top: activeCity.y - 200,
                transform: "translateX(-50%)",
              }}
            >
              <img
                src={activeCity.image}
                alt=""
                className="w-[250px] h-[250px] object-contain rounded-lg"
              />
            </div>
          )}
        </div>
      </div>

      <Group/>

    </section>
  );
};

export default CitiesPresence;
