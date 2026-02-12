import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { X } from "lucide-react";
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

const images = [
  { src: galleryChefchaouen, alt: "Chefchaouen Blue City", span: "col-span-1 row-span-2" },
  { src: galleryRiad, alt: "Traditional Riad", span: "col-span-1 row-span-1" },
  { src: galleryDesertCamp, alt: "Desert Camp", span: "col-span-1 row-span-1" },
  { src: gallerySouk, alt: "Moroccan Souk", span: "col-span-1 row-span-2" },
  { src: heroMorocco, alt: "Sahara Desert", span: "col-span-2 row-span-1" },
  { src: galleryEssaouira, alt: "Essaouira Coast", span: "col-span-1 row-span-1" },
  { src: casablanca, alt: "Hassan II Mosque", span: "col-span-1 row-span-1" },
  { src: rabat, alt: "Hassan Tower Rabat", span: "col-span-1 row-span-1" },
  { src: marrakech, alt: "Marrakech Square", span: "col-span-1 row-span-1" },
  { src: toursImperial, alt: "Kasbah", span: "col-span-1 row-span-1" },
  { src: toursDesert, alt: "Desert Dunes", span: "col-span-1 row-span-1" },
];

const GallerySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <p className="font-body text-sm tracking-[0.2em] uppercase text-accent mb-3">Happy Travelers</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Gallery
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            Some pictures taken during our travels. We hope you enjoy them as much as we did.
          </p>
        </motion.div>

        {/* Masonry grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 auto-rows-[200px]">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.05 }}
              className={`${img.span} rounded-xl overflow-hidden cursor-pointer group relative`}
              onClick={() => setLightbox(i)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-all duration-300 flex items-end">
                <p className="font-body text-sm text-primary-foreground font-medium p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  {img.alt}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
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
          <img
            src={images[lightbox].src}
            alt={images[lightbox].alt}
            className="max-w-full max-h-[85vh] object-contain rounded-lg"
          />
        </motion.div>
      )}
    </section>
  );
};

export default GallerySection;
