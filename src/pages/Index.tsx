import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ToursSection from "@/components/ToursSection";
import DayTripsSection from "@/components/DayTripsSection";
import GallerySection from "@/components/GallerySection";
import DesignToursSection from "@/components/DesignToursSection";
import Footer from "@/components/Footer";
import AIAssistant from "@/components/AIAssistant";
import WhatsAppButton from "@/components/WhatsAppButton";
import SeoHead from "@/components/SeoHead";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SeoHead 
        title="Luxury Travel Agency & Custom Tours" 
        description="Discover the magic of Morocco with RAD Morocco. We provide signature day trips, custom design tours, and full immersive itineraries exploring Imperial Cities and the Sahara Desert."
      />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ToursSection />
      <DayTripsSection />
      <DesignToursSection />
      <GallerySection />
      <Footer />
      <AIAssistant />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
