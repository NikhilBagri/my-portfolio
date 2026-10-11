"use client";
import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { FiPlay } from "react-icons/fi";
import { showreel } from "@/data/videos";
import { getVideoSource, getThumbnail } from "@/lib/video";

// Big 16:9 showreel. Grows while scrolling. Click → plays inline.
export default function Showreel() {
  const ref = useRef(null);
  const [playing, setPlaying] = useState(false);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center"] });
  const scale = useTransform(scrollYProgress, [0, 1], [0.82, 1]);
  const radius = useTransform(scrollYProgress, [0, 1], [64, 24]);

  const source = getVideoSource(showreel.src);
  const thumb = getThumbnail(showreel);

  return (
    <section id="showreel" ref={ref} className="px-5 py-20 md:px-10">
      <motion.div style={{ scale, borderRadius: radius }} data-cursor={playing ? undefined : "play"}
        className="relative mx-auto aspect-video max-w-7xl overflow-hidden bg-ink">
        {playing ? (
          source.type === "file" ? (
            <video src={source.src} controls autoPlay playsInline className="h-full w-full object-cover" />
          ) : (
            <iframe src={source.embed} title={showreel.title} allow="autoplay; fullscreen; picture-in-picture" allowFullScreen className="h-full w-full" />
          )
        ) : (
          <button onClick={() => setPlaying(true)} className="group absolute inset-0" aria-label="Play showreel">
            {source.type === "file" ? (
              <video src={source.src} poster={thumb ?? undefined} muted autoPlay loop playsInline className="absolute inset-0 h-full w-full object-cover" />
            ) : (
              thumb && <img src={thumb} alt="" className="absolute inset-0 h-full w-full object-cover" />
            )}
            <div className="absolute inset-0 bg-ink/40" />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 text-cream">
              <span className="grid h-20 w-20 place-items-center rounded-full bg-accent text-3xl transition-transform duration-500 group-hover:scale-125 md:h-28 md:w-28">
                <FiPlay className="ml-1" />
              </span>
              <span className="font-display text-4xl uppercase md:text-7xl">{showreel.title}</span>
            </div>
          </button>
        )}
      </motion.div>
    </section>
  );
}
