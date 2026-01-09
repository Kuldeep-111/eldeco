import React from 'react'
import Heading from '../../common/typography/Heading'
import { GoDotFill } from "react-icons/go";

const data={
    heading:"Cities of Presence",
    cities:[
        {label:"Lucknow",image:"/image/logo.png"},
        {label:"Kanpur",image:"/image/logo.png"},
        {label:"Agra",image:"/image/logo.png"},
        {label:"Greater Noida",image:"/image/logo.png"},
        {label:"Noida",image:"/image/logo.png"},
        {label:"Gurgaon",image:"/image/logo.png"},
        {label:"Panipat",image:"/image/logo.png"},
        {label:"Sonipat",image:"/image/logo.png"},
        {label:"Ludhiana",image:"/image/logo.png"},
        {label:"Jhansi",image:"/image/logo.png"},
        {label:"Bareilly",image:"/image/logo.png"},
        {label:"Panchkula",image:"/image/logo.png"},
        {label:"Neemrana",image:"/image/logo.png"},
        {label:"Delhi",image:"/image/logo.png"},
        {label:"Kasauli",image:"/image/logo.png"},
        {label:"Rudrapur",image:"/image/logo.png"},
        {label:"Gorakhpur",image:"/image/logo.png"},
        {label:"Rishikesh",image:"/image/logo.png"},
        {label:"Jalandhar",image:"/image/logo.png"},
    ]
}

const CitiesPresence = () => {
    const {heading,cities} = data;
  return (
    <section className='py-[40px] md:py-[100px]'>
        <div className='w-full md:w-[70%] mx-auto px-[20px]'>
            <Heading>{heading}</Heading>
            <div className='flex justify-center flex-wrap gap-[5px] mt-[50px]'>
                {cities.map((item,index) =>(
                   <div
                key={index}
                className="flex items-center gap-2"
              >
                <Heading className="">
                  {item.label}
                </Heading>

                  <GoDotFill className="text-[12px] text-gray-400" />
              </div>
                ))}
            </div>
        </div>
      
    </section>
  )
}

export default CitiesPresence
