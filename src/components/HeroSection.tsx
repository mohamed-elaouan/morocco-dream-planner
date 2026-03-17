import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

// Hero section images only from "hero section" folder
import heroDesert from "@/assets/hero section/DSC_3035.webp";
import heroMorocco from "@/assets/hero section/Morocco_KAI_VM_2025_0077.webp";
import heroSchool from "@/assets/hero section/Quranic School.webp";
import heroRad from "@/assets/hero section/RAD_7725.webp";
import heroRuins from "@/assets/hero section/Roman musaic.webp";
import heroFox from "@/assets/hero section/funnic fox.webp";
import heroSnake from "@/assets/hero section/snake charmer.webp";
import heroTanneries from "@/assets/hero section/tanneries in fes.webp";

const slides = [
  { src: heroDesert, city: "Sahara Desert", subtitle: "Endless golden dunes" },
  { src: heroFox, city: "Atlas Mountains", subtitle: "Wildlife encounters" },
  { src: heroSnake, city: "Marrakech", subtitle: "The enchanted square" },
  { src: heroRuins, city: "Volubilis", subtitle: "Roman mosaics & history" },
  { src: heroMorocco, city: "Morocco", subtitle: "A land of wonder" },
  { src: heroTanneries, city: "Fes Tanneries", subtitle: "Living craft tradition" },
  { src: heroSchool, city: "Quranic School", subtitle: "Sacred heritage" },
  { src: heroRad, city: "Morocco", subtitle: "Discover the magic" },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 7000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  return (
    <section id="home" className="relative h-[100svh] min-h-[500px] sm:min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background images with Ken Burns effect */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 bg-black"
        >
          {/* Blurred Background for Mobile (to avoid black bars when using contain) */}
          <img 
            src={slide.src} 
            alt="background blur"
            className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-50 scale-110 sm:hidden" 
          />
          
          {/* Main Image: object-contain on mobile for full display, object-cover on desktop for original full-screen immersiveness */}
          <motion.img
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 8, ease: "easeOut" }}
            src={slide.src}
            alt={slide.city}
            className="w-full h-full object-contain sm:object-cover relative z-10"
          />
          
          {/* Gradients */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 sm:from-black/30 via-transparent to-black/70 sm:to-black/60 z-20" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="font-body text-gold-light text-xs sm:text-sm md:text-base tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-4 sm:mb-6 font-medium drop-shadow-md"
        >
          Boutique Travel Agency Based in Morocco
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 sm:mb-8 leading-tight drop-shadow-xl"
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
            className="flex flex-col items-center justify-center mb-8 sm:mb-12"
          >
            <p className="font-heading text-xl sm:text-2xl md:text-3xl text-white/90 drop-shadow-md">
              {slide.city}
            </p>
            <span className="w-10 sm:w-12 h-0.5 bg-accent/80 my-2 rounded-full" />
            <p className="font-body text-xs sm:text-sm md:text-base text-white/80 uppercase tracking-widest">
              {slide.subtitle}
            </p>
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center"
        >
          <a
            href="#tours"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-accent px-8 sm:px-10 py-3.5 sm:py-4 font-body font-bold text-white shadow-lg transition-all hover:scale-105 hover:shadow-orange-500/30 text-sm sm:text-base"
          >
            <span className="relative z-10">Explore Our Tours</span>
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-orange-500 to-amber-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </a>
          <a
            href="/travel-consulting"
            className="inline-flex items-center justify-center rounded-full border-2 border-white/30 bg-white/5 backdrop-blur-sm px-8 sm:px-10 py-3.5 sm:py-4 font-body font-bold text-white transition-all hover:bg-white/20 hover:border-white/50 text-sm sm:text-base"
          >
            Personalize Your Journey
          </a>
        </motion.div>

        {/* Slide dots */}
        <div className="flex justify-center items-center gap-1.5 sm:gap-2 mt-8 sm:mt-12">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`!min-h-0 !min-w-0 h-2 sm:h-2.5 rounded-full transition-all duration-500 ${
                i === current ? "bg-accent w-6 sm:w-8" : "bg-white/30 w-2 sm:w-2.5 hover:bg-white/50"
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
        className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 text-white/70 hover:text-white transition-colors"
      >
        <ChevronDown className="h-8 w-8 sm:h-10 sm:w-10" />
      </motion.a>
    </section>
  );
};

export default HeroSection;
