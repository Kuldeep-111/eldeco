"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import Heading from "../../common/typography/Heading";
import Pera from "../../common/typography/Pera";

/* ---------------- TYPES ---------------- */

type TabKey = "testimonials" | "awards" | "events";

interface Item {
  id: number;
  name: string;
  quote: string;
  image: string;
}

/* ---------------- DATA ---------------- */

const DATA: Record<TabKey, Item[]> = {
  testimonials: [
    {
      id: 1,
      name: "Mr. Tarun & Ms. Amanpreet",
      quote:
        "We were looking for a place which was away from pollution and dust. What I loved about Eldeco was the balcony, and our exclusive garden.",
      image: "/images/testimonials/profile-1.png",
    },
    {
      id: 2,
      name: "Client Two",
      quote: "Amazing experience and wonderful environment.",
      image: "/images/testimonials/profile-2.png",
    },
    {
      id: 3,
      name: "Client Three",
      quote: "A perfect blend of comfort and nature.",
      image: "/images/testimonials/profile-3.png",
    },
    {
      id: 4,
      name: "Client Two",
      quote: "Amazing experience and wonderful environment.",
      image: "/images/testimonials/profile-2.png",
    },
    {
      id: 5,
      name: "Client Three",
      quote: "A perfect blend of comfort and nature.",
      image: "/images/testimonials/profile-3.png",
    },
  ],

  awards: [
    {
      id: 1,
      name: "Mr. Tarun & Ms. Amanpreet",
      quote:
        "We were looking for a place which was away from pollution and dust. What I loved about Eldeco was the balcony, and our exclusive garden.",
      image: "/images/testimonials/profile-1.png",
    },
    {
      id: 2,
      name: "Client Two",
      quote: "Amazing experience and wonderful environment.",
      image: "/images/testimonials/profile-2.png",
    },
    {
      id: 3,
      name: "Client Three",
      quote: "A perfect blend of comfort and nature.",
      image: "/images/testimonials/profile-3.png",
    },
    {
      id: 4,
      name: "Client Two",
      quote: "Amazing experience and wonderful environment.",
      image: "/images/testimonials/profile-2.png",
    },
    {
      id: 5,
      name: "Client Three",
      quote: "A perfect blend of comfort and nature.",
      image: "/images/testimonials/profile-3.png",
    },
  ],

  events: [
    {
      id: 1,
      name: "Mr. Tarun & Ms. Amanpreet",
      quote:
        "We were looking for a place which was away from pollution and dust. What I loved about Eldeco was the balcony, and our exclusive garden.",
      image: "/images/testimonials/profile-1.png",
    },
    {
      id: 2,
      name: "Client Two",
      quote: "Amazing experience and wonderful environment.",
      image: "/images/testimonials/profile-2.png",
    },
    {
      id: 3,
      name: "Client Three",
      quote: "A perfect blend of comfort and nature.",
      image: "/images/testimonials/profile-3.png",
    },
    {
      id: 4,
      name: "Client Two",
      quote: "Amazing experience and wonderful environment.",
      image: "/images/testimonials/profile-2.png",
    },
    {
      id: 5,
      name: "Client Three",
      quote: "A perfect blend of comfort and nature.",
      image: "/images/testimonials/profile-3.png",
    },
  ],
};

/* ---------------- COMPONENT ---------------- */

const Testimonial: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabKey>("testimonials");
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const activeData = DATA[activeTab];

  /* Reset slide when tab changes */
  useEffect(() => {
    setActiveIndex(0);
  }, [activeTab]);

  return (
    <section className="py-[120px] bg-white overflow-hidden">
      {/* ---------- HEADING ---------- */}
      <div className="text-center mb-[80px]">
        <Heading>Where Stories, Success & Celebration Meet.</Heading>

        {/* ---------- TABS ---------- */}
        <div className="flex px-[10px] justify-center items-center gap-3 md:gap-10 mt-[60px] text-sm uppercase tracking-widest">
          <button onClick={() => setActiveTab("testimonials")}>
            <Pera className={activeTab === "testimonials" ? "" : "text-black/40"}>
              Testimonials
            </Pera>
          </button>

          <span className="w-[20px] md:w-[60px] h-[1px] bg-black/40" />

          <button onClick={() => setActiveTab("awards")}>
            <Pera className={activeTab === "awards" ? "" : "text-black/40"}>
              Awards
            </Pera>
          </button>

          <span className="w-[20px] md:w-[60px] h-[1px] bg-black/40" />

          <button onClick={() => setActiveTab("events")}>
            <Pera className={activeTab === "events" ? "" : "text-black/40"}>
              Our Event
            </Pera>
          </button>
        </div>
      </div>

      {/* ---------- MAIN CONTENT ---------- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[50px] 2xl:gap-[100px] items-center px-[10px] md:w-[80%] mx-auto">
        {/* IMAGE */}
        <div className="flex justify-center">
          <div className="relative w-[250px] h-[250px] 2xl:w-[320px] 2xl:h-[320px] rounded-full overflow-hidden">
            <img
              src={activeData[activeIndex]?.image}
              alt={activeData[activeIndex]?.name}
              className="w-full h-full object-cover"
            />

            {/* Play icon (optional) */}
            {activeTab === "testimonials" && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[60px] h-[60px] bg-white/80 rounded-full flex items-center justify-center">
                  ▶
                </div>
              </div>
            )}
          </div>
        </div>

        {/* TEXT */}
        <div className="text-center md:text-left">
          <Pera className="italic mb-6 leading-[30px] text-center">
            {activeData[activeIndex]?.quote}
          </Pera>
          <Pera className="font-medium text-center">
            {activeData[activeIndex]?.name}
          </Pera>
        </div>
      </div>

      {/* ---------- SLIDER ---------- */}
      <div className="mt-[40px] md:mt-[80px] border-t border-b border-black/20 py-[30px]">
        <div className="flex items-center gap-10 w-[80%] mx-auto">
          <button className="testimonial-prev text-xl">←</button>

          <Swiper
            modules={[Navigation]}
            slidesPerView={3}
            spaceBetween={40}
            centeredSlides
            loop={activeData.length > 3}
            navigation={{
              prevEl: ".testimonial-prev",
              nextEl: ".testimonial-next",
            }}
            onSlideChange={(swiper) =>
              setActiveIndex(swiper.realIndex)
            }
          >
            {activeData.map((item, index) => (
              <SwiperSlide key={item.id}>
                <div
                  className={`w-[40px] md:w-[70px] h-[40px] md:h-[70px] rounded-full overflow-hidden mx-auto transition-opacity ${
                    activeIndex === index ? "opacity-100" : "opacity-30"
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button className="testimonial-next text-xl">→</button>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
