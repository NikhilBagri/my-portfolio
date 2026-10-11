/* =========================================================
   🎬 YOUR VIDEOS
   ---------------------------------------------------------
   src accepts:
     • Local file   → "/videos/my-film.mp4"  (file in /public/videos)
     • Direct MP4   → "https://.../video.mp4"
     • YouTube      → "https://www.youtube.com/watch?v=ID" / youtu.be / shorts
     • Vimeo        → "https://vimeo.com/123456789"
   ratio: "16:9" (landscape row) or "9:16" (vertical row)
   thumbnail: optional. YouTube auto-fetches one.
              Local MP4 uses first frame. Vimeo needs one.
   Delete demo items. Copy one block per video.
   ========================================================= */

const SAMPLE =
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample";

export const videos = [
  // ---------- 16:9 LANDSCAPE ----------
  {
    id: "neon-nights", // unique, no spaces (used in share links)
    title: "Neon Nights",
    category: "Music Video", // filter chips auto-build from this
    ratio: "16:9",
    src: "/AlphaMathsRocket.mov",
    thumbnail: "/AlphaMathsRocket.png",
    year: "2026",
    client: "Indie Artist",
    role: "Director, Editor",
    duration: "3:42",
    tools: ["Premiere Pro", "DaVinci Resolve"],
    description:
      "A neon-soaked night drive with rhythmic cuts synced to every beat.",
    credits: [
      { role: "DOP", name: "Jane Doe" },
      { role: "Colorist", name: "You" },
    ],
    link: "", // optional "Watch full project" link
  },
  {
    id: "brand-launch",
    title: "Brand Launch",
    category: "Commercial",
    ratio: "16:9",
    src: "UnboxEnglishRocket.mov",
    thumbnail: "UnboxEnglishRocket.png",
    year: "2025",
    client: "Brand Co.",
    role: "Editor, Motion",
    duration: "0:45",
    tools: ["Premiere Pro", "After Effects"],
    description:
      "Product launch spot with kinetic typography and punchy pacing.",
    credits: [],
    link: "",
  },
  {
    id: "youtube-example",
    title: "Big Buck Bunny",
    category: "Short Film",
    ratio: "16:9",
    src: "/UnboxScienceRocket.mov", // YouTube → thumbnail automatic
    thumbnail: "UnboxScienceRocket.png",
    year: "2024",
    client: "Blender Foundation",
    role: "Editor",
    duration: "10:34",
    tools: ["DaVinci Resolve"],
    description: "Example of a YouTube-hosted project. Swap in your own link.",
    credits: [],
    // link: "https://www.youtube.com/watch?v=aqz-KE-bpKQ",
  },
  {
    id: "vimeo-example",
    title: "Studio Story",
    category: "Commercial",
    ratio: "16:9",
    src: "/SassAnimation.mp4", // Vimeo → add a thumbnail
    thumbnail: "/SassAnimation.png",
    year: "2024",
    client: "Vimeo",
    role: "Editor",
    duration: "1:02",
    tools: ["Final Cut Pro"],
    description: "Example of a Vimeo-hosted project.",
    credits: [],
    link: "",
  },
  {
    id: "great-escape",
    title: "The Great Escape",
    category: "Travel",
    ratio: "16:9",
    src: "/DietCoke.mp4",
    thumbnail: "DietCoke.png",
    // no thumbnail → first frame used automatically
    year: "2023",
    client: "Travel Brand",
    role: "Shooter, Editor",
    duration: "2:10",
    tools: ["Premiere Pro", "Lightroom"],
    description:
      "Travel film built around natural sound and long, breathing shots.",
    credits: [],
    link: "",
  },
  {
    id: "great-escape",
    title: "The Great Escape",
    category: "Travel",
    ratio: "16:9",
    src: "/UnboxChessIntro.mp4",
    thumbnail: "UnboxChess.png",
    // no thumbnail → first frame used automatically
    year: "2023",
    client: "Travel Brand",
    role: "Shooter, Editor",
    duration: "2:10",
    tools: ["Premiere Pro", "Lightroom"],
    description:
      "Travel film built around natural sound and long, breathing shots.",
    credits: [],
    link: "",
  },
  {
    id: "great-escape",
    title: "The Great Escape",
    category: "Travel",
    ratio: "16:9",
    src: "/TheSparkAi.mp4",
    thumbnail: "TheSparkAi.png",
    // no thumbnail → first frame used automatically
    year: "2023",
    client: "Travel Brand",
    role: "Shooter, Editor",
    duration: "2:10",
    tools: ["Premiere Pro", "Lightroom"],
    description:
      "Travel film built around natural sound and long, breathing shots.",
    credits: [],
    link: "",
  },
  {
    id: "great-escape",
    title: "The Great Escape",
    category: "Travel",
    ratio: "16:9",
    src: "/ZingSassAnimation.mp4",
    thumbnail: "ZingSassAnimation.png",
    // no thumbnail → first frame used automatically
    year: "2023",
    client: "Travel Brand",
    role: "Shooter, Editor",
    duration: "2:10",
    tools: ["Premiere Pro", "Lightroom"],
    description:
      "Travel film built around natural sound and long, breathing shots.",
    credits: [],
    link: "",
  },
  {
    id: "great-escape",
    title: "The Great Escape",
    category: "Travel",
    ratio: "16:9",
    src: "/BambinosSass.mp4",
    thumbnail: "Bambinos.png",
    // no thumbnail → first frame used automatically
    year: "2023",
    client: "Travel Brand",
    role: "Shooter, Editor",
    duration: "2:10",
    tools: ["Premiere Pro", "Lightroom"],
    description:
      "Travel film built around natural sound and long, breathing shots.",
    credits: [],
    link: "",
  },
  {
    id: "great-escape",
    title: "The Great Escape",
    category: "Travel",
    ratio: "16:9",
    src: "/ClaudeShowreel.mp4",
    // thumbnail: "/Claudeshowreel.png",
    // no thumbnail → first frame used automatically
    year: "2023",
    client: "Travel Brand",
    role: "Shooter, Editor",
    duration: "2:10",
    tools: ["Premiere Pro", "Lightroom"],
    description:
      "Travel film built around natural sound and long, breathing shots.",
    credits: [],
    link: "",
  },
  {
    id: "great-escape",
    title: "The Great Escape",
    category: "Travel",
    ratio: "16:9",
    src: "/PIXELATEDKISSESFINALCUT.mov",
    thumbnail: "/PIXELATEDKISSESFINALCUT.png",
    // no thumbnail → first frame used automatically
    year: "2023",
    client: "Travel Brand",
    role: "Shooter, Editor",
    duration: "2:10",
    tools: ["Premiere Pro", "Lightroom"],
    description:
      "Travel film built around natural sound and long, breathing shots.",
    credits: [],
    link: "",
  },
  {
    id: "great-escape",
    title: "The Great Escape",
    category: "Travel",
    ratio: "16:9",
    src: "/DON'TBEDUMBTRIPBABY.mp4",
    thumbnail: "/DON'TBEDUMBTRIPBABY.png",
    // no thumbnail → first frame used automatically
    year: "2023",
    client: "Travel Brand",
    role: "Shooter, Editor",
    duration: "2:10",
    tools: ["Premiere Pro", "Lightroom"],
    description:
      "Travel film built around natural sound and long, breathing shots.",
    credits: [],
    link: "",
  },
  {
    id: "great-escape",
    title: "The Great Escape",
    category: "Travel",
    ratio: "16:9",
    src: "/FearNF.mp4",
    thumbnail: "/FearNF.png",
    // no thumbnail → first frame used automatically
    year: "2023",
    client: "Travel Brand",
    role: "Shooter, Editor",
    duration: "2:10",
    tools: ["Premiere Pro", "Lightroom"],
    description:
      "Travel film built around natural sound and long, breathing shots.",
    credits: [],
    link: "",
  },
  {
    id: "great-escape",
    title: "The Great Escape",
    category: "Travel",
    ratio: "16:9",
    src: "/F1.mov",
    thumbnail: "/F1.png",
    // no thumbnail → first frame used automatically
    year: "2023",
    client: "Travel Brand",
    role: "Shooter, Editor",
    duration: "2:10",
    tools: ["Premiere Pro", "Lightroom"],
    description:
      "Travel film built around natural sound and long, breathing shots.",
    credits: [],
    link: "",
  },
  {
    id: "great-escape",
    title: "The Great Escape",
    category: "Travel",
    ratio: "16:9",
    src: "/Bmxxxing.mov",
    thumbnail: "/Bmxxxing.png",
    // no thumbnail → first frame used automatically
    year: "2023",
    client: "Travel Brand",
    role: "Shooter, Editor",
    duration: "2:10",
    tools: ["Premiere Pro", "Lightroom"],
    description:
      "Travel film built around natural sound and long, breathing shots.",
    credits: [],
    link: "",
  },
  {
    id: "great-escape",
    title: "The Great Escape",
    category: "Travel",
    ratio: "16:9",
    src: "/JuiceWRLD.mp4",
    thumbnail: "/JuiceWRLD.png",
    // no thumbnail → first frame used automatically
    year: "2023",
    client: "Travel Brand",
    role: "Shooter, Editor",
    duration: "2:10",
    tools: ["Premiere Pro", "Lightroom"],
    description:
      "Travel film built around natural sound and long, breathing shots.",
    credits: [],
    link: "",
  },
  {
    id: "great-escape",
    title: "The Great Escape",
    category: "Travel",
    ratio: "16:9",
    src: "/CinemaPoster.mp4",
    thumbnail: "/CinemaPoster.png",
    // no thumbnail → first frame used automatically
    year: "2023",
    client: "Travel Brand",
    role: "Shooter, Editor",
    duration: "2:10",
    tools: ["Premiere Pro", "Lightroom"],
    description:
      "Travel film built around natural sound and long, breathing shots.",
    credits: [],
    link: "",
  },
  {
    id: "great-escape",
    title: "The Great Escape",
    category: "Travel",
    ratio: "16:9",
    src: "/Migos.mov",
    thumbnail: "/Migos.png",
    // no thumbnail → first frame used automatically
    year: "2023",
    client: "Travel Brand",
    role: "Shooter, Editor",
    duration: "2:10",
    tools: ["Premiere Pro", "Lightroom"],
    description:
      "Travel film built around natural sound and long, breathing shots.",
    credits: [],
    link: "",
  },
  {
    id: "great-escape",
    title: "The Great Escape",
    category: "Travel",
    ratio: "16:9",
    src: "/NBA.mov",
    thumbnail: "/NBA.png",
    // no thumbnail → first frame used automatically
    year: "2023",
    client: "Travel Brand",
    role: "Shooter, Editor",
    duration: "2:10",
    tools: ["Premiere Pro", "Lightroom"],
    description:
      "Travel film built around natural sound and long, breathing shots.",
    credits: [],
    link: "",
  },

  // ---------- 9:16 VERTICAL ----------
  {
    id: "reel-hype",
    title: "Hype Reel",
    category: "Reels",
    ratio: "9:16",
    src: `${SAMPLE}/ForBiggerFun.mp4`,
    thumbnail: "https://picsum.photos/seed/reel1/720/1280",
    year: "2026",
    client: "Creator",
    role: "Editor",
    duration: "0:30",
    tools: ["CapCut", "After Effects"],
    description: "Fast-cut vertical reel built for retention.",
    credits: [],
    link: "",
  },
  {
    id: "reel-product",
    title: "Product Drop",
    category: "Reels",
    ratio: "9:16",
    src: `${SAMPLE}/ForBiggerMeltdowns.mp4`,
    thumbnail: "https://picsum.photos/seed/reel2/720/1280",
    year: "2025",
    client: "Brand Co.",
    role: "Editor",
    duration: "0:20",
    tools: ["Premiere Pro"],
    description: "Teaser for a product drop. 3x average watch time.",
    credits: [],
    link: "",
  },
  {
    id: "reel-bts",
    title: "Behind the Scenes",
    category: "Reels",
    ratio: "9:16",
    src: `${SAMPLE}/ElephantsDream.mp4`,
    thumbnail: "https://picsum.photos/seed/reel3/720/1280",
    year: "2025",
    client: "Personal",
    role: "Shooter, Editor",
    duration: "0:45",
    tools: ["CapCut"],
    description: "BTS from a music video shoot.",
    credits: [],
    link: "",
  },
];

/* Carousel rows in the Work section.
   filter decides which videos appear in each row.
   Want one mixed row? Uncomment the last one. */
export const workRows = [
  {
    title: "Long-form",
    subtitle: "Films, ads & music videos · 16:9",
    filter: (v) => v.ratio === "16:9",
  },
  {
    title: "Shorts & Reels",
    subtitle: "Vertical content · 9:16",
    filter: (v) => v.ratio === "9:16",
  },
  // { title: "Everything", subtitle: "All formats mixed", filter: () => true },
];

/* Big featured video below the hero */
export const showreel = {
  title: "Showreel 2026",
  src: "/showreel.mp4", // MP4 plays muted in background; YouTube/Vimeo works too
  // thumbnail: "/showreel_thumbnail.png",
};
