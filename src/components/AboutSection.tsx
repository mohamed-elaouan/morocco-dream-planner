import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Users, MapPin, Star } from "lucide-react";
import aboutImg from "@/assets/About.jpg";

const stats = [
  { icon: Award, label: "Years Experience", value: "18+" },
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
                src={aboutImg}
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
            <p className="font-body text-accent text-sm tracking-widest uppercase mb-4">About Rad Morocco</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              More Than Just a Destination
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-4">
              Morocco is not just a destination — it is a layered, living culture that deserves to be experienced with depth and understanding.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed mb-4">
              Rad Morocco was founded by <strong className="text-foreground">Radouane El Aouan</strong>, a Certified National Tour Guide since 2007, with over 18 years of professional experience in Morocco’s tourism industry.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed mb-4">
              Throughout his career, Rad has worked extensively with American and British travelers, international tour operators, and travel professionals seeking authentic, well-structured experiences. His expertise goes beyond guiding — it includes itinerary design, logistical planning, supplier coordination, and deep on-the-ground knowledge of Morocco’s diverse regions.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed mb-8">
              What distinguishes Rad is not only experience, but perspective. Having worked closely with international markets for nearly two decades, he understands the expectations, travel styles, and standards required to create seamless and meaningful journeys. From the Atlas Mountains to the Sahara, from imperial cities to coastal retreats, every route is designed with precision, realism, and cultural depth.
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
