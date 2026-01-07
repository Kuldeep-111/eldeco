import Image from 'next/image';
import React from 'react'
import CustomLink from '../../common/typography/CustomLink'

const data={
    image:"/images/projects/bg-1.png",
    alt:"image",
    logo:"/images/projects/terra-logo.png",
    projects:[
        {label:"KASAULI HILLS",link:"/"},
        {label:"RISHIKESH HILLS",link:"/"},
    ]
}

const FeatureProjects = () => {
    const {image,alt,logo,projects}=data;
  return (
    <section className='w-full h-[80vh] relative'>
        <Image src={image} alt={alt} fill className='obejct-cover'/>
        <div className="absolute top-[50px] right-[50px]">
            <div className='flex item-center justify-center gap-[100px]'>
                {projects.map((item,index) =>(
                    <CustomLink key={index} href={item?.link} >{item?.label}</CustomLink>
                ))}
            </div>
            <div className='relative mt-[100px]'>
                <Image src={logo} alt='logo' width={350} height={250} className='object-contain'/>
            </div>
        </div>
      
    </section>
  )
}

export default FeatureProjects
