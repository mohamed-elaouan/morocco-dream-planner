import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Clock, Phone, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AIAssistant from "@/components/AIAssistant";
import WhatsAppButton from "@/components/WhatsAppButton";
import SeoHead from "@/components/SeoHead";

const articleSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Best Casablanca Walking Tour: What to See, Do & Experience",
    "description": "Discover the best walking tour in Casablanca — from Art Deco architecture and Mohammed V Square to hidden local neighborhoods.",
    "author": { "@type": "Person", "name": "Radouane El Aouan" },
    "publisher": { "@type": "Organization", "name": "RAD Morocco", "url": "https://radmorocco.com" },
    "datePublished": "2026-04-10",
    "dateModified": "2026-04-10",
    "mainEntityOfPage": "https://radmorocco.com/blog/best-casablanca-walking-tour",
    "url": "https://radmorocco.com/blog/best-casablanca-walking-tour"
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://radmorocco.com/" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://radmorocco.com/blog" },
      { "@type": "ListItem", "position": 3, "name": "Best Casablanca Walking Tour", "item": "https://radmorocco.com/blog/best-casablanca-walking-tour" }
    ]
  }
];

const BestCasablancaWalkingTour = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SeoHead
        title="Best Casablanca Walking Tour: What to See, Do & Experience (2026)"
        description="Discover the best walking tour in Casablanca — from Art Deco architecture and Mohammed V Square to hidden neighborhoods. Expert guide tips for your Casablanca walking experience."
        canonical="https://radmorocco.com/blog/best-casablanca-walking-tour"
        keywords="Casablanca walking tour, best Casablanca tour, walking tour Casablanca, Art Deco Casablanca, private walking tours, Casablanca private guide"
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
              <li className="text-foreground font-medium">Casablanca Walking Tour</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-bold bg-accent/10 text-accent px-3 py-1 rounded-full">Casablanca</span>
              <span className="text-xs text-muted-foreground flex items-center gap-1"><Clock className="w-3 h-3" />8 min read</span>
              <time dateTime="2026-04-10" className="text-xs text-muted-foreground">April 10, 2026</time>
            </div>
            <h1 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
              Best Casablanca Walking Tour: What to See, Do & Experience
            </h1>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              Casablanca is Morocco's largest city, but its soul is best discovered on foot. Here's everything you need to know about the best walking tour experience in the city.
            </p>
          </header>

          {/* Content */}
          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">Why Take a Walking Tour in Casablanca?</h2>
              <p className="font-body text-muted-foreground leading-relaxed">
                Most travelers pass through Casablanca on their way to Marrakech or Fes, missing out on one of Morocco's most layered and fascinating cities. A <strong>Casablanca walking tour</strong> reveals what a vehicle tour cannot — the subtle architectural details of the Art Deco district, the rhythms of daily life in local neighborhoods, and the stories behind the city's rapid transformation.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed">
                Unlike a standard sightseeing tour, a <strong>private walking experience</strong> in Casablanca lets you engage at street level — stopping for coffee at a neighborhood cafe, observing the craftsmanship in colonial-era facades, and having meaningful conversations with locals. It's the difference between seeing a city and <em>understanding</em> it.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">What You'll See on Casablanca's Best Walking Tour</h2>
              <div className="space-y-4">
                {[
                  { title: "Art Deco District", desc: "Casablanca has one of the largest collections of Art Deco architecture outside of Miami. Your walking tour guide will explain the French colonial influence, the Mauresque style, and how Casablanca became a laboratory of modern architecture in the early 20th century." },
                  { title: "Mohammed V Square", desc: "The heart of Casablanca's civic life. Surrounded by important colonial-era buildings, this square tells the story of Morocco's modern identity. A good guide will explain the political and cultural significance of every structure." },
                  { title: "Local Neighborhoods", desc: "Step beyond the tourist areas into neighborhoods where real Casablancans live. The contrast between colonial elegance and vibrant street life is what makes this walking tour genuinely immersive." },
                  { title: "Central Market", desc: "A sensory experience — fresh produce, seafood, spices, and local specialties. Your private guide will help you navigate the market and explain the cultural significance of Moroccan food traditions." },
                  { title: "Contemporary Casablanca", desc: "Casablanca is Morocco's economic engine. Your walking tour includes discussions about contemporary society, Morocco's role in Africa, and the city's rapid modernization." },
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
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">Private vs. Group Walking Tours in Casablanca</h2>
              <p className="font-body text-muted-foreground leading-relaxed">
                While free walking tours and group options exist, a <strong>private walking tour in Casablanca</strong> offers dramatically different value. With a certified private guide like Radouane El Aouan, you get:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4 font-body text-muted-foreground">
                <li><strong>Your own pace</strong> — stop when you want, skip what doesn't interest you</li>
                <li><strong>Deep cultural context</strong> — conversations, not lectures</li>
                <li><strong>Flexibility</strong> — your route adapts to your interests in real-time</li>
                <li><strong>Exclusive access</strong> — local connections that group tours can't offer</li>
                <li><strong>Photography opportunities</strong> — your guide knows the best angles and lighting</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">Practical Tips for Your Casablanca Walking Tour</h2>
              <ul className="list-disc pl-6 space-y-2 font-body text-muted-foreground">
                <li><strong>Best time:</strong> Morning (9-10 AM start) for the best light and comfortable temperatures</li>
                <li><strong>Duration:</strong> Plan for 3 hours minimum to cover the key areas</li>
                <li><strong>What to wear:</strong> Comfortable walking shoes, modest clothing, sun protection</li>
                <li><strong>Combine with:</strong> A food tasting experience for the full Casablanca picture</li>
                <li><strong>Book in advance:</strong> Private guided tours should be booked at least 1 week ahead</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">Book Your Casablanca Walking Tour</h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-6">
                Ready to explore Casablanca on foot with a certified private guide? RAD Morocco's Casablanca Cultural Walking Experience is a 3-hour private tour covering architecture, urban culture, and the city's hidden stories. Every tour is fully customizable.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact?tour=Casablanca+Walking+Tour"
                  className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 font-body font-bold text-accent-foreground shadow-lg hover:shadow-glow transition-all hover:scale-105 text-sm"
                >
                  Book Your Walking Tour <ArrowRight className="ml-2 w-4 h-4" />
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
              <Link to="/blog/hassan-ii-mosque-visit-guide" className="p-4 rounded-xl bg-card border border-border/50 hover:border-accent/30 transition-colors group">
                <h3 className="font-heading text-lg font-bold text-foreground group-hover:text-accent transition-colors">How to Visit Hassan II Mosque →</h3>
                <p className="text-sm text-muted-foreground">Complete visitor guide for 2026</p>
              </Link>
              <Link to="/casablanca-private-tours" className="p-4 rounded-xl bg-card border border-border/50 hover:border-accent/30 transition-colors group">
                <h3 className="font-heading text-lg font-bold text-foreground group-hover:text-accent transition-colors">Casablanca Private Tours →</h3>
                <p className="text-sm text-muted-foreground">All Casablanca tour options</p>
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

export default BestCasablancaWalkingTour;
