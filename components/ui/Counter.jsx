"use client";
import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "motion/react";

/** Counts 0 → value when visible */
export default function Counter({ value, suffix = "", duration = 2 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, { duration, ease: "easeOut", onUpdate: (v) => setN(Math.round(v)) });
    return () => controls.stop();
  }, [inView, value, duration]);

  return <span ref={ref}>{n}{suffix}</span>;
}
