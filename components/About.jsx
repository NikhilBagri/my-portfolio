import { site } from "@/data/site";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";

export default function About() {
  const { about, experience } = site;

  return (
    <section id="about" className="bg-ink px-5 py-24 text-cream md:px-10 md:py-32">
      <SectionHeading number="02" eyebrow="About me" title={about.heading} light />

      <div className="grid gap-14 lg:grid-cols-12">
        {/* Photo + sticker */}
        <Reveal className="lg:col-span-5">
          <div className="relative">
            <img src={site.aboutImage} alt={`${site.name} at work`} className="aspect-[4/5] w-full rounded-3xl object-cover" />
            <span className="absolute -right-3 -top-4 rotate-12 rounded-full bg-accent px-5 py-3 font-display text-xl uppercase text-cream shadow-xl">Hello! 👋</span>
          </div>
        </Reveal>

        <div className="lg:col-span-7">
          {about.paragraphs.map((p, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <p className="mb-5 text-xl leading-relaxed text-cream/80 md:text-2xl">{p}</p>
            </Reveal>
          ))}

          <dl className="mt-10 grid grid-cols-2 gap-6 border-y border-cream/15 py-8 sm:grid-cols-4">
            {about.details.map((d) => (
              <div key={d.label}>
                <dt className="text-xs uppercase tracking-widest text-cream/50">{d.label}</dt>
                <dd className="mt-1 font-semibold">{d.value}</dd>
              </div>
            ))}
          </dl>

          {/* Experience timeline */}
          <h3 className="mb-6 mt-14 font-display text-3xl uppercase">Experience</h3>
          <ol className="border-l-2 border-cream/15">
            {experience.map((x, i) => (
              <li key={x.role + x.year} className="relative pb-8 pl-8 last:pb-0">
                <span className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full border-4 border-ink bg-accent" />
                <Reveal delay={i * 0.08}>
                  <p className="text-xs uppercase tracking-widest text-accent">{x.year}</p>
                  <p className="mt-1 text-xl font-semibold">{x.role} <span className="text-cream/50">· {x.company}</span></p>
                  <p className="mt-2 text-cream/70">{x.text}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
