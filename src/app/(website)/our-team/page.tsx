import Banner from '@/components/website/common/banner/Banner'
import TeamCard from '@/components/website/pages/team/TeamCard'
import React from 'react'


const banner={
  heading:"Building Excellence, One Milestone at a Time",
  name:"Our Team",
  image:"/images/our-team/banner.png"
}

const team ={
  heading:"meet our team",
  subheading:"We Level Up Real Estate with Smarter Design, Stronger Value, and Future-Ready Living",
  team:[
       {
        name:"Pankaj Bajaj",
        image:"/images/our-team/pankaj.png",
        designation:"Managing Director and Chairman of EHIL, Managing Director of EIPL",
        desc:"The Group is professionally managed under the leadership of Pankaj Bajaj. He is the Chairman and Managing Director of EHIL and also the Managing Director of EIPL. He is a graduate from the Shri Ram College of Commerce, Delhi University and holds a Post Graduate Diploma in Management (PGDM) from Indian Institute of Management, Ahmedabad. With over 20 years..."
       },
       {
        name:"Manish Jaiswal",
        image:"/images/our-team/manish.png",
        designation:"CEO, Eldeco Group",
        desc:"Manish Jaiswal is the Chief Executive Officer at Eldeco Group. He has completed his post-graduation in management from IIM Calcutta and engineering from NSIT, Delhi University. He possesses more than two decades of leadership experience in real estate with strong focus on driving business growth through team building..."
       }, 
       {
        name:"Navdeep Sharma",
        image:"/images/our-team/navdeep.png",
        designation:"COO, Eldeco Infrastructure & Properties Ltd.",
        desc:"Manish Jaiswal is the Chief Executive Officer at Eldeco Group. He has completed his post-graduation in management from IIM Calcutta and engineering from NSIT, Delhi University. He possesses more than two decades of leadership experience in real estate with strong focus on driving business growth through team building..."
       }, 
  ]
}

const page = () => {
  return (
    <>
    <Banner data={banner}/>
    <TeamCard data={team}/>
      
    </>
  )
}

export default page
