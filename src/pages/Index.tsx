import HeroSection from "@/components/HeroSection";
import InfoCards from "@/components/InfoCards";
import TransitionSection from "@/components/TransitionSection";
import WhatHappensNext from "@/components/WhatHappensNext";
import TrustFooter from "@/components/TrustFooter";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <InfoCards />
      <TransitionSection />
      <WhatHappensNext />
      <TrustFooter />
    </main>
  );
};

export default Index;
