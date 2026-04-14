import { motion } from "framer-motion";
import { Clock, ArrowRight, Compass } from "lucide-react";
import toursImperial from "@/assets/Imperial_Cities_Cover.webp";
import galleryChefchaouen from "@/assets/Exotic_Morocco_Cover.webp";
import exoticMorocco from "@/assets/Merzouga/IMG_20201015_144043_920.webp";
import toursDesert from "@/assets/Merzouga/RAD_9265_00001.webp";

export const tours = [
  {
    id: "morocco-highlights",
    title: "Morocco Highlights",
    duration: "12 Days / 11 Nights",
    description: "Discover the diverse landscapes and rich cultural heritage of Morocco on this unforgettable journey. Begin in the vibrant city of Casablanca and the elegant capital Rabat before exploring the fascinating medieval medina of Fez. Travel south through the Middle Atlas toward Erfoud and the spectacular dunes of Merzouga for an unforgettable Sahara experience. Continue through the dramatic landscapes of southern Morocco to Ouarzazate, known as the gateway to the desert, before ending your adventure in the vibrant imperial city of Marrakesh. This 12-day tour offers a perfect blend of imperial cities, desert landscapes, and authentic Moroccan culture.",
    image: exoticMorocco,
    highlights: ["Guided tours of Imperial Cities", "Sahara Desert camel trek", "Stay in a traditional Kasbah", "Explore bustling Souks"],
  },
  {
    id: "northern-morocco-discovery",
    title: "Northern Morocco Discovery",
    duration: "8 Days / 7 Nights",
    description: "Experience the cultural and scenic beauty of northern Morocco on this captivating journey. Begin in the vibrant city of Casablanca and the elegant capital Rabat before exploring the historic medinas of Fez and the imperial city of Meknes. Continue to the famous blue town of Chefchaouen nestled in the Rif Mountains, then discover the Andalusian charm of Tetouan. Your journey ends in the cosmopolitan port city of Tangier, where Africa meets Europe. This tour offers a perfect blend of history, culture, and stunning landscapes.",
    image: galleryChefchaouen,
    highlights: ["Chefchaouen Blue City", "Ancient Roman Ruins of Volubilis", "Fez Medina UNESCO site", "Coastal Tangier views"],
  },
  {
    id: "imperial-cities",
    title: "Imperial Cities of Morocco",
    duration: "8 Days / 7 Nights",
    description: "Explore Morocco’s rich history and cultural heritage on this fascinating journey through its legendary imperial cities. From the modern energy of Casablanca to the historic charm of Rabat, the grandeur of Meknes, the ancient medina of Fez, and the vibrant souks of Marrakesh, this 8-day journey offers an unforgettable introduction to Morocco’s imperial legacy, colorful traditions, and timeless architecture. Discover lively markets, historic monuments, and authentic Moroccan culture along the way.",
    image: toursImperial,
    highlights: ["All 4 Imperial Cities", "Guided historical tours", "Premium Riad accommodations", "Bahia Palace & Koutoubia"],
  },
  {
    id: "desert-escape",
    title: "Desert Escape Tour",
    duration: "6 Days / 5 Nights",
    description: "Embark on an unforgettable journey from Marrakesh into the heart of southern Morocco. Cross the spectacular Tizi n'Tichka Pass and discover the desert gateway of Ouarzazate before continuing to the palm groves of Zagora. Travel deeper into the Sahara to experience the majestic dunes of Merzouga, where camel rides and magical desert sunsets await. This journey offers dramatic landscapes, traditional Berber culture, and an authentic Sahara adventure before returning to Marrakesh.",
    image: toursDesert,
    highlights: ["Merzouga Dunes at sunset", "Ait Ben Haddou Kasbah", "Atlas Mountains crossing", "Night under the stars"],
  },
];

const ToursSection = () => {
  return (
    <section id="tours" className="py-24 md:py-32 bg-secondary/10">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16 md:mb-24 flex flex-col items-center"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-semibold text-sm mb-6 shadow-sm border border-accent/20">
            <Compass className="w-4 h-4" />
            Private Morocco Tours
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
            Our Luxury Private Morocco Tours
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Explore Morocco with a private guide and custom-designed itinerary. Every tour is tailored to your interests — from Imperial Cities and Sahara Desert adventures to cultural deep-dives and coastal escapes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-10 lg:gap-12">
          {tours.map((tour, i) => {
            const tourSlug = tour.title.toLowerCase().replace(/\s+/g, '-');
            return (
            <motion.div
              key={tour.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.15, ease: "easeOut" }}
              className="group flex flex-col bg-background rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl border border-border/50 transition-all duration-500"
            >
              <div className="relative h-72 sm:h-80 md:h-96 overflow-hidden">
                <img
                  src={tour.image}
                  alt={tour.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 transition-colors duration-500 group-hover:bg-black/10" />
                <div className="absolute bottom-6 right-6 bg-background/95 backdrop-blur-md px-5 py-2.5 rounded-full flex items-center gap-2.5 shadow-md transition-transform duration-500 group-hover:-translate-y-1">
                  <Clock className="w-4 h-4 text-accent" />
                  <span className="text-sm font-bold text-foreground">{tour.duration}</span>
                </div>
              </div>

              <div className="p-8 sm:p-10 flex flex-col flex-grow">
                <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors duration-300">
                  {tour.title}
                </h3>
                
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-8 flex-grow">
                  {tour.description}
                </p>

                <div className="pt-6 border-t border-border/60 flex items-center justify-between mt-auto">
                  <a
                    href={`/tours/${tour.id}`}
                    className="inline-flex items-center gap-2 text-base font-semibold text-foreground transition-all group-hover:text-accent group-hover:gap-3"
                  >
                    View Tour Details <ArrowRight className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          )})}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-16 text-center flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-4 font-body font-bold text-accent-foreground shadow-lg transition-all hover:scale-105 hover:shadow-glow text-base w-full sm:w-auto"
          >
            Design Your Journey
          </a>
          <a
            href="/#about"
            className="inline-flex items-center justify-center rounded-full border-2 border-foreground/10 bg-background px-8 py-4 font-body font-bold text-foreground transition-all hover:border-foreground/30 hover:bg-muted text-base w-full sm:w-auto"
          >
            Discover who we are <ArrowRight className="h-5 w-5 ml-2" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ToursSection;
