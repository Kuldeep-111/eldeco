import Image from "next/image";
import React from "react";
// import { CardData } from "@/types";
import Pera from "../../common/typography/Pera";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";
import { PressData } from "../../types/pressCard";

interface CardProps {
  data: PressData;
}

const PressCard: React.FC<CardProps> = ({ data }) => {
  const { image, alt, desc, link } = data;

  return (
    <div className="relative bg-white overflow-hidden">
      <div className="w-full  overflow-hidden relative py-[15px] border-b px-[10px]">
        <div className="w-ful h-[260px] relative">
        <Image
          src={image}
          alt={alt}
          fill
          className="object-cover object-top"
        />
        </div>
      </div>
        <div className="flex w-full items-center justify-between px-[40px] py-[20px]">
          
          <Link href={link} aria-label={`Open ${desc}`}>
          <Pera className="text-center tracking-[1px] font-light">{desc}</Pera>
          </Link>
        </div>
    </div>
  );
};

export default PressCard;
