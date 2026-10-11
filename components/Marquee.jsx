import { site } from "@/data/site";

// One scrolling band. Items repeated 4× for seamless loop.
function Band({ items, reverse = false, className = "" }) {
  const row = [...items, ...items, ...items, ...items];
  return (
    <div className={`flex overflow-hidden py-4 ${className}`}>
      <div className={`flex w-max shrink-0 items-center gap-8 pr-8 ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}>
        {row.map((text, i) => (
          <span key={i} className="flex items-center gap-8 font-display text-3xl uppercase md:text-5xl">
            {text} <span className="text-2xl">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

// Two crossing bands. Text → site.marquee
export default function Marquee() {
  return (
    <section aria-hidden className="relative overflow-hidden py-16">
      <Band items={site.marquee} className="-ml-[5%] w-[110%] -rotate-2 bg-accent text-cream" />
      <Band items={site.marquee} reverse className="absolute left-[-5%] top-1/2 w-[110%] -translate-y-1/2 rotate-2 bg-ink text-cream" />
    </section>
  );
}
