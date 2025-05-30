"use client"
import React, { useState, useRef } from 'react'
import { ProjectCard } from './ProjectCard.jsx';
import { ProjectTag } from './ProjectTag.jsx';
import { motion } from "framer-motion"
const projectsData = [

  
  {
    id: 2,
    title: "ECG Analyzer",
    description: "Web application developed as part of my bachelor's degree project, predicts heart diseases from uploaded electrocardiogram images using ResNet50, a deep learning model with 94.84% accuracy.",
    image: "/images/projects/ECGAnalyzer.png",
    tag: ["All", "Full Stack"],
    gitUrl: "https://github.com/HebaHamdan2/Developing-an-ECG-Analyzer-System-using-AI-in-Palestine",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Draw Insight",
    description: "Web application designed to provide parents with insights into their children's psychological health through analysis of their drawings, powered by a highly accurate model with 95.99% precision.",
    image: "/images/projects/DrawInsight.png",
    tag: ["All", "Full Stack"],
    gitUrl: "https://github.com/HebaHamdan2/Draw-Insight-app",
    previewUrl: "https://www.linkedin.com/posts/heba-hamdan2_after-months-of-hard-work-im-thrilled-to-activity-7286664108307795968-XKPV?utm_source=share&utm_medium=member_desktop",
  },
  {
    id: 4,
    title: "E-commerce",
    description: "A modern, responsive e-commerce web application built with React (Vite + TypeScript) for the frontend and Node.js (Express.js) for the backend. The app integrates AuthContext for secure user authentication, Redux Toolkit for state management (specifically the cart functionality), and RTK Query for optimized API calls. The UI is styled using Tailwind CSS and DaisyUI for a clean, customizable design. ",
    image: "/images/projects/e-commerce.png",
    tag: ["All", "Full Stack"],
    gitUrl: "https://github.com/HebaHamdan2/E-commerce-app",
    previewUrl: "https://ecommerce-app-heba.netlify.app/",
  },

  {
    id: 1,
    title: "Portfolio",
    description: "Welcome to my professional portfolio, crafted with Next.js 14 for a polished, interactive experience. Explore my career journey, including detailed insights into my skills, achievements, and projects.",
    image: "/images/projects/portfolioProj.png",
    tag: ["All", "Full Stack"],
    gitUrl: "https://github.com/HebaHamdan2/portfolio",
    previewUrl: "https://hebahamdan.vercel.app/",
  },
  // {
  //   id: 6,
  //   title: "My Personal Blog using Nextjs",
  //   description: "Welcome to my blog, built with Next.js! This project includes an admin dashboard for easy management of posts. Admin users can effortlessly add and delete articles across lifestyle, technology, and startup topics.",
  //   image: "/images/projects/blogApp.png",
  //   tag: ["All", "Full Stack"],
  //   gitUrl: "https://github.com/HebaHamdan2/MyPersonalBlog-App",
  //   previewUrl: "https://hebablogsapp-hebas-projects-a9daf66d.vercel.app/",
  // },
  
  {
    id: 5,
    title: "Movify",
    description: "Web application for exploring movies and TV shows, featuring trending and upcoming content, detailed information, trailers, ratings, and images. Includes login functionality for managing favorites and watch lists.",
    image: "/images/projects/movify.png",
    tag: ["All", "Full Stack"],
    gitUrl: "https://github.com/HebaHamdan2/movify",
    previewUrl: "/",
  },
  {
    id: 7,
    title: "Chatvia",
    description: "real-time chat application that enables users to chat with each other and see who is online after signing up or logging in.User accounts are personalized with unique usernames and avatars based on gender and name.",
    image: "/images/projects/chatvia.png",
    tag: ["All", "Full Stack"],
    gitUrl: "https://github.com/HebaHamdan2/Chatvia-MERN",
    previewUrl: "https://chatvia-mern.onrender.com/",
  },

  // {
  //   id: 7,
  //   title: "Evaluate news article",
  //   description: "Single-page app for the Udacity Nanodegree analyzes the sentiment of news articles from a URL using the MeaningCloud API.",
  //   image: "/images/projects/evaluateNewsArticle.png",
  //   tag: ["All", "Frontend"],
  //   gitUrl: "https://github.com/HebaHamdan2/evaluate-a-news-article-with-NLP",
  //   previewUrl: "/",
  // },
  // {
  //   id: 8,
  //   title: "Travel Planner",
  //   description:"Single-page app for the Udacity Nanodegree to manage trips. It provides weather updates using Geonames and Weatherbit APIs and fetches destination images via the Pixabay API.",
  //   image: "/images/projects/travelPlanner.png",
  //   tag: ["All", "Frontend"],
  //   gitUrl: "https://github.com/HebaHamdan2/travel-planner-app",
  //   previewUrl: "/",
  // },
  // {
  //   id: 9,
  //   title: "Coffe Shop",
  //   description: " Website that provides information about the coffee shop, its history, popular products, customer opinions and ratings. Users can also add and remove products from their cart.",
  //   image: "/images/projects/coffeeShop.png",
  //   tag: ["All", "Frontend"],
  //   gitUrl: "https://github.com/HebaHamdan2/coffee-shop",
  //   previewUrl: "https://coffeeshopheba.netlify.app/",
  // },
  // {
  //   id: 10,
  //   title: "Sociala.",
  //   description: "Home page for a social media clone built with Bootstrap, HTML, CSS, and jQuery.",
  //   image: "/images/projects/Sociala.png",
  //   tag: ["All", "Frontend"],
  //   gitUrl: "https://github.com/HebaHamdan2/Sociala.",
  //   previewUrl: "/",
  // },
  // {
  //   id: 11,
  //   title: "Eduma",
  //   description: "Education website clone built with Bootstrap, HTML, CSS, and jQuery.",
  //   image: "/images/projects/eduma.png",
  //   tag: ["All", "Frontend"],
  //   gitUrl: "https://github.com/HebaHamdan2/Eduma",
  //   previewUrl: "https://eduma-hebahamdan.netlify.app/",
  // },
  // {
  //   id: 12,
  //   title: "E-commerce node js api",
  //   description: "",
  //   image: "/images/projects/ecommerce.png",
  //   tag: [ "Backend"],
  //   gitUrl: "https://github.com/HebaHamdan2/ecommerce",
  //   previewUrl: "https://documenter.getpostman.com/view/28559046/2s9YRB4D3y",
  // },
  // {
  //   id: 13,
  //   title: "Photographer Booking node js api",
  //   description: "",
  //   image: "/images/projects/photographerBooking.png",
  //   tag: [ "Backend"],
  //   gitUrl: "https://github.com/HebaHamdan2/Photographer-Booking-Nodejs",
  //   previewUrl: "https://documenter.getpostman.com/view/28559046/2s9YkrZyf9",
  // },
  // {
  //   id: 14,
  //   title: "Saraha node js api",
  //   description: "",
  //   image: "/images/projects/saraha.png",
  //   tag: ["Backend"],
  //   gitUrl: "https://github.com/HebaHamdan2/saraha",
  //   previewUrl: "https://documenter.getpostman.com/view/28559046/2s9YJaZQGg",
  // },
  // {
  //   id: 15,
  //   title: "Upvote node js api",
  //   description: "",
  //   image: "/images/projects/upvote.png",
  //   tag: [ "Backend"],
  //   gitUrl: "https://github.com/HebaHamdan2/upvote",
  //   previewUrl: "/",
  // },
  // {
  //   id: 16,
  //   title: "EveryDay Flowers Blog",
  //   description: "Beautifully designed, responsive blog built entirely with HTML and CSS.",
  //   image: "/images/projects/EveryDayFLowers.png",
  //   tag: ["All", "Frontend"],
  //   gitUrl: "https://github.com/HebaHamdan2/EverydayFlowers-Blog",
  //   previewUrl: "https://everydayflowersblog.netlify.app/",
  // },
 

];

export const ProjectsSection = () => {
  const [tag, setTag] = useState('Full Stack');
  const ref = useRef(null);
  const isInView = (ref, { once: true });
  const handleTagChange = (newTag) => {
    setTag(newTag);
  }
  const filterProjects = projectsData.filter((project) =>
    project.tag.includes(tag))

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };


  return (
    <section id="projects">
      <h2 className="text-center text-3xl font-bold text-white mt-4 mb-8 md:mb-6">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        {/* <ProjectTag onClick={handleTagChange} name="All" isSelected={tag === 'All'} /> */}
        <ProjectTag onClick={handleTagChange} name="Full Stack" isSelected={tag === 'Full Stack'} />
        {/* <ProjectTag onClick={handleTagChange} name="Frontend" isSelected={tag === 'Frontend'} />
        <ProjectTag onClick={handleTagChange} name="Backend" isSelected={tag === 'Backend'} /> */}
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filterProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>

  );
}
