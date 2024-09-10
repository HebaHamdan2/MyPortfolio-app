"use client"
import { useEffect, useState } from "react";
import { AboutSection } from "./components/AboutSection.jsx";
import { EmailSection } from "./components/EmailSection.jsx";
import { Footer } from "./components/Footer.jsx";
import HeroSection from "./components/HeroSection.jsx";
import { Navbar } from "./components/Navbar.jsx";
import { ProjectsSection } from "./components/ProjectsSection.jsx";
import Loading from "./components/loading.js";


export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); 
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
      <main className="flex min-h-screen flex-col bg-[#121212]">
    <Navbar />
    <div className="container mt-24  mx-auto py-4 px-12">
   
    <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <EmailSection/>
 </div>
     
    <Footer/>
  </main>
 
  );
}
