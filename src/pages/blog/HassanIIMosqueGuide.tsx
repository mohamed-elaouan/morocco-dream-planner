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
    "headline": "How to Visit Hassan II Mosque: Complete 2026 Guide",
    "description": "Everything you need to know about visiting the Hassan II Mosque in Casablanca — opening hours, dress code, tour options, and local guide tips.",
    "author": { "@type": "Person", "name": "Radouane El Aouan" },
    "publisher": { "@type": "Organization", "name": "RAD Morocco", "url": "https://radmorocco.com" },
    "datePublished": "2026-04-08",
    "dateModified": "2026-04-08",
    "mainEntityOfPage": "https://radmorocco.com/blog/hassan-ii-mosque-visit-guide",
    "url": "https://radmorocco.com/blog/hassan-ii-mosque-visit-guide"
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Can non-Muslims visit the Hassan II Mosque?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. The Hassan II Mosque is one of the few mosques in Morocco open to non-Muslim visitors. Interior visits are available through official guided tours at scheduled times."
        }
      },
      {
        "@type": "Question",
        "name": "What is the dress code for visiting the Hassan II Mosque?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Modest dress is required. Shoulders and knees should be covered for both men and women. Shoes are removed before entering. Headscarves are not required for non-Muslim women but are available."
        }
      },
      {
        "@type": "Question",
        "name": "How much does it cost to visit the Hassan II Mosque?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The official mosque guided tour costs approximately 130 MAD (~$13 USD) for adults. Children and students may receive discounted entry. Private guided tours of the exterior and surroundings with cultural context can be arranged through RAD Morocco."
        }
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://radmorocco.com/" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://radmorocco.com/blog" },
      { "@type": "ListItem", "position": 3, "name": "Hassan II Mosque Visit Guide", "item": "https://radmorocco.com/blog/hassan-ii-mosque-visit-guide" }
    ]
  }
];

const HassanIIMosqueGuide = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SeoHead
        title="How to Visit Hassan II Mosque — Complete 2026 Guide"
        description="Complete guide to visiting the Hassan II Mosque in Casablanca. Opening hours, dress code, ticket prices, photography tips, and how to combine your mosque visit with a private Casablanca tour."
        canonical="https://radmorocco.com/blog/hassan-ii-mosque-visit-guide"
        keywords="Hassan II Mosque visit, Hassan II Mosque Casablanca, Hassan II Mosque tour, visit mosque Casablanca, Casablanca mosque, Hassan II Mosque opening hours"
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
              <li className="text-foreground font-medium">Hassan II Mosque Guide</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-bold bg-accent/10 text-accent px-3 py-1 rounded-full">Casablanca</span>
              <span className="text-xs text-muted-foreground flex items-center gap-1"><Clock className="w-3 h-3" />7 min read</span>
              <time dateTime="2026-04-08" className="text-xs text-muted-foreground">April 8, 2026</time>
            </div>
            <h1 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
              How to Visit Hassan II Mosque: Complete 2026 Guide
            </h1>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              The Hassan II Mosque is Casablanca's most iconic landmark and one of the largest mosques in the world. Here's everything you need to know to plan your visit.
            </p>
          </header>

          {/* Content */}
          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">About the Hassan II Mosque</h2>
              <p className="font-body text-muted-foreground leading-relaxed">
                Completed in 1993, the <strong>Hassan II Mosque</strong> is a masterpiece of Moroccan architecture and craftsmanship. Built on a promontory overlooking the Atlantic Ocean, it features the tallest minaret in the world at 210 meters (689 feet) and can accommodate 25,000 worshippers inside and 80,000 in its surrounding courtyard.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed">
                The mosque was commissioned by King Hassan II and designed by French architect Michel Pinseau. Its construction involved over 6,000 Moroccan artisans who crafted intricate zellige tilework, carved plaster, and cedarwood ceilings over six years. A retractable roof opens to the sky — a stunning engineering achievement that connects worshippers with the heavens.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">Visitor Information</h2>
              <div className="bg-secondary/10 rounded-2xl p-6 space-y-4">
                {[
                  { label: "Opening Hours", value: "Saturday to Thursday: 9:00, 10:00, 11:00, 14:00. Friday: 9:00, 14:00" },
                  { label: "Ticket Price", value: "~130 MAD ($13 USD) for adults. Students and children discounted." },
                  { label: "Duration", value: "Official guided tour: ~1 hour" },
                  { label: "Dress Code", value: "Modest clothing required. Shoulders and knees covered. Shoes removed." },
                  { label: "Photography", value: "Allowed inside during the official tour (no flash)" },
                  { label: "Location", value: "Boulevard de la Corniche, Casablanca, directly on the Atlantic coast" },
                ].map((item) => (
                  <div key={item.label} className="flex gap-4">
                    <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <span className="font-heading font-bold text-foreground">{item.label}:</span>
                      <span className="font-body text-muted-foreground ml-2">{item.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">Tips from a Local Guide</h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-4">
                As a certified Casablanca guide who has visited the Hassan II Mosque thousands of times, here are my top tips:
              </p>
              <ul className="list-disc pl-6 space-y-2 font-body text-muted-foreground">
                <li><strong>Arrive early</strong> — the 9:00 AM tour is typically less crowded</li>
                <li><strong>Visit at sunset</strong> — even if you can't go inside, the exterior at golden hour is magical</li>
                <li><strong>Combine with a city tour</strong> — the mosque is a natural starting point for a private Casablanca tour</li>
                <li><strong>Bring socks</strong> — you'll need to remove your shoes inside</li>
                <li><strong>Context matters</strong> — a private guide can explain the religious, cultural, and architectural significance in ways the official tour may not cover</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">Combine Your Mosque Visit with a Private Casablanca Tour</h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-6">
                The Hassan II Mosque is typically the first stop on our <strong>Essence of Casablanca</strong> private tour (4–5 hours). After exploring the mosque's exterior and cultural context, your private guide takes you through the Corniche, Habous Quarter, Art Deco district, and Central Market — creating a complete, in-depth Casablanca experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/casablanca-private-tours"
                  className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 font-body font-bold text-accent-foreground shadow-lg hover:shadow-glow transition-all hover:scale-105 text-sm"
                >
                  View Casablanca Tours <ArrowRight className="ml-2 w-4 h-4" />
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

            {/* FAQ */}
            <section>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {[
                  { q: "Can non-Muslims visit the Hassan II Mosque?", a: "Yes. It is one of the few mosques in Morocco open to non-Muslim visitors through official guided tours." },
                  { q: "What is the dress code?", a: "Modest clothing covering shoulders and knees. Shoes are removed. Headscarves are not required for non-Muslim women." },
                  { q: "Is it worth visiting?", a: "Absolutely. The Hassan II Mosque is one of the most impressive religious buildings in the world — the architecture, craftsmanship, and oceanside setting are extraordinary." },
                  { q: "Can I visit with my own private guide?", a: "The interior requires the mosque's official guided tour. However, a private Casablanca guide can accompany you for the exterior, provide deeper cultural context, and integrate the visit into a full city tour." },
                ].map((faq) => (
                  <details key={faq.q} className="bg-card rounded-2xl border border-border/50 overflow-hidden">
                    <summary className="flex items-center justify-between p-5 cursor-pointer font-heading font-bold text-foreground hover:text-accent transition-colors">
                      {faq.q}
                    </summary>
                    <div className="px-5 pb-5 -mt-1">
                      <p className="font-body text-muted-foreground leading-relaxed">{faq.a}</p>
                    </div>
                  </details>
                ))}
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
              <Link to="/blog/jewish-heritage-morocco-guide" className="p-4 rounded-xl bg-card border border-border/50 hover:border-accent/30 transition-colors group">
                <h3 className="font-heading text-lg font-bold text-foreground group-hover:text-accent transition-colors">Jewish Heritage Morocco Guide →</h3>
                <p className="text-sm text-muted-foreground">2,000 years of history</p>
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

export default HassanIIMosqueGuide;
