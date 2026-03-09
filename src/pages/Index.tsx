import { Routes, Route } from "react-router-dom";

import HeroSection from "@/components/HeroSection";
import AutoOptions from "@/components/AutoOption2";
import AutoOptions2 from "@/components/AutoOption3";
import AutoOptions3 from "@/components/AutoOption4";
import AutoOptionAndres from "@/components/AutoOption_andres";

export default function App() {
  return (
    <main className="min-h-screen bg-background">
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/v1" element={<AutoOptionAndres />} />
        <Route path="/v2" element={<AutoOptions3 />} />
        <Route path="/v3" element={<AutoOptions />} />
        <Route path="/v4" element={<AutoOptions2 />} />
      </Routes>
    </main>
  );
}