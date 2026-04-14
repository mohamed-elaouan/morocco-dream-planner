import { Link } from "react-router-dom";
import { ArrowRight, Clock, Phone, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AIAssistant from "@/components/AIAssistant";
import WhatsAppButton from "@/components/WhatsAppButton";
import SeoHead from "@/components/SeoHead";

const articleSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Jewish Heritage in Morocco: Complete Guide to 2,000 Years of History",
    "description": "Explore Morocco's rich Jewish heritage — from the mellahs of Fes and Marrakech to the only Jewish museum in the Arab world.",
    "author": { "@type": "Person", "name": "Radouane El Aouan" },
    "publisher": { "@type": "Organization", "name": "RAD Morocco", "url": "https://radmorocco.com" },
    "datePublished": "2026-04-05",
    "dateModified": "2026-04-05",
    "mainEntityOfPage": "https://radmorocco.com/blog/jewish-heritage-morocco-guide",
    "url": "https://radmorocco.com/blog/jewish-heritage-morocco-guide"
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://radmorocco.com/" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://radmorocco.com/blog" },
      { "@type": "ListItem", "position": 3, "name": "Jewish Heritage Morocco Guide", "item": "https://radmorocco.com/blog/jewish-heritage-morocco-guide" }
    ]
  }
];

const JewishHeritageMoroccoGuide = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SeoHead
        title="Jewish Heritage in Morocco: Complete Guide to 2,000 Years of History"
        description="Discover Morocco's Jewish heritage — mellahs, synagogues, the Jewish Museum, and 2,000 years of Jewish-Muslim coexistence. A comprehensive guide for heritage travelers and history enthusiasts."
        canonical="https://radmorocco.com/blog/jewish-heritage-morocco-guide"
        keywords="Jewish heritage Morocco, Jewish tour Morocco, Morocco Jewish history, mellah Morocco, synagogue Morocco, Jewish Muslim coexistence Morocco, Jewish heritage Casablanca"
        type="article"
        structuredData={articleSchema}
      />
      <Navbar />

      <main className="flex-grow pt-28 md:pt-36 pb-20">
        <article className="container mx-auto px-4 max-w-3xl">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-muted-foreground font-body">
              <li><Link to="/" className="hover:text-accent transition-colors">Home</Link></li>
              <li className="text-border">/</li>
              <li><Link to="/blog" className="hover:text-accent transition-colors">Blog</Link></li>
              <li className="text-border">/</li>
              <li className="text-foreground font-medium">Jewish Heritage Morocco</li>
            </ol>
          </nav>

          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-bold bg-accent/10 text-accent px-3 py-1 rounded-full">Jewish Heritage</span>
              <span className="text-xs text-muted-foreground flex items-center gap-1"><Clock className="w-3 h-3" />10 min read</span>
              <time dateTime="2026-04-05" className="text-xs text-muted-foreground">April 5, 2026</time>
            </div>
            <h1 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
              Jewish Heritage in Morocco: Complete Guide to 2,000 Years of History
            </h1>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              Morocco's Jewish heritage is one of the most remarkable — and least known — stories in the Jewish diaspora. This guide explores the history, sites, and significance of Jewish life in Morocco.
            </p>
          </header>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">A Brief History of Jews in Morocco</h2>
              <p className="font-body text-muted-foreground leading-relaxed">
                Jewish presence in Morocco dates back over <strong>2,000 years</strong> — predating Islam itself. The first Jewish communities arrived as traders and settlers from the ancient Land of Israel, establishing themselves in coastal and interior cities across what is now Morocco.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed">
                Two major waves significantly shaped <strong>Morocco's Jewish population</strong>. The first followed the destruction of the Second Temple in 70 CE, bringing Jewish refugees to North Africa. The second and more transformative wave came after 1492, when the Spanish Inquisition expelled hundreds of thousands of Sephardic Jews. Many found refuge in Morocco, where they were welcomed by the Moroccan sultans.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed">
                At its peak in the mid-20th century, <strong>Morocco was home to nearly 300,000 Jewish residents</strong> — the largest Jewish population in the Arab world. Today, approximately 2,000–3,000 Jews remain in Morocco, primarily in Casablanca and Marrakech, but the heritage they built endures in the mellahs, synagogues, cemeteries, and cultural institutions across the country.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">Key Jewish Heritage Sites in Morocco</h2>
              <div className="space-y-4">
                {[
                  { title: "Casablanca — Jewish Museum of Morocco", desc: "The only Jewish museum in the Arab world. Houses religious artifacts, historical photographs, Torah scrolls, and documentation of Morocco's Jewish communities. A must-visit for heritage travelers." },
                  { title: "Casablanca — Beth-El Synagogue", desc: "One of the most important active synagogues in Morocco. Its architecture and community reflect the enduring presence of Jews in Casablanca." },
                  { title: "Fes — Mellah and Ibn Danan Synagogue", desc: "The mellah of Fes, established in 1438, is the oldest in Morocco. The beautifully restored Ibn Danan Synagogue is nestled within its narrow streets." },
                  { title: "Marrakech — Mellah and Lazama Synagogue", desc: "The mellah of Marrakech was once a thriving Jewish quarter. The Lazama Synagogue (Slat Al Azama) remains a beautiful testament to the community." },
                  { title: "Essaouira — Haim Pinto Synagogue", desc: "Essaouira (formerly Mogador) once had a Jewish majority. The synagogue dedicated to Rabbi Haim Pinto is a pilgrimage site." },
                  { title: "Ifrane and the Atlas Mountains", desc: "Small Jewish communities once existed throughout the Atlas Mountains and deep south, in towns like Ifrane (Anti-Atlas), Tinghir, and Ouarzazate." },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4 p-4 rounded-xl bg-secondary/10 border border-border/30">
                    <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-1" />
                    <div>
                      <h3 className="font-heading text-lg font-bold text-foreground mb-1">{item.title}</h3>
                      <p className="font-body text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">Morocco's Unique Tradition of Coexistence</h2>
              <p className="font-body text-muted-foreground leading-relaxed">
                What makes Morocco's Jewish heritage truly exceptional is the <strong>tradition of Jewish-Muslim coexistence</strong>. While Jewish communities faced persecution elsewhere, Morocco's sultans historically offered protection. During World War II, King Mohammed V famously refused to comply with Vichy France's anti-Jewish laws, declaring "There are no Jewish citizens, there are no Muslim citizens. They are all Moroccans."
              </p>
              <p className="font-body text-muted-foreground leading-relaxed">
                Today, Morocco's 2011 constitution explicitly recognizes the <strong>Hebraic component</strong> of the nation's identity — a remarkable statement in the Arab world. Jewish holy sites are maintained by the Moroccan state, and annual pilgrimages (hillulot) to the tombs of Jewish saints continue to draw visitors from around the world.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">Planning a Jewish Heritage Tour in Morocco</h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-4">
                A <strong>Jewish heritage tour in Morocco</strong> requires a guide with deep knowledge of both Jewish and Moroccan history. At RAD Morocco, Radouane El Aouan has extensive experience guiding heritage travelers, academic groups, and Moroccan diaspora families through the country's Jewish sites.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed mb-6">
                Tour options range from a <strong>half-day Jewish Heritage Experience in Casablanca</strong> (3–4 hours) to a <strong>multi-city custom itinerary</strong> covering Casablanca, Fes, Marrakech, and Essaouira. Every tour is private and fully customizable.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/jewish-heritage-morocco"
                  className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 font-body font-bold text-accent-foreground shadow-lg hover:shadow-glow transition-all hover:scale-105 text-sm"
                >
                  View Jewish Heritage Tours <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <a
                  href="https://wa.me/message/F2FIG7DSVSLDO1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-[#25D366] px-6 py-3 font-body font-bold text-white shadow-lg hover:bg-[#1da851] transition-all hover:scale-105 text-sm"
                >
                  <Phone className="mr-2 w-4 h-4" /> Ask on WhatsApp
                </a>
              </div>
            </section>
          </div>

          {/* Related */}
          <div className="mt-16 pt-12 border-t border-border/50">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Related Guides</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link to="/blog/best-casablanca-walking-tour" className="p-4 rounded-xl bg-card border border-border/50 hover:border-accent/30 transition-colors group">
                <h3 className="font-heading text-lg font-bold text-foreground group-hover:text-accent transition-colors">Best Casablanca Walking Tour →</h3>
                <p className="text-sm text-muted-foreground">Explore Casablanca on foot</p>
              </Link>
              <Link to="/blog/hassan-ii-mosque-visit-guide" className="p-4 rounded-xl bg-card border border-border/50 hover:border-accent/30 transition-colors group">
                <h3 className="font-heading text-lg font-bold text-foreground group-hover:text-accent transition-colors">Hassan II Mosque Guide →</h3>
                <p className="text-sm text-muted-foreground">Complete visitor information</p>
              </Link>
            </div>
          </div>
        </article>
      </main>

      <Footer />
      <AIAssistant />
      <WhatsAppButton />
    </div>
  );
};

export default JewishHeritageMoroccoGuide;
