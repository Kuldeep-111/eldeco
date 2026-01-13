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
    <section className='w-full h-[50vh] md:h-[80vh] relative overflow-hidden'>
        <Image src={image} alt={alt} fill className='object-cover'/>
        <div className="absolute w-full max-w-[600px] flex flex-col items-end top-[50px] right-[10px] md:right-[50px]">
            <div className='flex item-center justify-center gap-[20px] md:gap-[100px]'>
                {projects.map((item,index) =>(
                    <CustomLink key={index} href={item?.link} >{item?.label}</CustomLink>
                ))}
            </div>
            <div className='relative mt-[50px] md:mt-[100px]'>
                <Image src={logo} alt='logo' width={150} height={150} className='md:w-[250px] md:h-[200px] 2xl:w-[350px] 2xl:h-[250px] object-contain ml-auto md:ml-0'/>
            </div>
        </div>
      
    </section>
  )
}

export default FeatureProjects
