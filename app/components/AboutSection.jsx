"use client"
import Image from 'next/image.js'
import React, { startTransition, useState, useTransition } from 'react'
import { TabButton } from './TabButton.jsx'
const TAB_DATA = [
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li> <strong className='pr-2'> 2020 - 2024 </strong> Bachelor of Computer Systems Engineering <br />
          Palestine Technical University – Kadoorie
          <br />
          Tulkarm, Palestine</li>
        <br />
        <li> <strong className='pr-2'>2019 - 2020</strong>  Tawjihi (Scientific Stream) <br />
          AL-Shayma’ School
          <br />
          Qalqilya,Palestine</li>
      </ul>
    ),
  },
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li className='py-1'>Programming Languages: C++, Java, JavaScript </li>
        <li className='py-1'>Frontend Development: React.js, HTML,
          CSS, Bootstrap, Tailwind</li>
        <li className='py-1'>Backend Development: Node.js, Express.js, Sequelize</li>
        <li className='py-1'>NoSQL Databases: MongoDB , SQL Databases: Oracle, MySQL</li>
        <li className='py-1'>API Testing: Postman</li>
        <li className='py-1'> Version Control: Git, GitHub</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li className='py-1'>Front-end with React from Knowledge Academy </li>
        <li className='py-1'>Back-end with Nodejs from Knowledge Academy</li>
        <li className='py-1'>Front End Web Developer from Udacity</li>
        <li className='py-1'>Python for Data Science and Machine Learning from Udemy</li>
        <li className='py-1'>100 Days Badge 2024 from LeetCode</li>
      </ul>
    ),
  },
];

export const AboutSection = () => {
  const [tab, setTab] = useState("education");
  const [isPending, startTransaction] = useTransition();
  const handelTabChange = (id) => {
    startTransaction(() => {
      setTab(id);
      
    })
  }

  return <section className='text-white' id="about">
    <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <Image
        src="/images/IMG_0999.jpg"
        width={350}
        height={350}
        alt="heba"
      />
      <div className='mt-4 md:mt-0 text-left flex flex-col h-full '>
        <h2 className='text-3xl font-bold text-white mt-2 mb-4'>About me</h2>
        <p className='text-base  lg:text-lg'>
        I am a Computer Systems Engineer with expertise in both frontend and backend web development. Beyond this, I am passionate about problem-solving and committed to organizing and scheduling tasks accurately, ensuring my work and code are clean, efficient, and well-structured.
          </p>       <div className="flex flex-row justify-start mt-8">

          <TabButton selectTab={() => handelTabChange("education")}
            active={tab === "education"}>
            {" "}
            Education{""}
          </TabButton>
          <TabButton selectTab={() => handelTabChange("skills")}
            active={tab === "skills"}>
            {" "}
            Skills{""}
          </TabButton>
          <TabButton selectTab={() => handelTabChange("certifications")}
            active={tab === "certifications"}>
            {" "}
            Certifications{""}
          </TabButton>
        </div>
        <div className="mt-8">
          {TAB_DATA.find((t) => t.id === tab).content}
        </div>
      </div>
    </div></section>
}
