import Image from "next/image";
import React from "react";
// import { CardData } from "@/types";
import Pera from "../../common/typography/Pera";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";
import { CardData } from "../../types/card";

interface CardProps {
  data: CardData;
}

const Card: React.FC<CardProps> = ({ data }) => {
  const { image, alt, category, slug } = data;

  return (
    <div className="relative w-full h-[350px] md:h-[450px] overflow-hidden">
      <Image
        src={image}
        alt={alt}
        fill
        className="object-cover"
      />

      {/* Gradient */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0)_0%,rgba(0,0,0,0)_55%,rgba(0,0,0,0.9)_100%)]" />

      {/* Content */}
      <div className="absolute inset-0 flex items-end">
        <div className="flex w-full items-center justify-between px-[40px] py-[20px]">
          <Pera className="text-white tracking-[1px] font-light">{category}</Pera>

          <Link href={slug} aria-label={`Open ${category}`}>
            <FaArrowRightLong className="text-white text-lg" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
