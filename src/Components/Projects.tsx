'use client'
import React from 'react'
import ProjectCard from './ProjectCard';

export default function Projects() {
  

  return (
    <div className='flex text-slate-50 h-1/2 w-full justify-evenly flex-wrap flex-auto'>
      <ProjectCard/>
      <ProjectCard/>
      <ProjectCard/>    
      <ProjectCard/>    
      <ProjectCard/>    
      <ProjectCard/>    
    </div>
  )
}
