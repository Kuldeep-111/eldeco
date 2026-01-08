import Banner from '@/components/website/common/banner/Banner'
import OurProjects from '@/components/website/pages/home/OurProjects'
import React from 'react'

const banner={
  heading:"Building a lifetime of unforgettable moments.",
  name:"about us",
  image:"/images/about/banner.png"
}

const page = () => {
  return (
    <>
    <Banner data={banner}/>
     <OurProjects/>
      
    </>
  )
}

export default page
