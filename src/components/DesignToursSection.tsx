import { motion } from "framer-motion";
import { Compass, ArrowRight } from "lucide-react";

const DesignToursSection = () => {
  return (
    <section className="py-24 md:py-32 bg-secondary/30 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 -z-10" />
      
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-semibold text-sm mb-6 border border-accent/20">
              <Compass className="w-4 h-4" />
              Tailored Experiences
            </span>
            
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-8 leading-tight">
              Design Tours
            </h2>
            
            <div className="space-y-6 mb-12">
              <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed">
                Because of our excellent contact list and collaborations, RAD offers its customers luxury private à la carte services. We are specialized in creating premier personalized experiences to meet your needs and requirements.
              </p>
              <p className="font-body text-lg md:text-xl text-foreground font-medium italic border-l-4 border-accent pl-6 py-2 inline-block text-left">
                As an Expert Tour Planner, I will design tours that meet your expectations.
              </p>
            </div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="/design-tours"
                className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-4 font-body font-bold text-accent-foreground shadow-lg transition-all hover:shadow-glow text-lg gap-2"
              >
                Check our Design Tours
                <ArrowRight className="h-5 w-5" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DesignToursSection;
