"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { FiX, FiArrowLeft, FiArrowRight, FiArrowUpRight, FiLink, FiCheck } from "react-icons/fi";
import { getVideoSource } from "@/lib/video";

/* Popup player + project details.
   Keys: Esc = close · ← → = previous/next project */
export default function VideoModal({ video, onClose, onPrev, onNext }) {
  useEffect(() => {
    if (!video) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.target.tagName === "VIDEO") return; // let arrows seek inside player
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [video, onClose, onPrev, onNext]);

  return (
    <AnimatePresence>
      {video && (
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          onClick={onClose} role="dialog" aria-modal="true" aria-label={video.title}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/90 p-3 backdrop-blur-md md:p-8"
        >
          <button onClick={onClose} aria-label="Close"
            className="absolute right-4 top-4 z-10 grid h-12 w-12 place-items-center rounded-full bg-cream text-xl text-ink transition hover:rotate-90 hover:bg-accent hover:text-cream">
            <FiX />
          </button>

          <motion.div
            key={video.id}
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, y: 40, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="grid max-h-[92vh] w-full max-w-6xl overflow-y-auto rounded-3xl bg-cream lg:grid-cols-[1fr_360px] lg:overflow-hidden"
          >
            <Player video={video} />
            <Details video={video} onPrev={onPrev} onNext={onNext} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Player({ video }) {
  const source = getVideoSource(video.src);
  const frame = video.ratio === "9:16" ? "aspect-[9/16] h-[70vh] max-w-full lg:h-[86vh]" : "aspect-video w-full";

  return (
    <div className="flex items-center justify-center bg-ink">
      <div className={`relative ${frame}`}>
        {source.type === "file" ? (
          <video key={source.src} src={source.src} poster={video.thumbnail} controls autoPlay playsInline className="h-full w-full bg-black object-contain" />
        ) : (
          <iframe key={source.embed} src={source.embed} title={video.title}
            allow="autoplay; fullscreen; picture-in-picture; encrypted-media" allowFullScreen className="h-full w-full" />
        )}
      </div>
    </div>
  );
}

function Details({ video, onPrev, onNext }) {
  const [copied, setCopied] = useState(false);
  const copyLink = async () => {
    await navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  const meta = [["Client", video.client], ["Year", video.year], ["Role", video.role], ["Duration", video.duration]].filter(([, v]) => v);

  return (
    <div className="flex flex-col gap-6 p-6 md:p-8 lg:max-h-[92vh] lg:overflow-y-auto">
      <div>
        <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cream">{video.category}</span>
        <h3 className="mt-4 font-display text-4xl uppercase leading-none md:text-5xl">{video.title}</h3>
      </div>

      {video.description && <p className="text-ink/70">{video.description}</p>}

      <dl className="grid grid-cols-2 gap-4 border-y border-ink/10 py-5">
        {meta.map(([label, value]) => (
          <div key={label}>
            <dt className="text-xs uppercase tracking-wider text-ink/50">{label}</dt>
            <dd className="mt-1 font-semibold">{value}</dd>
          </div>
        ))}
      </dl>

      {video.tools?.length > 0 && (
        <div>
          <p className="mb-2 text-xs uppercase tracking-wider text-ink/50">Tools</p>
          <div className="flex flex-wrap gap-2">
            {video.tools.map((t) => <span key={t} className="rounded-full border border-ink/20 px-3 py-1 text-sm">{t}</span>)}
          </div>
        </div>
      )}

      {video.credits?.length > 0 && (
        <div>
          <p className="mb-2 text-xs uppercase tracking-wider text-ink/50">Credits</p>
          <ul className="space-y-1 text-sm">
            {video.credits.map((c) => <li key={c.role + c.name}><span className="text-ink/50">{c.role}:</span> {c.name}</li>)}
          </ul>
        </div>
      )}

      <div className="mt-auto flex flex-wrap gap-2">
        {video.link && (
          <a href={video.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 rounded-full bg-ink px-4 py-2 text-sm font-semibold text-cream transition hover:bg-accent">
            Watch full project <FiArrowUpRight />
          </a>
        )}
        <button onClick={copyLink} className="inline-flex items-center gap-1 rounded-full border-2 border-ink px-4 py-2 text-sm font-semibold transition hover:bg-ink hover:text-cream">
          {copied ? <><FiCheck /> Copied</> : <><FiLink /> Share</>}
        </button>
      </div>

      <div className="flex justify-between border-t border-ink/10 pt-4">
        <button onClick={onPrev} className="inline-flex items-center gap-2 text-sm font-semibold hover:text-accent"><FiArrowLeft /> Prev</button>
        <button onClick={onNext} className="inline-flex items-center gap-2 text-sm font-semibold hover:text-accent">Next <FiArrowRight /></button>
      </div>
    </div>
  );
}
