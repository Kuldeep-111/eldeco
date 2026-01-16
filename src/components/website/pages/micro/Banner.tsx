import Image from 'next/image'
import React from 'react'

const Banner = () => {
  return (
    <section className='w-full h-screen bg-[var(--background)] pt-[100px]'>
        <div className='relative w-full h-full'>
            <Image src="/images/micro/svg.png" alt='banner' fill className='object-cover opacity-20'/>
        </div>
      
    </section>
  )
}

export default Banner
