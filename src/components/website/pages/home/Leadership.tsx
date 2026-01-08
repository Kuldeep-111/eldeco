import React from 'react'
import SubHeading from '../../common/typography/SubHeading'
import Heading from '../../common/typography/Heading'
import Image from 'next/image'
import CustomLink from '../../common/typography/CustomLink'
import Pera from '../../common/typography/Pera'


const data={
    heading:"our leadership",
    subheading:"Meet Our Founder: Visionary Leadership, Inspired Innovation",
    image:"/images/team/ceo.png",
    name:"Pankaj Bajaj",
    position:"Managing Director and Chairman of EHIL, Managing Director of EIPL",
    label:"explore our team",
    link:"/"
}

const Leadership = () => {
    
    const {heading,subheading,image,name,position,label,link} = data;
  return (
    <section className='overflow-hidden'>
        <div className='py-[40px] md:py-[80px]'>
            <SubHeading >{heading}</SubHeading>
            <Heading className='text-center mt-[50px]'>{subheading}</Heading>
        </div>
                  <div  className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden">
                      <div className="absolute inset-0">
                          <Image src={image} alt={name} fill className='object-cover' />
                      </div>
                     <div className="w-full h-full px-[10px] py-[50px] md:py-[100px] max-w-[700px] mx-auto flex flex-col justify-end relative">
                        <Heading className='text-white text-center'>{position}</Heading>
                        <Pera className='text-white text-center uppercase tracking-[1px] font-light mt-[20px] mb-[30px]'>{name}</Pera>
                        <CustomLink href={link} className='text-white w-fit block mx-auto !text-[14px]'>{label}</CustomLink>
                     </div>
                  </div>
      
    </section>
  )
}

export default Leadership
