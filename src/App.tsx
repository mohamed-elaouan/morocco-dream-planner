import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

// Lazy-loaded pages
const Index = lazy(() => import("./pages/Index"));
const TravelConsulting = lazy(() => import("./pages/TravelConsulting"));
const Contact = lazy(() => import("./pages/Contact"));
const DesignTours = lazy(() => import("./pages/DesignTours"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<div className="h-screen w-full flex items-center justify-center bg-background"><div className="w-8 h-8 border-4 border-accent border-t-transparent rounded-full animate-spin" /></div>}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/travel-consulting" element={<TravelConsulting />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/design-tours" element={<DesignTours />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
