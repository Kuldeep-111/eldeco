import React from 'react'
import NavLink from '../typography/NavLink'
import Image from 'next/image'
import { SlSocialLinkedin } from "react-icons/sl";
import { FiFacebook } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import Link from 'next/link';
import BottomFooter from './BottomFooter';

const leftLinks = [
  {label:"about us",link:"/"},
  {label:"Terra Grande",link:"/"},
  {label:"Contact Us",link:"/"},
]
const rightLinks = [
  {label:"media center",link:"/"},
  {label:"careers",link:"/"},
  {label:"Investor Relation",link:"/"},
]
const socialMedia=[
  {icon:<SlSocialLinkedin />,link:"/"},
  {icon:<FiFacebook />,link:"/"},
  {icon:<FaXTwitter />,link:""},
  {icon:<FaInstagram />,link:""},
]


const Footer = () => {
  return (
    <footer className='footer md:fixed md:bottom-0 md:left-0 w-full z-[10]'>
        <div className='bg-[var(--background)] py-[50px]'>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-0 md:w-[70%] mx-auto">
            <div>
              {leftLinks.map((item,index) =>(
                <NavLink key={index} href={item?.link} className='block mb-[15px]'>{item?.label}</NavLink>
              ))}
            </div>
            <div>
              <Image src="/images/logo.png" alt='logo' width={250} height={200} className='object-contain mx-auto'/>
              <div className='flex items-center justify-center gap-[20px] mt-[30px]'>
                {socialMedia.map((item,index) =>(
                  <Link key={index} href={item?.link} className='text-[20px]'>{item?.icon}</Link>
                ))}
              </div>
            </div>
            <div>
              {rightLinks.map((item,index) =>(
                <NavLink key={index} href={item?.link} className='block mb-[15px]'>{item?.label}</NavLink>
              ))}
            </div>
          </div>
        </div>
        <BottomFooter/>
      
    </footer>
  )
}

export default Footer
