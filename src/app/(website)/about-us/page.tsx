import Banner from '@/components/website/common/banner/Banner'
import BasicDetails from '@/components/website/pages/about/BasicDetails';
import CitiesPresence from '@/components/website/pages/about/CitiesPresence';
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

const page = () => {
  return (
    <>
    <Banner data={banner}/>
    <AboutUs data={about}/>
    <BasicDetails/>
    <CitiesPresence/>
      
    </>
  )
}

export default page
