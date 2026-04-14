import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, Tag, BookOpen } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AIAssistant from "@/components/AIAssistant";
import WhatsAppButton from "@/components/WhatsAppButton";
import SeoHead from "@/components/SeoHead";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  keywords: string[];
  image?: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "best-casablanca-walking-tour",
    title: "Best Casablanca Walking Tour: What to See, Do & Experience",
    excerpt: "Discover the best walking tour in Casablanca — from Art Deco architecture and Mohammed V Square to hidden local neighborhoods. A complete guide to exploring Casablanca on foot with a private guide.",
    date: "2026-04-10",
    readTime: "8 min",
    category: "Casablanca",
    keywords: ["Casablanca walking tour", "walking tour Casablanca", "Art Deco Casablanca"],
  },
  {
    slug: "hassan-ii-mosque-visit-guide",
    title: "How to Visit Hassan II Mosque: Complete 2026 Guide",
    excerpt: "Everything you need to know about visiting the Hassan II Mosque in Casablanca — the third-largest mosque in the world. Opening hours, dress code, tour options, and tips from a local guide.",
    date: "2026-04-08",
    readTime: "7 min",
    category: "Casablanca",
    keywords: ["Hassan II Mosque visit", "Hassan II Mosque Casablanca", "mosque tour Casablanca"],
  },
  {
    slug: "jewish-heritage-morocco-guide",
    title: "Jewish Heritage in Morocco: Complete Guide to 2,000 Years of History",
    excerpt: "Explore Morocco's rich Jewish heritage — from the mellahs of Fes and Marrakech to the only Jewish museum in the Arab world. A complete guide to Jewish heritage tours in Morocco.",
    date: "2026-04-05",
    readTime: "10 min",
    category: "Jewish Heritage",
    keywords: ["Jewish heritage Morocco", "Jewish Morocco tour", "mellah Morocco"],
  },
];

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "name": "RAD Morocco Travel Blog",
  "description": "Expert insights, travel guides, and tips for exploring Morocco — from Casablanca walking tours and Hassan II Mosque visits to Jewish heritage and custom itineraries.",
  "url": "https://radmorocco.com/blog",
  "publisher": {
    "@type": "Organization",
    "name": "RAD Morocco",
    "url": "https://radmorocco.com"
  }
};

const Blog = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SeoHead
        title="Morocco Travel Blog — Guides, Tips & Insights"
        description="Expert travel guides for Morocco — Casablanca walking tours, Hassan II Mosque visits, Jewish heritage tours, and insider tips from certified guide Radouane El Aouan."
        canonical="https://radmorocco.com/blog"
        keywords="Morocco travel blog, Casablanca guide, Morocco travel tips, Morocco tour guide blog, Casablanca travel guide"
        structuredData={blogSchema}
      />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-section overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-gold/10 rounded-full blur-3xl" />
        <div className="relative container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-semibold text-sm mb-6 border border-accent/20"
          >
            <BookOpen className="w-4 h-4" />
            Travel Blog
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-heading text-4xl md:text-5xl lg:text-7xl font-bold text-foreground mb-6"
          >
            Morocco Travel Insights
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="font-body text-muted-foreground max-w-2xl mx-auto text-base md:text-lg"
          >
            Expert guides, cultural insights, and practical tips to help you plan the perfect Morocco experience.
          </motion.p>
        </div>
      </section>

      {/* Blog Grid */}
      <main className="flex-grow py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, i) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-2xl border border-border/50 overflow-hidden shadow-card hover:shadow-elevated transition-all group"
              >
                <div className="p-6 md:p-8 flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-bold bg-accent/10 text-accent px-3 py-1 rounded-full">
                      <Tag className="w-3 h-3 inline mr-1" />{post.category}
                    </span>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Clock className="w-3 h-3" />{post.readTime}
                    </span>
                  </div>
                  <h2 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors leading-tight">
                    <Link to={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6 flex-grow">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-border/50">
                    <time dateTime={post.date} className="text-xs text-muted-foreground font-body">
                      {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </time>
                    <Link to={`/blog/${post.slug}`} className="inline-flex items-center gap-2 text-accent font-semibold text-sm hover:gap-3 transition-all">
                      Read <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </main>

      <Footer />
      <AIAssistant />
      <WhatsAppButton />
    </div>
  );
};

export default Blog;
