import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Users, MapPin, Star } from "lucide-react";
import aboutImg from "@/assets/image.png";

const stats = [
  { icon: Award, label: "Professional Experience", value: "18+ Yrs" },
  { icon: Users, label: "Satisfied Travelers", value: "5000+" },
  { icon: MapPin, label: "Moroccan Regions", value: "12" },
  { icon: Star, label: "Expert Guided Tours", value: "1000+" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32 bg-gradient-section relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 -z-10" />

      <div className="container mx-auto px-4 sm:px-6">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-2 lg:order-1"
          >
            <div className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold tracking-[0.2em] uppercase mb-6">
              Who We Are
            </div>
            
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-8 leading-[1.1]">
              More Than Just <br />
              <span className="text-accent underline decoration-accent/20 underline-offset-8">a Destination</span>
            </h2>

            <div className="space-y-6 text-muted-foreground">
              <p className="font-body text-lg leading-relaxed italic border-l-4 border-accent/30 pl-6 py-1">
                "Morocco is not just a destination — it is a layered, living culture that deserves to be experienced with depth and understanding."
              </p>
              
              <p className="font-body text-base md:text-lg leading-relaxed">
                Rad Morocco was founded by <strong className="text-foreground">Radouane El Aouan</strong>, a Certified National Tour Guide since 2007, with over 18 years of professional experience in Morocco's tourism industry.
              </p>
              
              <p className="font-body text-base md:text-lg leading-relaxed">
                Throughout his career, Rad has worked extensively with international travelers and professionals seeking authentic, well-structured experiences. His expertise goes beyond guiding — it includes <span className="text-foreground font-medium">itinerary design, logistical planning, and deep on-the-ground knowledge</span> of Morocco's diverse regions.
              </p>
              
              <p className="font-body text-base md:text-lg leading-relaxed font-medium text-foreground/80">
                From the Atlas Mountains to the Sahara, from imperial cities to coastal retreats, every route is designed with precision, realism, and cultural depth.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-12 border-t border-border/50">
              {stats.map((stat, i) => (
                <motion.div 
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + (i * 0.1) }}
                  className="flex flex-col items-center p-4 rounded-2xl bg-white/40 backdrop-blur-sm border border-border/40 hover:border-accent/40 shadow-sm transition-all hover:shadow-md hover:-translate-y-1"
                >
                  <stat.icon className="h-6 w-6 text-accent mb-3" />
                  <p className="font-heading text-xl sm:text-2xl font-bold text-foreground mb-1">{stat.value}</p>
                  <p className="font-body text-[10px] sm:text-xs text-muted-foreground text-center font-medium leading-tight">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image Component */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative flex items-center justify-center order-1 lg:order-2"
          >
            {/* Visual Layers */}
            <div className="absolute -inset-6 sm:-inset-8 rounded-[3rem] bg-gradient-to-br from-accent/20 via-transparent to-accent/10 opacity-60 -z-10 animate-pulse-slow" />
            
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white group">
              <img
                src={aboutImg}
                alt="Radouane El Aouan - Founder of Rad Morocco"
                className="w-full h-auto max-h-[500px] object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Floating Since Badge */}
            <motion.div 
              initial={{ scale: 0, rotate: -15 }}
              animate={isInView ? { scale: 1, rotate: -10 } : {}}
              transition={{ type: "spring", stiffness: 100, delay: 0.8 }}
              className="absolute -bottom-6 -right-6 sm:-bottom-8 sm:-right-8 bg-foreground text-background rounded-3xl p-6 sm:p-8 shadow-glow border-2 border-accent/20 z-20"
            >
              <p className="font-heading text-sm text-accent font-bold uppercase tracking-widest mb-1 text-center">Since</p>
              <p className="font-heading text-4xl sm:text-5xl font-black italic">2007</p>
            </motion.div>

            {/* Decorative dot grid */}
            <div className="absolute -top-12 -left-12 w-24 h-24 grid grid-cols-4 gap-2 opacity-20 hidden md:grid">
              {[...Array(16)].map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 rounded-full bg-accent" />
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
