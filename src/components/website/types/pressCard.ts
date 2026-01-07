import { StaticImageData } from "next/image";

export interface PressData {
  image: string | StaticImageData;
  alt: string;
  desc: string;
  link: string;
}
