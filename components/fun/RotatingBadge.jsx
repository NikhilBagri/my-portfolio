import { FiPlay } from "react-icons/fi";
import { site } from "@/data/site";

// Spinning circular text badge. Text → site.badgeText
export default function RotatingBadge() {
  return (
    <a href="#work" aria-label="See my work" className="group relative grid h-32 w-32 place-items-center rounded-full bg-ink text-cream">
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full animate-spin-slow" aria-hidden>
        <defs>
          <path id="badge-circle" d="M50,50 m-37,0 a37,37 0 1,1 74,0 a37,37 0 1,1 -74,0" />
        </defs>
        <text className="fill-cream text-[8px] font-semibold uppercase">
          <textPath href="#badge-circle" textLength="228" lengthAdjust="spacing">{site.badgeText}</textPath>
        </text>
      </svg>
      <span className="grid h-12 w-12 place-items-center rounded-full bg-accent transition group-hover:scale-110">
        <FiPlay className="ml-0.5" />
      </span>
    </a>
  );
}
