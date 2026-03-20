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

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SeoHead 
        title={`${tour.title} | RAD Morocco Tours`}
        description={tour.description.slice(0, 155) + "..."}
      />
      <Navbar />

      <main className="flex-grow pt-24 md:pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
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
              alt={tour.title} 
              className="w-full h-full object-cover"
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
            <div className="lg:col-span-2 space-y-10">
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
            </div>

            {/* Sidebar / CTA */}
            <div className="lg:col-span-1">
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
              </div>
            </div>
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
