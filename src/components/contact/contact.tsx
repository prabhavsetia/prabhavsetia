"use client";

import { motion } from "framer-motion";
import { contactLinks } from "@/lib/data";
import { staggerContainer, staggerItem } from "@/lib/animations";
import SectionWrapper from "@/components/ui/section-wrapper";

export default function Contact() {
  return (
    <section className="bg-bg-secondary text-center" id="contact" style={{ padding: "clamp(80px, 12vh, 140px) 0" }}>
      <div className="max-w-[1200px] mx-auto" style={{ padding: "0 clamp(24px, 4vw, 40px)" }}>
        <SectionWrapper>
          <div className="section-label justify-center"><span>Contact</span></div>
        </SectionWrapper>
        <SectionWrapper delay={0.1}>
          <h2 className="font-heading font-normal italic leading-[1.3] mb-6" style={{ fontSize: "clamp(28px, 4vw, 48px)" }}>
            Let&apos;s build something together
          </h2>
        </SectionWrapper>
        <SectionWrapper delay={0.2}>
          <p className="text-[15px] text-text-secondary max-w-[500px] mx-auto mb-12">
            Always open to interesting conversations, collaboration opportunities, or just saying hello.
          </p>
        </SectionWrapper>

        <motion.div
          className="flex gap-4 justify-center flex-wrap"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {contactLinks.map((link) => (
            <motion.a
              key={link.label}
              variants={staggerItem}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="contact-link"
            >
              {link.label}
            </motion.a>
          ))}
        </motion.div>
      </div>

      <div className="mt-20 pt-6 text-center" style={{ borderTop: "1px solid var(--border-light)" }}>
        <p className="text-[13px] text-text-tertiary">
          Designed & built by Prabhav Setia
        </p>
      </div>
    </section>
  );
}
