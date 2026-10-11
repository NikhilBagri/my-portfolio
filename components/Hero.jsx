"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";
import { FiArrowDownRight, FiDownload } from "react-icons/fi";
import { site } from "@/data/site";
import Counter from "./ui/Counter";
import SocialIcon from "./ui/SocialIcon";
import MagneticButton from "./fun/MagneticButton";
import RotatingBadge from "./fun/RotatingBadge";

export default function Hero() {
  // Rotating word (Editor → Filmmaker → …)
  const [wordIndex, setWordIndex] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setWordIndex((i) => (i + 1) % site.heroWords.length), 2200);
    return () => clearInterval(t);
  }, []);

  // Scroll effects: giant word slides, photo tilts
  const { scrollY } = useScroll();
  const bigWordX = useTransform(scrollY, [0, 800], [0, -250]);
  const imgRotate = useTransform(scrollY, [0, 600], [-3, 6]);

  return (
    <section id="home" className="relative flex min-h-screen flex-col overflow-hidden px-5 pt-28 md:px-10 md:pt-32">
      {/* Giant outlined background word */}
      <motion.div aria-hidden style={{ x: bigWordX }}
        className="pointer-events-none absolute bottom-0 left-0 select-none whitespace-nowrap font-display text-[24vw] uppercase leading-[0.8] opacity-30 text-stroke">
        {site.bigBackgroundWord}
      </motion.div>

      <div className="relative z-10 grid flex-1 items-center gap-12 pb-20 lg:grid-cols-12">
        {/* LEFT — intro, stats, buttons */}
        <div className="order-2 lg:order-1 lg:col-span-4">
          {site.available && (
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-ink/15 bg-cream-dark px-4 py-1.5 text-xs font-semibold uppercase tracking-wider">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
              Available for work
            </span>
          )}
          <p className="max-w-sm text-lg text-ink/70">{site.tagline}</p>

          <div className="mt-8 grid max-w-sm grid-cols-3 gap-4">
            {site.stats.map((s) => (
              <div key={s.label}>
                <div className="font-display text-4xl text-accent md:text-5xl"><Counter value={s.value} suffix={s.suffix} /></div>
                <p className="mt-1 text-xs uppercase tracking-wider text-ink/60">{s.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <MagneticButton href="#work" className="rounded-full bg-accent px-7 py-4 font-semibold text-cream hover:bg-accent-dark">
              View my work <FiArrowDownRight />
            </MagneticButton>
            <a href="/Nikhil_Bagri_VE.pdf" download className="inline-flex items-center gap-2 rounded-full border-2 border-ink px-6 py-3.5 font-semibold transition hover:bg-ink hover:text-cream">
              <FiDownload /> Resume
            </a>
          </div>
        </div>

        {/* CENTER — photo card */}
        <div className="relative order-1 mx-auto w-full max-w-xs sm:max-w-sm lg:order-2 lg:col-span-4">
          <motion.div style={{ rotate: imgRotate }} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-accent shadow-2xl shadow-accent/30">
            <img src={site.profileImage} alt={`Portrait of ${site.name}`} className="h-full w-full object-cover grayscale transition duration-700 hover:grayscale-0" />
            <a href="#contact" className="absolute inset-x-4 bottom-4 rounded-xl bg-accent py-3 text-center text-sm font-semibold uppercase tracking-wider text-cream transition hover:bg-ink">
              {"Let's work together"}
            </a>
          </motion.div>

          <div className="absolute -bottom-10 -left-10 hidden sm:block"><RotatingBadge /></div>

          {/* Vertical social icons (large screens) */}
          <div className="absolute -right-16 top-1/2 hidden -translate-y-1/2 flex-col gap-3 xl:flex">
            {site.socials.map((s) => (
              <a key={s.name} href={s.url} target="_blank" rel="noreferrer" aria-label={s.name}
                className="grid h-10 w-10 place-items-center rounded-full border border-ink/20 transition hover:border-accent hover:bg-accent hover:text-cream">
                <SocialIcon name={s.icon} />
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT — headline */}
        <div className="order-3 lg:col-span-4 lg:text-right">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-ink/60">{`Hi, I'm ${site.name}`}</p>
          <h1 className="font-display text-6xl uppercase leading-[0.9] md:text-7xl xl:text-8xl">
            {site.heroTitleTop}
            <br />
            <span className="relative inline-block h-[0.95em] overflow-hidden align-bottom">
              <AnimatePresence mode="wait">
                <motion.span key={site.heroWords[wordIndex]} initial={{ y: "100%" }} animate={{ y: "0%" }} exit={{ y: "-100%" }}
                  transition={{ duration: 0.45, ease: [0.76, 0, 0.24, 1] }} className="block text-accent">
                  {site.heroWords[wordIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </h1>
          <p className="mt-6 text-ink/60 lg:ml-auto lg:max-w-xs">{site.role}</p>
        </div>
      </div>
    </section>
  );
}
