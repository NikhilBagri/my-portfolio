import { FaInstagram, FaYoutube, FaVimeoV, FaLinkedinIn, FaBehance, FaXTwitter, FaTiktok, FaGithub } from "react-icons/fa6";

// Add new icons here → then use the key in data/site.js → socials
const ICONS = {
  instagram: FaInstagram, youtube: FaYoutube, vimeo: FaVimeoV, linkedin: FaLinkedinIn,
  behance: FaBehance, x: FaXTwitter, tiktok: FaTiktok, github: FaGithub,
};

export default function SocialIcon({ name, className = "" }) {
  const Icon = ICONS[name] ?? FaInstagram;
  return <Icon className={className} aria-hidden />;
}
