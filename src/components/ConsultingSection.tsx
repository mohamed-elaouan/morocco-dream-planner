import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, Calendar, Map, Compass, BookOpen, Clock, PenTool } from "lucide-react";
import founderImg from "@/assets/image.png";

const benefits = [
  { icon: Clock, text: "Private 30-minute strategy session" },
  { icon: Map, text: "Tailored route and pacing recommendations" },
  { icon: BookOpen, text: "Curated riad and hotel suggestions" },
  { icon: Compass, text: "Insider cultural and logistical insights" },
  { icon: PenTool, text: "A clear, realistic travel plan built around your style" },
  { icon: CheckCircle2, text: "Option for a bespoke written itinerary" }
];

const ConsultingSection = ({ onRequestSession }: { onRequestSession?: () => void }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="consulting" className="py-24 md:py-32 bg-gradient-section relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2 -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-y-1/2 translate-x-1/2 -z-10" />

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
              Design Your Journey
            </div>
            
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 leading-[1.1]">
              Private Travel <br />
              <span className="text-accent underline decoration-accent/20 underline-offset-8">Consulting</span>
            </h2>
            
            <p className="font-body text-muted-foreground leading-relaxed mb-10 text-base md:text-lg">
              Plan your Morocco experience with the guidance of a certified national tour guide with over 18 years of professional expertise. This private consulting service is designed for discerning travelers who want a perfectly structured itinerary — without booking a tour.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + (index * 0.1) }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white border border-border/50 hover:border-accent/30 shadow-sm transition-all hover:shadow-md group"
                >
                  <div className="mt-0.5 p-1.5 rounded-md bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                    <benefit.icon className="h-4 w-4 shrink-0" />
                  </div>
                  <p className="font-body text-foreground/80 text-sm md:text-base font-medium leading-tight">{benefit.text}</p>
                </motion.div>
              ))}
            </div>

            <div className="bg-accent/5 p-4 sm:p-5 rounded-xl mb-10 border-l-4 border-accent">
              <p className="font-body text-sm font-medium text-foreground/70 italic">
                * This is a consulting service only. No reservations or operational services are included.
              </p>
            </div>

            <a
              href="#consulting-booking-form"
              onClick={(e) => {
                e.preventDefault();
                if (onRequestSession) {
                  onRequestSession();
                } else {
                  const element = document.getElementById("consulting-booking-form");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }
              }}
              className="inline-flex items-center justify-center gap-3 rounded-full bg-accent px-8 py-4 font-body font-bold text-accent-foreground text-base transition-all hover:shadow-glow hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto"
            >
              <Calendar className="h-5 w-5" />
              Request Your Private Session
            </a>
          </motion.div>

           {/* Visual/Image rich composition */}
           <motion.div 
             initial={{ opacity: 0, x: 40 }}
             animate={isInView ? { opacity: 1, x: 0 } : {}}
             transition={{ duration: 0.8 }}
             className="relative min-h-[400px] lg:min-h-[600px] flex items-center justify-center order-1 lg:order-2"
           >
             {/* Visual Layers */}
             <div className="absolute -inset-6 sm:-inset-8 rounded-[3rem] bg-gradient-to-br from-accent/20 via-transparent to-accent/10 opacity-60 -z-10 animate-pulse-slow" />
             
             {/* Main Background Image */}
             <div className="relative w-full max-w-md lg:max-w-lg mx-auto rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white group">
               <img 
                 src={founderImg} 
                 alt="Radouane El Aouan Travel Consultant" 
                 className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-105"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
             </div>

             {/* Floating Glass Card (Light Mode Theme) */}
             <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute -bottom-6 -left-4 sm:bottom-8 sm:-left-8 right-4 sm:right-auto sm:w-80 bg-white/90 backdrop-blur-md p-5 sm:p-6 rounded-2xl border border-white/50 shadow-xl z-20"
             >
                <div className="w-10 h-1 bg-accent rounded-full mb-4" />
                <h3 className="font-heading text-lg sm:text-xl font-bold mb-2 text-foreground">A Refined Approach</h3>
                <p className="font-body text-muted-foreground mb-3 text-xs sm:text-sm leading-relaxed">
                  Morocco is complex, layered, and deeply cultural. Thoughtful planning makes the difference between a good trip and an exceptional one.
                </p>
                <p className="font-body text-foreground font-medium text-xs sm:text-sm">
                  Share your travel dates and vision, and we will design your journey with precision.
                </p>
             </motion.div>
             
             {/* Decorative dot grid */}
             <div className="absolute -top-6 -right-6 w-24 h-24 grid grid-cols-4 gap-2 opacity-20 hidden lg:grid z-20">
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

export default ConsultingSection;

