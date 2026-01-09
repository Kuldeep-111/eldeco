import React from 'react'
import CustomLink from '../typography/CustomLink'
import FixedWrapper from './FixedWrapper'
import useIsScroll from '../../hooks/useIsScroll'

const links=[
    {label:"Our Story",link:"/"},
    {label:"Our Team",link:"/"},
    {label:"Customer Testimonials",link:"/"},
    {label:"Eldo Care - CSR Initiatives",link:"/"},
]

const FixedStrip = () => {

    const isScrolled = useIsScroll(100)
    console.log(isScrolled,"isScrolled")
  return (
    <FixedWrapper className={`strip-fixed fixed z-[11] left-0 w-full h-[50px] bg-[#e1eee9] ${isScrolled ? "bottom-0 opacity-100" : " bottom-[-100px] opacity-0"} transition-all duration-500 ease-out`}>
    <div className={`flex items-center justify-between h-full  px-[5%] `}>
        {links.map((item,index) =>(
            <CustomLink key={index} href={item?.link} className='text-center !text-[14px]'>{item?.label}</CustomLink>
        ))}
    </div>
    </FixedWrapper>
  )
}

export default FixedStrip