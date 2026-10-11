import { site } from "@/data/site";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";

export default function Services() {
  return (
    <section id="services" className="bg-cream-dark px-5 py-24 md:px-10 md:py-32">
      <SectionHeading number="04" eyebrow="Services" title="How I can help" />
      <div className="grid gap-px overflow-hidden rounded-3xl border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
        {site.services.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.08} className="group bg-cream p-8 transition-colors duration-500 hover:bg-accent">
            <span className="font-display text-5xl text-accent transition-colors group-hover:text-cream">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="mt-10 font-display text-2xl uppercase group-hover:text-cream">{s.title}</h3>
            <p className="mt-3 text-sm text-ink/70 group-hover:text-cream/90">{s.text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
