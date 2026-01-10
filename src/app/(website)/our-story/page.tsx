import Banner from '@/components/website/common/banner/Banner'
import AboutUs from '@/components/website/pages/home/AboutUs'
import Timeline from '@/components/website/pages/story/Timeline';
import React from 'react'


const banner={
  heading:"Our Story, Built on Purpose and Guided by Values",
  name:"Our Story",
  image:"/images/our-story/banner.jpg"
}
const about = {
  heading: "Our Story",
  subheading:
    "The Eldeco group was founded in 1975 in Agra by S. K. Garg to professionally undertake real estate and construction projects. The Eldeco Group was formed with a vision to excel in this field on the ideals of timely delivery, ethics in business and transparency.",
};
const timeline = {
  heading:"explore timeline",
  subheading:"scroll Down to explore",
  timeline:[
    {
      year:"1975 - 1984",
      title:"Ecpl Undertakes Real Estate And Construction Projects",
      desc:"ECPL undertakes real estate and construction projects in Agra and other towns of UP and gradually acquires a strong reputation for its fair and transparent business practices.",
    },
    {
      year:"1985",
      title:"Ecpl Undertakes Real Estate And Construction Projects",
      desc:"ECPL undertakes real estate and construction projects in Agra and other towns of UP and gradually acquires a strong reputation for its fair and transparent business practices.",
    },
    {
      year:"1985 - 1993",
      title:"Ecpl Undertakes Real Estate And Construction Projects",
      desc:"ECPL undertakes real estate and construction projects in Agra and other towns of UP and gradually acquires a strong reputation for its fair and transparent business practices.",
    },
    {
      year:"1994",
      title:"Ecpl Undertakes Real Estate And Construction Projects",
      desc:"ECPL undertakes real estate and construction projects in Agra and other towns of UP and gradually acquires a strong reputation for its fair and transparent business practices.",
    },
    {
      year:"1994 - 2022",
      title:"Ecpl Undertakes Real Estate And Construction Projects",
      desc:"ECPL undertakes real estate and construction projects in Agra and other towns of UP and gradually acquires a strong reputation for its fair and transparent business practices.",
    },
  ]
}


const page = () => {
  return (
    <>
    <Banner data={banner}/>
    <AboutUs data={about} />
    <Timeline data={timeline}/>
      
    </>
  )
}

export default page
