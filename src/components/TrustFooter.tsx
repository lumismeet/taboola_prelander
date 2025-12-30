import { CheckCircle2 } from "lucide-react";

const trustPoints = [
  "No obligation",
  "No purchase required",
  "This step helps guide you to relevant options",
];

const TrustFooter = () => {
  return (
    <footer className="px-5 py-10 md:py-12 surface-subtle border-t border-border">
      <div className="max-w-lg mx-auto w-full">
        {/* Trust points */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 mb-6">
          {trustPoints.map((point, index) => (
            <div 
              key={index}
              className="flex items-center gap-2 text-body text-sm"
            >
              <CheckCircle2 className="w-4 h-4 text-trust flex-shrink-0" />
              <span>{point}</span>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="text-center text-subtle text-xs leading-relaxed max-w-md mx-auto">
          We may connect you with insurance partners based on your selection.
        </p>
      </div>
    </footer>
  );
};

export default TrustFooter;
