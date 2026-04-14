import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import { HelmetProvider } from "react-helmet-async";
import { initGA } from "@/lib/analytics";
import { usePageTracking } from "@/hooks/usePageTracking";

// Lazy-loaded pages
const Index = lazy(() => import("./pages/Index"));
const TravelConsulting = lazy(() => import("./pages/TravelConsulting"));
const Contact = lazy(() => import("./pages/Contact"));
const DesignTours = lazy(() => import("./pages/DesignTours"));
const TourDetail = lazy(() => import("./pages/TourDetail"));
const MoroccanCuisineArticle = lazy(() => import("./pages/MoroccanCuisineArticle"));
const MusicalDiscoveryTrip = lazy(() => import("./pages/MusicalDiscoveryTrip"));
const NotFound = lazy(() => import("./pages/NotFound"));

// SEO Landing Pages
const CasablancaPrivateTours = lazy(() => import("./pages/CasablancaPrivateTours"));
const JewishHeritageMorocco = lazy(() => import("./pages/JewishHeritageMorocco"));
const MoroccoCustomItinerary = lazy(() => import("./pages/MoroccoCustomItinerary"));

// Blog
const Blog = lazy(() => import("./pages/Blog"));
const BestCasablancaWalkingTour = lazy(() => import("./pages/blog/BestCasablancaWalkingTour"));
const HassanIIMosqueGuide = lazy(() => import("./pages/blog/HassanIIMosqueGuide"));
const JewishHeritageMoroccoGuide = lazy(() => import("./pages/blog/JewishHeritageMoroccoGuide"));

import PageLoader from "./components/PageLoader";

const queryClient = new QueryClient();

/**
 * Inner component that lives inside <BrowserRouter> so it can
 * safely call useLocation() via the usePageTracking hook.
 */
const AnalyticsTracker = () => {
  usePageTracking();
  return null;
};

const App = () => {
  // Initialize GA4 once on mount
  useEffect(() => {
    initGA();
  }, []);

  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      if ((e.target as HTMLElement).tagName === 'IMG') {
        e.preventDefault();
      }
    };
    
    document.addEventListener('contextmenu', handleContextMenu);
    return () => document.removeEventListener('contextmenu', handleContextMenu);
  }, []);

  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <AnalyticsTracker />
            <Suspense fallback={<PageLoader />}>
              <Routes>
                {/* Core Pages */}
                <Route path="/" element={<Index />} />
                <Route path="/travel-consulting" element={<TravelConsulting />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/design-tours" element={<DesignTours />} />
                <Route path="/tours/:id" element={<TourDetail />} />
                <Route path="/articles/moroccan-cuisine" element={<MoroccanCuisineArticle />} />
                <Route path="/tours/musical-discovery" element={<MusicalDiscoveryTrip />} />
                
                {/* SEO Landing Pages */}
                <Route path="/casablanca-private-tours" element={<CasablancaPrivateTours />} />
                <Route path="/jewish-heritage-morocco" element={<JewishHeritageMorocco />} />
                <Route path="/morocco-custom-itinerary" element={<MoroccoCustomItinerary />} />
                
                {/* Blog */}
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/best-casablanca-walking-tour" element={<BestCasablancaWalkingTour />} />
                <Route path="/blog/hassan-ii-mosque-visit-guide" element={<HassanIIMosqueGuide />} />
                <Route path="/blog/jewish-heritage-morocco-guide" element={<JewishHeritageMoroccoGuide />} />
                
                {/* 404 */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
};

export default App;
