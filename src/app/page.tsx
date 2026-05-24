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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Prabhav Setia",
  url: "https://prabhavsetia.com",
  jobTitle: "Software Engineer",
  worksFor: {
    "@type": "Organization",
    name: "Accenture",
  },
  description:
    "Software Engineer specializing in AI-powered enterprise automation, full-stack platforms, and workflow systems.",
  sameAs: [
    "https://linkedin.com/in/prabhavsetia",
    "https://github.com/prabhavsetia",
  ],
  knowsAbout: [
    "React.js",
    "Node.js",
    "TypeScript",
    "Python",
    "AI Automation",
    "LangChain",
    "Full-Stack Development",
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Chandigarh University",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bengaluru",
    addressCountry: "IN",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
