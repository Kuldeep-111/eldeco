import React from 'react'
import CustomLink from '../typography/CustomLink'
import Image from 'next/image'

const data = [
  {
    label:"about eldeco group",
    link:"about-us",
    image:"/images/menu/about.webp"
  },
  {
    label:"our team",
    link:"our-team",
    image:"/images/menu/team.webp"
  },
  {
    label:"our story",
    link:"our-story",
    image:"/images/menu/story.webp"
  },
  {
    label:"our testimonials",
    link:"testimonial",
    image:"/images/menu/testimonial.webp"
  },
  {
    label:"CSR Initiatives",
    link:"csr",
    image:"/images/menu/csr.webp"
  },
]

const Menu3 = () => {
  return (
    <div className='grid grid-cols-2'>
      <div className='relative'>{data.map((item,index) =>(
        <div key={index} className='absolute inset-0'>
          <Image src={item?.image} alt={item.label} fill className='object-cover'/>
        </div>
      ))}</div>
      <div>
        {data.map((item,index) =>(
          <CustomLink key={index} href={item?.link}>{item?.label}</CustomLink>
        ))}
      </div>
      
    </div>
  )
}

export default Menu3
