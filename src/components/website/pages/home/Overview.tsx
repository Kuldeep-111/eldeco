"use client";

import React, { useEffect, useRef } from "react";
import Heading from "../../common/typography/Heading";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const data = {
  heading: "A promise of a better life.",
  items: [
    { number: 40, suffix: "", desc: "years of trusted legacy" },
    { number: 200, suffix: "+", desc: "projects delivered" },
    { number: 30, suffix: "k+", desc: "happy customers" },
  ],
};

const Overview = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const countersRef = useRef<HTMLSpanElement[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top 70%",
      once: true,
      onEnter: () => {
        countersRef.current.forEach((el, i) => {
          const target = data.items[i].number;

          gsap.fromTo(
            el,
            { innerText: 0 },
            {
              innerText: target,
              duration: 2,
              ease: "power2.out",
              snap: { innerText: 1 },
              onUpdate() {
                el.innerText = Math.floor(
                  Number(el.innerText)
                ).toString();
              },
            }
          );
        });
      },
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden"
    >
      {/* Background Video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/home/overview.mp4" type="video/mp4" />
      </video>

      {/* Content */}
      <div className="relative z-10 flex h-full w-full items-start justify-end p-16">
        <div className="max-w-[600px] text-right text-black">
          {/* Counters */}
          <div className="mb-10  flex items-center justify-center gap-[50px]">
            {data.items.map((item, index) => (
              <div key={index}>
                <div className="font-cormorant md:text-[42px] md:leading-[60px]  font-light tracking-[1px] capitalize text-black text-center">
                  <span
                    ref={(el) => {
                      if (el) countersRef.current[index] = el;
                    }}
                    className=""
                  >
                    0
                  </span>
                  {item.suffix}
                </div>
                <Heading  className=" md:!text-[30px] md:!leading-[45px] text-center">{item.desc}</Heading>
              </div>
            ))}
          </div>
          <Heading>{data.heading}</Heading>

        </div>
      </div>
    </section>
  );
};

export default Overview;
