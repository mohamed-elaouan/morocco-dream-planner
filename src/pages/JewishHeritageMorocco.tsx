import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Star, CheckCircle, ArrowRight, Phone, MapPin, Clock, Users, Award, BookOpen } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AIAssistant from "@/components/AIAssistant";
import WhatsAppButton from "@/components/WhatsAppButton";
import SeoHead from "@/components/SeoHead";
import jewishImg from "@/assets/jewish_heritage.png";
import casa03 from "@/assets/Casablanca/davide.jpg";

const jewishHeritageSchema = [
  {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    "name": "Jewish Heritage Morocco Tour",
    "description": "Private Jewish heritage tours across Morocco — exploring synagogues, mellahs, the Jewish Museum of Casablanca, and over 2000 years of Jewish-Muslim coexistence. Led by certified guide Radouane El Aouan.",
    "touristType": ["Jewish heritage tourism", "Cultural tourism", "Private guided tours"],
    "provider": {
      "@type": "TravelAgency",
      "name": "RAD Morocco",
      "url": "https://radmorocco.com"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What does the Jewish Heritage Morocco tour include?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our Jewish heritage tour covers synagogues (Beth-El in Casablanca), the Jewish Museum of Casablanca, former mellah neighborhoods, historic Jewish quarters in Fes and Marrakech, and discussions on Morocco's unique tradition of Jewish-Muslim coexistence spanning over 2000 years."
        }
      },
      {
        "@type": "Question",
        "name": "Is there a Jewish heritage tour in Casablanca?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, RAD Morocco offers a dedicated 3-4 hour private Jewish Heritage Experience in Casablanca covering Beth-El Synagogue, the Jewish Museum, former Jewish neighborhoods, and the Mellah's history. It can be extended to a multi-day tour across Morocco."
        }
      },
      {
        "@type": "Question",
        "name": "Can I customize a Jewish heritage itinerary across Morocco?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. We design custom Jewish heritage itineraries covering multiple cities including Casablanca, Fes, Marrakech, Essaouira, and rural communities. Each itinerary is tailored to your interests, pace, and travel dates."
        }
      },
      {
        "@type": "Question",
        "name": "Who guides the Jewish heritage tours?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "All tours are led by Radouane El Aouan, a certified national tour guide with over 18 years of experience and deep knowledge of Morocco's Jewish heritage, history, and cultural landscape."
        }
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://radmorocco.com/" },
      { "@type": "ListItem", "position": 2, "name": "Jewish Heritage Morocco", "item": "https://radmorocco.com/jewish-heritage-morocco" }
    ]
  }
];

const JewishHeritageMorocco = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SeoHead
        title="Jewish Heritage Morocco Tour — Private Guide & Custom Itinerary"
        description="Explore Morocco's rich Jewish heritage with a private guide. Visit synagogues, the Jewish Museum, historic mellahs in Casablanca, Fes & Marrakech. Over 2000 years of Jewish-Muslim coexistence. Book with RAD Morocco."
        canonical="https://radmorocco.com/jewish-heritage-morocco"
        keywords="Jewish heritage Morocco tour, Jewish tour Casablanca, Morocco Jewish private guide, Jewish Morocco itinerary, Jewish heritage Casablanca, Morocco Jewish history, mellah Morocco, synagogue Morocco"
        structuredData={jewishHeritageSchema}
      />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-primary overflow-hidden">
        <div className="absolute inset-0">
          <img src={jewishImg} alt="Jewish Heritage Tours in Morocco" className="w-full h-full object-cover opacity-25 scale-105" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/80 to-accent/20" />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent font-semibold text-sm mb-6 border border-accent/30 backdrop-blur-md"
          >
            <Star className="w-4 h-4" />
            Cultural Heritage
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
          >
            Jewish Heritage Morocco Tour
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="font-body text-white/80 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed"
          >
            Discover over 2,000 years of Jewish history in Morocco with a private guide. 
            From the mellahs of Fes and Marrakech to the synagogues of Casablanca — 
            experience Morocco's unique tradition of Jewish-Muslim coexistence.
          </motion.p>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-card border-b border-border/50 py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center">
            {[
              { icon: Award, label: "Certified Guide", value: "Since 2007" },
              { icon: MapPin, label: "Cities Covered", value: "Casablanca, Fes, Marrakech" },
              { icon: Star, label: "Google Rating", value: "5.0 ★★★★★" },
              { icon: Users, label: "Specialty", value: "Heritage Tourism" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-1">
                <stat.icon className="w-5 h-5 text-accent" />
                <p className="font-heading text-sm md:text-lg font-bold text-foreground">{stat.value}</p>
                <p className="text-xs text-muted-foreground font-body">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-grow">
        {/* Introduction */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <article className="prose prose-lg max-w-none">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                Morocco's Jewish Heritage: A Story of Coexistence
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed text-base md:text-lg mb-6">
                Morocco holds a truly unique place in the history of Jewish diaspora. For over <strong>2,000 years</strong>, Jewish communities thrived across Morocco — from the coastal cities of the north to the oases of the deep south. At its peak, Morocco was home to nearly <strong>300,000 Jewish residents</strong>, making it one of the largest Jewish populations in the Arab world.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed text-base md:text-lg mb-6">
                What distinguishes Morocco's <strong>Jewish heritage</strong> is the enduring tradition of <strong>Jewish-Muslim coexistence</strong>. Even today, Morocco's constitution recognizes its Jewish heritage as an integral part of the nation's identity. The country maintains <strong>synagogues</strong>, Jewish cemeteries, and cultural institutions — including the only <strong>Jewish Museum in the Arab world</strong>, located in Casablanca.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed text-base md:text-lg mb-8">
                Our <strong>Jewish Heritage Morocco Tour</strong> is designed for travelers seeking a meaningful, historically rich exploration of this legacy. Led by <strong>Radouane El Aouan</strong>, a certified national guide with deep knowledge of Morocco's pluralistic history, every experience is presented with <strong>sensitivity, depth, and cultural authenticity</strong>.
              </p>
            </article>
          </div>
        </section>

        {/* What You'll Visit */}
        <section className="py-16 md:py-24 bg-secondary/10">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              Key Sites on the Jewish Heritage Morocco Tour
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { title: "Jewish Museum of Casablanca", desc: "The only Jewish museum in the Arab world — showcasing religious artifacts, historical documents, and the story of Moroccan Jewry." },
                { title: "Beth-El Synagogue", desc: "One of Casablanca's most important synagogues, offering insight into the city's vibrant Jewish community past and present." },
                { title: "Historic Mellahs", desc: "Explore the former Jewish quarters (mellahs) of Fes, Marrakech, and Essaouira — each with unique architecture and history." },
                { title: "Fes Jewish Heritage", desc: "The Mellah of Fes, established in 1438, is the oldest in Morocco. Visit Ibn Danan Synagogue and the Jewish cemetery." },
                { title: "Marrakech & Essaouira", desc: "Discover Jewish heritage in the red city and the coastal town of Essaouira — once home to significant Jewish communities." },
                { title: "Migration & Diaspora Context", desc: "Understand the waves of migration that shaped Morocco's Jewish community — from the Spanish Inquisition to modern times." },
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

        {/* Tour Options */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              Flexible Tour Options
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 rounded-2xl bg-card border border-border/50 shadow-card">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-5 h-5 text-accent" />
                  <h3 className="font-heading text-xl font-bold text-foreground">Casablanca Day Tour</h3>
                </div>
                <p className="font-body text-sm text-muted-foreground mb-3">3–4 hours • Private + Vehicle</p>
                <p className="font-body text-muted-foreground leading-relaxed mb-4">
                  Focus on Casablanca's Jewish heritage — Beth-El Synagogue, the Jewish Museum, former mellah neighborhoods, and contextual discussions on coexistence.
                </p>
                <Link to="/contact?tour=Jewish+Heritage+Experience" className="inline-flex items-center gap-2 text-accent font-semibold text-sm hover:gap-3 transition-all">
                  Book This Tour <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="p-8 rounded-2xl bg-card border border-border/50 shadow-card">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-5 h-5 text-accent" />
                  <h3 className="font-heading text-xl font-bold text-foreground">Multi-City Itinerary</h3>
                </div>
                <p className="font-body text-sm text-muted-foreground mb-3">Custom duration • Fully private</p>
                <p className="font-body text-muted-foreground leading-relaxed mb-4">
                  Explore Jewish heritage across Morocco — Casablanca, Fes, Meknes, Marrakech, and Essaouira. Custom-designed itinerary based on your interests and schedule.
                </p>
                <Link to="/contact?tour=Jewish+Heritage+Morocco+Full+Tour" className="inline-flex items-center gap-2 text-accent font-semibold text-sm hover:gap-3 transition-all">
                  Design My Itinerary <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
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
                { q: "What does the Jewish Heritage Morocco tour include?", a: "Our tour covers synagogues, the Jewish Museum, historic mellahs, and cultural discussions. In Casablanca, we visit Beth-El Synagogue, the Jewish Museum, and former Jewish neighborhoods. Multi-city tours extend to Fes, Marrakech, and Essaouira." },
                { q: "Is the guide knowledgeable about Jewish history?", a: "Yes. Radouane El Aouan has extensive knowledge of Morocco's Jewish heritage, migration history, and the tradition of Muslim-Jewish coexistence. All tours are presented with academic depth and cultural sensitivity." },
                { q: "Can the tour be customized for academic or diaspora groups?", a: "Absolutely. We regularly work with academic groups, Moroccan diaspora families, and heritage travelers. Each itinerary is customized to focus on specific periods, communities, or geographic areas." },
                { q: "How far in advance should I book?", a: "We recommend booking at least 2–3 weeks in advance for customized itineraries. For multi-city tours, 4+ weeks allows us to arrange the best accommodations and logistics." },
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
              Explore Morocco's Jewish Heritage with a Private Guide
            </h2>
            <p className="font-body text-muted-foreground mb-8 text-lg">
              Whether you're tracing family history, conducting academic research, or simply seeking a meaningful cultural experience — we're here to guide you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact?tour=Jewish+Heritage+Morocco"
                className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-4 font-body font-bold text-accent-foreground shadow-lg hover:shadow-glow transition-all hover:scale-105 text-base"
              >
                Plan My Jewish Heritage Tour <ArrowRight className="ml-2 w-5 h-5" />
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

export default JewishHeritageMorocco;
