import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import galleryChefchaouen from "@/assets/gallery-chefchaouen.jpg";
import galleryRiad from "@/assets/gallery-riad.jpg";
import galleryDesertCamp from "@/assets/gallery-desert-camp.jpg";
import gallerySouk from "@/assets/gallery-souk.jpg";
import galleryEssaouira from "@/assets/gallery-essaouira.jpg";
import heroMorocco from "@/assets/hero-morocco.jpg";
import casablanca from "@/assets/casablanca-mosque.jpg";
import rabat from "@/assets/rabat-hassan.jpg";
import marrakech from "@/assets/marrakech-square.jpg";
import toursImperial from "@/assets/tours-imperial.jpg";
import toursDesert from "@/assets/tours-desert.jpg";

// New Assets
import happy01 from "@/assets/Happy_Travel/photo_5825444253474602549_y.jpg";
import happy02 from "@/assets/Happy_Travel/photo_5825444253474602550_y.jpg";
import happy03 from "@/assets/Happy_Travel/photo_5825444253474602552_y.jpg";
import happy04 from "@/assets/Happy_Travel/photo_5848272747682184103_y.jpg";
import happy05 from "@/assets/Happy_Travel/photo_5825444253474602553_y.jpg";
import happy06 from "@/assets/Happy_Travel/photo_5825444253474602554_y.jpg";
import happy07 from "@/assets/Happy_Travel/photo_5825444253474602555_y.jpg";
import happy08 from "@/assets/Happy_Travel/photo_5825444253474602556_y.jpg";
import happy09 from "@/assets/Happy_Travel/photo_5825444253474602557_y.jpg";
import happy10 from "@/assets/Happy_Travel/photo_5848272747682184105_y.jpg";
import happy11 from "@/assets/Happy_Travel/photo_5848272747682184118_y.jpg";
import happy12 from "@/assets/Happy_Travel/photo_5848272747682184120_y.jpg";
import happy13 from "@/assets/Happy_Travel/photo_5848272747682184121_y.jpg";
import happy14 from "@/assets/Happy_Travel/photo_5848272747682184123_y.jpg";
import happy15 from "@/assets/Happy_Travel/photo_5848272747682184124_y.jpg";
import happy16 from "@/assets/Happy_Travel/photo_5848272747682184125_y.jpg";
import happy17 from "@/assets/Happy_Travel/photo_5848272747682184126_y.jpg";

import casa01 from "@/assets/Casablanca/photo_5834557504061817686_y.jpg";
import casa02 from "@/assets/Casablanca/photo_5841450531434905176_y.jpg";
import casa03 from "@/assets/Casablanca/photo_5843702331248589694_y.jpg";
import casa04 from "@/assets/Casablanca/photo_5834557504061817677_y.jpg";
import casa05 from "@/assets/Casablanca/photo_5834557504061817678_y.jpg";
import casa06 from "@/assets/Casablanca/photo_5841450531434905177_y.jpg";
import casa07 from "@/assets/Casablanca/photo_5841450531434905178_y.jpg";
import casa08 from "@/assets/Casablanca/photo_5843702331248589702_y.jpg";
import casa09 from "@/assets/Casablanca/photo_5848272747682184099_y.jpg";
import casa10 from "@/assets/Casablanca/photo_5848272747682184116_y.jpg";

import fes01 from "@/assets/Fes/photo_5834557504061817699_y.jpg";
import fes02 from "@/assets/Fes/photo_5834557504061817700_y.jpg";
import fes03 from "@/assets/Fes/photo_5834557504061817703_y.jpg";
import fes04 from "@/assets/Fes/photo_5834557504061817701_y.jpg";
import fes05 from "@/assets/Fes/photo_5834557504061817702_y.jpg";

import rabat01 from "@/assets/Rabat/photo_5834557504061817673_y.jpg";
import rabat02 from "@/assets/Rabat/photo_5834557504061817676_y.jpg";
import rabat03 from "@/assets/Rabat/photo_5825444253474602553_y.jpg";
import rabat04 from "@/assets/Rabat/photo_5825444253474602556_y.jpg";

import sahara01 from "@/assets/Sahara/photo_5832194670753594710_y.jpg";
import sahara02 from "@/assets/Sahara/photo_5834557504061817689_y.jpg";
import sahara03 from "@/assets/Sahara/photo_5834557504061817695_y.jpg";
import sahara04 from "@/assets/Sahara/photo_5834557504061817696_y.jpg";

type Category = "all" | "family" | "marrakech" | "desert" | "imperial" | "coastal" | "happy" | "rabat" | "fes" | "casablanca" | "sahara";

const categories: { key: Category; label: string }[] = [
  { key: "all", label: "All" },
  { key: "happy", label: "Happy Travelers" },
  { key: "family", label: "Family Trips" },
  { key: "sahara", label: "Sahara" },
  { key: "marrakech", label: "Marrakech" },
  { key: "fes", label: "Fes" },
  { key: "rabat", label: "Rabat" },
  { key: "casablanca", label: "Casablanca" },
  { key: "imperial", label: "Imperial Cities" },
  { key: "coastal", label: "Coastal Escapes" },
  { key: "desert", label: "Desert Adventures" },
];

const images: { src: string; alt: string; category: Category[]; span: string }[] = [
  // Original gallery images
  { src: galleryChefchaouen, alt: "Chefchaouen Blue City", category: ["family", "imperial"], span: "col-span-1 row-span-2" },
  { src: galleryRiad, alt: "Traditional Riad", category: ["family", "marrakech"], span: "col-span-1 row-span-2" },
  { src: galleryDesertCamp, alt: "Desert Luxury Camp", category: ["family", "desert", "sahara"], span: "col-span-1 row-span-1" },
  { src: gallerySouk, alt: "Moroccan Souk", category: ["marrakech", "family"], span: "col-span-1 row-span-2" },
  { src: heroMorocco, alt: "Sahara Camel Caravan", category: ["desert", "family", "sahara"], span: "md:col-span-2 row-span-2" },
  { src: galleryEssaouira, alt: "Essaouira Harbor", category: ["coastal", "family"], span: "col-span-1 row-span-2" },
  { src: casablanca, alt: "Hassan II Mosque", category: ["imperial", "coastal", "casablanca"], span: "col-span-1 row-span-1" },
  { src: rabat, alt: "Hassan Tower Rabat", category: ["imperial", "family", "rabat"], span: "col-span-1 row-span-1" },
  { src: marrakech, alt: "Jemaa el-Fnaa Square", category: ["marrakech", "family"], span: "col-span-1 row-span-1" },
  { src: toursImperial, alt: "Kasbah Ait Ben Haddou", category: ["imperial", "desert"], span: "md:col-span-2 row-span-1" },
  { src: toursDesert, alt: "Desert Dunes Sunset", category: ["desert", "sahara"], span: "md:col-span-2 row-span-1" },
  
  // Happy Travelers - Large feature images
  { src: happy01, alt: "Happy Travelers in Morocco", category: ["happy", "family"], span: "md:col-span-2 row-span-1" },
  { src: happy10, alt: "Team Adventures", category: ["happy", "family"], span: "md:col-span-2 row-span-1" },
  { src: happy09, alt: "Desert Explorers", category: ["happy", "sahara", "desert"], span: "md:col-span-2 row-span-1" },
  { src: happy14, alt: "City Tours", category: ["happy", "family"], span: "col-span-1 row-span-2" },
  
  // Happy Travelers - Medium to large
  { src: happy03, alt: "Smiles in the Desert", category: ["happy", "sahara", "desert"], span: "col-span-1 row-span-2" },
  { src: happy04, alt: "Travel Memories", category: ["happy", "family"], span: "md:col-span-2 row-span-1" },
  { src: happy05, alt: "Moroccan Adventure", category: ["happy", "family"], span: "col-span-1 row-span-2" },
  { src: happy12, alt: "Market Visits", category: ["happy", "family"], span: "col-span-1 row-span-1" },
  { src: happy11, alt: "Heritage Discovery", category: ["happy", "imperial"], span: "col-span-1 row-span-1" },
  { src: happy15, alt: "Cultural Tours", category: ["happy", "imperial"], span: "col-span-1 row-span-1" },
  
  // Happy Travelers - Smaller images
  { src: happy13, alt: "Sunset Memories", category: ["happy", "desert"], span: "col-span-1 row-span-1" },
  { src: happy16, alt: "Group Excursions", category: ["happy", "family"], span: "col-span-1 row-span-1" },
  { src: happy17, alt: "Morocco Memories", category: ["happy", "family"], span: "col-span-1 row-span-1" },
  { src: happy02, alt: "Group Tour Fun", category: ["happy", "family"], span: "col-span-1 row-span-1" },
  { src: happy08, alt: "Journey Moments", category: ["happy", "family"], span: "col-span-1 row-span-1" },
  { src: happy07, alt: "Local Encounters", category: ["happy", "family"], span: "col-span-1 row-span-1" },
  { src: happy06, alt: "Cultural Experience", category: ["happy", "family"], span: "col-span-1 row-span-1" },
  
  // Casablanca - Large images
  { src: casa06, alt: "Casa Heritage", category: ["casablanca", "imperial"], span: "col-span-1 row-span-2" },
  { src: casa01, alt: "Casablanca Streets", category: ["casablanca", "imperial"], span: "md:col-span-2 row-span-1" },
  { src: casa03, alt: "Casablanca Views", category: ["casablanca"], span: "col-span-1 row-span-2" },
  { src: casa08, alt: "Casa Marina", category: ["casablanca", "coastal"], span: "md:col-span-2 row-span-1" },
  { src: casa05, alt: "Modern Casablanca", category: ["casablanca", "coastal"], span: "col-span-1 row-span-1" },
  
  // Casablanca - Medium/small
  { src: casa07, alt: "Art Deco District", category: ["casablanca"], span: "col-span-1 row-span-1" },
  { src: casa09, alt: "Habous Quarter", category: ["casablanca", "imperial"], span: "col-span-1 row-span-1" },
  { src: casa04, alt: "Casa Architecture", category: ["casablanca", "imperial"], span: "col-span-1 row-span-1" },
  { src: casa02, alt: "Casablanca Corniche", category: ["casablanca", "coastal"], span: "col-span-1 row-span-1" },
  { src: casa10, alt: "Casa Charm", category: ["casablanca"], span: "col-span-1 row-span-1" },
  
  // Fes - Very large images
  { src: fes03, alt: "Fes Mosaic", category: ["fes", "imperial"], span: "md:col-span-2 row-span-2" },
  { src: fes04, alt: "Fes Beauty", category: ["fes", "imperial"], span: "col-span-1 row-span-2" },
  { src: fes02, alt: "Fes Medina", category: ["fes", "imperial"], span: "col-span-1 row-span-2" },
  { src: fes05, alt: "Fes Heritage", category: ["fes", "imperial"], span: "md:col-span-2 row-span-1" },
  { src: fes01, alt: "Fes Tanneries", category: ["fes", "imperial"], span: "col-span-1 row-span-1" },
  
  // Rabat - Medium images
  { src: rabat02, alt: "Rabat Kasbah", category: ["rabat", "imperial"], span: "col-span-1 row-span-2" },
  { src: rabat01, alt: "Rabat Architecture", category: ["rabat", "imperial"], span: "col-span-1 row-span-2" },
  { src: rabat03, alt: "Rabat Modern", category: ["rabat", "imperial"], span: "col-span-1 row-span-1" },
  { src: rabat04, alt: "Capital Charm", category: ["rabat", "imperial"], span: "col-span-1 row-span-1" },
  
  // Sahara - Small to medium
  { src: sahara02, alt: "Desert Dunes", category: ["sahara", "desert"], span: "col-span-1 row-span-2" },
  { src: sahara04, alt: "Sahara Magic", category: ["sahara", "desert"], span: "col-span-1 row-span-1" },
  { src: sahara03, alt: "Camel Trek", category: ["sahara", "desert"], span: "col-span-1 row-span-1" },
  { src: sahara01, alt: "Sahara Sunset", category: ["sahara", "desert"], span: "col-span-1 row-span-1" },
];

const GallerySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const filtered = activeCategory === "all"
    ? images
    : images.filter((img) => img.category.includes(activeCategory));

  const lightboxPrev = () => {
    if (lightbox === null) return;
    setLightbox(lightbox === 0 ? filtered.length - 1 : lightbox - 1);
  };
  const lightboxNext = () => {
    if (lightbox === null) return;
    setLightbox((lightbox + 1) % filtered.length);
  };

  return (
    <section id="gallery" className="py-20 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-10 md:mb-12"
        >
          <p className="font-body text-sm tracking-[0.2em] uppercase text-accent mb-3">Happy Travelers</p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Gallery
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto mb-6 md:mb-8 text-sm md:text-base">
            Explore our collection of unforgettable moments across Morocco.
          </p>

          {/* Category tabs - scrollable on mobile */}
          <div className="relative">
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide snap-x snap-mandatory sm:flex-wrap sm:justify-center sm:overflow-visible sm:pb-0">
              {categories.map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategory(cat.key)}
                  className={`px-4 sm:px-5 py-2 rounded-full font-body text-xs sm:text-sm font-medium transition-all duration-300 whitespace-nowrap snap-start shrink-0 ${
                    activeCategory === cat.key
                      ? "bg-accent text-accent-foreground shadow-glow"
                      : "bg-muted text-muted-foreground hover:bg-accent/10 hover:text-accent"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Masonry grid - responsive columns */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 auto-rows-[minmax(160px,auto)] sm:auto-rows-[minmax(180px,auto)] grid-flow-dense"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((img, i) => (
              <motion.div
                key={img.alt}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: i * 0.03 }}
                className={`${img.span} rounded-lg sm:rounded-xl overflow-hidden cursor-pointer group relative`}
                onClick={() => setLightbox(i)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-all duration-300 flex items-end">
                  <div className="p-3 sm:p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="font-body text-xs sm:text-sm text-primary-foreground font-medium">
                      {img.alt}
                    </p>
                    <div className="flex gap-1 mt-1 flex-wrap">
                      {img.category.slice(0, 2).map((c) => (
                        <span key={c} className="text-[9px] sm:text-[10px] bg-accent/80 text-accent-foreground px-1.5 sm:px-2 py-0.5 rounded-full">
                          {categories.find((cat) => cat.key === c)?.label}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && filtered[lightbox] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-3 sm:p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 text-primary-foreground hover:text-accent transition-colors z-10"
            >
              <X className="h-6 w-6 sm:h-8 sm:w-8" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); lightboxPrev(); }}
              className="absolute left-2 sm:left-4 md:left-8 text-primary-foreground hover:text-accent transition-colors z-10"
            >
              <ChevronLeft className="h-8 w-8 sm:h-10 sm:w-10" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); lightboxNext(); }}
              className="absolute right-2 sm:right-4 md:right-8 text-primary-foreground hover:text-accent transition-colors z-10"
            >
              <ChevronRight className="h-8 w-8 sm:h-10 sm:w-10" />
            </button>
            <img
              src={filtered[lightbox].src}
              alt={filtered[lightbox].alt}
              className="max-w-full max-h-[80vh] sm:max-h-[85vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            <p className="absolute bottom-4 sm:bottom-8 text-primary-foreground font-heading text-sm sm:text-lg text-center px-4">
              {filtered[lightbox].alt}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
