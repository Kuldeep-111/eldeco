"use client"
import React from 'react'
import ProjectCard from '../../common/cards/ProjectCard'
import { ProjectCardType } from '../../types/projectCardType';
import FilterWrapper from './FilterWrapper';

interface ProjectsProps {
  data: ProjectCardType[];
  platter: string;
}

const Projects: React.FC<ProjectsProps> = ({ data , platter}) => {
  return (
    <section className='bg-[var(--background)] py-[80px] md:py-[100px]'>
      <div className="wrapper">
        {/* filter */}
        <FilterWrapper name={platter}/>

        {/* ptojets card */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[50px]">
        {data.map((item, index) => (
          <ProjectCard key={index} data={item} />
        ))}
      </div>
      </div>
    </section>
  )
}

export default Projects
