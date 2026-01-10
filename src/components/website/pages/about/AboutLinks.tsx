import React from 'react'
import CustomLink from '../../common/typography/CustomLink'
import Heading from '../../common/typography/Heading'

const AboutLinks = () => {

    const data = [
        {label:"Our Story",link:"/our-story"},
        {label:"Our Team",link:"/our-team"}
    ]
  return (
    <section className='py-[40px] md:py-[100px]'>
        <div className="grid grid-cols-2 gap-[50px] w-[70%] mx-auto">
            {data.map((item,index) =>(
                <div key={index}>
                    <CustomLink href={item?.link} className='font-cormorant md:text-[52px] md:!leading-[80px] block w-fit mx-auto !capitalize'>{item?.label}</CustomLink>
                </div>
            ))}
        </div>
      
    </section>
  )
}

export default AboutLinks
