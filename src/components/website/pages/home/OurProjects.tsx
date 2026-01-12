"use client"
import React, { useState } from 'react'
import Heading from '../../common/typography/Heading'
import SubHeading from '../../common/typography/SubHeading';
import Image from 'next/image';
import Pera from '../../common/typography/Pera';
import CustomLink from '../../common/typography/CustomLink';
import { FaLocationDot } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

const data = {
    heading: "our projects",
    subheading: "Explore Our Premier Residential and Commercial Projects",
    projects: [
        {
            name: "Eldeco Centre",
            location: "Malviya Nagar, Delhi",
            image: "/images/projects/project-1.webp",
            alt: "project 1",
            type: "EHIL",
        },
        {
            name: "Eldeco Centre",
            location: "Malviya Nagar, Delhi",
            image: "/images/projects/project-2.webp",
            alt: "project 2",
            type: "EHIL",
        },
        {
            name: "Eldeco Centre",
            location: "Malviya Nagar, Delhi",
            image: "/images/projects/project-3.webp",
            alt: "project 3",
            type: "EHIL",
        },
        {
            name: "Eldeco Centre",
            location: "Malviya Nagar, Delhi",
            image: "/images/projects/project-4.webp",
            alt: "project 4",
            type: "EHIL",
        },
        {
            name: "Eldeco Centre 4 EIPL",
            location: "Malviya Nagar, Delhi",
            image: "/images/projects/project-4.webp",
            alt: "project 1",
            type: "EIPL",
        },
        {
            name: "Eldeco Centre",
            location: "Malviya Nagar, Delhi",
            image: "/images/projects/project-2.webp",
            alt: "project 2",
            type: "EIPL",
        },
        {
            name: "Eldeco Centre",
            location: "Malviya Nagar, Delhi",
            image: "/images/projects/project-3.webp",
            alt: "project 3",
            type: "EIPL",
        },
        {
            name: "Eldeco Centre",
            location: "Malviya Nagar, Delhi",
            image: "/images/projects/project-4.webp",
            alt: "project 4",
            type: "EIPL",
        },
    ]
}

const OurProjects = () => {
    const { heading, subheading, projects } = data;
    const [open, setOpen] = useState(false);
    const [activeType, setActiveType] = useState<"EHIL" | "EIPL">("EHIL");

    const filteredProjects = projects.filter(
        (item) => item.type === activeType
    );

    // const Click =
    return (
        <section className='relative overflow-hidden'>

            <div className='py-[40px] md:py-[80px]'>
                <SubHeading >{heading}</SubHeading>
                <Heading className='text-center mt-[50px]'>{subheading}</Heading>
            </div>
            <div className='relative'>
                <div
                    className={`bg-white absolute top-[75px] right-[75px] z-20 rounded-[50px] overflow-hidden transition-all duration-350 ease-in ${open ? "w-[110px] h-[220px] px-[10px] py-[10px]" : "w-[50px] h-[90px] px-[5px] py-[10px]"}`}
                >
                    <button 
                    onClick={() => {
                        if (!open) return;
                        setActiveType("EHIL");
                        setOpen(false);
                    }} 
                    className={`block w-full cursor-pointer ${activeType === "EHIL" ? "text-[var(--foreground)]" : "text-[var(--foreground)]/70"} uppercase font-bold tracking-[1px] !text-[14px] text-center`}>{activeType === "EIPL" && !open ? "EIPL" : "EHIL"} </button>
                    {open ?
                     <div> <Pera className={`${activeType === "EHIL" ? "text-black" : "text-black/70"} !text-[11px] text-center  mt-[5px]`}>Eldeco Housing and Industries Ltd</Pera>
                        <button 
                        onClick={() => {
                            setActiveType("EIPL");
                            setOpen(false);
                        }} 
                        className={`block w-full cursor-pointer mt-[10px] ${activeType === "EIPL" ? "text-[var(--foreground)]" : "text-[var(--foreground)]/70"} uppercase font-bold tracking-[1px] !text-[14px] text-center`}>EIPL</button>
                        <Pera className={`${activeType === "EIPL" ? "text-black" : "text-black/70"} !text-[11px] text-center mt-[5px]`}>Eldeco Infrastructure and Properties Ltd</Pera>
                        <button onClick={() => setOpen(false)} className='block mx-auto mt-[10px] text-[var(--foreground)] cursor-pointer'><IoMdClose /></button>
                    </div>
                        :
                        <img src="/images/gif/hand-click.gif" alt="gif" className='w-[50px] mt-[5px] block mx-auto cursor-pointer' onClick={() => setOpen(true)} />
                    }
                </div>
                {filteredProjects.map((item, index) => (
                    <div key={index} className="relative w-full h-screen overflow-hidden">
                        <div data-speed="0.5" className="absolute inset-0">
                            <Image src={item?.image} alt={item?.alt} fill className='object-cover' />
                        </div>
                        <div className="absolute top-[50px] left-[50px]">
                            <Heading className='text-white text-left'>{item?.name}</Heading>
                            <Pera className='text-white uppercase tracking-[1px] md:!text-[22px] font-light mt-[20px] mb-[30px]'><FaLocationDot className='text-white inline text-[20px] mr-[5px]' />{item?.location}</Pera>
                            <CustomLink href={item?.name} className='text-white !text-[14px]'> Know More</CustomLink>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    )
}

export default OurProjects
