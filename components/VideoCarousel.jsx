"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import VideoCard from "./VideoCard";

function ArrowButton({ onClick, disabled, label, children }) {
  return (
    <button type="button" onClick={onClick} disabled={disabled} aria-label={label}
      className="grid h-12 w-12 place-items-center rounded-full border-2 border-ink text-lg transition hover:bg-ink hover:text-cream disabled:cursor-not-allowed disabled:opacity-25 disabled:hover:bg-transparent disabled:hover:text-ink md:h-14 md:w-14">
      {children}
    </button>
  );
}

/** Horizontal left→right scroller with arrows + progress bar */
export default function VideoCarousel({ title, subtitle, items, onOpen }) {
  const trackRef = useRef(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);
  const [progress, setProgress] = useState(0);

  const update = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft < max - 4);
    setProgress(max > 0 ? el.scrollLeft / max : 1);
  }, []);

  useEffect(() => {
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [items, update]);

  // Scroll 80% of visible width per click
  const scroll = (dir) => {
    const el = trackRef.current;
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: "smooth" });
  };

  if (!items.length) return null;

  return (
    <div className="mb-20">
      <div className="mb-6 flex items-end justify-between gap-4 px-5 md:px-10">
        <div>
          <h3 className="font-display text-3xl uppercase md:text-5xl">
            {title} <sup className="text-lg text-accent">({items.length})</sup>
          </h3>
          {subtitle && <p className="mt-1 text-sm text-ink/60">{subtitle}</p>}
        </div>
        <div className="flex gap-2">
          <ArrowButton onClick={() => scroll(-1)} disabled={!canPrev} label="Previous videos"><FiArrowLeft /></ArrowButton>
          <ArrowButton onClick={() => scroll(1)} disabled={!canNext} label="Next videos"><FiArrowRight /></ArrowButton>
        </div>
      </div>

      <div ref={trackRef} onScroll={update}
        className="no-scrollbar flex snap-x snap-mandatory items-start gap-5 overflow-x-auto scroll-px-5 px-5 pb-4 md:scroll-px-10 md:px-10">
        {items.map((video, i) => (
          <VideoCard key={video.id} video={video} index={i} onOpen={() => onOpen(video)} />
        ))}
      </div>

      <div className="mx-5 mt-4 h-0.5 bg-ink/10 md:mx-10">
        <div className="h-full bg-accent transition-[width] duration-200" style={{ width: `${Math.max(progress * 100, 8)}%` }} />
      </div>
    </div>
  );
}
