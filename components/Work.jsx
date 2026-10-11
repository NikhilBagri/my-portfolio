"use client";
import { useCallback, useEffect, useState } from "react";
import { videos, workRows } from "@/data/videos";
import SectionHeading from "./ui/SectionHeading";
import VideoCarousel from "./VideoCarousel";
import VideoModal from "./VideoModal";

export default function Work() {
  // Filter chips auto-built from video categories
  const categories = ["All", ...new Set(videos.map((v) => v.category))];
  const [activeCat, setActiveCat] = useState("All");
  const [current, setCurrent] = useState(null); // { video, list } of open modal

  const filtered = activeCat === "All" ? videos : videos.filter((v) => v.category === activeCat);

  const close = useCallback(() => setCurrent(null), []);
  const step = useCallback((dir) => {
    setCurrent((c) => {
      if (!c) return c;
      const i = c.list.findIndex((v) => v.id === c.video.id);
      return { ...c, video: c.list[(i + dir + c.list.length) % c.list.length] };
    });
  }, []);
  const prev = useCallback(() => step(-1), [step]);
  const next = useCallback(() => step(1), [step]);

  // 🔗 Share links: yoursite.com/?v=video-id opens that video
  useEffect(() => {
    const id = new URLSearchParams(window.location.search).get("v");
    const found = id && videos.find((v) => v.id === id);
    if (found) {
      setCurrent({ video: found, list: videos });
      document.getElementById("work")?.scrollIntoView();
    }
  }, []);
  useEffect(() => {
    const url = new URL(window.location.href);
    if (current) url.searchParams.set("v", current.video.id);
    else url.searchParams.delete("v");
    window.history.replaceState(null, "", url);
  }, [current]);

  const rows = workRows.map((row) => ({ ...row, items: filtered.filter(row.filter) }));
  const isEmpty = rows.every((r) => r.items.length === 0);

  return (
    <section id="work" className="py-24 md:py-32">
      <div className="px-5 md:px-10">
        <SectionHeading number="01" eyebrow="Selected work" title="Work that speaks" />

        <div className="mb-14 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button key={cat} onClick={() => setActiveCat(cat)}
              className={`rounded-full border-2 px-5 py-2 text-sm font-semibold transition ${
                activeCat === cat ? "border-accent bg-accent text-cream" : "border-ink/20 hover:border-ink"
              }`}>
              {cat}
            </button>
          ))}
        </div>
      </div>

      {rows.map((row) => (
        <VideoCarousel key={row.title + activeCat} title={row.title} subtitle={row.subtitle}
          items={row.items} onOpen={(video) => setCurrent({ video, list: row.items })} />
      ))}

      {isEmpty && <p className="px-5 text-ink/60 md:px-10">No videos in this category yet.</p>}

      <VideoModal video={current?.video} onClose={close} onPrev={prev} onNext={next} />
    </section>
  );
}
