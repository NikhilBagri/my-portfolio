"use client";
import { useEffect, useState } from "react";
import { site } from "@/data/site";
import SocialIcon from "./ui/SocialIcon";

export default function Footer() {
  // Live local clock → site.timezone
  const [time, setTime] = useState("");
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-US", { hour: "2-digit", minute: "2-digit", second: "2-digit", timeZone: site.timezone });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const t = setInterval(tick, 1000);
    return () => clearInterval(t);
  }, []);

  return (
    <footer className="bg-ink px-5 pb-8 pt-20 text-cream md:px-10">
      <div className="grid gap-10 md:grid-cols-3">
        <div>
          <p className="mb-4 text-xs uppercase tracking-widest text-cream/50">Navigation</p>
          <ul className="space-y-2">
            {site.nav.map((l) => <li key={l.href}><a href={l.href} className="transition hover:text-accent">{l.label}</a></li>)}
          </ul>
        </div>
        <div>
          <p className="mb-4 text-xs uppercase tracking-widest text-cream/50">Socials</p>
          <ul className="space-y-2">
            {site.socials.map((s) => (
              <li key={s.name}>
                <a href={s.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition hover:text-accent">
                  <SocialIcon name={s.icon} /> {s.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="mb-4 text-xs uppercase tracking-widest text-cream/50">Local time</p>
          <p className="font-display text-4xl text-accent">{time}</p>
          <p className="mt-2 text-cream/60">{site.location}</p>
          <a href={`mailto:${site.email}`} className="mt-4 inline-block underline-offset-4 hover:text-accent hover:underline">{site.email}</a>
        </div>
      </div>

      {/* Giant name */}
      <p className="mt-16 select-none break-words font-display text-[14vw] uppercase leading-[0.85] text-accent">{site.name}</p>

      <div className="mt-8 flex flex-col justify-between gap-2 border-t border-cream/10 pt-6 text-xs text-cream/50 md:flex-row">
        <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
        {site.fun.konamiConfetti && <p>Psst… try ↑ ↑ ↓ ↓ ← → ← → B A</p>}
      </div>
    </footer>
  );
}
