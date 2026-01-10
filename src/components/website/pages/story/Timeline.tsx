"use client";

import React, { useEffect, useRef } from "react";
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
    const itemsRef = useRef<HTMLDivElement[]>([]);
    const progressRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!sectionRef.current || !progressRef.current) return;

        // 🔑 show first item initially
        gsap.set(itemsRef.current[0], { opacity: 1, y: 0 });

        const total = timeline.length;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top top",
                end: `+=${total * 100}%`,
                scrub: true,
                pin: true,
                onUpdate: (self) => {
                    gsap.to(progressRef.current, {
                        width: `${self.progress * 100}%`,
                        overwrite: true,
                    });
                },
            },
        });

        itemsRef.current.forEach((item, index) => {
            if (index === 0) return;

            // old item goes up
            tl.to(
                itemsRef.current[index - 1],
                {
                    y: -250,
                    opacity: 0,
                    duration: 0.5,
                    ease: "power2.out",
                }
            );

            // new item comes from bottom — SAME TIME
            tl.fromTo(
                item,
                { y: 250, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.5,
                    ease: "power2.out",
                },
                "<" // 👈 THIS is the key
            );
        });


        return () => ScrollTrigger.getAll().forEach((st) => st.kill());
    }, [timeline]);

    // 👉 click on timeline dot
    const jumpTo = (index: number) => {
        const trigger = ScrollTrigger.getAll()[0];
        if (!trigger) return;

        const target =
            trigger.start +
            (trigger.end - trigger.start) *
            (index / (timeline.length - 1));

        gsap.to(window, {
            scrollTo: target,
            duration: 1,
            ease: "power2.inOut",
        });
    };

    return (
        <section
            ref={sectionRef}
            className="relative bg-[var(--background)] pt-[50px] md:pt-[100px] h-screen overflow-hidden"
        >
            <div className="wrapper text-center pt-[100px]">
                <Heading className="2xl:!text-[70px] 2xl:!leading-[90px]">
                    {heading}
                </Heading>

                <Pera className="uppercase mt-[30px] tracking-[2px]">
                    {subheading}
                </Pera>

                {/* CONTENT STACK */}
                <div className="relative mt-[80px] h-[260px] overflow-hidden">
                    {timeline.map((item, index) => (
                        <div
                            key={index}
                            ref={(el) => {
                                if (el) itemsRef.current[index] = el;
                            }}
                            className="absolute inset-0 opacity-0"
                        >
                            <Pera className="tracking-[2px] mb-[20px]">
                                {item.year}
                            </Pera>

                            <Heading className="mb-[20px]">
                                {item.title}
                            </Heading>

                            <Pera className="leading-[28px]">
                                {item.desc}
                            </Pera>
                        </div>
                    ))}
                </div>

                {/* DIVIDER */}
                <div className="h-px bg-black/20 my-[50px]" />

                {/* TIMELINE BAR */}
                <div className="relative max-w-[700px] mx-auto">
                    <div className="flex justify-between text-sm mb-[10px]">
                        <span>{timeline[0].year}</span>
                        <span>{timeline[timeline.length - 1].year}</span>
                    </div>

                    <div className="relative h-[2px] bg-black/20">
                        <div
                            ref={progressRef}
                            className="absolute left-0 top-0 h-full bg-black w-0"
                        />

                        <div className="absolute inset-0 flex justify-between">
                            {timeline.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => jumpTo(index)}
                                    className="w-[10px] h-[10px] rounded-full -mt-[4px] bg-black/30 hover:bg-black transition"
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* HINT */}
                <div className="mt-[60px]">
                    <Image
                        src="/images/icons/hand.png"
                        alt="hand"
                        width={40}
                        height={80}
                        className="mx-auto mb-[10px]"
                    />
                    <Pera>Scroll or click points</Pera>
                </div>
            </div>
        </section>
    );
};

export default Timeline;
