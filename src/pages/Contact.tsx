import Navbar from "@/components/Navbar";
import ReservationSection from "@/components/ReservationSection";
import Footer from "@/components/Footer";
import AIAssistant from "@/components/AIAssistant";
import WhatsAppButton from "@/components/WhatsAppButton";
import SeoHead from "@/components/SeoHead";
import { motion } from "framer-motion";

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Book Your Private Morocco Tour",
  "description": "Contact RAD Morocco to book private tours, custom itineraries, and guided experiences across Morocco and Casablanca.",
  "url": "https://radmorocco.com/contact",
  "mainEntity": {
    "@type": "TravelAgency",
    "name": "RAD Morocco",
    "telephone": "+212520302005",
    "email": "contact@radmorocco.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "BP 14646 CASA PAL",
      "addressLocality": "Casablanca",
      "postalCode": "20032",
      "addressCountry": "MA"
    }
  }
};

const Contact = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SeoHead 
        title="Book Your Private Morocco Tour — Contact & Reservations" 
        description="Book your private guided tour in Morocco. Contact RAD Morocco for custom itineraries, Casablanca day tours, desert experiences, and Jewish heritage tours. Get a personalized quote today."
        canonical="https://radmorocco.com/contact"
        keywords="book private tour Morocco, Morocco tour reservation, Casablanca tour booking, private guide Morocco contact, Morocco travel inquiry"
        structuredData={contactSchema}
      />
      <Navbar />
      
      {/* Hero banner for the Contact page */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 bg-primary overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=1600&q=80" 
            alt="Book your private Morocco tour with RAD Morocco" 
            className="w-full h-full object-cover opacity-40 shadow-2xl"
            loading="eager"
            width="1600"
            height="900"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/80 to-accent/20" />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-body text-accent text-sm tracking-[0.3em] uppercase mb-4"
          >
            Get In Touch
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4"
          >
            Book Your Private Morocco Tour
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="font-body text-primary-foreground/70 max-w-2xl mx-auto text-sm md:text-base"
          >
            We're here to help you plan your perfect Moroccan adventure — from Casablanca private tours to custom multi-day itineraries across Morocco.
          </motion.p>
        </div>
      </section>

      <div className="flex-grow">
        <ReservationSection />
      </div>

      <Footer />
      <AIAssistant />
      <WhatsAppButton />
    </div>
  );
};

export default Contact;
