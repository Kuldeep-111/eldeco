import Banner from '@/components/website/common/banner/Banner'
import AboutLinks from '@/components/website/pages/about/AboutLinks';
import BasicDetails from '@/components/website/pages/about/BasicDetails';
import CitiesPresence from '@/components/website/pages/about/CitiesPresence';
import MissionVision from '@/components/website/pages/about/MissionVision';
import AboutUs from '@/components/website/pages/home/AboutUs'
import React from 'react'

const banner={
  heading:"Building a lifetime of unforgettable moments.",
  name:"about us",
  image:"/images/about/banner.png"
}


const about = {
  heading: "about us",
  subheading:
    "Eldeco's strength lies in its professional and experienced workforce. Apart from in-house capabilities, Eldeco employs best-in-class consultants and contractors to deliver quality projects. The Group's business activities rest on the principles of high quality, superior construction and high consumer satisfaction. Over the years, the Group has won numerous awards and accolades for its projects.",
};


const missionVisionData = [
  {
    heading: "Our Vision",
    desc: "To contribute to building an India where everyone has easy access to green and healthy living environments. To make a positive and everlasting difference in the way the world lives.",
    image: "/images/mision-vision/vision.png",
  },
  {
    heading: "Our Mission",
    desc: "To become North India’s most respected Real Estate company. To leverage technology and design innovations to deliver the best quality and value to customers. To build strong and positive relationships with business associates based on trust and transparency.",
    image: "/images/mision-vision/mision.jpg",
  },
] as const;

const page = () => {
  return (
    <>
    <Banner data={banner}/>
    <AboutUs data={about}/>
    <BasicDetails/>
    <CitiesPresence/>
    <MissionVision data={missionVisionData}/>
    <AboutLinks/>
      
    </>
  )
}

export default page
