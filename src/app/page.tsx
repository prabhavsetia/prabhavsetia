import Navbar from "@/components/nav/navbar";
import Hero from "@/components/hero/hero";
import About from "@/components/about/about";
import Experience from "@/components/experience/timeline";
import ProjectGrid from "@/components/projects/project-grid";
import Skills from "@/components/skills/skills";
import Contact from "@/components/contact/contact";
import CustomCursor from "@/components/ui/custom-cursor";
import ScrollProgress from "@/components/ui/scroll-progress";
import ChatButton from "@/components/chat/chat-button";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <ProjectGrid />
        <Skills />
        <Contact />
      </main>
      <ChatButton />
    </>
  );
}
