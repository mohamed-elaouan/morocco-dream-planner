import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ToursSection from "@/components/ToursSection";
import DayTripsSection from "@/components/DayTripsSection";
import GallerySection from "@/components/GallerySection";
import Footer from "@/components/Footer";
import AIAssistant from "@/components/AIAssistant";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ToursSection />
      <DayTripsSection />
      <GallerySection />
      <Footer />
      <AIAssistant />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
