"use client";
import { useRef, useState } from "react";
import { motion } from "motion/react";
import { FiPlay } from "react-icons/fi";
import { getVideoSource, getThumbnail } from "@/lib/video";

/* 📐 CARD HEIGHTS — width auto-calculated from ratio.
   Change these to make cards bigger/smaller. */
const CARD_HEIGHT = {
  "16:9": "h-[200px] sm:h-[260px] md:h-[320px]",
  "9:16": "h-[380px] sm:h-[440px] md:h-[500px]",
};

export default function VideoCard({ video, index, onOpen }) {
  const previewRef = useRef(null);
  const [hovered, setHovered] = useState(false);
  const source = getVideoSource(video.src);
  const thumb = getThumbnail(video);
  const vertical = video.ratio === "9:16";

  // Hover preview (MP4 files only)
  const onEnter = () => { setHovered(true); previewRef.current?.play().catch(() => {}); };
  const onLeave = () => {
    setHovered(false);
    const v = previewRef.current;
    if (v) { v.pause(); v.currentTime = 0; }
  };

  return (
    <motion.button
      type="button"
      onClick={onOpen}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      data-cursor="play"
      aria-label={`Play ${video.title}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
      className={`group relative shrink-0 snap-start overflow-hidden rounded-2xl bg-ink text-left ${CARD_HEIGHT[video.ratio] ?? CARD_HEIGHT["16:9"]} ${vertical ? "aspect-[9/16]" : "aspect-video"}`}
    >
      {/* 1. Thumbnail */}
      {thumb ? (
        <img src={thumb} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
      ) : source.type === "file" ? (
        <video src={`${source.src}#t=0.5`} muted playsInline preload="metadata" className="absolute inset-0 h-full w-full object-cover" />
      ) : (
        <div className="absolute inset-0 bg-linear-to-br from-accent to-ink" />
      )}

      {/* 2. Hover preview */}
      {source.type === "file" && (
        <video ref={previewRef} src={source.src} muted loop playsInline preload="none"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${hovered ? "opacity-100" : "opacity-0"}`} />
      )}

      {/* 3. Gradient for readable text */}
      <div className="absolute inset-0 bg-linear-to-t from-ink/90 via-ink/10 to-transparent" />

      {/* 4. Top labels */}
      <div className="absolute inset-x-0 top-0 flex items-start justify-between gap-2 p-4">
        <span className="rounded-full bg-cream/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-ink">{video.category}</span>
        {video.duration && <span className="rounded-full bg-ink/70 px-2.5 py-1 text-[11px] font-semibold text-cream">{video.duration}</span>}
      </div>

      {/* 5. Play button */}
      <span className="absolute left-1/2 top-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-accent text-2xl text-cream shadow-lg transition duration-500 group-hover:scale-110 md:h-20 md:w-20">
        <FiPlay className="ml-1" />
      </span>

      {/* 6. Title */}
      <div className="absolute inset-x-0 bottom-0 p-4 md:p-5">
        <p className="text-xs font-semibold uppercase tracking-widest text-accent">{String(index + 1).padStart(2, "0")}</p>
        <h4 className="font-display text-2xl uppercase leading-tight text-cream md:text-3xl">{video.title}</h4>
        <p className="text-sm text-cream/70">{[video.client, video.year].filter(Boolean).join(" · ")}</p>
      </div>
    </motion.button>
  );
}
