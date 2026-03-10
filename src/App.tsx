import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";

import HeroSection from "@/components/HeroSection";
import AutoOptions from "@/components/AutoOption2";
import AutoOptions2 from "@/components/AutoOption3";
import AutoOptions3 from "@/components/AutoOption4";
import AutoOptionAndres from "@/components/AutoOption_andres";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
        {/* Main one */}
        <Route path="/" element={<HeroSection />} />

        {/* Andres' version */}
        <Route path="/v1" element={<AutoOptionAndres />} />

        {/* 10 things to know about auto insurance */}
        <Route path="/v2" element={<AutoOptions3 />} />

        {/* A different kind of prelander */}
        <Route path="/v3" element={<AutoOptions />} />
        
        {/* Not important */}
        <Route path="/v4" element={<AutoOptions2 />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
