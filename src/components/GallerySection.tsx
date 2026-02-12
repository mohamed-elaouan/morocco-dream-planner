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

type Category = "all" | "family" | "marrakech" | "desert" | "imperial" | "coastal";

const categories: { key: Category; label: string }[] = [
  { key: "all", label: "All" },
  { key: "family", label: "Family Trips" },
  { key: "marrakech", label: "Marrakech" },
  { key: "desert", label: "Desert Adventures" },
  { key: "imperial", label: "Imperial Cities" },
  { key: "coastal", label: "Coastal Escapes" },
];

const images: { src: string; alt: string; category: Category[]; span: string }[] = [
  { src: galleryChefchaouen, alt: "Chefchaouen Blue City", category: ["family", "imperial"], span: "col-span-1 row-span-2" },
  { src: galleryRiad, alt: "Traditional Riad", category: ["family", "marrakech"], span: "col-span-1 row-span-1" },
  { src: galleryDesertCamp, alt: "Desert Luxury Camp", category: ["family", "desert"], span: "col-span-1 row-span-1" },
  { src: gallerySouk, alt: "Moroccan Souk", category: ["marrakech", "family"], span: "col-span-1 row-span-2" },
  { src: heroMorocco, alt: "Sahara Camel Caravan", category: ["desert", "family"], span: "col-span-2 row-span-1" },
  { src: galleryEssaouira, alt: "Essaouira Harbor", category: ["coastal", "family"], span: "col-span-1 row-span-1" },
  { src: casablanca, alt: "Hassan II Mosque", category: ["imperial", "coastal"], span: "col-span-1 row-span-1" },
  { src: rabat, alt: "Hassan Tower Rabat", category: ["imperial", "family"], span: "col-span-1 row-span-1" },
  { src: marrakech, alt: "Jemaa el-Fnaa Square", category: ["marrakech", "family"], span: "col-span-1 row-span-1" },
  { src: toursImperial, alt: "Kasbah Ait Ben Haddou", category: ["imperial", "desert"], span: "col-span-1 row-span-1" },
  { src: toursDesert, alt: "Desert Dunes Sunset", category: ["desert"], span: "col-span-1 row-span-1" },
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
    <section id="gallery" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <p className="font-body text-sm tracking-[0.2em] uppercase text-accent mb-3">Happy Travelers</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Gallery
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto mb-8">
            Explore our collection of unforgettable moments across Morocco.
          </p>

          {/* Category tabs */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-5 py-2 rounded-full font-body text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat.key
                    ? "bg-accent text-accent-foreground shadow-glow"
                    : "bg-muted text-muted-foreground hover:bg-accent/10 hover:text-accent"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Masonry grid */}
        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 auto-rows-[200px]"
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
                className={`${img.span} rounded-xl overflow-hidden cursor-pointer group relative`}
                onClick={() => setLightbox(i)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-all duration-300 flex items-end">
                  <div className="p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="font-body text-sm text-primary-foreground font-medium">
                      {img.alt}
                    </p>
                    <div className="flex gap-1 mt-1">
                      {img.category.map((c) => (
                        <span key={c} className="text-[10px] bg-accent/80 text-accent-foreground px-2 py-0.5 rounded-full">
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
      {lightbox !== null && filtered[lightbox] && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 text-primary-foreground hover:text-accent transition-colors"
          >
            <X className="h-8 w-8" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); lightboxPrev(); }}
            className="absolute left-4 md:left-8 text-primary-foreground hover:text-accent transition-colors"
          >
            <ChevronLeft className="h-10 w-10" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); lightboxNext(); }}
            className="absolute right-4 md:right-8 text-primary-foreground hover:text-accent transition-colors"
          >
            <ChevronRight className="h-10 w-10" />
          </button>
          <img
            src={filtered[lightbox].src}
            alt={filtered[lightbox].alt}
            className="max-w-full max-h-[85vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
          <p className="absolute bottom-8 text-primary-foreground font-heading text-lg">
            {filtered[lightbox].alt}
          </p>
        </motion.div>
      )}
    </section>
  );
};

export default GallerySection;
