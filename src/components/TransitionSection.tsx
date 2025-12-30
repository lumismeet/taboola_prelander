import { Button } from "@/components/ui/button";
import { ArrowRight, Clock } from "lucide-react";

const DESTINATION_URL = "https://auto-savings.com/home.html";

const TransitionSection = () => {
  const handleClick = () => {
    window.location.href = DESTINATION_URL;
  };

  return (
    <section className="px-5 py-12 md:py-16">
      <div className="max-w-lg mx-auto w-full text-center">
        <p className="text-lg md:text-xl text-body mb-6 leading-relaxed">
          Continue to review available options based on your situation.
        </p>

        <Button 
          variant="cta" 
          size="lg" 
          onClick={handleClick}
          className="w-full md:w-auto group"
        >
          Check Available Options
          <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
        </Button>

        <div className="flex items-center justify-center gap-1.5 mt-4 text-subtle text-sm">
          <Clock className="w-4 h-4" />
          <span>Takes less than a minute</span>
        </div>
      </div>
    </section>
  );
};

export default TransitionSection;
