"use client";

import { motion, useScroll } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 h-[2px] z-[9100]"
      style={{
        scaleX: scrollYProgress,
        transformOrigin: "0%",
        background: "linear-gradient(90deg, var(--color-accent), var(--color-accent-light))",
        boxShadow: "0 0 12px var(--color-accent-glow)",
      }}
    />
  );
}
