"use client"
import React from 'react'
import ProjectCard from '../../common/cards/ProjectCard'
import { ProjectCardType } from '../../types/projectCardType';

interface ProjectsProps {
  data: ProjectCardType[];
}

const Projects: React.FC<ProjectsProps> = ({ data }) => {
  return (
    <section className='bg-[var(--background)] py-[80px] md:py-[100px]'>
      <div className="wrapper">

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
