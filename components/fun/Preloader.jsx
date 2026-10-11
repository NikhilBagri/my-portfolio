"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, animate, motion } from "motion/react";
import { site } from "@/data/site";

// 0 → 100 intro. Shows once per browser session.
export default function Preloader() {
  const [show, setShow] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (sessionStorage.getItem("seenPreloader")) { setShow(false); return; }
    const controls = animate(0, 100, {
      duration: 1.4,
      ease: "easeInOut",
      onUpdate: (v) => setCount(Math.round(v)),
      onComplete: () => {
        sessionStorage.setItem("seenPreloader", "1");
        setTimeout(() => setShow(false), 250);
      },
    });
    return () => controls.stop();
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[1000] flex flex-col justify-between bg-ink p-6 text-cream md:p-10"
        >
          <div className="flex justify-between text-xs uppercase tracking-[0.3em] text-cream/60">
            <span>{site.name}</span>
            <span>{site.role}</span>
          </div>
          <div className="flex items-end justify-between">
            <span className="font-display text-[30vw] leading-[0.8] text-accent md:text-[18vw]">{count}</span>
            <span className="mb-4 text-right font-display text-3xl uppercase md:text-6xl">Loading<br />the reel</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
