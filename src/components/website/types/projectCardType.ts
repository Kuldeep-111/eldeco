export interface ProjectCardType {
  images: string[];
  alt: string;
  name: string;
  location: string;
  category: "residential" | "commercial" | "industrial";
  subTypology: string;
  phone: string;
  rera: string;
  reraWebsite: string;
}
