import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";

const DESTINATION_URL = "https://auto-savings.com/home.html";

const HeroSection = () => {
  const handleClick = () => {
    window.location.href = DESTINATION_URL;
  };

  return (
    <section className="min-h-[85vh] flex flex-col justify-center px-5 py-12 md:py-16">
      <div className="max-w-lg mx-auto w-full">
        {/* Trust indicator */}
        <div className="flex items-center gap-2 mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full trust-badge text-sm font-medium">
            <Shield className="w-4 h-4" />
            <span>Secure & Private</span>
          </div>
        </div>

        {/* Headline */}
        <h1 
          className="text-3xl md:text-4xl font-bold text-heading leading-tight mb-4 animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          Review Available Car Insurance Options in Minutes
        </h1>

        {/* Subheadline */}
        <p 
          className="text-lg md:text-xl text-body leading-relaxed mb-8 animate-fade-in"
          style={{ animationDelay: "0.3s" }}
        >
          Many drivers take a moment to check which insurance options may fit their situation.
        </p>

        {/* Primary CTA */}
        <div 
          className="animate-fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          <Button 
            variant="cta" 
            size="lg" 
            onClick={handleClick}
            className="w-full md:w-auto"
          >
            Check Available Options
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
