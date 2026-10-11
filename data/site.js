/* =========================================================
   📝 SITE CONFIG — your personal info lives here.
   Every section reads from this file. Edit, save, done.
   Images: put files in /public/images → use "/images/me.jpg"
   ========================================================= */

export const site = {
  // ---------- BASICS ----------
  name: "Nikhil Bagri",
  shortName: "NB", // logo letters (navbar)
  role: "Video Editor & AI Creative Specialist",
  heroTitleTop: "A cinematic", // first line of hero heading
  heroWords: ["Editor", "Filmmaker", "Colorist", "Storyteller"], // rotating word
  tagline:
    "I cut stories that feel clear, intentional and impossible to scroll past.",
  bigBackgroundWord: "STORIES", // giant outline word behind hero
  available: true, // green "Available for work" pill
  badgeText: "AVAILABLE FOR WORK • LET'S CREATE • ",

  email: "nikhilbagri18@gmail.com",
  location: "Bangalore, India",
  timezone: "Asia/Kolkata", // e.g. "America/New_York" → footer clock
  resumeUrl: "/resume.pdf", // file inside /public
  profileImage: "https://picsum.photos/seed/portrait-me/800/1000",
  aboutImage: "https://picsum.photos/seed/behind-scenes/900/1100",

  // ---------- HERO STATS (animated counters) ----------
  stats: [
    { value: 120, suffix: "+", label: "Projects" },
    { value: 6, suffix: "yrs", label: "Experience" },
    { value: 40, suffix: "M", label: "Views" },
  ],

  // ---------- NAVBAR LINKS (href = section id) ----------
  nav: [
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ],

  // ---------- SOCIALS ----------
  // icon options: instagram, youtube, vimeo, linkedin, behance, x, tiktok, github
  socials: [
    {
      name: "Instagram",
      icon: "instagram",
      url: "https://instagram.com/yourhandle",
    },
    {
      name: "YouTube",
      icon: "youtube",
      url: "https://youtube.com/@yourhandle",
    },
    { name: "Vimeo", icon: "vimeo", url: "https://vimeo.com/yourhandle" },
    {
      name: "LinkedIn",
      icon: "linkedin",
      url: "https://linkedin.com/in/yourhandle",
    },
    { name: "Behance", icon: "behance", url: "https://behance.net/yourhandle" },
  ],

  // ---------- SCROLLING TEXT BANDS ----------
  marquee: [
    "Video Editing",
    "Color Grading",
    "Motion Graphics",
    "Sound Design",
    "Music Videos",
    "Commercials",
    "Reels",
  ],

  // ---------- ABOUT ----------
  about: {
    heading: "Frames with feeling.",
    paragraphs: [
      "I'm a Video Editor specializing in advertisements, branded content, and social media videos. I blend storytelling, creative editing, motion design, and sound to produce content that captures attention, strengthens brands, and drives engagement.",
    ],
    details: [
      { label: "Based in", value: "Bangalore, India" },
      { label: "Experience", value: "1.5+ years" },
      { label: "Languages", value: "English, Hindi" },
      { label: "Freelance", value: "Available" },
    ],
  },

  // ---------- EXPERIENCE TIMELINE ----------
  experience: [
    {
      year: "2026 — Now",
      role: "Video Editor",
      company: "Bambinos.live",
      text: "Video Editor skilled in producing high-performing video ads and branded content for Meta platforms, YouTube Shorts, and digital campaigns. Experienced in short- and long-form editing, motion graphics, color grading, sound design, and end-to-end video production. Proficient in generative AI tools for creating engaging marketing visuals while maintaining brand consistency, quality, and timely delivery.",
    },
    {
      year: "2025 — 2026",
      role: "Freelance Video Editor",
      company: "Self Employed",
      text: "Edited short-form videos, ads, and UGC content for brands across social platforms. Optimized Reels, Shorts, and TikTok videos for engagement while collaborating with clients to deliver high-quality projects on schedule.",
    },
    // ,
    // {
    //   year: "2019 — 2021",
    //   role: "Junior Editor",
    //   company: "Agency Name",
    //   text: "Social content, motion graphics and color.",
    // },
  ],

  // ---------- SERVICES ----------
  services: [
    {
      title: "Video Editing",
      text: "Story-first cuts for films, ads, YouTube and music videos.",
    },
    {
      title: "Color Grading",
      text: "Cinematic looks that match your brand and mood.",
    },
    {
      title: "Motion Graphics",
      text: "Titles, kinetic type and animated brand elements.",
    },
    { title: "Short-form", text: "Scroll-stopping reels, shorts and TikToks." },
  ],

  // ---------- TESTIMONIALS ----------
  testimonials: [
    {
      quote:
        "Delivered beyond what we imagined. Fast, creative and calm under pressure.",
      name: "Sam Lee",
      role: "Marketing Lead, Brand Co.",
    },
    {
      quote: "Our music video hit 2M views in a week. The edit made the song.",
      name: "Nova",
      role: "Recording Artist",
    },
    {
      quote: "Instinct for pacing is unreal. Our go-to editor now.",
      name: "Jordan Park",
      role: "Producer, Studio X",
    },
  ],

  // ---------- CONTACT ----------
  contact: {
    heading: "Let's create",
    subheading: "Got a story to tell? Send a message. I reply within 24 hours.",
    // 1. Sign up at formspree.io → New Form
    // 2. Copy ID from https://formspree.io/f/XXXXXX → paste below
    // Until set, the form opens the visitor's email app instead.
    formspreeId: "YOUR_FORM_ID",
    projectTypes: [
      "Music Video",
      "Commercial",
      "YouTube Content",
      "Reels / Shorts",
      "Other",
    ],
    budgets: ["< $1k", "$1k – $5k", "$5k – $10k", "$10k+"],
  },

  // ---------- FUN EXTRAS (true / false) ----------
  fun: {
    preloader: true, // 0→100 intro screen (once per visit)
    customCursor: true, // orange cursor ring, "PLAY" over videos
    filmGrain: true, // subtle film noise overlay
    konamiConfetti: true, // ↑↑↓↓←→←→BA = confetti
  },

  // ---------- SEO ----------
  seo: {
    title: "Nikhil Bagri — Video Editor & Ai Creative Specialist",
    description:
      "Portfolio of Nikhil Bagri: music videos, commercials and reels.",
    url: "https://example.com", // your live domain
    ogImage: "/og.jpg", // 1200×630 image in /public
  },
};
