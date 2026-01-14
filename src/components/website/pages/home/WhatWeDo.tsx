import React from 'react'
import Heading from '../../common/typography/Heading'
import SubHeading from '../../common/typography/SubHeading';
import Card from '../../common/cards/Card';

const data={
    heading:"what we do",
    Subheading:"We build fine residential, commercial and industrial spaces through superior in-house capabilities, and by employing some of the best professionals in the industry.",
    projects:[
        {image:"/images/projects/platter-1.jpg",alt:"platter",category:"Residential",slug:"/"},
        {image:"/images/projects/platter-2.jpg",alt:"platter",category:"Commercial",slug:"/"},
        {image:"/images/projects/platter-3.webp",alt:"platter",category:"Industrial",slug:"/"},
    ]

}

const WhatWeDo = () => {
    const {heading,Subheading,projects}=data;
  return (
    <section className='py-[40px] md:py-[100px] bg-[var(--background)] overflow-hidden'>
        <div className="wrapper">
            <SubHeading className='mb-[50px]'>{heading}</SubHeading>
           <Heading className='text-center md:w-[70%] mx-auto'>{Subheading}</Heading>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px] md:gap-[50px] mt-[70px]">
            {projects.map((item,index) =>(
                <Card key={index} data={item}/>
            ))}
           </div>
      </div>
    </section>
  )
}

export default WhatWeDo
