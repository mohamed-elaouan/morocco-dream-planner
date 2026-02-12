import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Users, MapPin, Star } from "lucide-react";
import galleryRiad from "@/assets/gallery-riad.jpg";

const stats = [
  { icon: Award, label: "Years Experience", value: "17+" },
  { icon: Users, label: "Happy Travelers", value: "5000+" },
  { icon: MapPin, label: "Destinations", value: "50+" },
  { icon: Star, label: "Rating", value: "4.9" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={galleryRiad}
                alt="Traditional Moroccan riad"
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground rounded-2xl p-6 shadow-glow">
              <p className="font-heading text-3xl font-bold">Since</p>
              <p className="font-heading text-4xl font-bold">2007</p>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="font-body text-sm tracking-[0.2em] uppercase text-accent mb-3">About Us</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              RAD Morocco
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-4">
              RAD Morocco is a boutique travel agency founded by <strong className="text-foreground">Radouane EL AOUAN</strong>, a Professional Certified National Tour Leader by the Ministry of Tourism since 2007.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed mb-4">
              As a member of the Tour Guides Federation, Radouane has been organizing and conducting tours around Morocco for groups and individuals. His guiding experience led him to create RAD Morocco, aiming to provide uniquely designed experiences for guests.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed mb-8">
              With excellent collaborations with hotels, transportation agencies, and tour guides across Morocco, we meet the expectations of all different travelers.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <stat.icon className="h-6 w-6 text-accent mx-auto mb-2" />
                  <p className="font-heading text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="font-body text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
