import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, MapPin, Clock } from "lucide-react";
import casablanca from "@/assets/casablanca-mosque.jpg";
import rabat from "@/assets/rabat-hassan.jpg";
import marrakech from "@/assets/marrakech-square.jpg";
import tangier from "@/assets/hero-tangier.jpg";

// City-specific images from folders
import casa02 from "@/assets/Casablanca/photo_5841450531434905176_y.jpg";
import casa03 from "@/assets/Casablanca/photo_5843702331248589694_y.jpg";
import rabat01 from "@/assets/Rabat/photo_5834557504061817673_y.jpg";
import fes01 from "@/assets/Fes/photo_5834557504061817699_y.jpg";

const trips = [
  {
    city: "Hidden gems of Casablanca",
    description: "A half-day experience discovering the stories that bring Casablanca to life. Visit Hassan II Mosque, the French Art Deco district, UN & Mohammed V Squares, and the Habous Quarter.",
    image: casablanca,
    duration: "Half Day",
    highlights: ["Hassan II Mosque", "Art Deco District", "Habous Quarter", "UN Square"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    city: "Food tasting tour of Casablanca",
    description: "Embark on a delicious adventure beyond tourist spots. Experience real cultural life where flavors, aromas, and traditions come together in authentic local eateries.",
    image: casa02,
    duration: "4 Hours",
    highlights: ["Local Eateries", "Street Food", "Cultural Gems", "Authentic Flavors"],
    color: "from-orange-500 to-amber-500",
  },
  {
    city: "Jewish heritage tour",
    description: "Explore Casablanca's rich Jewish history, synagogues, and the Mellah. Visit the Museum of Moroccan Judaism, Beth-El Synagogue, and learn about the community's resilience.",
    image: casa03,
    duration: "Half Day",
    highlights: ["Museum of Judaism", "Beth-El Synagogue", "Mellah", "Jewish Cemetery"],
    color: "from-purple-500 to-indigo-500",
  },
  {
    city: "Explore Rabat - Day trip",
    description: "Discover Morocco's refined capital where tradition meets modernity. Visit Hassan Tower, Mausoleum of Mohammed V, and the charming Kasbah of the Udayas.",
    image: rabat01,
    duration: "Full Day",
    highlights: ["Hassan Tower", "Mausoleum", "Kasbah Udayas", "Royal Heritage"],
    color: "from-emerald-500 to-teal-500",
  },
  {
    city: "Explore Marrakech - Day trip",
    description: "Experience the energy of the Red City. Discover Koutoubia Mosque, Bahia Palace, Jemaa el-Fnaa square, and the historic medina on this full-day journey.",
    image: marrakech,
    duration: "Full Day",
    highlights: ["Koutoubia Mosque", "Bahia Palace", "Jemaa el-Fnaa", "Medina & Souks"],
    color: "from-red-500 to-rose-500",
  },
  {
    city: "Day Trip to Tangier via Fast Train",
    description: "Hop on a high-speed train to Morocco's gateway to Europe. Wander the medina, enjoy the scenic waterfront, and soak up the unique Mediterranean charm.",
    image: tangier,
    duration: "Full Day",
    highlights: ["High-speed Train", "Medina", "Scenic Waterfront", "Mediterranean Charm"],
    color: "from-sky-500 to-blue-500",
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
          <p className="font-body text-sm tracking-[0.2em] uppercase text-accent mb-3">Popular Journeys</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            City Tours & Day Trips
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            Our most requested journeys, carefully designed to balance culture, scenery, and authenticity.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trips.map((trip, i) => (
            <motion.div
              key={trip.city}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15 }}
              className="group relative bg-card rounded-3xl overflow-hidden shadow-card hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image with overlay */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={trip.image}
                  alt={trip.city}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${trip.color} opacity-20 group-hover:opacity-30 transition-opacity`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                
                {/* Duration badge */}
                <div className="absolute top-4 right-4 flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg">
                  <Clock className="h-3.5 w-3.5 text-accent" />
                  <span className="text-xs font-semibold text-foreground">{trip.duration}</span>
                </div>
                
                {/* City name */}
                <h3 className="absolute bottom-4 left-5 right-5 font-heading text-2xl md:text-xl lg:text-2xl font-bold text-white leading-tight drop-shadow-lg">
                  {trip.city}
                </h3>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-5 line-clamp-3">
                  {trip.description}
                </p>
                
                {/* Highlights */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {trip.highlights.slice(0, 4).map((h) => (
                    <span key={h} className="text-xs font-body font-medium bg-accent/10 text-accent px-3 py-1.5 rounded-full border border-accent/20">
                      {h}
                    </span>
                  ))}
                </div>
                
                {/* CTA */}
                <a
                  href="#reservation"
                  className="group/btn inline-flex items-center gap-2 text-sm font-bold text-accent hover:gap-3 transition-all"
                >
                  Book This Trip 
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
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
