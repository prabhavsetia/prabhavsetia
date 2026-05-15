"use client";

import { motion } from "framer-motion";
import { aboutContent } from "@/lib/data";
import { staggerContainer, staggerItem } from "@/lib/animations";
import SectionWrapper from "@/components/ui/section-wrapper";

export default function About() {
  return (
    <section className="bg-bg-primary" id="about" style={{ padding: "clamp(80px, 12vh, 140px) 0" }}>
      <div className="max-w-[1200px] mx-auto" style={{ padding: "0 clamp(24px, 4vw, 40px)" }}>
        <SectionWrapper>
          <div className="section-label"><span>About</span></div>
        </SectionWrapper>

        <SectionWrapper delay={0.1}>
          <h2 className="font-heading font-normal leading-[1.15] mb-6" style={{ fontSize: "clamp(32px, 4vw, 48px)" }}>
            Building systems that<br />work smarter, not harder
          </h2>
        </SectionWrapper>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-12">
          <div className="space-y-6">
            {aboutContent.paragraphs.map((p, i) => (
              <SectionWrapper key={i} delay={0.1 * (i + 1)}>
                <p className="text-[15px] text-text-secondary leading-[1.8]">{p}</p>
              </SectionWrapper>
            ))}
          </div>

          <motion.div
            className="grid-container cols-2"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {aboutContent.stats.map((stat, i) => (
              <motion.div key={i} variants={staggerItem} className="grid-cell" style={{ padding: 28 }}>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
