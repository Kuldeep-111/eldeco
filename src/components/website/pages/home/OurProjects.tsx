import React from 'react'
import Heading from '../../common/typography/Heading'
import SubHeading from '../../common/typography/SubHeading';
import Image from 'next/image';
import Pera from '../../common/typography/Pera';
import CustomLink from '../../common/typography/CustomLink';
import { FaLocationDot } from "react-icons/fa6";

const data={
    heading:"our projects",
    subheading:"Explore Our Premier Residential and Commercial Projects",
    projects:[
        {
            name:"Eldeco Centre",
            location:"Malviya Nagar, Delhi",
            image:"/images/projects/project-1.webp",
            alt:"project 1",
        },
        {
            name:"Eldeco Centre",
            location:"Malviya Nagar, Delhi",
            image:"/images/projects/project-2.webp",
            alt:"project 2",
        },
        {
            name:"Eldeco Centre",
            location:"Malviya Nagar, Delhi",
            image:"/images/projects/project-3.webp",
            alt:"project 3",
        },
        {
            name:"Eldeco Centre",
            location:"Malviya Nagar, Delhi",
            image:"/images/projects/project-4.webp",
            alt:"project 4",
        },
    ]
}

const OurProjects = () => {
    const {heading,subheading,projects} = data;
  return (
    <section className='relative overflow-hidden'>
        <div className='py-[40px] md:py-[80px]'>
            <SubHeading >{heading}</SubHeading>
            <Heading className='text-center mt-[50px]'>{subheading}</Heading>
        </div>
          <div className='relative'>
              {projects.map((item, index) => (
                  <div key={index} className="relative w-full h-screen overflow-hidden">
                      <div data-speed="0.5" className="absolute inset-0">
                          <Image src={item?.image} alt={item?.alt} fill className='object-cover' />
                      </div>
                     <div className="absolute top-[50px] left-[50px]">
                        <Heading className='text-white text-left'>{item?.name}</Heading>
                        <Pera className='text-white uppercase tracking-[1px] md:!text-[22px] font-light mt-[20px] mb-[30px]'><FaLocationDot className='text-white inline text-[20px] mr-[5px]'/>{item?.location}</Pera>
                        <CustomLink href={item?.name} className='text-white !text-[14px]'> Know More</CustomLink>
                     </div>
                  </div>
              ))}
          </div>
      
    </section>
  )
}

export default OurProjects
