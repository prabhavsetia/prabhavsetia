"use client";

import { motion } from "framer-motion";
import { experience } from "@/lib/data";
import { staggerContainer, staggerItem } from "@/lib/animations";
import SectionWrapper from "@/components/ui/section-wrapper";

export default function Experience() {
  return (
    <section className="bg-bg-secondary" id="experience" style={{ padding: "clamp(80px, 12vh, 140px) 0" }}>
      <div className="max-w-[1200px] mx-auto" style={{ padding: "0 clamp(24px, 4vw, 40px)" }}>
        <SectionWrapper>
          <div className="section-label"><span>Experience</span></div>
        </SectionWrapper>
        <SectionWrapper delay={0.1}>
          <h2 className="font-heading font-normal leading-[1.15] mb-3" style={{ fontSize: "clamp(32px, 4vw, 48px)" }}>
            My professional journey
          </h2>
        </SectionWrapper>
        <SectionWrapper delay={0.2}>
          <p className="text-[15px] text-text-secondary max-w-[600px] mb-14">
            From full-stack developer to engineering lead — building progressively more impactful systems at enterprise scale.
          </p>
        </SectionWrapper>

        <motion.div className="timeline mt-14" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>
          {experience.map((entry, i) => (
            <motion.div key={i} variants={staggerItem} className="relative pb-14 last:pb-0">
              <div className={`timeline-dot ${entry.isCurrent ? "current" : ""}`} />
              {entry.isCurrent && (
                <span className="inline-block px-3 py-1 bg-accent text-white text-xs font-semibold tracking-[0.5px] uppercase mb-3">
                  Current Role
                </span>
              )}
              <div className="text-sm text-text-tertiary font-medium mb-1">{entry.dateRange}</div>
              <h3 className="font-heading text-xl text-text-primary mb-1">{entry.role}</h3>
              <p className="text-sm text-accent-light font-medium mb-4">{entry.company}</p>
              <ul className="space-y-2 list-none">
                {entry.highlights.map((h, j) => (
                  <li key={j} className="relative text-sm text-text-secondary leading-[1.7] pl-4" style={{ paddingLeft: 16 }}>
                    <span className="absolute left-0 top-[10px] w-1.5 h-1.5 rounded-full bg-accent-light" />
                    {h}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
