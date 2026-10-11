import { site } from "@/data/site";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Showreel from "@/components/Showreel";
import Work from "@/components/Work";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Preloader from "@/components/fun/Preloader";
import CustomCursor from "@/components/fun/CustomCursor";
import ScrollProgress from "@/components/fun/ScrollProgress";
import KonamiConfetti from "@/components/fun/KonamiConfetti";
import BackToTop from "@/components/fun/BackToTop";

export default function Home() {
  return (
    <>
      {/* ✨ Fun extras — turn on/off in data/site.js → fun */}
      {site.fun.preloader && <Preloader />}
      {site.fun.customCursor && <CustomCursor />}
      {site.fun.konamiConfetti && <KonamiConfetti />}
      <ScrollProgress />
      <Navbar />

      <main>
        {/* 👇 Reorder or delete any line to rearrange the page */}
        <Hero />
        <Marquee />
        <Showreel />
        <Work />
        <About />
        <Skills />
        <Services />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}
