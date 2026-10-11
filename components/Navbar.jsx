"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { FiMenu, FiX } from "react-icons/fi";
import { site } from "@/data/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);       // mobile menu
  const [hidden, setHidden] = useState(false);   // hide on scroll down
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");      // current section

  // Hide navbar scrolling down, show scrolling up
  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      setHidden(y > last && y > 300);
      last = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy: highlight link of visible section
  useEffect(() => {
    const sections = site.nav.map((n) => document.querySelector(n.href)).filter(Boolean);
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(`#${e.target.id}`)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  // Lock page scroll while mobile menu open
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; }, [open]);

  return (
    <>
      <motion.header
        animate={{ y: hidden && !open ? "-110%" : "0%" }}
        transition={{ duration: 0.35 }}
        className={`fixed inset-x-0 top-0 z-50 transition-colors ${scrolled && !open ? "border-b border-ink/10 bg-cream/80 backdrop-blur-md" : ""}`}
      >
        <nav className="flex items-center justify-between px-5 py-4 md:px-10">
          <a href="#home" className="flex items-center gap-2" aria-label="Home">
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-accent font-display text-lg text-cream">{site.shortName}</span>
            <span className="hidden font-display text-xl uppercase tracking-wide sm:block">{site.name}</span>
          </a>

          <ul className="hidden items-center gap-8 md:flex">
            {site.nav.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={`relative text-sm font-medium uppercase tracking-wider transition-colors hover:text-accent ${active === link.href ? "text-accent" : ""}`}>
                  {link.label}
                  {active === link.href && (
                    <motion.span layoutId="nav-dot" className="absolute -bottom-2 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-accent" />
                  )}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a href="#contact" className="hidden rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-cream transition hover:bg-accent sm:inline-block">
              {"Let's Talk"}
            </a>
            <button onClick={() => setOpen((o) => !o)} aria-label="Toggle menu" aria-expanded={open}
              className="grid h-10 w-10 place-items-center rounded-full border border-ink/20 bg-cream md:hidden">
              {open ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "circle(0% at 100% 0%)" }}
            animate={{ clipPath: "circle(150% at 100% 0%)" }}
            exit={{ clipPath: "circle(0% at 100% 0%)" }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 flex flex-col justify-center gap-2 bg-accent px-8 md:hidden"
          >
            {site.nav.map((link, i) => (
              <motion.a key={link.href} href={link.href} onClick={() => setOpen(false)}
                initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 + i * 0.06 }}
                className="font-display text-6xl uppercase text-cream">
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
