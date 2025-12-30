import { Button } from "@/components/ui/button";
import { ArrowRight, Clock } from "lucide-react";

const DESTINATION_URL = "https://auto-savings.com/home.html";

const TransitionSection = () => {
  const handleClick = () => {
    window.location.href = DESTINATION_URL;
  };

  return (
    <section className="px-5 py-10 md:py-12">
      <div className="max-w-md mx-auto w-full text-center">
        {/* Transition cue */}
        <p className="text-base text-body mb-5 leading-relaxed">
          Continue to the full review
        </p>

        <Button 
          variant="cta" 
          size="lg" 
          onClick={handleClick}
          className="w-full md:w-auto group"
        >
          Check Available Options
          <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
        </Button>

        <div className="flex items-center justify-center gap-1.5 mt-3 text-subtle text-sm">
          <Clock className="w-3.5 h-3.5" />
          <span>Takes less than a minute</span>
        </div>
      </div>
    </section>
  );
};

export default TransitionSection;
