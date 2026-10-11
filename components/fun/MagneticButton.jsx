"use client";
import { useRef } from "react";
import { motion, useSpring } from "motion/react";

/** Link that pulls toward cursor. strength 0–1 = pull amount */
export default function MagneticButton({ href, children, className = "", strength = 0.35 }) {
  const ref = useRef(null);
  const x = useSpring(0, { stiffness: 200, damping: 15, mass: 0.4 });
  const y = useSpring(0, { stiffness: 200, damping: 15, mass: 0.4 });

  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  };
  const reset = () => { x.set(0); y.set(0); };

  return (
    <motion.a ref={ref} href={href} onMouseMove={onMove} onMouseLeave={reset} style={{ x, y }}
      className={`inline-flex items-center gap-2 transition-colors ${className}`}>
      {children}
    </motion.a>
  );
}
