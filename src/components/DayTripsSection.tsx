import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Clock, ChevronDown, Users, Sparkles, MapPin, Car, Footprints } from "lucide-react";
import casablanca from "@/assets/Casablanca/IMG-20220525-WA0022.jpg";
import casa02 from "@/assets/Casablanca/20220528_162250.jpg";
import casa03 from "@/assets/Casablanca/davide.jpg";
import casa04 from "@/assets/Casablanca/20250303_153308.jpg";
import foodCover from "@/assets/FoodFlavors.jpg";

interface Experience {
  id: number;
  title: string;
  subtitle: string;
  duration: string;
  format: string;
  formatIcon: "car" | "walk" | "flexible";
  intro: string;
  image: string;
  highlights: string[];
  unique: string;
  idealFor: string[];
  color: string;
}

const experiences: Experience[] = [
  {
    id: 1,
    title: "The Essence of Casablanca",
    subtitle: "Heritage & Modern Life",
    duration: "4–5 Hours",
    format: "Private Experience • Vehicle Included",
    formatIcon: "car",
    intro:
      "Discover Casablanca beyond the surface — from its architectural elegance and colonial heritage to its contemporary Moroccan identity. This private experience offers a balanced overview of the city's history, culture, and modern life, guided with depth and context.",
    image: casablanca,
    highlights: [
      "Hassan II Mosque exterior and cultural context",
      "The Corniche & Atlantic coastline",
      "Habous Quarter (New Medina)",
      "Architectural influences (Art Deco & colonial heritage)",
      "Central Market & local life",
      "Morocco's modern political and economic landscape",
    ],
    unique:
      "This is not a standard city drive. It is a curated exploration combining mobility, cultural interpretation, and historical depth — ideal for travelers who want structured understanding in limited time.",
    idealFor: ["First-time visitors", "Short-stay travelers", "Business travelers", "Families wanting comfort"],
    color: "from-blue-600 to-cyan-500",
  },
  {
    id: 2,
    title: "Casablanca Cultural Walking Experience",
    subtitle: "Architecture & Urban Identity",
    duration: "3 Hours",
    format: "Private Walking Experience",
    formatIcon: "walk",
    intro:
      "A deeper immersion into Casablanca's architectural and cultural layers, experienced on foot. This walk explores the city's urban character, hidden details, and evolving identity.",
    image: casa02,
    highlights: [
      "Art Deco architecture",
      "Mohammed V Square",
      "Local neighborhoods & urban culture",
      "Street-level history and daily life",
      "Discussions on Morocco's contemporary society",
    ],
    unique:
      "Walking allows us to slow down and observe the subtle elements of Casablanca — its design, rhythms, and social dynamics — often missed in vehicle tours.",
    idealFor: ["Culture-focused travelers", "Architecture enthusiasts", "Repeat visitors", "Immersive exploration lovers"],
    color: "from-amber-600 to-orange-500",
  },
  {
    id: 3,
    title: "Food Tasting",
    subtitle: "A Casablanca Culinary Journey",
    duration: "3 Hours",
    format: "Private Culinary Experience",
    formatIcon: "walk",
    intro:
      "Explore Casablanca through its cuisine. This curated tasting experience blends Moroccan culinary traditions with local market visits and cultural storytelling.",
    image: foodCover,
    highlights: [
      "Traditional Moroccan pastries",
      "Fresh market exploration",
      "Local street flavors",
      "Moroccan tea culture",
      "Culinary traditions and social customs",
    ],
    unique:
      "More than tasting — this experience connects food to history, family traditions, and Moroccan hospitality culture.",
    idealFor: ["Food lovers", "Small private groups", "Cultural explorers", "Couples"],
    color: "from-rose-600 to-pink-500",
  },
  {
    id: 4,
    title: "Casablanca Jewish Heritage Experience",
    subtitle: "History, Coexistence & Identity",
    duration: "3–4 Hours",
    format: "Private Experience • Vehicle Available",
    formatIcon: "car",
    intro:
      "Explore the rich and layered history of Morocco's Jewish community in Casablanca — once home to one of the largest Jewish populations in the Arab world. This experience offers historical context, architectural insight, and thoughtful reflection on coexistence and cultural continuity.",
    image: casa03,
    highlights: [
      "Beth-El Synagogue (exterior/interior depending on access)",
      "Jewish Museum of Casablanca",
      "Former Jewish neighborhoods",
      "Mellah history and migration context",
      "Discussion on Moroccan-Jewish coexistence",
      "Modern Jewish community in Morocco",
    ],
    unique:
      "This experience is presented with historical depth and sensitivity, focusing on Morocco's pluralistic identity and centuries of Jewish-Muslim coexistence.",
    idealFor: ["Jewish heritage travelers", "Academic groups", "Cultural history enthusiasts", "Moroccan diaspora"],
    color: "from-purple-600 to-indigo-500",
  },
  {
    id: 5,
    title: "Personalised Private Experience",
    subtitle: "Designed Around You",
    duration: "Flexible Duration",
    format: "Fully Private • Custom Itinerary",
    formatIcon: "flexible",
    intro:
      "Every traveler is different. This bespoke experience allows you to design your time in Casablanca according to your interests, pace, and priorities. Whether you wish to focus on architecture, Jewish heritage, gastronomy, contemporary culture, or a balanced overview, the experience is thoughtfully curated to reflect your preferences.",
    image: casa04,
    highlights: [
      "Pre-arrival consultation (email or call)",
      "Customized itinerary based on your interests",
      "Flexible pacing",
      "day trips to rabat , tanger and marrakech",
      "Vehicle or walking format available",
      "Expert cultural interpretation throughout",
    ],
    unique:
      "Complete freedom to design your own Casablanca experience, guided by local expertise and cultural depth.",
    idealFor: ["Repeat visitors", "Travelers with specific interests", "Families with varied needs", "Luxury clients"],
    color: "from-emerald-600 to-teal-500",
  },
];

const FormatIcon = ({ type }: { type: string }) => {
  switch (type) {
    case "car":
      return <Car className="h-3.5 w-3.5" />;
    case "walk":
      return <Footprints className="h-3.5 w-3.5" />;
    default:
      return <Sparkles className="h-3.5 w-3.5" />;
  }
};

const ExperienceCard = ({ exp, index, isInView }: { exp: Experience; index: number; isInView: boolean }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.12, duration: 0.5 }}
      className="group relative bg-card rounded-2xl sm:rounded-3xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-500"
    >
      {/* Top: Image + overlay info */}
      <div className="relative h-52 sm:h-60 md:h-64 overflow-hidden">
        <img
          src={exp.image}
          alt={exp.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-20 group-hover:opacity-30 transition-opacity`} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

        {/* Duration badge */}
        <div className="absolute top-3 right-3 sm:top-4 sm:right-4 flex items-center gap-1.5 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg">
          <Clock className="h-3.5 w-3.5 text-accent" />
          <span className="text-[11px] sm:text-xs font-semibold text-foreground">{exp.duration}</span>
        </div>

        {/* Format badge */}
        <div className="absolute top-3 left-3 sm:top-4 sm:left-4 flex items-center gap-1.5 bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-full">
          <FormatIcon type={exp.formatIcon} />
          <span className="text-[10px] sm:text-xs font-medium text-white/90">{exp.format}</span>
        </div>

        {/* Title area */}
        <div className="absolute bottom-3 left-4 right-4 sm:bottom-4 sm:left-5 sm:right-5">
          <p className="text-accent/90 text-[11px] sm:text-xs font-medium uppercase tracking-wider mb-1">{exp.subtitle}</p>
          <h3 className="font-heading text-lg sm:text-xl md:text-2xl font-bold text-white leading-tight drop-shadow-lg">
            {exp.title}
          </h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6">
        {/* Intro */}
        <p className="font-body text-xs sm:text-sm text-muted-foreground leading-relaxed mb-4">
          {exp.intro}
        </p>

        {/* Highlights preview */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
          {exp.highlights.slice(0, 3).map((h) => (
            <span
              key={h}
              className="text-[10px] sm:text-xs font-body font-medium bg-accent/10 text-accent px-2.5 py-1 rounded-full border border-accent/20"
            >
              {h}
            </span>
          ))}
          {exp.highlights.length > 3 && (
            <span className="text-[10px] sm:text-xs font-body text-muted-foreground px-2 py-1">
              +{exp.highlights.length - 3} more
            </span>
          )}
        </div>

        {/* Expandable details */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="w-full flex items-center justify-between py-2.5 px-3 rounded-xl bg-muted/50 hover:bg-muted transition-colors group/btn"
        >
          <span className="text-xs sm:text-sm font-body font-semibold text-foreground/80">
            {expanded ? "Show less" : "View full details"}
          </span>
          <ChevronDown
            className={`h-4 w-4 text-accent transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
          />
        </button>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="pt-4 space-y-4">
                {/* All highlights */}
                <div>
                  <h4 className="font-heading text-sm font-bold text-foreground mb-2 flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-accent" />
                    Experience Highlights
                  </h4>
                  <ul className="space-y-1.5 ml-6">
                    {exp.highlights.map((h) => (
                      <li key={h} className="font-body text-xs sm:text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-accent mt-1.5 text-[8px]">●</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* What makes it unique */}
                <div className="bg-gradient-to-r from-accent/5 to-transparent p-4 rounded-xl border-l-2 border-accent/40">
                  <h4 className="font-heading text-sm font-bold text-foreground mb-1.5 flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-accent" />
                    What Makes It Unique
                  </h4>
                  <p className="font-body text-xs sm:text-sm text-muted-foreground leading-relaxed italic">
                    {exp.unique}
                  </p>
                </div>

                {/* Ideal for */}
                <div>
                  <h4 className="font-heading text-sm font-bold text-foreground mb-2 flex items-center gap-2">
                    <Users className="h-4 w-4 text-accent" />
                    Ideal For
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.idealFor.map((item) => (
                      <span
                        key={item}
                        className="text-[10px] sm:text-xs font-body font-medium bg-primary/10 text-primary px-3 py-1.5 rounded-full border border-primary/15"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <a
                  href="/travel-consulting#contact"
                  className="inline-flex items-center justify-center gap-2 w-full rounded-full bg-accent px-6 py-3 text-sm font-bold text-accent-foreground transition-all hover:shadow-glow hover:scale-[1.02]"
                >
                  Book This Experience
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

const DayTripsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="daytrips" className="py-20 md:py-24 bg-gradient-section">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12 md:mb-16"
        >
          <p className="font-body text-sm tracking-[0.2em] uppercase text-accent mb-3">Signature Experiences</p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Local Experiences
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
            Each experience is thoughtfully designed to offer depth, authenticity, and personal connection — far beyond a standard tour.
          </p>
        </motion.div>

        {/* Casablanca Experiences */}
        <div className="mb-16 md:mb-24">
          <div className="flex items-center gap-4 mb-8 sm:mb-12">
            <h3 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">Casablanca</h3>
            <div className="h-px flex-grow bg-border/60"></div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {experiences.map((exp, i) => (
              <ExperienceCard key={exp.id} exp={exp} index={i} isInView={isInView} />
            ))}
          </div>
        </div>

        {/* Marrakech Experiences Placeholder */}
        <div className="mb-16 md:mb-24">
          <div className="flex items-center gap-4 mb-8 sm:mb-12">
            <h3 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-foreground opacity-60">Marrakech</h3>
            <div className="h-px flex-grow bg-border/60"></div>
          </div>
          <div className="bg-secondary/5 border-2 border-dashed border-border/50 rounded-3xl p-12 lg:p-20 text-center text-muted-foreground flex flex-col items-center justify-center">
            <p className="font-body text-lg font-medium">Coming Soon</p>
            <p className="font-body text-sm mt-2 opacity-70">Curated experiences in Marrakech are currently being designed.</p>
          </div>
        </div>

        {/* Fes Experiences Placeholder */}
        <div>
          <div className="flex items-center gap-4 mb-8 sm:mb-12">
            <h3 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-foreground opacity-60">Fes</h3>
            <div className="h-px flex-grow bg-border/60"></div>
          </div>
          <div className="bg-secondary/5 border-2 border-dashed border-border/50 rounded-3xl p-12 lg:p-20 text-center text-muted-foreground flex flex-col items-center justify-center">
            <p className="font-body text-lg font-medium">Coming Soon</p>
            <p className="font-body text-sm mt-2 opacity-70">Curated experiences in Fes are currently being designed.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DayTripsSection;
