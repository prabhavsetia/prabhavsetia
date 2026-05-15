"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Project } from "@/lib/data";

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!project) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="modal"
            initial={{ scale: 0.95, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={onClose} className="modal-close" aria-label="Close modal">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.5" strokeLinecap="square">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>

            <div className="modal-header">
              <div className="modal-badge">★ {project.modal.badge}</div>
              <h3 className="modal-title">{project.name}</h3>
              <div className="modal-header-line" />
            </div>

            <div className="modal-section">
              <div className="section-eyebrow"><span>The Problem</span></div>
              <p className="section-text">{project.modal.problem}</p>
            </div>

            <div className="modal-section">
              <div className="section-eyebrow"><span>The Approach</span></div>
              <p className="section-text">{project.modal.approach}</p>
            </div>

            <div className="impact-section">
              <div className="impact-eyebrow">
                <span>{project.isFeatured ? "Impact" : "Key Features"}</span>
              </div>
              <div className="impact-strip">
                {project.modal.impactMetrics.map((m, i) => (
                  <div key={i} className="impact-cell">
                    <div className="impact-value">{m.value}</div>
                    <div className="impact-label">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="tech-section">
              <div className="tech-eyebrow"><span>Tech Stack</span></div>
              <div className="flex flex-wrap gap-2" style={{ paddingLeft: 26 }}>
                {project.modal.techStack.map((tag) => (
                  <span key={tag} className="modal-tag">{tag}</span>
                ))}
              </div>
            </div>

            {project.links && project.links.length > 0 && (
              <div className="modal-footer">
                {project.links.map((link, i) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={i === 0 ? "modal-link-primary" : "modal-link-secondary"}
                  >
                    {link.label} {i === 0 ? "↗" : ""}
                  </a>
                ))}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
