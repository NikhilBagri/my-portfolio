"use client";
import { motion, useScroll, useSpring } from "motion/react";

// Orange reading-progress bar at top of page
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 25 });
  return <motion.div style={{ scaleX }} className="fixed inset-x-0 top-0 z-[60] h-1 origin-left bg-accent" />;
}
