import Navbar from "@/components/Navbar";
import ConsultingSection from "@/components/ConsultingSection";
<<<<<<< HEAD
import ConsultingBookingForm from "@/components/ConsultingBookingForm";
import Footer from "@/components/Footer";
import AIAssistant from "@/components/AIAssistant";
import WhatsAppButton from "@/components/WhatsAppButton";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

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

=======
import Footer from "@/components/Footer";
import AIAssistant from "@/components/AIAssistant";
import WhatsAppButton from "@/components/WhatsAppButton";
import { motion } from "framer-motion";

const TravelConsulting = () => {
>>>>>>> a88bd6b1928c5a563f4cf5637c85cd263fe06f4e
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
<<<<<<< HEAD
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
=======
      {/* Hero banner for the page */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 bg-primary overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1564507004663-b6dfb3c824d5?w=1600&q=80" 
            alt="Moroccan Riad Garden" 
            className="w-full h-full object-cover opacity-40 shadow-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/80 to-accent/20" />
        </div>
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }} />
        <div className="relative container mx-auto px-4 text-center">
>>>>>>> a88bd6b1928c5a563f4cf5637c85cd263fe06f4e
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
<<<<<<< HEAD
            className="font-body text-accent font-bold text-sm tracking-[0.2em] uppercase mb-4"
=======
            className="font-body text-accent text-sm tracking-[0.3em] uppercase mb-4"
>>>>>>> a88bd6b1928c5a563f4cf5637c85cd263fe06f4e
          >
            Expert Guidance for Your Journey
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
<<<<<<< HEAD
            className="font-heading text-4xl md:text-5xl lg:text-7xl font-bold text-foreground mb-6 leading-tight"
          >
            Travel <span className="text-accent underline decoration-accent/20 underline-offset-8">Consulting</span>
=======
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4"
          >
            Travel Consulting
>>>>>>> a88bd6b1928c5a563f4cf5637c85cd263fe06f4e
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
<<<<<<< HEAD
            className="font-body text-muted-foreground max-w-2xl mx-auto text-base md:text-lg leading-relaxed"
=======
            className="font-body text-primary-foreground/70 max-w-2xl mx-auto text-sm md:text-base"
>>>>>>> a88bd6b1928c5a563f4cf5637c85cd263fe06f4e
          >
            Plan your Morocco experience with personalized consulting and tailored itineraries.
          </motion.p>
        </div>
      </section>

<<<<<<< HEAD
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

=======
      <ConsultingSection />
>>>>>>> a88bd6b1928c5a563f4cf5637c85cd263fe06f4e
      <Footer />
      <AIAssistant />
      <WhatsAppButton />
    </div>
  );
};

export default TravelConsulting;
