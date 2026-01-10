"use client";
import React, { useState } from "react";
import Heading from "../../common/typography/Heading";
import Pera from "../../common/typography/Pera";
import CustomButton from "../../common/typography/CustomButton";
import SlideUpPanel from "../../common/models/SlideUpPanel";

type GroupItem = {
  name: string;
  title: string;
  desc: string;
};

const data = {
  heading: "Eldeco Group: Shaping Urban Landscapes through EIHL and EIPL",
  group: [
    {
      name: "(EHIL)",
      title: "Eldeco Housing and Industries Ltd.",
      desc:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae porro pariatur at facere exercitationem maiores ipsam quo impedit dolor architecto.",
    },
    {
      name: "(EIPL)",
      title: "Eldeco Infrastructure and Properties Ltd.",
      desc:
        "2 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae porro pariatur at facere exercitationem maiores ipsam quo impedit dolor architecto.",
    },
  ],
};

const Group = () => {
  const { heading, group } = data;

  const [open, setOpen] = useState(false);
  const [activeGroup, setActiveGroup] = useState<GroupItem | null>(null);

  return (
    <div className="mt-[40px] md:mt-[80px] border-y pt-[50px] pb-[20px]">
      <Heading>{heading}</Heading>

      <div className="relative w-full md:w-[70%] mx-auto grid grid-cols-2 gap-[50px] mt-[30px]">
        {group.map((item, index) => (
          <div key={index}>
            <Heading className="my-[20px]">{item.name}</Heading>
            <Pera className="text-center">{item.title}</Pera>

            <CustomButton
              onClick={() => {
                setActiveGroup(item);
                setOpen(true);
              }}
              className="mt-[50px] block mx-auto"
            >
              Read More
            </CustomButton>
          </div>
        ))}
      </div>

      {/* Panel */}
      <div className="relative pb-[30px]">
        <SlideUpPanel
          open={open}
          onClose={() => {
            setOpen(false);
          }}
          className="px-[10px]"
        >
          {activeGroup && (
            <div className="w-[60%] mx-auto">
              <Heading>
                {activeGroup.title} {activeGroup.name}:
              </Heading>
              <Pera className="font-light mt-[40px] text-center">{activeGroup.desc}</Pera>
            </div>
          )}
        </SlideUpPanel>
      </div>
    </div>
  );
};

export default Group;
