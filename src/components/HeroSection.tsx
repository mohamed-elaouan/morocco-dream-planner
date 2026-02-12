import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

import heroMorocco from "@/assets/hero-morocco.jpg";
import heroFes from "@/assets/hero-fes.jpg";
import heroTangier from "@/assets/hero-tangier.jpg";
import heroChefchaouen from "@/assets/hero-chefchaouen.jpg";
import heroOuarzazate from "@/assets/hero-ouarzazate.jpg";
import heroEssaouira from "@/assets/hero-essaouira.jpg";
import heroMerzouga from "@/assets/hero-merzouga.jpg";
import heroMeknes from "@/assets/hero-meknes.jpg";
import heroAgadir from "@/assets/hero-agadir.jpg";
import heroDades from "@/assets/hero-dades.jpg";
import heroMarrakech from "@/assets/marrakech-square.jpg";

const slides = [
  { src: heroMorocco, city: "Sahara Desert", subtitle: "Endless golden dunes" },
  { src: heroMarrakech, city: "Marrakech", subtitle: "The Red City" },
  { src: heroFes, city: "Fes", subtitle: "Ancient medina & culture" },
  { src: heroChefchaouen, city: "Chefchaouen", subtitle: "The Blue Pearl" },
  { src: heroMerzouga, city: "Merzouga", subtitle: "Gateway to the Sahara" },
  { src: heroTangier, city: "Tangier", subtitle: "Where continents meet" },
  { src: heroOuarzazate, city: "Ouarzazate", subtitle: "Hollywood of Africa" },
  { src: heroEssaouira, city: "Essaouira", subtitle: "Wind city of the Atlantic" },
  { src: heroMeknes, city: "Meknes", subtitle: "Imperial grandeur" },
  { src: heroAgadir, city: "Agadir", subtitle: "Sun & surf paradise" },
  { src: heroDades, city: "Dades Valley", subtitle: "Dramatic gorges & oases" },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background images with crossfade */}
      <AnimatePresence mode="sync">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <img
            src={slide.src}
            alt={slide.city}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-hero" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="font-body text-gold-light text-sm tracking-[0.3em] uppercase mb-4"
        >
          Boutique Travel Agency Based in Morocco
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground mb-6 leading-tight"
        >
          Discover the Magic
          <br />
          <span className="text-gradient-gold">of Morocco</span>
        </motion.h1>

        {/* City indicator */}
        <AnimatePresence mode="wait">
          <motion.p
            key={current}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="font-body text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10"
          >
            {slide.city} — {slide.subtitle}
          </motion.p>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#tours"
            className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-4 font-body font-semibold text-accent-foreground transition-all hover:shadow-glow hover:scale-105"
          >
            Explore Tours
          </a>
          <a
            href="#reservation"
            className="inline-flex items-center justify-center rounded-full border-2 border-primary-foreground/40 px-8 py-4 font-body font-semibold text-primary-foreground transition-all hover:bg-primary-foreground/10"
          >
            Plan Your Trip
          </a>
        </motion.div>

        {/* Slide dots */}
        <div className="flex justify-center gap-2 mt-8">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === current ? "bg-accent w-6" : "bg-primary-foreground/40"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/60"
      >
        <ChevronDown className="h-8 w-8" />
      </motion.a>
    </section>
  );
};

export default HeroSection;
