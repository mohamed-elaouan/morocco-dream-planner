import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight, Phone, MapPin, Clock, Users, Award, Compass, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AIAssistant from "@/components/AIAssistant";
import WhatsAppButton from "@/components/WhatsAppButton";
import SeoHead from "@/components/SeoHead";
import exoticMorocco from "@/assets/Merzouga/IMG_20201015_144043_920.webp";

const customItinerarySchema = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Morocco Custom Itinerary Planning",
    "description": "Bespoke Morocco travel planning — custom private itineraries designed by certified guide Radouane El Aouan. From Imperial Cities to Sahara Desert, every journey is tailored to your interests.",
    "provider": {
      "@type": "TravelAgency",
      "name": "RAD Morocco",
      "url": "https://radmorocco.com"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Morocco"
    },
    "serviceType": "Custom Travel Itinerary"
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How does custom itinerary planning work with RAD Morocco?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We start with a pre-arrival consultation (email or call) to understand your interests, travel dates, group size, and budget. Our certified guide then designs a personalized day-by-day itinerary covering your preferred destinations, activities, and accommodations across Morocco."
        }
      },
      {
        "@type": "Question",
        "name": "What regions of Morocco can be included in a custom tour?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We cover all 12 regions of Morocco — from Casablanca, Rabat, Fes, and Marrakech to the Sahara Desert (Merzouga), Atlas Mountains, Essaouira, Chefchaouen, and the Draa Valley. Every itinerary is designed with realistic driving times and balanced pacing."
        }
      },
      {
        "@type": "Question",
        "name": "How far in advance should I book a custom Morocco tour?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We recommend booking 3-4 weeks in advance for multi-day custom itineraries. This allows time for itinerary design, accommodation booking, and logistics planning. Last-minute requests are also accommodated when possible."
        }
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://radmorocco.com/" },
      { "@type": "ListItem", "position": 2, "name": "Morocco Custom Itinerary", "item": "https://radmorocco.com/morocco-custom-itinerary" }
    ]
  }
];

const sampleItineraries = [
  {
    title: "Morocco Highlights",
    duration: "12 Days",
    cities: "Casablanca → Rabat → Fes → Merzouga → Ouarzazate → Marrakech",
    desc: "The ultimate Morocco experience — Imperial Cities, Sahara Desert, and Atlas Mountains.",
    link: "/tours/morocco-highlights"
  },
  {
    title: "Northern Morocco Discovery",
    duration: "8 Days",
    cities: "Casablanca → Rabat → Fes → Chefchaouen → Tetouan → Tangier",
    desc: "Cultural deep-dive through Morocco's northern gems including the blue city of Chefchaouen.",
    link: "/tours/northern-morocco-discovery"
  },
  {
    title: "Imperial Cities",
    duration: "8 Days",
    cities: "Casablanca → Rabat → Meknes → Fes → Marrakech",
    desc: "Explore Morocco's four magnificent Imperial Cities — their history, markets, and architecture.",
    link: "/tours/imperial-cities"
  },
  {
    title: "Desert Escape",
    duration: "6 Days",
    cities: "Marrakech → Ouarzazate → Zagora → Merzouga → Marrakech",
    desc: "An immersive Sahara adventure with camel treks, kasbahs, and nights under the stars.",
    link: "/tours/desert-escape"
  },
];

const MoroccoCustomItinerary = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SeoHead
        title="Morocco Custom Itinerary — Private Tour Planning by Expert Guide"
        description="Design your perfect Morocco trip with a custom itinerary. Private guided tours, handpicked accommodations, and personalized experiences across all 12 regions. Created by certified guide Radouane El Aouan with 18+ years of expertise."
        canonical="https://radmorocco.com/morocco-custom-itinerary"
        keywords="Morocco custom itinerary, private tour Morocco, Morocco private guide, private Morocco travel, custom Morocco tour, bespoke Morocco trip, Morocco travel planner, personalized Morocco tour"
        structuredData={customItinerarySchema}
      />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-primary overflow-hidden">
        <div className="absolute inset-0">
          <img src={exoticMorocco} alt="Custom Morocco itinerary — Sahara Desert experience" className="w-full h-full object-cover opacity-30 scale-105" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/80 to-accent/20" />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent font-semibold text-sm mb-6 border border-accent/30 backdrop-blur-md"
          >
            <Compass className="w-4 h-4" />
            Bespoke Travel Planning
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
          >
            Morocco Custom Itinerary
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="font-body text-white/80 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed"
          >
            Every traveler is different. Design your perfect Morocco journey with a custom 
            itinerary — handcrafted by a certified private guide with 18+ years of expertise 
            across all 12 regions of Morocco.
          </motion.p>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-card border-b border-border/50 py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center">
            {[
              { icon: Award, label: "Certified Guide", value: "Since 2007" },
              { icon: MapPin, label: "Regions Covered", value: "All 12 Regions" },
              { icon: Users, label: "Happy Travelers", value: "5,000+" },
              { icon: Star, label: "Google Rating", value: "5.0 ★★★★★" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-1">
                <stat.icon className="w-5 h-5 text-accent" />
                <p className="font-heading text-lg font-bold text-foreground">{stat.value}</p>
                <p className="text-xs text-muted-foreground font-body">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <main className="flex-grow">
        {/* How It Works */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
              How Custom Itinerary Planning Works
            </h2>
            <p className="font-body text-muted-foreground text-center max-w-2xl mx-auto mb-12 text-lg">
              Unlike mass-market tours, a <strong>custom Morocco itinerary</strong> is built entirely around you — your pace, your interests, your timeline.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { step: "1", title: "Consultation", desc: "Share your interests, travel dates, group size, and budget. We listen carefully to understand what you want from your Morocco experience." },
                { step: "2", title: "Itinerary Design", desc: "Your certified private guide designs a day-by-day itinerary with curated stops, handpicked accommodations, and realistic logistics." },
                { step: "3", title: "Travel & Discovery", desc: "Travel with your private guide in comfort. Every detail is handled — from transfers and restaurants to insider experiences." },
              ].map((item) => (
                <div key={item.step} className="text-center p-6 rounded-2xl bg-card border border-border/50">
                  <div className="w-12 h-12 rounded-full bg-accent/10 text-accent font-heading font-bold text-xl flex items-center justify-center mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Custom */}
        <section className="py-16 md:py-24 bg-secondary/10">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              Why Choose a Private Morocco Guide & Custom Tour?
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { title: "100% Personalized", desc: "No fixed groups, no rigid schedules. Your Morocco tour revolves around your interests — culture, cuisine, adventure, or relaxation." },
                { title: "Local Expertise", desc: "Led by Radouane El Aouan, a certified national guide who knows Morocco intimately — the hidden spots, the best restaurants, the cultural context." },
                { title: "Flexible Pacing", desc: "Travel at your own pace. Want to spend an extra hour at a souk? Prefer a late start? Your private tour adapts to you." },
                { title: "Door-to-Door Comfort", desc: "Private vehicle, experienced driver, and premium accommodations. Everything is arranged so you can focus on the experience." },
                { title: "Authentic Connections", desc: "Meet local artisans, share tea with Berber families, and access experiences that group tours simply cannot offer." },
                { title: "Complete Transparency", desc: "Clear pricing with no hidden fees. Your itinerary includes everything — transport, guide fees, accommodations, and activities." },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 p-5 rounded-2xl bg-card border border-border/50 hover:border-accent/30 transition-colors">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <div>
                    <h3 className="font-heading text-lg font-bold text-foreground mb-1">{item.title}</h3>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sample Itineraries */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
              Sample Morocco Itineraries
            </h2>
            <p className="font-body text-muted-foreground text-center max-w-2xl mx-auto mb-12">
              Start from one of our proven itineraries, then customize every detail to match your vision.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {sampleItineraries.map((it) => (
                <div key={it.title} className="p-6 rounded-2xl bg-card border border-border/50 shadow-card hover:shadow-elevated transition-all">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-bold bg-accent/10 text-accent px-3 py-1 rounded-full">{it.duration}</span>
                  </div>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-2">{it.title}</h3>
                  <p className="font-body text-xs text-accent/80 mb-2">{it.cities}</p>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">{it.desc}</p>
                  <Link to={it.link} className="inline-flex items-center gap-2 text-accent font-semibold text-sm hover:gap-3 transition-all">
                    View Details <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-24 bg-secondary/10">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {[
                { q: "How does custom itinerary planning work?", a: "We start with a consultation to understand your interests, then our guide designs a personalized day-by-day itinerary. Everything — transport, accommodations, activities — is arranged for a seamless experience." },
                { q: "What regions of Morocco can be included?", a: "We cover all 12 regions: Casablanca, Rabat, Fes, Marrakech, Merzouga (Sahara), Atlas Mountains, Essaouira, Chefchaouen, Tangier, Ouarzazate, Draa Valley, and more." },
                { q: "How far in advance should I book?", a: "3-4 weeks is recommended for multi-day tours. Last-minute bookings are accommodated when possible." },
                { q: "Can you arrange accommodations and transport?", a: "Yes, we handle everything — premium riads, hotels, private vehicles, and experienced drivers. Your itinerary is turnkey." },
                { q: "Is this suitable for families and small groups?", a: "Absolutely. We regularly design itineraries for couples, families with children, small friend groups, and solo travelers. Each tour is adapted to the group's needs." },
              ].map((faq) => (
                <details key={faq.q} className="bg-card rounded-2xl border border-border/50 overflow-hidden">
                  <summary className="flex items-center justify-between p-6 cursor-pointer font-heading text-lg font-bold text-foreground hover:text-accent transition-colors">
                    {faq.q}
                  </summary>
                  <div className="px-6 pb-6 -mt-1">
                    <p className="font-body text-muted-foreground leading-relaxed">{faq.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              Start Planning Your Custom Morocco Itinerary
            </h2>
            <p className="font-body text-muted-foreground mb-8 text-lg">
              Tell us your dream trip and we'll design the perfect itinerary — completely free, no obligation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-4 font-body font-bold text-accent-foreground shadow-lg hover:shadow-glow transition-all hover:scale-105 text-base"
              >
                Get a Free Custom Itinerary <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <a
                href="https://wa.me/message/F2FIG7DSVSLDO1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-[#25D366] px-8 py-4 font-body font-bold text-white shadow-lg hover:bg-[#1da851] transition-all hover:scale-105 text-base"
              >
                <Phone className="mr-2 w-5 h-5" /> Chat on WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <AIAssistant />
      <WhatsAppButton />
    </div>
  );
};

export default MoroccoCustomItinerary;
