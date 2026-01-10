"use client";

import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SubHeading from "../../common/typography/SubHeading";
import Heading from "../../common/typography/Heading";

gsap.registerPlugin(ScrollTrigger);

type Item = {
  heading: string;
  desc: string;
  image: string;
};

type MissionVisionProps = {
  data: readonly [Item, Item];
};

const MissionVision: React.FC<MissionVisionProps> = ({ data }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const visionTextRef = useRef<HTMLDivElement>(null);
  const missionTextRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useLayoutEffect(() => {
    if (
      !sectionRef.current ||
      !imageContainerRef.current ||
      !imageRef.current ||
      !visionTextRef.current ||
      !missionTextRef.current
    ) {
      return;
    }

    // Preload the second image
    const preload = new Image();
    preload.src = data[1].image;

    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=120%",
          scrub: 0.8,
          pin: true,
          anticipatePin: 1,            // ← better pin performance
          invalidateOnRefresh: true,   // ← important for Next.js route changes
        },
      });

      tl
        .to(visionTextRef.current, {
          opacity: 0,
          ease: "power2.out",
        })
        .to(
          imageContainerRef.current,
          {
            x: "-109%",
            ease: "power2.inOut",
            onUpdate: function (this: gsap.core.Tween) {
              const img = imageRef.current;
              if (!img) return;

              const progress = this.progress();

              // When scrolling down (progress increasing) → switch to mission
              // When scrolling up (progress decreasing) → switch back to vision
              if (progress >= 0.45) {
                if (img.src !== data[1].image) {
                  img.src = data[1].image;
                  img.alt = data[1].heading || "Our Mission";
                }
              } else {
                if (img.src !== data[0].image) {
                  img.src = data[0].image;
                  img.alt = data[0].heading || "Our Vision";
                }
              }
            },
          },
          "<"
        )
        .fromTo(
          missionTextRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, ease: "power2.out" },
          "<+=0.15"
        );
    }, sectionRef); // ← scope to sectionRef (important!)

    // Cleanup: revert everything safely
    return () => {
      ctx.revert();
    };
  }, [data]);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen py-[40px] md:py-[100px] bg-[var(--background)] overflow-hidden"
    >
      <div className="wrapper h-full px-5 md:px-8 lg:px-12">
        <div className="relative h-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-[60px] items-center">
          {/* LEFT – Vision */}
          <div className="relative">
            <div ref={visionTextRef}>
              <SubHeading className="mb-6 md:mb-[40px]">
                {data[0].heading}
              </SubHeading>
              <Heading className="">
                {data[0].desc}
              </Heading>
            </div>
          </div>

          {/* RIGHT – Image + Mission */}
          <div className="relative ">
            <div
              ref={imageContainerRef}
              className="absolute right-0 top-0 w-full h-full z-[5]"
            >
              <img
                ref={imageRef}
                src={data[0].image}
                alt={data[0].heading}
                className="w-full h-full object-cover"
                loading="eager"
                style={{ imageRendering: "-webkit-optimize-contrast" }}
              />
            </div>

            <div
              ref={missionTextRef}
              className="relative h-full flex items-center justify-end opacity-0"
            >
              <div className="">
                <SubHeading className="mb-6 md:mb-[40px]">
                  {data[1].heading}
                </SubHeading>
                <Heading>{data[1].desc}</Heading>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;