"use client";

import { useEffect, useState } from "react";
import { personalInfo } from "@/lib/data";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = document.querySelectorAll("section[id]");
      let current = "";
      sections.forEach((section) => {
        if (window.scrollY >= (section as HTMLElement).offsetTop - 200) {
          current = section.id;
        }
      });
      setActiveSection(current);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="font-heading text-[22px] text-text-primary tracking-[-0.5px]">
        {personalInfo.initials}<span className="text-accent">.</span>
      </div>

      <ul className="hidden md:flex gap-8 list-none">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className={`nav-link ${activeSection === link.href.slice(1) ? "active" : ""}`}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <button
        className="md:hidden flex flex-col gap-1.5 p-2 bg-transparent border-none"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className={`block w-6 h-[2px] bg-text-primary transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-[5px]" : ""}`} />
        <span className={`block w-6 h-[2px] bg-text-primary transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`} />
        <span className={`block w-6 h-[2px] bg-text-primary transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-[5px]" : ""}`} />
      </button>

      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-bg-primary/95 backdrop-blur-[20px] md:hidden" style={{ borderBottom: "1px solid var(--border-color)" }}>
          <ul className="flex flex-col p-6 gap-4 list-none">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-text-secondary text-lg font-medium hover:text-text-primary transition-colors" onClick={() => setMenuOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
