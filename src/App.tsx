import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { HelmetProvider } from "react-helmet-async";

// Lazy-loaded pages
const Index = lazy(() => import("./pages/Index"));
const TravelConsulting = lazy(() => import("./pages/TravelConsulting"));
const Contact = lazy(() => import("./pages/Contact"));
const DesignTours = lazy(() => import("./pages/DesignTours"));
const TourDetail = lazy(() => import("./pages/TourDetail"));
const MoroccanCuisineArticle = lazy(() => import("./pages/MoroccanCuisineArticle"));
const MusicalDiscoveryTrip = lazy(() => import("./pages/MusicalDiscoveryTrip"));
const NotFound = lazy(() => import("./pages/NotFound"));

import PageLoader from "./components/PageLoader";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/travel-consulting" element={<TravelConsulting />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/design-tours" element={<DesignTours />} />
            <Route path="/tours/:id" element={<TourDetail />} />
            <Route path="/articles/moroccan-cuisine" element={<MoroccanCuisineArticle />} />
            <Route path="/tours/musical-discovery" element={<MusicalDiscoveryTrip />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  </HelmetProvider>
);

export default App;
