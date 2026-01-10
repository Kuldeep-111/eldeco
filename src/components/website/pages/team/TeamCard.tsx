"use client";
import React, { useState } from "react";
import Image from "next/image";
import SubHeading from "../../common/typography/SubHeading";
import Heading from "../../common/typography/Heading";
import Pera from "../../common/typography/Pera";
import CustomButton from "../../common/typography/CustomButton";
import SlideUpPanel from "../../common/models/SlideUpPanel";

type TeamMember = {
  name: string;
  designation: string;
  desc: string;
  image: string;
};

interface TeamProps {
  data: {
    heading: string;
    subheading: string;
    team: TeamMember[];
  };
}

const TeamCard = ({ data }: TeamProps) => {
  const { heading, subheading, team } = data;
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-[40px] md:py-[100px] bg-[var(--background)]">
      <div className="wrapper">
        <SubHeading>{heading}</SubHeading>
        <Heading className="mt-[50px] max-w-[700px] mx-auto">
          {subheading}
        </Heading>

        <div className="mt-[100px]">
          {team.map((item, index) => (
            <div
              key={index}
              className={`relative ${index < team.length -1 && "mb-[80px]" }  pb-[30px] border-b border-black/30`}
            >
              {/* CARD */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-[50px]">
                <div className=" md:col-span-4">
                  <div className="relative w-full h-[350px]">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                <div className=" md:col-span-8">
                  <div className="block md:flex items-center justify-between  gap-[50px] h-full">
                    <div className="w-full md:w-[300px]">
                      <Heading>{item.name}</Heading>
                      <Pera className="mt-[20px] text-center text-[#000000A3] font-light tracking-[2px] capitalize">
                        {item.designation}
                      </Pera>
                    </div>

                    <div className="md:flex-1">
                      <Pera className="hidden md:block text-[#000000A3] text-justify tracking-[2px] capitalize">
                        {item.desc}
                      </Pera>

                      <CustomButton
                        className="mt-[40px] block w-fit mx-auto md:mx-0"
                        onClick={() =>
                          setActiveIndex(
                            activeIndex === index ? null : index
                          )
                        }
                      >
                        Read More
                      </CustomButton>
                    </div>
                  </div>
                </div>
              </div>

              {/* SLIDE PANEL — opens from THIS CARD */}
              <SlideUpPanel
                open={activeIndex === index}
                onClose={() => setActiveIndex(null)}
                className="pt-[20px] !bg-[var(--background)]"
              >
                <div className="md:max-w-[60%] mx-auto">
                  <Heading>{item.name}</Heading>
                  <Pera className="mt-[20px] text-center font-light">
                    {item.designation}
                  </Pera>
                  <Pera className="mt-[20px] md:mt-[40px] text-justify md:text-center font-light">
                    {item.desc}
                  </Pera>
                </div>
              </SlideUpPanel>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamCard;
