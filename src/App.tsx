import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { initScrollAnimations, cleanupScrollAnimations } from "@/lib/scrollAnimations";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Index from "./pages/Index";
import About from "./pages/About";
import Journey from "./pages/Journey";
import Teachings from "./pages/Teachings";
import CaseStudies from "./pages/CaseStudies";
import CaseStudyDetail from "./pages/CaseStudyDetail";
import Media from "./pages/Media";
import Events from "./pages/Events";
import Serve from "./pages/Serve";
import Guidance from "./pages/Guidance";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Component to handle scroll animations on route changes
const ScrollAnimationHandler = () => {
  const location = useLocation();

  useEffect(() => {
    // Cleanup previous animations
    cleanupScrollAnimations();
    
    // Small delay to ensure DOM is ready and layout is complete
    const timer = setTimeout(() => {
      initScrollAnimations();
      // Refresh ScrollTrigger after a brief moment to ensure proper calculations
      setTimeout(() => {
        if (typeof window !== "undefined") {
          ScrollTrigger.refresh();
        }
      }, 200);
    }, 150);

    return () => {
      clearTimeout(timer);
      cleanupScrollAnimations();
    };
  }, [location.pathname]);

  // Also initialize on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      initScrollAnimations();
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollAnimationHandler />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/journey" element={<Journey />} />
          <Route path="/teachings" element={<Teachings />} />
          <Route path="/teachings/:category" element={<Teachings />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />
          <Route path="/media" element={<Media />} />
          <Route path="/media/:type" element={<Media />} />
          <Route path="/events" element={<Events />} />
          <Route path="/serve" element={<Serve />} />
          <Route path="/serve/:type" element={<Serve />} />
          <Route path="/guidance" element={<Guidance />} />
          <Route path="/guidance/:type" element={<Guidance />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;