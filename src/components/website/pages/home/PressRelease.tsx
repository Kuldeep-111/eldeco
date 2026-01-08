import React from 'react'
import SubHeading from '../../common/typography/SubHeading';
import Heading from '../../common/typography/Heading';
import PressCard from './PressCard';
import CustomLink from '../../common/typography/CustomLink';
const data={
    heading:"Press Release",
    Subheading:"where Announcements Make Headlines and Every Update Speaks Progress to Inspire Tomorrow.",
    press:[
        {image:"/images/press-release/press-1.png",alt:"press 1",desc:"Four Gurugram HSG Land Parcels Fetch Rs. 500 Crore",link:"/"},
        {image:"/images/press-release/press-2.png",alt:"press 2",desc:"Eldeco Group to develop 80 luxury villas near Kasauli in Himachal Pradesh, eyes top line of Rs 500 crore",link:"/"},
        {image:"/images/press-release/press-3.jpg",alt:"press 3",desc:"Eldeco Group to invest close to ₹1000 crore across 10 mid to luxury housing projects",link:"/"},
    ]

}

const PressRelease = () => {
    const {heading,Subheading,press}=data;
  return (
    <section className='py-[40px] md:py-[100px] bg-[var(--background)] overflow-hidden'>
        <div className="wrapper">
            <SubHeading className='mb-[50px]'>{heading}</SubHeading>
           <Heading className='text-center px-[10px] md:px-0 md:w-[65%] mx-auto'>{Subheading}</Heading>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px] md:gap-[50px] mt-[40px] md:mt-[70px]">
            {press.map((item,index) =>(
                <PressCard key={index} data={item}/>
            ))}
           </div>
           <CustomLink href='/' className='mt-[50px] w-fit mx-auto block'>explore all News</CustomLink>
           </div>
    </section>
  )
}

export default PressRelease
