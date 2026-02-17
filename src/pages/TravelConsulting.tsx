import Navbar from "@/components/Navbar";
import ConsultingSection from "@/components/ConsultingSection";
import ReservationSection from "@/components/ReservationSection";
import Footer from "@/components/Footer";
import AIAssistant from "@/components/AIAssistant";
import WhatsAppButton from "@/components/WhatsAppButton";
import { motion } from "framer-motion";

const TravelConsulting = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero banner for the page */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-accent/20 opacity-90" />
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }} />
        <div className="relative container mx-auto px-4 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-body text-accent text-sm tracking-[0.3em] uppercase mb-4"
          >
            Expert Guidance for Your Journey
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4"
          >
            Travel Consulting
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="font-body text-primary-foreground/70 max-w-2xl mx-auto text-sm md:text-base"
          >
            Plan your Morocco experience with personalized consulting and tailored itineraries.
          </motion.p>
        </div>
      </section>

      <ConsultingSection />
      <ReservationSection />
      <Footer />
      <AIAssistant />
      <WhatsAppButton />
    </div>
  );
};

export default TravelConsulting;
