import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AIAssistant from "@/components/AIAssistant";
import WhatsAppButton from "@/components/WhatsAppButton";
import SeoHead from "@/components/SeoHead";
import { ArrowRight, ExternalLink, Camera, Scissors, Utensils, Music, Star, Compass, BookOpen } from "lucide-react";
// ... image imports remain ...
import photoImg from "@/assets/photograph_cover.webp";
import designToursCover from "@/assets/Dessign_Tours_PicCover.webp";
import textileImg from "@/assets/textile_tours.png";
import foodImg from "@/assets/Food_Cover.jpg";
import musicImg from "@/assets/musical_discovery.png";
import jewishImg from "@/assets/jewish_heritage.png";

// ... tours array remains ...
const tours = [
  {
    title: "Photography Tours",
    icon: Camera,
    image: photoImg,
    link: "https://radmorocco.com/photography-tours/",
    description: "This tour offers a peaceful and colourful experience for photographers to explore and enhance their skills. Each destination has unique landscapes, architecture, lighting, and cultural traditions."
  },
  {
    title: "Textile Scouting Tour",
    icon: Scissors,
    image: textileImg,
    link: "https://radmorocco.com/textile-scouting-tour/",
    referenceLink: "https://www.textileartscouncil.org/post/travel-to-morocco-in-fall-2016-1",
    description: "Explore the vibrant and hidden world of Moroccan textiles. From ancient weaving techniques to contemporary designs, discover the rich heritage of Berber rugs, embroidery, and natural dyeing. This exclusive Textile & Design Tour is meticulously curated by Rad, a certified Moroccan national guide specializing in craftsmanship and traditional textiles. His expertise is highly regarded and has been referenced by international textile tour programs, including a prestigious San Francisco-based museum initiative."
  },
  {
    title: "Crafts & Culinary Journey of Morocco",
    icon: Utensils,
    image: foodImg,
    link: "https://radmorocco.com/food-tasting-and-cooking-class/",
    articleLink: "/articles/moroccan-cuisine",
    description: "Embark on a sensory journey through Morocco’s vibrant culinary landscape. From fragrant spice souks to exclusive cooking masterclasses with local chefs, discover the authentic flavors and artisanal heritage that set Moroccan cuisine apart."
  },
  {
    title: "Musical Discovery Trip",
    icon: Music,
    image: musicImg,
    link: "https://radmorocco.com/musical-discovery-trip/",
    articleLink: "/tours/musical-discovery",
    buttonLabel: "View Leader Spotlight",
    description: "Music is an essential element of Moroccan culture! Join Dr. Ingrid Kovacs for an incredible journey into the heart of Andalusian, Gnawa, and Berber music, interacting with local musicians and exploring historical towns."
  },
  {
    title: "Jewish Heritage Tours",
    icon: Star,
    image: jewishImg,
    link: "https://radmorocco.com/jewish-heritage-tours/",
    description: "Discover the rich Jewish history in Morocco spanning over 2000 years, from northern coastal cities to southern oases."
  }
];

const DesignTours = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SeoHead 
        title="Custom Design Tours" 
        description="Curated à la carte itineraries. Explore our Photography Tours, Textile Scouting, Culinary Journeys, Musical Discovery, and Jewish Heritage Tours in Morocco."
      />
      <Navbar />
      
      {/* Hero Header */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-primary overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={designToursCover} 
            alt="Design Tours Hero" 
            className="w-full h-full object-cover opacity-30 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/80 to-accent/20" />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent font-semibold text-sm mb-6 border border-accent/30 backdrop-blur-md"
          >
            <Compass className="w-4 h-4" />
            Specialized Itineraries
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
          >
            Design Your Journey
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="font-body text-white/70 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed"
          >
            Luxury private à la carte services tailored to your unique interests and requirements.
          </motion.p>
        </div>
      </section>

      {/* Tours Grid */}
      <section className="py-20 md:py-32 flex-grow">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid gap-16 md:gap-24 lg:gap-32">
            {tours.map((tour, index) => (
              <motion.div
                key={tour.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`grid lg:grid-cols-2 gap-10 md:gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={`relative group ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="absolute -inset-4 bg-accent/5 rounded-[2.5rem] -z-10 group-hover:bg-accent/10 transition-colors" />
                  <div className="overflow-hidden rounded-[2rem] shadow-2xl aspect-[4/3]">
                    <img 
                      src={tour.image} 
                      alt={tour.title} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute top-6 left-6 p-4 bg-white/90 backdrop-blur-md rounded-2xl shadow-lg border border-white/20">
                    <tour.icon className="h-8 w-8 text-accent" />
                  </div>
                </div>

                <div className={`space-y-6 sm:space-y-8 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
                    {tour.title}
                  </h2>
                  <p className="font-body text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
                    {tour.description}
                  </p>
                  {'referenceLink' in tour && tour.referenceLink && (
                    <a
                      href={tour.referenceLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-accent font-semibold hover:text-accent/80 transition-colors mt-2"
                    >
                      <ExternalLink className="h-4 w-4" />
                      View Textile Arts Council Reference
                    </a>
                  )}
                  <div className="flex flex-wrap gap-4 pt-4">
                    {/* <a
                      href={tour.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-foreground font-bold hover:text-accent transition-colors group text-sm sm:text-base"
                    >
                      Learn more at radmorocco.com 
                      <ExternalLink className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a> */}
                    <div className="w-full" />
                    {'articleLink' in tour && tour.articleLink && (
                      <a
                        href={tour.articleLink}
                        className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-accent/30 bg-accent/5 px-7 py-3.5 font-body font-bold text-accent shadow-sm hover:bg-accent/10 hover:border-accent/50 hover:shadow-md transition-all hover:scale-105 text-base sm:text-lg group"
                      >
                        <BookOpen className="h-5 w-5 transition-transform group-hover:rotate-[-6deg]" />
                        {'buttonLabel' in tour && tour.buttonLabel ? (tour.buttonLabel as string) : 'Read the Article'}
                      </a>
                    )}
                    <a
                      href="/contact"
                      className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-4 font-body font-bold text-accent-foreground shadow-lg hover:shadow-glow transition-all hover:scale-105 text-base sm:text-lg"
                    >
                      Get in Touch
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Final Section: Tours Designed by You */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mt-32 p-10 md:p-20 rounded-[3rem] bg-primary text-primary-foreground text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-accent/20 via-transparent to-accent/10 opacity-50" />
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="font-heading text-3xl sm:text-4xl md:text-6xl font-bold mb-8">
                Tours Designed by You
              </h2>
              <p className="font-body text-lg md:text-xl text-primary-foreground/80 mb-12 leading-relaxed">
                Have a unique vision? Express your needs and let us create a personalized tour that perfectly matches your expectations. Every detail is crafted with you in mind.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-accent px-10 py-5 font-body font-bold text-accent-foreground shadow-2xl hover:shadow-glow transition-all hover:scale-105 text-xl"
              >
                Create My Personalized Tour
                <ArrowRight className="ml-3 h-6 w-6" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <AIAssistant />
      <WhatsAppButton />
    </div>
  );
};

export default DesignTours;
