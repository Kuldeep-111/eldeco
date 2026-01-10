"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import SubHeading from "../../common/typography/SubHeading";
import Heading from "../../common/typography/Heading";
import CustomLink from "../../common/typography/CustomLink";

gsap.registerPlugin(ScrollTrigger, SplitText);

interface AboutUsProps {
  data: {
    heading: string;
    subheading: string;
    label?: string;
    link?: string;
  };
}

const AboutUs = ({ data }: AboutUsProps) => {
  const { heading, subheading ,label,link} = data; // ← Destructure here

  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const splitRef = useRef<SplitText | null>(null);

  useEffect(() => {
    if (!textRef.current) return;

    splitRef.current = new SplitText(textRef.current, {
      type: "lines",
      linesClass: "overflow-hidden relative",
    });

    const lines = splitRef.current.lines ?? [];
    const overlays: HTMLElement[] = [];

    lines.forEach((line) => {
      const overlay = document.createElement("div");
      overlay.className = "absolute inset-0 bg-[#e1eee9]/80 origin-left scale-x-100";
      overlay.style.zIndex = "1";
      line.appendChild(overlay);
      overlays.push(overlay);
    });

    gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "+=700",
        scrub: 0.5,
        invalidateOnRefresh: true,
      },
    })
      .to(overlays, {
        scaleX: 0,
        transformOrigin: "right center",
        stagger: { 
          each: 0.05,
          from: "start",
        },
        ease: "power1.inOut",
      });

    return () => {
      splitRef.current?.revert();
      overlays.forEach((ov) => ov.remove());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-[40px] md:py-[100px] bg-[var(--background)] overflow-hidden"
    >
      <div className="w-[95%] md:w-[85%] 2xl:w-[65%] mx-auto">
        <SubHeading className="mb-[50px]">{heading}</SubHeading>

        <Heading
          ref={textRef}
          className="text-center md:!text-[34px] relative leading-relaxed"
        >
          {subheading}
        </Heading>
       {link &&
        <CustomLink href={link} className="block w-fit mx-auto mt-[40px]">
          {label}
        </CustomLink>
        }
      </div>
    </section>
  );
};

export default AboutUs;