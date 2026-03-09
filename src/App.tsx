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
          {/* <Route path="/" element={<Index />} />
          <Route path="/dashboard" element={<Dashboard />} /> */}
          {/* <Route path="*" element={<NotFound />} /> */}
          <Route path="/" element={<HeroSection />} />
        <Route path="/v1" element={<AutoOptionAndres />} />
        <Route path="/v2" element={<AutoOptions3 />} />
        <Route path="/v3" element={<AutoOptions />} />
        <Route path="/v4" element={<AutoOptions2 />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
