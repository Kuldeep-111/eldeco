import React from 'react'
import Heading from '../../common/typography/Heading'
import CustomLink from '../../common/typography/CustomLink'
import SubHeading from '../../common/typography/SubHeading'
const data={
    heading:"about us",
    subheading:"Crafting exceptional infrastructure and real estate projects with unwavering commitment to quality, innovation, and long-term value—delivering environments that empower communities and drive sustainable growth.",

}

const AboutUs = () => {
const {heading, subheading}=data;
  return (
    <section className='py-[40px] md:py-[100px] bg-[var(--background)] overflow-hidden'>
        <div className="w-[95%] md:w-[65%] mx-auto">
            <SubHeading  className='mb-[50px] '>{heading}</SubHeading>
        <Heading  className=' text-center md:!text-[34px]'>{subheading}</Heading>
        <CustomLink href="/about-us" className='block w-fit mx-auto mt-[40px]'>Know More</CustomLink>
      </div>
    </section>
  )
}

export default AboutUs
