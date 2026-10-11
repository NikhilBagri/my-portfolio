"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

/* Orange ring follows mouse (desktop only).
   Grows over links/buttons. Shows "PLAY" over data-cursor="play". */
export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [mode, setMode] = useState("default"); // default | hover | play
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 40 });
  const sy = useSpring(y, { stiffness: 500, damping: 40 });

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return; // skip touch devices
    setEnabled(true);
    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const target = e.target.closest?.("[data-cursor], a, button");
      setMode(!target ? "default" : target.dataset.cursor === "play" ? "play" : "hover");
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  if (!enabled) return null;
  const size = mode === "play" ? 90 : mode === "hover" ? 50 : 22;

  return (
    <motion.div style={{ x: sx, y: sy }} className="pointer-events-none fixed left-0 top-0 z-[999]">
      <motion.div
        animate={{ width: size, height: size }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className={`flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full ${
          mode === "play" ? "bg-accent text-cream" : "border-2 border-accent"
        }`}
      >
        {mode === "play" && <span className="text-xs font-bold tracking-widest">PLAY</span>}
      </motion.div>
    </motion.div>
  );
}
