"use client"
import React, { useState } from 'react'
import { ProjectCard } from './ProjectCard.jsx';
import { ProjectTag } from './ProjectTag.jsx';
const projectsData = [
  {
    id: 1,
    title: "ECG Analyzer Application",
    description: "Project 1 description",
    image: "/images/projects/ECGAnalyzer.png",
    tag: ["All", "Full Stack"],
    gitUrl: "https://github.com/HebaHamdan2/Developing-an-ECG-Analyzer-System-using-AI-in-Palestine",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Chatvia app",
    description: "Project 2 description",
    image: "/images/projects/chatvia.png",
    tag: ["All", "Full Stack"],
    gitUrl: "https://github.com/HebaHamdan2/Chatvia-MERN",
    previewUrl: "https://chatvia-mern.onrender.com/",
  },
  {
    id: 3,
    title: "Movify Application",
    description: "Project 3 description",
    image: "/images/projects/movify.png",
    tag: ["All", "Full Stack"],
    gitUrl: "https://github.com/HebaHamdan2/movify",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Evaluate news article Application",
    description: "Project 4 description",
    image: "/images/projects/evaluateNewsArticle.png",
    tag: ["All", "Frontend"],
    gitUrl: "https://github.com/HebaHamdan2/evaluate-a-news-article-with-NLP",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Saraha node js api",
    description: "Authentication and CRUD operations",
    image: "/images/projects/saraha.png",
    tag: ["All", "Backend"],
    gitUrl: "https://github.com/HebaHamdan2/saraha",
    previewUrl: "/",
  },
  // {
  //   id: 6,
  //   title: "Full-stack Roadmap",
  //   description: "Project 5 description",
  //   image: "/images/projects/6.png",
  //   tag: ["All", "Web"],
  //   gitUrl: "/",
  //   previewUrl: "/",
  // },
];

export const ProjectsSection = () => {
  const [tag,setTag]=useState('All');
  const handleTagChange=(newTag)=>{
    setTag(newTag);
  }
  const filterProjects=projectsData.filter((project)=>
    project.tag.includes(tag))

  return (
<>
<h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12'>My Projects</h2>
<div className="text-white flex flex-row justify-center items-center gap-2 py-6 ">

<ProjectTag onClick={handleTagChange} name="All" isSelected={tag==='All'} />
<ProjectTag onClick={handleTagChange} name="Full Stack" isSelected={tag==='Full Stack'} />
<ProjectTag onClick={handleTagChange} name="Frontend" isSelected={tag==='Frontend'} />
<ProjectTag onClick={handleTagChange} name="Backend" isSelected={tag==='Backend'} />
</div>
<div className='grid md:grid-cols-3 gap-8 md:gap-12'>{filterProjects.map((project)=><ProjectCard key={project.id} title={project.title} description={project.description} imgUrl={project.image} gitUrl={project.gitUrl} previewUrl={project.previewUrl} />)}</div>
</>
  )
}
