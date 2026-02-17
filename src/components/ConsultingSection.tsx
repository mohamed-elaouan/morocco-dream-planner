import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, Calendar } from "lucide-react";
import gallerySouk from "@/assets/gallery-souk.jpg";

const benefits = [
  "Private 30-minute strategy session",
  "Tailored route and pacing recommendations",
  "Curated riad and hotel suggestions",
  "Insider cultural and logistical insights",
  "A clear, realistic travel plan built around your style",
  "Option for a bespoke written itinerary"
];

const ConsultingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="consulting" className="py-20 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center"
        >
          {/* Text Content */}
          <div>
            <p className="font-body text-accent text-sm tracking-widest uppercase mb-4">Design Your Journey</p>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
              Private Travel Consulting
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-6 text-sm md:text-base">
              Plan your Morocco experience with the guidance of a certified national tour guide with over 18 years of professional expertise. This private consulting service is designed for discerning travelers who want a perfectly structured itinerary — without booking a tour.
            </p>
            
            <div className="space-y-3 sm:space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <p className="font-body text-foreground text-sm md:text-base">{benefit}</p>
                </div>
              ))}
            </div>

            <div className="bg-muted/30 p-4 sm:p-6 rounded-xl mb-8 border border-border/50">
              <p className="font-body text-sm text-muted-foreground italic">
                * This is a consulting service only. No reservations or operational services are included.
              </p>
            </div>

            <a
              href="#travel-consulting-form"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 sm:px-8 py-3 sm:py-4 font-body font-semibold text-accent-foreground transition-all hover:shadow-glow hover:scale-[1.02]"
            >
              <Calendar className="h-4 w-4" />
              Request Your Private Session
            </a>
          </div>

           {/* Visual/Image rich composition */}
           <div className="relative min-h-[300px] sm:min-h-[400px] lg:min-h-[500px]">
             {/* Main Background Image */}
             <div className="absolute inset-0 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl transition-transform duration-700 hover:rotate-1">
               <img 
                 src={gallerySouk} 
                 alt="Vibrant Moroccan Souk" 
                 className="w-full h-full object-cover"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
             </div>

             {/* Floating Glass Card */}
             <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 bg-white/10 backdrop-blur-md p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-white/20 shadow-xl text-white">
                <h3 className="font-heading text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-white">A Refined Approach</h3>
                <p className="font-body text-white/90 mb-2 sm:mb-3 text-xs sm:text-sm leading-relaxed">
                  Morocco is complex, layered, and deeply cultural. Thoughtful planning makes the difference between a good trip and an exceptional one.
                </p>
                <p className="font-body text-white/90 text-xs sm:text-sm">
                  Share your travel dates and vision, and we will design your journey with precision.
                </p>
             </div>
           </div>

        </motion.div>
      </div>
    </section>
  );
};

export default ConsultingSection;

