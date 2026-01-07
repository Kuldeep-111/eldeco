import { StaticImageData } from "next/image";

export interface CardData {
  image: string | StaticImageData;
  alt: string;
  category: string;
  slug: string;
}
