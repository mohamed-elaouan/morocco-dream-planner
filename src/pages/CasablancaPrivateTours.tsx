import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin, Clock, CheckCircle, Star, Users, Award, ArrowRight, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AIAssistant from "@/components/AIAssistant";
import WhatsAppButton from "@/components/WhatsAppButton";
import SeoHead from "@/components/SeoHead";
import casablanca from "@/assets/Casablanca/IMG-20220525-WA0022.jpg";
import casa02 from "@/assets/Casablanca/20220528_162250.jpg";
import casa03 from "@/assets/Casablanca/davide.jpg";

const casablancaSchema = [
  {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    "name": "Casablanca Private Tours",
    "description": "Private guided tours of Casablanca with certified guide Radouane El Aouan. Explore Hassan II Mosque, Art Deco district, Habous Quarter, Jewish heritage, and authentic Moroccan cuisine.",
    "touristType": ["Cultural tourism", "Walking tours", "Private guided tours", "Jewish heritage tourism"],
    "provider": {
      "@type": "TravelAgency",
      "name": "RAD Morocco",
      "url": "https://radmorocco.com"
    },
    "offers": {
      "@type": "AggregateOffer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "USD",
      "url": "https://radmorocco.com/casablanca-private-tours"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the best private tour in Casablanca?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Essence of Casablanca tour (4-5 hours) is the most popular choice, covering Hassan II Mosque, the Corniche, Habous Quarter, Art Deco architecture, and the Central Market. Led by certified guide Radouane El Aouan, it offers deep cultural insight with private vehicle included."
        }
      },
      {
        "@type": "Question",
        "name": "How much does a private tour guide in Casablanca cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Private tour rates vary based on duration and group size. RAD Morocco offers competitive pricing for all Casablanca experiences. Contact us for a personalized quote — tours include a certified guide, private vehicle, and customized itinerary."
        }
      },
      {
        "@type": "Question",
        "name": "Can I visit Hassan II Mosque on a private tour?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! The Hassan II Mosque is a highlight of our Casablanca private tours. We cover the mosque's exterior and provide rich cultural context about its significance. Interior visits are subject to the mosque's official guided tour schedule."
        }
      },
      {
        "@type": "Question",
        "name": "Is there a walking tour available in Casablanca?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, RAD Morocco offers a 3-hour private walking experience focusing on Art Deco architecture, Mohammed V Square, local neighborhoods, and daily Moroccan life. It's the best way to experience Casablanca's urban character up close."
        }
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://radmorocco.com/" },
      { "@type": "ListItem", "position": 2, "name": "Casablanca Private Tours", "item": "https://radmorocco.com/casablanca-private-tours" }
    ]
  }
];

const experiences = [
  {
    title: "The Essence of Casablanca",
    duration: "4–5 Hours",
    format: "Private + Vehicle",
    description: "A curated private tour combining Hassan II Mosque, the Corniche, Habous Quarter, Art Deco architecture, and the Central Market. The most comprehensive way to discover Casablanca.",
    image: casablanca
  },
  {
    title: "Casablanca Cultural Walking Tour",
    duration: "3 Hours",
    format: "Private Walking",
    description: "An immersive private walking tour exploring Art Deco architecture, Mohammed V Square, and the urban rhythms of daily Moroccan life in Casablanca.",
    image: casa02
  },
  {
    title: "Jewish Heritage Experience",
    duration: "3–4 Hours",
    format: "Private + Vehicle",
    description: "Explore Morocco's Jewish heritage in Casablanca — Beth-El Synagogue, the Jewish Museum, former Mellah neighborhoods, and the history of Jewish-Muslim coexistence.",
    image: casa03
  }
];

const CasablancaPrivateTours = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SeoHead
        title="Casablanca Private Tours — Private Guide & Walking Tours"
        description="Book a private tour in Casablanca with certified guide Radouane El Aouan. Walking tours, Hassan II Mosque visits, Jewish heritage experiences, Art Deco district explorations, and culinary journeys. 18+ years of expertise."
        canonical="https://radmorocco.com/casablanca-private-tours"
        keywords="Casablanca private guide, Casablanca walking tour, private tour Casablanca, Casablanca tour guide, Hassan II Mosque visit, Jewish heritage Casablanca, Art deco district, Medina Habous, private walking tours Casablanca"
        structuredData={casablancaSchema}
      />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-primary overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={casablanca} 
            alt="Private guided tour in Casablanca, Morocco" 
            className="w-full h-full object-cover opacity-30 scale-105"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/80 to-accent/20" />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent font-semibold text-sm mb-6 border border-accent/30 backdrop-blur-md"
          >
            <MapPin className="w-4 h-4" />
            Casablanca, Morocco
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
          >
            Casablanca Private Tours
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="font-body text-white/80 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed"
          >
            Discover Casablanca with a certified private guide. From the iconic Hassan II Mosque 
            to the Art Deco district, Habous Quarter, and Jewish heritage — experience the city 
            beyond the surface with personalized, culturally rich tours.
          </motion.p>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-card border-b border-border/50 py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center">
            {[
              { icon: Award, label: "Certified National Guide", value: "Since 2007" },
              { icon: Users, label: "Happy Travelers", value: "5,000+" },
              { icon: Star, label: "Google Rating", value: "5.0 ★★★★★" },
              { icon: Clock, label: "Tour Duration", value: "3–5 Hours" },
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

      {/* Main SEO Content */}
      <main className="flex-grow">
        {/* Introduction */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <article className="prose prose-lg max-w-none">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why Choose a Private Tour Guide in Casablanca?
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed text-base md:text-lg mb-6">
                Casablanca is Morocco's largest city and economic powerhouse, yet its cultural depth often goes unnoticed by travelers passing through. A <strong>Casablanca private guide</strong> transforms a simple city visit into a layered cultural experience — revealing the stories behind the Art Deco facades, the significance of the Hassan II Mosque, and the living heritage of the Habous Quarter.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed text-base md:text-lg mb-6">
                At RAD Morocco, every <strong>private tour in Casablanca</strong> is led by <strong>Radouane El Aouan</strong>, a certified national tour guide with over 18 years of experience. Unlike generic group tours, our experiences are designed around your pace, interests, and curiosity — whether that's architecture, culinary traditions, <strong>Jewish heritage</strong>, or contemporary Moroccan life.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed text-base md:text-lg mb-8">
                From the majestic <strong>Hassan II Mosque</strong> overlooking the Atlantic to the charming streets of the <strong>Medina and Habous</strong> district, our <strong>Casablanca walking tours</strong> and vehicle-based experiences offer something group tours simply cannot: genuine depth, personal attention, and authentic cultural connection.
              </p>
            </article>
          </div>
        </section>

        {/* Experiences Grid */}
        <section className="py-16 md:py-24 bg-secondary/10">
          <div className="container mx-auto px-4">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
              Our Casablanca Private Tour Experiences
            </h2>
            <p className="font-body text-muted-foreground text-center max-w-2xl mx-auto mb-12">
              Choose from our curated selection of private Casablanca tours, or let us design a custom experience just for you.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {experiences.map((exp, i) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all group"
                >
                  <div className="h-56 overflow-hidden">
                    <img src={exp.image} alt={`${exp.title} — private tour Casablanca`} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-bold bg-accent/10 text-accent px-3 py-1 rounded-full">{exp.duration}</span>
                      <span className="text-xs text-muted-foreground">{exp.format}</span>
                    </div>
                    <h3 className="font-heading text-xl font-bold text-foreground mb-2">{exp.title}</h3>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">{exp.description}</p>
                    <Link to="/contact" className="inline-flex items-center gap-2 text-accent font-semibold text-sm hover:gap-3 transition-all">
                      Book This Tour <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* What You'll Discover */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              What You'll Discover on a Casablanca Private Tour
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { title: "Hassan II Mosque", desc: "The third-largest mosque in the world, built over the Atlantic Ocean. Our guide provides rich cultural and architectural context." },
                { title: "Art Deco District", desc: "Casablanca's colonial-era architectural gems — one of the largest Art Deco collections outside of Miami." },
                { title: "Habous Quarter (New Medina)", desc: "A 1930s French-designed medina blending Moroccan and European architectural styles. Perfect for souvenir shopping." },
                { title: "The Corniche & Atlantic Coast", desc: "Casablanca's vibrant coastal promenade with ocean views, local cafes, and contemporary Moroccan life." },
                { title: "Central Market", desc: "A sensory adventure through fresh produce, spices, seafood, and the daily rhythms of Casablanca's residents." },
                { title: "Jewish Heritage Sites", desc: "Beth-El Synagogue, the Jewish Museum, and former Mellah neighborhoods — exploring centuries of Jewish-Muslim coexistence." },
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

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-secondary/10">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              Frequently Asked Questions About Casablanca Private Tours
            </h2>
            <div className="space-y-6">
              {[
                { q: "What is the best private tour in Casablanca?", a: "The Essence of Casablanca tour (4–5 hours) is our most popular experience. It covers Hassan II Mosque, the Corniche, Habous Quarter, Art Deco architecture, and the Central Market — all with private vehicle and certified guide." },
                { q: "Can I customize my Casablanca tour?", a: "Absolutely. Every tour can be fully customized based on your interests, pace, and preferences. We offer pre-arrival consultation to design the perfect itinerary." },
                { q: "Is there a walking tour available in Casablanca?", a: "Yes, our Casablanca Cultural Walking Experience is a 3-hour private walking tour focusing on architecture, urban life, and the hidden details of the city." },
                { q: "Do you offer Jewish heritage tours in Casablanca?", a: "Yes, we offer a dedicated 3–4 hour Jewish Heritage Experience covering Beth-El Synagogue, the Jewish Museum, former Mellah neighborhoods, and the history of Morocco's Jewish community." },
                { q: "How do I book a private guide in Casablanca?", a: "You can book through our contact form, via WhatsApp, or by emailing contact@radmorocco.com. We recommend booking at least 2 weeks in advance for customized experiences." },
              ].map((faq) => (
                <details key={faq.q} className="bg-card rounded-2xl border border-border/50 overflow-hidden group">
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
              Ready to Explore Casablanca with a Private Guide?
            </h2>
            <p className="font-body text-muted-foreground mb-8 text-lg">
              Contact us today to plan your private Casablanca tour. Every detail is tailored to make your visit unforgettable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-4 font-body font-bold text-accent-foreground shadow-lg hover:shadow-glow transition-all hover:scale-105 text-base"
              >
                Request a Free Quote <ArrowRight className="ml-2 w-5 h-5" />
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

export default CasablancaPrivateTours;
