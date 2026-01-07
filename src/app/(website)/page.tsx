import CustomLink from "@/components/website/common/typography/CustomLink";
import AboutUs from "@/components/website/pages/home/AboutUs";
import Hero from "@/components/website/pages/home/Hero";
import Overview from "@/components/website/pages/home/Overview";
import FeatureProjects from "@/components/website/pages/home/FeatureProjects";
import OurProjects from "@/components/website/pages/home/OurProjects";
import Footer from "@/components/website/common/footer/Footer";
import Leadership from "@/components/website/pages/home/Leadership";
import WhatWeDo from "@/components/website/pages/home/WhatWeDo";
import PressRelease from "@/components/website/pages/home/PressRelease";

export default function Home() {
  return (
   <>
     <Hero/>
     <Overview/>
     <AboutUs/>
     <FeatureProjects/>
     <OurProjects/>
     <WhatWeDo/>
     <Leadership/>
     <PressRelease/>
   </>
  );
}
