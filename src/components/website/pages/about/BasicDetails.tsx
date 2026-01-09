"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Heading from "../../common/typography/Heading";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const data = [
  { number: "40", prefix: "+", title: "Years", desc: "of trusted legacy" },
  { number: "20", prefix: "+", title: "Cities", desc: "Across India" },
  { number: "200", prefix: "+", title: "Projects", desc: "Delivered With commitment" },
  { number: "30", prefix: "K+", title: "Families", desc: "Trusted. Growing. Together" },
];

const BasicDetails = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const cards = cardsRef.current;
    if (!containerRef.current || cards.length === 0) return;

    // Calculate total width needed to reveal all cards (excluding the first two visible ones)
    const totalWidth = cards.reduce((acc, card) => acc + card.offsetWidth, 0);
    const visibleWidth = containerRef.current.offsetWidth; // viewport width for cards container
    const scrollDistance = totalWidth - visibleWidth; // how much to scroll horizontally

    gsap.to(cards, {
      x: () => -scrollDistance, // move left by the remaining width
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%",           // start when section enters view
        end: "+=400",               // scroll distance to complete reveal (adjust 600–1200px)
        scrub: 0.6,                 // smooth horizontal movement
        invalidateOnRefresh: true,  // recalculate on resize
        // markers: true,           // uncomment to debug start/end
      },
    });
  }, []);

  return (
    <section className="py-[40px] md:py-[100px] bg-[var(--background)] overflow-hidden">
      <div className="wrapper">
        {/* Horizontal container – overflow hidden, flex nowrap */}
        <div
          ref={containerRef}
          className="flex gap-[100px] overflow-hidden whitespace-nowrap"
        >
          {data.map((item, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="flex-shrink-0 flex items-center gap-[50px] min-w-[350px]"
            >
              <div className="w-[300px]">
                <Heading>
                  {item.number}
                  <span>{item.prefix}</span>
                </Heading>
                <Heading>{item.title}</Heading>
                <Heading className="!text-[24px]">{item.desc}</Heading>
              </div>
              {/* Arrow only between cards (not after last) */}
              
                <div className={`relative ${index < data.length - 1 ? " w-[100px]" : "w-[200px]" } h-[5px]`}>
                  {index < data.length - 1 && (
                  <Image
                    src="/images/icons/arrow.svg"
                    alt="arrow"
                    fill
                    className="object-contain"
                  />
              ) }
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BasicDetails;