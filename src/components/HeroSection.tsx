import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-morocco.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Camel caravan in Sahara desert"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

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
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="font-body text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10"
        >
          Personalized journeys crafted by expert guides. From imperial cities to Sahara dunes,
          experience Morocco like never before.
        </motion.p>
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
