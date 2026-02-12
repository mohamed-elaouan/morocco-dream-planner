import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, MapPin, ArrowRight } from "lucide-react";
import toursImperial from "@/assets/tours-imperial.jpg";
import toursDesert from "@/assets/tours-desert.jpg";
import galleryChefchaouen from "@/assets/gallery-chefchaouen.jpg";
import galleryDesertCamp from "@/assets/gallery-desert-camp.jpg";

const tours = [
  {
    title: "Imperial Cities",
    duration: "8 Days / 7 Nights",
    route: "Casablanca → Rabat → Volubilis → Meknes → Fes → Beni Mellal → Marrakech",
    image: toursImperial,
    accent: "hsl(38 70% 55%)",
  },
  {
    title: "Morocco Gems",
    duration: "12 Days / 11 Nights",
    route: "Casablanca → Rabat → Fes → Midelt → Merzouga → Tinghir → Ouarzazate → Marrakech",
    image: galleryChefchaouen,
    accent: "hsl(200 70% 50%)",
  },
  {
    title: "Exotic Morocco",
    duration: "14 Days / 13 Nights",
    route: "Casablanca → Chefchaouen → Fes → Merzouga → Ouarzazate → Marrakech → Essaouira",
    image: galleryDesertCamp,
    accent: "hsl(15 60% 50%)",
  },
  {
    title: "Desert Escape",
    duration: "12 Days / 11 Nights",
    route: "Marrakech → Ouarzazate → Zagora → Merzouga → Tinghir → Dades → Marrakech",
    image: toursDesert,
    accent: "hsl(30 55% 55%)",
  },
];

const ToursSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="tours" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <p className="font-body text-sm tracking-[0.2em] uppercase text-accent mb-3">Journeys Around Morocco</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Popular Tours
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            Let us know what you're looking for, and we'll put it together for you.
            Custom-designed itineraries tailored to your preferences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {tours.map((tour, i) => (
            <motion.div
              key={tour.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15 }}
              className="group relative rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-500 cursor-pointer"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-heading text-2xl font-bold text-primary-foreground mb-2">
                  {tour.title}
                </h3>
                <div className="flex items-center gap-4 mb-3">
                  <span className="flex items-center gap-1 text-sm text-primary-foreground/80">
                    <Clock className="h-4 w-4" />
                    {tour.duration}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-sm text-primary-foreground/70 mb-4">
                  <MapPin className="h-4 w-4 shrink-0" />
                  <span className="line-clamp-1">{tour.route}</span>
                </div>
                <a
                  href="#reservation"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-accent transition-all group-hover:gap-3"
                >
                  Start Planning <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToursSection;
