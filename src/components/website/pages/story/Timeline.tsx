"use client";

import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Heading from "../../common/typography/Heading";
import Pera from "../../common/typography/Pera";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

type TimelineItem = {
  year: string;
  title: string;
  desc: string;
};

interface TimelineProps {
  data: {
    heading: string;
    subheading: string;
    timeline: TimelineItem[];
  };
}

const Timeline = ({ data }: TimelineProps) => {
  const { heading, subheading, timeline } = data;

  const sectionRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);
  const markersRef = useRef<HTMLSpanElement[]>([]);
  const progressFillRef = useRef<HTMLSpanElement>(null);

  const VISIBLE_HEIGHT = 300;

  useLayoutEffect(() => {
    if (!sectionRef.current || !listRef.current) return;

    const ctx = gsap.context(() => {
      const totalScroll =
        listRef.current!.scrollHeight - VISIBLE_HEIGHT;

      const animation = gsap.to(listRef.current, {
        y: -totalScroll,
        ease: "none",
      });

      const st = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: `+=${totalScroll}`,
        pin: true,
        scrub: true,
        anticipatePin: 1,
        animation,

        onUpdate: (self) => {
          const currentScroll = self.progress * totalScroll;

          // progress bar
          gsap.set(progressFillRef.current, {
            scaleX: self.progress,
          });

          itemsRef.current.forEach((item, index) => {
            if (!item) return;

            const top = item.offsetTop;
            const bottom = top + item.offsetHeight;

            const isActive =
              currentScroll >= top - 80 &&
              currentScroll < bottom - 80;

            // ACTIVE ITEM STYLE
            item.classList.toggle("opacity-100", isActive);
            item.classList.toggle("translate-y-0", isActive);
            item.classList.toggle("opacity-40", !isActive);
            item.classList.toggle("translate-y-[10px]", !isActive);

            // MARKER SYNC
            const marker = markersRef.current[index];
            if (marker) {
              marker.classList.toggle("opacity-100", isActive);
              marker.classList.toggle("scale-125", isActive);
              marker.classList.toggle("opacity-40", !isActive);
              marker.classList.toggle("scale-100", !isActive);
            }
          });
        },
      });

      // MARKER CLICK → SCROLL
      markersRef.current.forEach((marker, index) => {
        marker.addEventListener("click", () => {
          const item = itemsRef.current[index];
          if (!item) return;

          const progress = item.offsetTop / totalScroll;
          const targetScroll =
            st.start + progress * (st.end - st.start);

          gsap.to(window, {
            scrollTo: targetScroll,
            duration: 0.8,
            ease: "power2.out",
          });
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [timeline.length]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[var(--background)] pt-[10px] md:pt-[50px] h-screen overflow-hidden"
    >
      <div className="w-full text-center px-5 md:max-w-6xl mx-auto">
        <Heading className="2xl:!text-[70px] 2xl:!leading-[90px]">
          {heading}
        </Heading>

        <Pera className="uppercase mt-4 md:mt-6 tracking-[2px]">
          {subheading}
        </Pera>

        {/* TIMELINE */}
        <div className="h-[50vh] md:h-[300px] overflow-hidden mt-4 md:mt-7 2xl:mt-14">
          <div ref={listRef} className="pb-[100px]"> 
            {timeline.map((item, index) => (
              <div
                key={index}
                ref={(el) => {
                  if (el) itemsRef.current[index] = el;
                }}
                className={`transition-all duration-500 opacity-40 translate-y-[10px] ${
                  index > 0 && "mt-[50px]"
                }`}
              >
                <Pera
                  className={`flex items-center gap-[50px] ${
                    index % 2 ? "flex-row-reverse" : ""
                  }`}
                >
                  <span className="shrink-0">{item.year}</span>
                  <span className="flex-1 h-[1px] bg-black/60" />
                </Pera>

                <Heading className="my-[20px] 2xl:my-[30px]">
                  {item.title}
                </Heading>

                <Pera className="text-black/60 tracking-[2px] md:px-[50px]">
                  {item.desc}
                </Pera>
              </div>
            ))}
          </div>
        </div>

        {/* PROGRESS */}
        <div className="flex items-center justify-center gap-5 mt-[15px] 2xl:mt-12">
          <Pera>{timeline[0]?.year}</Pera>

          <div className="relative flex items-center">
            <span className="absolute w-full h-[1px] bg-black/40" />
            <span
              ref={progressFillRef}
              className="absolute w-full h-[30%] bg-black origin-left scale-x-0"
            />

            {timeline.map((_, index) => (
              <span
                key={index}
                ref={(el) => {
                  if (el) markersRef.current[index] = el;
                }}
                className="relative z-10 w-[15px] text-center cursor-pointer 
                  transition-all duration-300 opacity-40 scale-100"
              >
                |
              </span>
            ))}
          </div>

          <Pera>{timeline[timeline.length - 1]?.year}</Pera>
        </div>

        {/* SCROLL HINT */}
        <div className="mt-[15px] 2xl:mt-14 opacity-70">
          <Image
            src="/images/icons/hand.png"
            alt="Scroll hint"
            width={36}
            height={72}
            className="mx-auto mb-3"
          />
          <Pera className="text-sm">Scroll or click points</Pera>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
