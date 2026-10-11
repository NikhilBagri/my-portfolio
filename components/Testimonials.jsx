import { site } from "@/data/site";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";

export default function Testimonials() {
  return (
    <section id="testimonials" className="px-5 py-24 md:px-10 md:py-32">
      <SectionHeading number="05" eyebrow="Kind words" title="Client love" />
      <div className="grid gap-6 md:grid-cols-3">
        {site.testimonials.map((t, i) => (
          <Reveal key={t.name} delay={i * 0.1}
            className={`flex flex-col justify-between rounded-3xl p-8 ${i === 1 ? "bg-accent text-cream md:-rotate-2" : "bg-cream-dark"}`}>
            <p className="font-display text-7xl leading-none opacity-40">“</p>
            <p className="text-lg">{t.quote}</p>
            <div className="mt-8">
              <p className="font-semibold">{t.name}</p>
              <p className="text-sm opacity-70">{t.role}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
