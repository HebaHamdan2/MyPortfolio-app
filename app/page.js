import { AboutSection } from "./components/AboutSection.jsx";
import HeroSection from "./components/HeroSection.jsx";
import { Navbar } from "./components/Navbar.jsx";
import { ProjectsSection } from "./components/ProjectsSection.jsx";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div class="container mt-24  mx-auto py-4 px-12">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
      </div>
    </main>
  );
}
