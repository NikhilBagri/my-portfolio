import Reveal from "./Reveal";

/** Section title: (01) — EYEBROW + big heading.
 *  light = true on dark/orange backgrounds */
export default function SectionHeading({ number, eyebrow, title, light = false, className = "" }) {
  return (
    <Reveal className={`mb-12 ${className}`}>
      <div className={`mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] ${light ? "text-cream/70" : "text-ink/60"}`}>
        <span className={light ? "text-cream" : "text-accent"}>({number})</span>
        <span className={`h-px w-10 ${light ? "bg-cream/40" : "bg-ink/40"}`} />
        <span>{eyebrow}</span>
      </div>
      <h2 className={`font-display text-5xl uppercase leading-[0.9] md:text-7xl lg:text-8xl ${light ? "text-cream" : "text-ink"}`}>
        {title}
      </h2>
    </Reveal>
  );
}
