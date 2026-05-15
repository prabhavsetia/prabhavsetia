"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);
  const mouse = useRef({ x: 0, y: 0 });
  const cursor = useRef({ x: 0, y: 0 });
  const trail = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (window.matchMedia("(max-width: 768px)").matches) return;

    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    const hoverables = document.querySelectorAll(
      "a, button, .project-card, .stat-card, .skill-card, .skill-item, .contact-link, input, label"
    );
    const enter = () => setHovering(true);
    const leave = () => setHovering(false);
    hoverables.forEach((el) => {
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
    });

    let raf: number;
    const animate = () => {
      cursor.current.x += (mouse.current.x - cursor.current.x) * 0.15;
      cursor.current.y += (mouse.current.y - cursor.current.y) * 0.15;
      trail.current.x += (mouse.current.x - trail.current.x) * 0.08;
      trail.current.y += (mouse.current.y - trail.current.y) * 0.08;

      if (cursorRef.current) {
        cursorRef.current.style.left = `${cursor.current.x}px`;
        cursorRef.current.style.top = `${cursor.current.y}px`;
      }
      if (trailRef.current) {
        trailRef.current.style.left = `${trail.current.x}px`;
        trailRef.current.style.top = `${trail.current.y}px`;
      }
      raf = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      hoverables.forEach((el) => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      });
      cancelAnimationFrame(raf);
    };
  }, [visible]);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed z-[9999] pointer-events-none -translate-x-1/2 -translate-y-1/2 mix-blend-exclusion hidden md:block"
        style={{
          width: hovering ? 48 : 16,
          height: hovering ? 48 : 16,
          borderRadius: "50%",
          background: hovering ? "rgba(229, 72, 77, 0.4)" : "var(--color-accent)",
          opacity: visible ? 1 : 0,
          transition: "width 0.3s cubic-bezier(0.16,1,0.3,1), height 0.3s cubic-bezier(0.16,1,0.3,1), background 0.3s, opacity 0.3s",
          mixBlendMode: hovering ? "normal" : "exclusion",
        }}
      />
      <div
        ref={trailRef}
        className="fixed z-[9998] pointer-events-none -translate-x-1/2 -translate-y-1/2 hidden md:block"
        style={{
          width: 6,
          height: 6,
          borderRadius: "50%",
          background: "var(--color-accent-light)",
          opacity: visible ? 0.4 : 0,
          transition: "opacity 0.4s",
        }}
      />
    </>
  );
}
