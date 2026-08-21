import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SeoHead from "@/components/SeoHead";
import DeferredSection from "@/components/DeferredSection";
import AIAssistantLauncher from "@/components/AIAssistantLauncher";

const loadAbout = () => import("@/components/AboutSection");
const loadTours = () => import("@/components/ToursSection");
const loadDayTrips = () => import("@/components/DayTripsSection");
const loadDesignTours = () => import("@/components/DesignToursSection");
const loadReviews = () => import("@/components/GoogleReviewsSection");
const loadGallery = () => import("@/components/GallerySection");

const homepageSchema = [
  {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "@id": "https://radmorocco.com/#organization",
    "name": "RAD Morocco",
    "alternateName": "Rad Morocco Tours",
    "image": "https://radmorocco.com/logo.png",
    "url": "https://radmorocco.com",
    "telephone": "+212520302005",
    "description": "RAD Morocco is a boutique travel agency offering private guided tours, custom itineraries, and luxury travel experiences across Morocco. Based in Casablanca, led by certified national guide Radouane El Aouan since 2007.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "BP 14646 CASA PAL",
      "addressLocality": "Casablanca",
      "postalCode": "20032",
      "addressCountry": "MA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 33.5731,
      "longitude": -7.5898
    },
    "sameAs": [
      "https://web.facebook.com/radmorocco/",
      "https://www.instagram.com/radmorocco/",
      "https://www.linkedin.com/in/radmorocco/",
      "https://www.tiktok.com/@radmorocco"
    ],
    "priceRange": "$$$",
    "founder": {
      "@type": "Person",
      "name": "Radouane El Aouan",
      "jobTitle": "Certified National Tour Guide",
      "knowsAbout": ["Morocco tourism", "Casablanca tours", "Jewish heritage Morocco", "Moroccan culture"]
    },
    "areaServed": {
      "@type": "Country",
      "name": "Morocco"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Morocco Tours & Experiences",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "TouristTrip",
            "name": "Casablanca Private Tour",
            "description": "Private guided city tour of Casablanca including Hassan II Mosque, Art Deco district, and Habous Quarter."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "TouristTrip",
            "name": "Morocco Highlights Tour",
            "description": "12-day private tour covering Imperial Cities, Sahara Desert, and Atlas Mountains."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "TouristTrip",
            "name": "Jewish Heritage Morocco Tour",
            "description": "Private exploration of Morocco's Jewish heritage including synagogues, mellahs, and the Jewish Museum of Casablanca."
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "85",
      "bestRating": "5"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "RAD Morocco",
    "url": "https://radmorocco.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://radmorocco.com/?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What private tours does RAD Morocco offer in Casablanca?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "RAD Morocco offers several private Casablanca day tours including The Essence of Casablanca (4–5 hour city tour), Casablanca Cultural Walking Experience, Food Tasting Tour, Jewish Heritage Experience, and fully personalized private tours. All tours are led by certified guide Radouane El Aouan."
        }
      },
      {
        "@type": "Question",
        "name": "Can I book a custom Morocco itinerary?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! RAD Morocco specializes in custom-designed itineraries tailored to your interests, pace, and budget. From multi-day Imperial Cities tours to Sahara Desert adventures and cultural experiences, every journey is personalized with pre-arrival consultation."
        }
      },
      {
        "@type": "Question",
        "name": "Does RAD Morocco offer Jewish heritage tours?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, RAD Morocco offers specialized Jewish heritage tours in Casablanca and across Morocco, covering synagogues, the Jewish Museum, former mellahs, and the rich history of Jewish-Muslim coexistence spanning over 2000 years."
        }
      },
      {
        "@type": "Question",
        "name": "How do I book a private guide in Morocco?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can book a private Morocco guide through our contact form, via WhatsApp, or by email at contact@radmorocco.com. We recommend booking at least 2 weeks in advance for personalized itinerary planning."
        }
      }
    ]
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SeoHead 
        title="Private Morocco Tours & Casablanca Guide" 
        description="RAD Morocco — boutique travel agency offering private guided tours in Casablanca & Morocco. Custom itineraries, Jewish heritage tours, walking tours & luxury desert experiences. Certified guide since 2007."
        canonical="https://radmorocco.com/"
        keywords="private tour Morocco, Casablanca private guide, Morocco custom itinerary, Casablanca walking tour, private guide Morocco, Jewish heritage Morocco tour, Morocco private tours, Casablanca tour guide"
        structuredData={homepageSchema}
      />
      <Navbar />
      <HeroSection />
      <DeferredSection id="about" load={loadAbout} minHeight="38rem" />
      <DeferredSection id="tours" load={loadTours} minHeight="44rem" />
      <DeferredSection id="daytrips" load={loadDayTrips} minHeight="40rem" />
      <DeferredSection id="design-tours" load={loadDesignTours} minHeight="34rem" />
      <DeferredSection id="reviews" load={loadReviews} minHeight="32rem" />
      <DeferredSection id="gallery" load={loadGallery} minHeight="48rem" />
      <Footer />
      <AIAssistantLauncher />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
