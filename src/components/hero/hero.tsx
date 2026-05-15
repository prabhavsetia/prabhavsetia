"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";
import { staggerContainer, staggerItem } from "@/lib/animations";
import MagneticButton from "@/components/ui/magnetic-button";

export default function Hero() {
  const [displayText, setDisplayText] = useState("");
  const wordIdx = useRef(0);
  const charIdx = useRef(0);
  const deleting = useRef(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(null);

  const typeLoop = useCallback(() => {
    const words = personalInfo.roles;
    const word = words[wordIdx.current];
    if (!deleting.current) {
      setDisplayText(word.substring(0, charIdx.current + 1));
      charIdx.current++;
      if (charIdx.current === word.length) {
        deleting.current = true;
        timeoutRef.current = setTimeout(typeLoop, 2000);
        return;
      }
      timeoutRef.current = setTimeout(typeLoop, 80);
    } else {
      setDisplayText(word.substring(0, charIdx.current));
      charIdx.current--;
      if (charIdx.current < 0) {
        deleting.current = false;
        charIdx.current = 0;
        wordIdx.current = (wordIdx.current + 1) % words.length;
        timeoutRef.current = setTimeout(typeLoop, 400);
        return;
      }
      timeoutRef.current = setTimeout(typeLoop, 40);
    }
  }, []);

  useEffect(() => {
    typeLoop();
    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
  }, [typeLoop]);

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden text-center" style={{ padding: "0 clamp(24px, 6vw, 80px)" }}>
      <div className="absolute w-[500px] h-[500px] rounded-full pointer-events-none" style={{ filter: "blur(150px)", background: "var(--color-accent)", opacity: 0.12, top: "-200px", right: "-100px" }} />
      <div className="absolute w-[400px] h-[400px] rounded-full pointer-events-none" style={{ filter: "blur(150px)", background: "#8B5CF6", opacity: 0.08, bottom: "-200px", left: "-200px" }} />
      <div className="absolute w-[600px] h-[600px] rounded-full pointer-events-none" style={{ filter: "blur(150px)", background: "var(--color-accent-light)", opacity: 0.05, top: "50%", left: "50%", transform: "translate(-50%, -50%)" }} />

      <motion.div className="max-w-[1200px] mx-auto w-full" variants={staggerContainer} initial="hidden" animate="visible">
        <motion.h1 variants={staggerItem} className="font-heading font-normal leading-[1.05] tracking-[-2px] text-text-primary mb-5" style={{ fontSize: "clamp(56px, 8vw, 120px)" }}>
          {personalInfo.name}
        </motion.h1>
        <motion.p variants={staggerItem} className="font-body font-normal text-text-secondary mb-12 min-h-[40px]" style={{ fontSize: "clamp(18px, 2vw, 24px)" }}>
          I&apos;m a{" "}
          <span className="text-accent font-semibold" style={{ borderRight: "2px solid var(--color-accent)", paddingRight: 4, animation: "blink 1s step-end infinite" }}>
            {displayText}
          </span>
        </motion.p>
        <motion.div variants={staggerItem} className="flex gap-4 justify-center flex-wrap">
          <MagneticButton className="btn-primary" onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>Explore My Work</MagneticButton>
          <MagneticButton className="btn-secondary" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>Say Hello</MagneticButton>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-tertiary text-xs tracking-widest animate-bounce">
        <span>Scroll</span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12l7 7 7-7" /></svg>
      </div>
    </section>
  );
}
