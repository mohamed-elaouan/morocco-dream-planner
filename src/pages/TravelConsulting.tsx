import Navbar from "@/components/Navbar";
import ConsultingSection from "@/components/ConsultingSection";
import ConsultingBookingForm from "@/components/ConsultingBookingForm";
import Footer from "@/components/Footer";
import AIAssistant from "@/components/AIAssistant";
import WhatsAppButton from "@/components/WhatsAppButton";
import SeoHead from "@/components/SeoHead";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const consultingSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Morocco Private Travel Consulting",
  "provider": {
    "@type": "TravelAgency",
    "name": "RAD Morocco",
    "url": "https://radmorocco.com"
  },
  "description": "Personalized travel consulting for Morocco — custom itineraries, private guides, and luxury tour planning by certified guide Radouane El Aouan.",
  "areaServed": {
    "@type": "Country",
    "name": "Morocco"
  },
  "serviceType": "Travel Consulting"
};

const TravelConsulting = () => {
  const [showBookingForm, setShowBookingForm] = useState(false);

  const handleRequestSession = () => {
    setShowBookingForm(true);
    setTimeout(() => {
      const element = document.getElementById("consulting-booking-form");
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-background">
      <SeoHead 
        title="Morocco Private Travel Consulting — Custom Itinerary Planning" 
        description="Plan your perfect Morocco trip with private travel consulting. Custom itineraries designed by certified guide Radouane El Aouan — from Casablanca day tours to Sahara desert adventures."
        canonical="https://radmorocco.com/travel-consulting"
        keywords="Morocco private guide, private tour Morocco, Morocco custom itinerary, Morocco travel consulting, private Morocco travel planner"
        structuredData={consultingSchema}
      />
      <Navbar />
      
      {/* Light Theme Hero banner for the page */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-section">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-background/80 backdrop-blur-[2px] z-10" />
          <img 
            src="https://images.unsplash.com/photo-1564507004663-b6dfb3c824d5?w=1600&q=80" 
            alt="Moroccan Riad Garden" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background z-20" />
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-gold/10 rounded-full blur-3xl" />

        <div className="relative z-30 container mx-auto px-4 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-body text-accent font-bold text-sm tracking-[0.2em] uppercase mb-4"
          >
            Expert Guidance for Your Journey
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="font-heading text-4xl md:text-5xl lg:text-7xl font-bold text-foreground mb-6 leading-tight"
          >
            Travel <span className="text-accent underline decoration-accent/20 underline-offset-8">Consulting</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="font-body text-muted-foreground max-w-2xl mx-auto text-base md:text-lg leading-relaxed"
          >
            Plan your Morocco experience with personalized consulting and tailored itineraries.
          </motion.p>
        </div>
      </section>

      <ConsultingSection onRequestSession={handleRequestSession} />
      
      {/* Dedicated 2-step Booking Form - Conditionally Rendered */}
      <AnimatePresence>
        {showBookingForm && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <ConsultingBookingForm />
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
      <AIAssistant />
      <WhatsAppButton />
    </div>
  );
};

export default TravelConsulting;
