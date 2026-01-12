"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Heading from "../typography/Heading";
import FixedStrip from "./FixedStrip";
import { useIsMobile } from "../../hooks/useIsMobile";

gsap.registerPlugin(ScrollTrigger);

interface BannerProps {
  data: {
    heading: string;
    name: string;
    image: string;
  };
}

const Banner = ({ data }: BannerProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageWrapRef = useRef<HTMLDivElement>(null);

  const isMobile = useIsMobile();

  useLayoutEffect(() => {
    if (!sectionRef.current || !textRef.current || !imageWrapRef.current)
      return;


    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=120%",
          scrub: true,
          pin: true,
        },
      });

      /* TEXT */
      tl.to(
        textRef.current,
        {
          y: -520,
          opacity: 0,
          ease: "none",
        },
        0
      );

      /* IMAGE */
      tl.to(
        imageWrapRef.current,
        {
          width: "100%",
          height: isMobile ? "100vh" :  "80vh",
          ease: "none",
        },
        0
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[var(--background)] px-[7%] h-screen w-full pb-[70px] overflow-hidden"
    >
      {/* TEXT */}
      <div
        ref={textRef}
        className="absolute top-[120px] left-[7%] w-full max-w-[620px] h-[200px] md:h-[75vh] flex flex-col justify-between"
      >
        <Heading className="text-left capitalize tracking-[1px] !leading-[50px] md:!leading-[70px] 2xl:!leading-[90px] !text-[30px] md:!text-[50px] 2xl:!text-[70px]">
          {data.heading}
        </Heading>

        <p className="mt-10 uppercase tracking-widest text-sm">
          {data.name}
        </p>
      </div>

      {/* IMAGE */}
      <div className="relative w-full h-full flex justify-end items-end">
        <div
          ref={imageWrapRef}
          className="w-full md:w-[50%] h-[360px] overflow-hidden"
        >
          <img
            src={data.image}
            alt={data.name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* FIXED STRIP */}
      <FixedStrip />
    </section>
  );
};

export default Banner;
