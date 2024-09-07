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
        <li>2020 - 2024 Bachelor of Computer Systems Engineering <br />
          Palestine Technical University – Kadoorie
          <br />
          Tulkarm, Palestine</li>
        <br />
        <li>2019 - 2020 Tawjihi (Scientific Stream) <br />
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
        <li>Object-Oriented Programming</li><br />
        <li>Data Structures & Algorithms & Problem Solving</li><br />
        <li>Programming Languages: C++, Java, JavaScript </li><br />
        <li>Frontend Development: React.js, HTML,
          CSS, Bootstrap, Tailwind</li><br />
        <li>Backend Development: Node.js, Express.js, Sequelize</li><br />
        <li>NoSQL Databases: MongoDB,  SQL Databases: Oracle, MySQL</li><br />
        <li>API Testing: Postman</li><br />
        <li>Version Control: Git, GitHub</li><br />
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Front-end with React from Knowledge Academy </li><br />
        <li>Back-end with Nodejs from Knowledge Academy</li><br />
        <li>Front End Web Developer from Udacity</li><br />
        <li>Python for Data Science and Machine Learning from Udemy</li><br />
        <li>50 Days Badge 2024 from LeetCode</li><br />
        <li>100 Days Badge 2024 from LeetCode</li>
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

  return <section className='text-white'>
    <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <Image
        src="/images/IMG_0999.jpg"
        width={400}
        height={400}
        alt="heba"
      />
      <div className='mt-4 md:mt-0 text-left flex flex-col h-full '>
        <h2 className='text-4xl font-bold text-white mb-4'>About me</h2>
        <p className='text-base lg:text-lg '>
        I am a Computer Systems Engineer with a strong foundation in Object-Oriented Programming (OOP) 
and expertise in both frontend and backend web development. Skilled in algorithms, data 
structures, and problem-solving, I am committed to continuous learning and eager to contribute to 
a dynamic and innovative environment
        </p>
        <div className="flex flex-row justify-start mt-8">
       
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
