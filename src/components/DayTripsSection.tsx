import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import casablanca from "@/assets/casablanca-mosque.jpg";
import rabat from "@/assets/rabat-hassan.jpg";
import marrakech from "@/assets/marrakech-square.jpg";

const trips = [
  {
    city: "From Rabat",
    description: "Explore the capital city with its historic Kasbah of the Udayas, Hassan Tower, and the charming medina. Day trips to Salé, Meknes, and Volubilis.",
    image: rabat,
    highlights: ["Hassan Tower", "Kasbah Udayas", "Chellah Ruins", "Royal Palace"],
  },
  {
    city: "From Casablanca",
    description: "Visit the iconic Hassan II Mosque, stroll along the Corniche, and explore the Art Deco architecture. Day trips to El Jadida, Azemmour, and beyond.",
    image: casablanca,
    highlights: ["Hassan II Mosque", "Old Medina", "Corniche", "Art Deco Quarter"],
  },
  {
    city: "From Marrakech",
    description: "Immerse yourself in the vibrant Jemaa el-Fnaa, explore the souks, and visit stunning palaces. Day trips to Ourika Valley, Essaouira, and Atlas Mountains.",
    image: marrakech,
    highlights: ["Jemaa el-Fnaa", "Majorelle Garden", "Bahia Palace", "Atlas Mountains"],
  },
];

const DayTripsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="daytrips" className="py-24 bg-gradient-section">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <p className="font-body text-sm tracking-[0.2em] uppercase text-accent mb-3">Explore Nearby</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Morocco Day Trips
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            Perfect for those with limited time. Discover Morocco's gems in single-day excursions from major cities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {trips.map((trip, i) => (
            <motion.div
              key={trip.city}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.2 }}
              className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-500"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={trip.image}
                  alt={trip.city}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                <h3 className="absolute bottom-4 left-6 font-heading text-2xl font-bold text-primary-foreground">
                  {trip.city}
                </h3>
              </div>
              <div className="p-6">
                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
                  {trip.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {trip.highlights.map((h) => (
                    <span key={h} className="text-xs font-body font-medium bg-muted text-muted-foreground px-3 py-1 rounded-full">
                      {h}
                    </span>
                  ))}
                </div>
                <a
                  href="#reservation"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:gap-3 transition-all"
                >
                  Book Day Trip <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DayTripsSection;
