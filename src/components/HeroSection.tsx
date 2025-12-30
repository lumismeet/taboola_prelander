import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";

const DESTINATION_URL = "https://auto-savings.com/home.html";

const HeroSection = () => {
  const handleClick = () => {
    window.location.href = DESTINATION_URL;
  };

  return (
    <section className="min-h-[75vh] flex flex-col justify-center px-5 py-10 md:py-14">
      <div className="max-w-md mx-auto w-full">
        {/* Headline */}
        <h1 
          className="text-2xl md:text-3xl font-semibold text-heading leading-snug mb-4 animate-fade-in"
          style={{ animationDelay: "0.1s" }}
        >
          A Quick Way to Review Available Car Insurance Options
        </h1>

        {/* Subheadline */}
        <p 
          className="text-base md:text-lg text-body leading-relaxed mb-8 animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          Many drivers take a moment to review which insurance options may fit their situation before continuing.
        </p>

        {/* Primary CTA */}
        <div 
          className="animate-fade-in"
          style={{ animationDelay: "0.3s" }}
        >
          <Button 
            variant="cta" 
            size="lg" 
            onClick={handleClick}
            className="w-full md:w-auto"
          >
            Check Available Options
          </Button>
          
          {/* Micro-copy */}
          <div className="flex items-center justify-center md:justify-start gap-1.5 mt-3 text-subtle text-sm">
            <Clock className="w-3.5 h-3.5" />
            <span>Takes less than a minute</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
