"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { projects, type Project } from "@/lib/data";
import { staggerContainer, staggerItem } from "@/lib/animations";
import SectionWrapper from "@/components/ui/section-wrapper";
import ProjectModal from "./project-modal";

function ProjectCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: (p: Project) => void;
}) {
  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  };

  return (
    <motion.div
      variants={staggerItem}
      className="project-card grid-cell"
      style={{ padding: 36 }}
      onMouseMove={onMouseMove}
      onClick={() => onOpen(project)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") onOpen(project);
      }}
    >
      <div className="spotlight" />

      <div className="relative z-[1]">
        {project.isFeatured && (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-accent text-white text-[11px] font-bold tracking-[0.5px] uppercase mb-4">
            ★ Featured
          </span>
        )}

        <h3 className="font-heading text-[22px] mb-2.5">{project.name}</h3>
        <p className="text-[15px] text-text-secondary leading-[1.7] mb-5">
          {project.description}
        </p>

        {project.metrics && (
          <div className="flex gap-6 mb-5 flex-wrap">
            {project.metrics.map((m, i) => (
              <div key={i}>
                <span className="font-heading text-xl text-accent">{m.value}</span>
                <span className="text-xs text-text-tertiary font-medium ml-1">{m.label}</span>
              </div>
            ))}
          </div>
        )}

        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>

        {project.links && (
          <div className="flex gap-2 mb-3">
            {project.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[13px] text-accent font-semibold"
                onClick={(e) => e.stopPropagation()}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}

        <span className="text-[13px] text-text-tertiary font-medium">
          Click to see details →
        </span>
      </div>
    </motion.div>
  );
}

export default function ProjectGrid() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const closeModal = useCallback(() => setActiveProject(null), []);

  return (
    <section id="projects" style={{ padding: "clamp(80px, 12vh, 140px) 0" }}>
      <div className="max-w-[1200px] mx-auto" style={{ padding: "0 clamp(24px, 4vw, 40px)" }}>
        <SectionWrapper>
          <div className="section-label"><span>Projects</span></div>
        </SectionWrapper>
        <SectionWrapper delay={0.1}>
          <h2 className="font-heading font-normal leading-[1.15] mb-3" style={{ fontSize: "clamp(32px, 4vw, 48px)" }}>
            Things I&apos;ve built
          </h2>
        </SectionWrapper>
        <SectionWrapper delay={0.2}>
          <p className="text-[15px] text-text-secondary max-w-[600px] mb-12">
            Enterprise platforms and personal projects — each one solving a real problem.
          </p>
        </SectionWrapper>

        <motion.div
          className="grid-container cols-2"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} onOpen={setActiveProject} />
          ))}
        </motion.div>
      </div>

      <ProjectModal project={activeProject} onClose={closeModal} />
    </section>
  );
}
