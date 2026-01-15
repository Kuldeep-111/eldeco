import AboutUs from "@/components/website/pages/home/AboutUs";
import Hero from "@/components/website/pages/home/Hero";
import Overview from "@/components/website/pages/home/Overview";
import FeatureProjects from "@/components/website/pages/home/FeatureProjects";
import OurProjects from "@/components/website/pages/home/OurProjects";
import Leadership from "@/components/website/pages/home/Leadership";
import WhatWeDo from "@/components/website/pages/home/WhatWeDo";
import PressRelease from "@/components/website/pages/home/PressRelease";
import Testimonial from "@/components/website/pages/home/Testimonial";
import { Suspense } from "react";
const about = {
  heading: "about us",
  subheading:
    "Crafting Exceptional Infrastructure And Real Estate Projects With Unwavering Commitment To Quality, Innovation, And Long-Term Value—Delivering Environments That Empower Communities And Drive Sustainable Growth.",
  label: "know more",
  link: "/about-us"
};

export default function Home() {

  return (
   <>
     <Hero/>
    <Suspense fallback={null}>
     <Overview/>
     <AboutUs data={about}/>
     <FeatureProjects/>
     <OurProjects/>
     <WhatWeDo/>
     <Leadership/>
     <Testimonial/>
     <PressRelease/>
     </Suspense>
     
   </>
  );
}
