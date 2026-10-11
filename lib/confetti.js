import confetti from "canvas-confetti";

// 🎉 Brand-colored confetti. big = side cannons (Konami easter egg)
const COLORS = ["#ff4d1c", "#141414", "#f2ede4", "#ffb199"];

export function fireConfetti(big = false) {
  if (!big) {
    confetti({ particleCount: 120, spread: 80, origin: { y: 0.7 }, colors: COLORS });
    return;
  }
  const end = Date.now() + 1200;
  (function frame() {
    confetti({ particleCount: 6, angle: 60, spread: 60, origin: { x: 0 }, colors: COLORS });
    confetti({ particleCount: 6, angle: 120, spread: 60, origin: { x: 1 }, colors: COLORS });
    if (Date.now() < end) requestAnimationFrame(frame);
  })();
}
