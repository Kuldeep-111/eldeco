"use client"
import React, { useState } from 'react'
import ImageSlider from '../sliders/ImageSlider'
import { ProjectCardType } from '../../types/projectCardType'
import { HiMiniInformationCircle } from "react-icons/hi2"
import { MdArrowOutward } from "react-icons/md"
import { IoMdCloseCircle } from "react-icons/io"
import TransitionLink from '../typography/TransitionLink'
import Pera from '../typography/Pera'
import { MdLocalPhone } from "react-icons/md";
import ExternalLink from '../typography/ExternalLink'

interface ProjectCardProps {
  data: ProjectCardType
}

const ProjectCard: React.FC<ProjectCardProps> = ({ data }) => {
  const [showInfo, setShowInfo] = useState(false)

  const {
    images,
    alt,
    name,
    location,
    subTypology,
    phone,
    rera,
    reraWebsite,
  } = data

  return (
    <div className="relative overflow-hidden">


      {/* Slider */}
      <div className='relative'>

        {/* Info Button */}
        <button
          onClick={() => setShowInfo(true)}
          className="absolute z-[11] top-[10px] right-[10px] 
        w-[40px] h-[40px] rounded-full 
        flex items-center justify-center 
        text-white text-[34px]
        transition-transform duration-300 ease-out
        hover:scale-110 hover:border hover:border-white transition-all"
        >
          <HiMiniInformationCircle />
        </button>
        <ImageSlider images={images} alt={alt} className="h-[400px]" />

        {/* Info Overlay */}
        <div
          className={`
          absolute inset-0 z-[12] bg-white p-[40px]
          transition-all duration-500 ease-out flex flex-col justify-around
          ${showInfo
              ? 'opacity-100 translate-y-0 pointer-events-auto'
              : 'opacity-0 translate-y-[20px] pointer-events-none'}
        `}
        >
          <Pera className="font-semibold md:!text-[24px] text-center upparcase tracking-[1px]">
            {subTypology}
          </Pera>

          <ExternalLink href={`tel:${phone}`} className=" flex w-fit mx-auto items-center justify-center gap-[10px] font-semibold md:!text-[24px] upparcase tracking-[1px] hover:underline"><MdLocalPhone />{phone}</ExternalLink>
          <div className='text-center'>
            <Pera className='tracking-[1px] '>{rera}</Pera>
            <Pera className='mt-[10px] tracking-[1px] '>HARERA Website:</Pera>


            <ExternalLink href={`https://${reraWebsite}`} className='tracking-[1px] block w-fit mx-auto mt-[10px] hover:underline'>
              {reraWebsite}
            </ExternalLink>
          </div>

          {/* Close Button */}
          <button
            onClick={() => setShowInfo(false)}
            className="absolute bottom-[15px] right-[15px] 
          w-[40px] h-[40px] rounded-full
          flex items-center justify-center 
          text-[32px] text-black 
          transition-transform duration-300 ease-out
          hover:scale-110 hover:border hover:border-black transition-all"
          >
            <IoMdCloseCircle />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex items-start justify-between gap-[10px] pt-[20px]">
        <div>
          <Pera className="font-semibold capitalize tracking-[1px]">
            {name}
          </Pera>
          <Pera className="font-light uppercase tracking-[1px] !text-[14px] mt-[5px]">
            {location}
          </Pera>
        </div>

        <TransitionLink
          href="/"
          className="text-[28px] hover:text-[var(--foreground)]"
        >
          <MdArrowOutward />
        </TransitionLink>
      </div>


    </div>
  )
}

export default ProjectCard
