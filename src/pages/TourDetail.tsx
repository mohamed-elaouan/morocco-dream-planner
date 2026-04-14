import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, MapPin, Calendar, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AIAssistant from "@/components/AIAssistant";
import WhatsAppButton from "@/components/WhatsAppButton";
import SeoHead from "@/components/SeoHead";
import { tours } from "@/components/ToursSection";

const TourDetail = () => {
  const { id } = useParams<{ id: string }>();
  const tour = tours.find((t) => t.id === id);

  if (!tour) {
    return <Navigate to="/" replace />;
  }

  const tourSchema = [
    {
      "@context": "https://schema.org",
      "@type": "TouristTrip",
      "name": tour.title,
      "description": tour.description,
      "touristType": ["Cultural tourism", "Private tours", "Guided tours"],
      "provider": {
        "@type": "TravelAgency",
        "name": "RAD Morocco",
        "url": "https://radmorocco.com"
      },
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock",
        "url": `https://radmorocco.com/tours/${tour.id}`,
        "priceCurrency": "USD",
        "seller": {
          "@type": "TravelAgency",
          "name": "RAD Morocco"
        }
      },
      "itinerary": {
        "@type": "ItemList",
        "numberOfItems": tour.highlights.length,
        "itemListElement": tour.highlights.map((h, i) => ({
          "@type": "ListItem",
          "position": i + 1,
          "name": h
        }))
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://radmorocco.com/" },
        { "@type": "ListItem", "position": 2, "name": "Morocco Tours", "item": "https://radmorocco.com/#tours" },
        { "@type": "ListItem", "position": 3, "name": tour.title, "item": `https://radmorocco.com/tours/${tour.id}` }
      ]
    }
  ];

  // Generate SEO-friendly description
  const seoDescription = `${tour.title} — ${tour.duration}. ${tour.description.slice(0, 130)}... Book this private Morocco tour with RAD Morocco.`;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SeoHead 
        title={`${tour.title} — Private Morocco Tour`}
        description={seoDescription}
        canonical={`https://radmorocco.com/tours/${tour.id}`}
        keywords={`${tour.title}, private tour Morocco, Morocco tours, ${tour.highlights.slice(0, 3).join(', ')}`}
        structuredData={tourSchema}
      />
      <Navbar />

      <main className="flex-grow pt-24 md:pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
          {/* Breadcrumb navigation for SEO */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-muted-foreground font-body">
              <li><Link to="/" className="hover:text-accent transition-colors">Home</Link></li>
              <li className="text-border">/</li>
              <li><Link to="/#tours" className="hover:text-accent transition-colors">Morocco Tours</Link></li>
              <li className="text-border">/</li>
              <li className="text-foreground font-medium">{tour.title}</li>
            </ol>
          </nav>

          {/* Back Button */}
          <Link 
            to="/#tours" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors mb-8 font-body font-medium"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Tours
          </Link>

          {/* Hero Image */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full h-[40vh] md:h-[60vh] rounded-[2rem] overflow-hidden mb-12 shadow-2xl relative"
          >
            <img 
              src={tour.image} 
              alt={`${tour.title} — Private guided tour in Morocco by RAD Morocco`}
              className="w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 md:bottom-12 md:left-12 drop-shadow-lg">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/90 text-white font-semibold text-xs md:text-sm mb-4">
                <Clock className="w-4 h-4" />
                {tour.duration}
              </span>
              <h1 className="font-heading text-4xl md:text-6xl font-bold text-white leading-tight">
                {tour.title}
              </h1>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <article className="lg:col-span-2 space-y-10">
              <section>
                <h2 className="font-heading text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <MapPin className="w-6 h-6 text-accent" />
                  Tour Overview
                </h2>
                <p className="font-body text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
                  {tour.description}
                </p>
              </section>

              {tour.highlights && (
                <section className="bg-secondary/10 p-8 rounded-[2rem]">
                  <h3 className="font-heading text-2xl font-bold text-foreground mb-6">Experience Highlights</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {tour.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                        <span className="font-body text-foreground/80 font-medium">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* SEO content section */}
              <section className="border-t border-border/50 pt-8">
                <h3 className="font-heading text-2xl font-bold text-foreground mb-4">Why Choose This Private Morocco Tour?</h3>
                <p className="font-body text-muted-foreground leading-relaxed mb-4">
                  This {tour.title} is led by Radouane El Aouan, a certified national tour guide with over 18 years of experience in Morocco's tourism industry. Unlike group tours, this private guided experience is tailored to your pace, interests, and preferences.
                </p>
                <p className="font-body text-muted-foreground leading-relaxed">
                  RAD Morocco specializes in creating authentic, culturally rich experiences that go beyond surface-level tourism. Whether you're interested in Morocco's imperial history, desert landscapes, or local culture, every detail is thoughtfully planned.
                </p>
              </section>
            </article>

            {/* Sidebar / CTA */}
            <aside className="lg:col-span-1">
              <div className="sticky top-32 p-8 rounded-[2rem] bg-card border border-border shadow-elevated">
                <h3 className="font-heading text-2xl font-bold text-foreground mb-4">Ready for the journey?</h3>
                <p className="font-body text-muted-foreground mb-8 text-sm leading-relaxed">
                  Fill out our quick personalized consulting form or contact us directly to begin planning {tour.title}.
                </p>
                
                <div className="space-y-4">
                  <Link 
                    to={`/contact?tour=${encodeURIComponent(tour.title)}`}
                    className="w-full flex items-center justify-center gap-2 bg-accent text-accent-foreground py-4 px-6 rounded-full font-bold shadow-glow hover:scale-105 transition-all text-sm"
                  >
                    <Calendar className="w-4 h-4" />
                    Request a Quote
                  </Link>
                  <a 
                    href="https://wa.me/message/F2FIG7DSVSLDO1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white py-4 px-6 rounded-full font-bold shadow-lg hover:bg-[#1da851] hover:scale-105 transition-all text-sm"
                  >
                    Chat on WhatsApp
                  </a>
                </div>

                {/* Trust signals */}
                <div className="mt-8 pt-6 border-t border-border/50 space-y-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground font-body">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    <span>Certified National Guide</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground font-body">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    <span>18+ Years Experience</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground font-body">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    <span>5000+ Happy Travelers</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground font-body">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    <span>100% Private & Customizable</span>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <Footer />
      <AIAssistant />
      <WhatsAppButton />
    </div>
  );
};

export default TourDetail;
