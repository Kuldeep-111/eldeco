"use client";

import React, { useState } from "react";
// import AnimatedTabs from "./AnimatedTabs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import AnimatedTabs from "../../common/tabs/AnimatedTabs";

const TABS = [
  { label: "Our Renders", value: "renders" },
  { label: "Actual Photographs", value: "photos" },
  { label: "Walkthrough", value: "video" },
];

const DATA: Record<string, string[]> = {
  renders: ["/images/menu/about.webp", "/images/menu/team.webp", "/images/menu/story.webp"],
  photos: ["/images/menu/about.webp", "/images/menu/team.webp",],
  video: ["/img/v1.jpg"],
};

const Walkthrough = () => {
  const [active, setActive] = useState("renders");

  return (
    <section className="bg-[#e9f2ef] py-[80px]">
      <div className="wrapper">
        {/* Tabs */}
        <AnimatedTabs
          tabs={TABS}
          active={active}
          onChange={setActive}
        />

        {/* Slider */}
        <div className="mt-[60px]">
          <Swiper
            modules={[Navigation]}
            navigation
            slidesPerView={3}
            spaceBetween={20}
          >
            {DATA[active].map((img, i) => (
              <SwiperSlide key={i}>
                <div className="relative h-[350px]">
                  <Image
                    src={img}
                    alt=""
                    fill
                    className="object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Walkthrough;
