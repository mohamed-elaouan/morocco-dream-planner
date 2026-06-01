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

// Mobile-optimized hero section images
import mobileHeroRabat from "@/assets/mobile_hero-section/photo_5834557504061817676_y.webp";
import mobileHeroFox from "@/assets/mobile_hero-section/Food_tasting Cover.jpg";
import mobileHeroMarrakech from "@/assets/mobile_hero-section/photo_2026-03-22_20-59-50.webp";
import mobileHeroDesert from "@/assets/mobile_hero-section/photo desert me.jpg";
import mobileHeroRuins from "@/assets/mobile_hero-section/DSC_4443.webp";
import mobileHeroFes from "@/assets/mobile_hero-section/photo_5834557504061817702_y.webp";
import mobileHeroSchool from "@/assets/mobile_hero-section/photo_5848272747682184099_y.webp";
import mobileHeroRad from "@/assets/mobile_hero-section/RAD_9256.jpg";

const slides = [
  { src: heroDesert, mobileSrc: mobileHeroRabat, city: "Rabat", subtitle: "The white capital" },
  { src: heroFox, mobileSrc: mobileHeroFox, city: "Desert Fox", subtitle: "Wildlife encounters" },
  { src: heroSnake, mobileSrc: mobileHeroMarrakech, city: "Marrakech", subtitle: "The enchanted square" },
  { src: heroRuins, mobileSrc: mobileHeroDesert, city: "Merzouga Desert", subtitle: "Golden dunes & starry nights" },
  { src: heroMorocco, mobileSrc: mobileHeroRuins, city: "volubilis", subtitle: "Roman ruins" },
  { src: heroTanneries, mobileSrc: mobileHeroFes, city: "Fes Tanneries", subtitle: "Living craft tradition" },
  { src: heroSchool, mobileSrc: mobileHeroSchool, city: "Quranic School", subtitle: "Sacred heritage" },
  { src: heroRad, mobileSrc: mobileHeroRad, city: "Camel Ride", subtitle: "Camel ride in the desert" },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 3000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  return (
    <section id="home" className="relative h-[100svh] min-h-[500px] sm:min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background images with Ken Burns effect */}
      <AnimatePresence mode="sync">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 bg-black"
        >
          {/* Blurred Background for Mobile (using mobile-optimized source on small screens) */}
          <picture className="absolute inset-0 w-full h-full sm:hidden">
            <source media="(max-width: 639px)" srcSet={slide.mobileSrc} />
            <img
              src={slide.src}
              alt="background blur"
              className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-50 scale-110"
            />
          </picture>

          {/* Main Image: object-cover on mobile for new mobile-friendly background, object-cover on desktop */}
          <picture className="absolute inset-0 w-full h-full">
            <source media="(max-width: 639px)" srcSet={slide.mobileSrc} />
            <motion.img
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 8, ease: "easeOut" }}
              src={slide.src}
              alt={slide.city}
              fetchPriority={current === 0 ? "high" : "auto"}
              loading={current === 0 ? "eager" : "lazy"}
              className="w-full h-full object-cover relative z-10"
            />
          </picture>

          {/* Gradients: Reduced top-gradient on mobile to improve text visibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 sm:from-black/30 via-transparent to-black/70 sm:to-black/60 z-20" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-30 container mx-auto px-4 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="font-body text-gold-light text-[10px] sm:text-sm md:text-base tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-4 sm:mb-6 font-medium drop-shadow-md"
        >
          Boutique Travel Designer  &  Private cultural  Guide
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="font-heading text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 sm:mb-8 leading-tight drop-shadow-xl"
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
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center mb-8 sm:mb-12"
          >
            <p className="font-heading text-lg sm:text-2xl md:text-3xl text-white drop-shadow-lg font-bold">
              {slide.city}
            </p>
            <div className="flex items-center gap-4 my-2">
              <span className="w-8 sm:w-12 h-px bg-accent/60" />
              <span className="w-2 h-2 rounded-full bg-accent" />
              <span className="w-8 sm:w-12 h-px bg-accent/60" />
            </div>
            <p className="font-body text-[10px] sm:text-xs md:text-sm text-white/90 uppercase tracking-[0.2em] font-medium">
              {slide.subtitle}
            </p>
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="flex flex-row gap-3 sm:gap-6 justify-center"
        >
          <a
            href="#tours"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-accent px-4 sm:px-10 py-3 sm:py-4 font-body font-bold text-white shadow-lg transition-all hover:scale-105 hover:shadow-orange-500/30 text-[10px] sm:text-base whitespace-nowrap"
          >
            <span className="relative z-10">Explore Our Morocco tours</span>
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-orange-500 to-amber-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </a>
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-full border-2 border-white/30 bg-white/5 backdrop-blur-sm px-4 sm:px-10 py-3 sm:py-4 font-body font-bold text-white transition-all hover:bg-white/20 hover:border-white/50 text-[10px] sm:text-base whitespace-nowrap"
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
        className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 z-30 text-white/70 hover:text-white transition-colors"
      >
        <ChevronDown className="h-8 w-8 sm:h-10 sm:w-10" />
      </motion.a>
    </section>
  );
};

export default HeroSection;
