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

// High Res Imports
import heroHighRes1 from "@/assets/hero_imgs/DSC_3035.jpg";
import heroHighRes2 from "@/assets/hero_imgs/DSC_7785.jpg";
import heroHighRes3 from "@/assets/hero_imgs/RAD_9256.JPG";
import heroAitBenHaddou from "@/assets/hero_imgs/ait ben haddou.jpg";
import heroDadesHigh from "@/assets/hero_imgs/dades.jpg";

const slides = [
  { src: heroHighRes1, city: "Sahara Desert", subtitle: "Endless golden dunes" },
  { src: heroHighRes3, city: "Marrakech", subtitle: "The Red City" },
  { src: heroFes, city: "Fes", subtitle: "Ancient medina & culture" },
  { src: heroChefchaouen, city: "Chefchaouen", subtitle: "The Blue Pearl" },
  { src: heroMerzouga, city: "Merzouga", subtitle: "Gateway to the Sahara" },
  { src: heroTangier, city: "Tangier", subtitle: "Where continents meet" },
  { src: heroAitBenHaddou, city: "Ait Ben Haddou", subtitle: "Hollywood of Africa" },
  { src: heroEssaouira, city: "Essaouira", subtitle: "Wind city of the Atlantic" },
  { src: heroMeknes, city: "Meknes", subtitle: "Imperial grandeur" },
  { src: heroAgadir, city: "Agadir", subtitle: "Sun & surf paradise" },
  { src: heroDadesHigh, city: "Dades Valley", subtitle: "Dramatic gorges & oases" },
  { src: heroHighRes2, city: "Morocco", subtitle: "A timeless journey" },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 7000); // Slightly slower for better readability
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background images with Ken Burns effect */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <motion.img
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 8, ease: "easeOut" }} // Slow zooom out
            src={slide.src}
            alt={slide.city}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" /> {/* Improved gradient */}
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="font-body text-gold-light text-sm md:text-base tracking-[0.3em] uppercase mb-6 font-medium drop-shadow-md"
        >
          Boutique Travel Agency Based in Morocco
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="font-heading text-5xl md:text-7xl lg:text-9xl font-bold text-white mb-8 leading-tight drop-shadow-xl"
        >
          Unveil the Soul
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">
            of Morocco
          </span>
        </motion.h1>

        {/* City indicator */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center mb-12"
          >
            <p className="font-heading text-2xl md:text-3xl text-white/90 drop-shadow-md">
              {slide.city}
            </p>
            <span className="w-12 h-0.5 bg-accent/80 my-2 rounded-full" />
            <p className="font-body text-sm md:text-base text-white/80 uppercase tracking-widest">
              {slide.subtitle}
            </p>
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          <a
            href="#tours"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-accent px-10 py-4 font-body font-bold text-white shadow-lg transition-all hover:scale-105 hover:shadow-orange-500/30"
          >
            <span className="relative z-10">Explore Our Tours</span>
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-orange-500 to-amber-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </a>
          <a
            href="#reservation"
            className="inline-flex items-center justify-center rounded-full border-2 border-white/30 bg-white/5 backdrop-blur-sm px-10 py-4 font-body font-bold text-white transition-all hover:bg-white/20 hover:border-white/50"
          >
            Plan Your Journey
          </a>
        </motion.div>

        {/* Slide dots */}
        <div className="flex justify-center gap-3 mt-12">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all duration-500 ${
                i === current ? "bg-accent w-10" : "bg-white/30 w-2 hover:bg-white/50"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ delay: 1.5, duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/70 hover:text-white transition-colors"
      >
        <ChevronDown className="h-10 w-10" />
      </motion.a>
    </section>
  );
};

export default HeroSection;
