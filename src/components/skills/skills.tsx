"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/lib/data";
import { staggerContainer, staggerItem } from "@/lib/animations";
import SectionWrapper from "@/components/ui/section-wrapper";

export default function Skills() {
  return (
    <section id="skills" style={{ padding: "clamp(80px, 12vh, 140px) 0" }}>
      <div className="max-w-[1200px] mx-auto" style={{ padding: "0 clamp(24px, 4vw, 40px)" }}>
        <SectionWrapper>
          <div className="section-label"><span>Skills</span></div>
        </SectionWrapper>
        <SectionWrapper delay={0.1}>
          <h2 className="font-heading font-normal leading-[1.15] mb-3" style={{ fontSize: "clamp(32px, 4vw, 48px)" }}>
            Technologies I work with
          </h2>
        </SectionWrapper>
        <SectionWrapper delay={0.2}>
          <p className="text-[15px] text-text-secondary max-w-[600px] mb-12">
            Tools and technologies I use to build enterprise-grade systems.
          </p>
        </SectionWrapper>

        <motion.div
          className="grid-container cols-2"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {skillCategories.map((category) => (
            <motion.div key={category.name} variants={staggerItem} className="skill-card grid-cell relative group">
              <div className="relative z-[1]">
                <h3 className="font-heading italic text-[26px] text-text-primary leading-[1.2] mb-7">
                  {category.name}
                </h3>
                <div className="skill-divider" />
                <div className="grid grid-cols-2 gap-0">
                  {category.items.map((item) => (
                    <div key={item} className="skill-item">{item}</div>
                  ))}
                </div>
              </div>
              <div className="skill-sweep" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
