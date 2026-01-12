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
      title:"ELDECO HOUSING AND INDUSTRIES LTD. (EHIL) GOES PUBLIC",
      desc:"Eldeco Housing and Industries Ltd. (EHIL) goes public and is listed on the Bombay Stock Exchange. Public issue hailed by investors in Eldeco's catchment area of Agra in UP as a source of local pride.",
    },
    {
      year:"1985 - 1993",
      title:"ELDECO STRENGTHENS ITS POSITION AS THE MARKET LEADER IN UP",
      desc:"Eldeco strengthens its position as the market leader in UP. Establishes strong presence in Lucknow developing, amongst others, a 200 acres township in joint development with Lucknow Development Authority - one of the first instances of Public-Private Partnership (PPP) in the country.",
    },
    {
      year:"1993",
      title:"O. P. BAJAJ JOINS EHIL AS CO-PROMOTER",
      desc:"O. P. Bajaj, a prominent Agra based businessman, joins EHIL as co-promoter. The group adds many more projects to its portfolio in the next few years.",
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
