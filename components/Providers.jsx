"use client";
import { MotionConfig } from "motion/react";

// Respects visitors' "reduce motion" OS setting
export default function Providers({ children }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
