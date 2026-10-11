"use client";
import { useEffect } from "react";
import { fireConfetti } from "@/lib/confetti";

// Easter egg: ↑ ↑ ↓ ↓ ← → ← → B A
const CODE = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];

export default function KonamiConfetti() {
  useEffect(() => {
    let pos = 0;
    const onKey = (e) => {
      const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
      pos = key === CODE[pos] ? pos + 1 : key === CODE[0] ? 1 : 0;
      if (pos === CODE.length) { pos = 0; fireConfetti(true); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  return null;
}
