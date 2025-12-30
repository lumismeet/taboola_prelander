import { ClipboardList, Search, ArrowRight, type LucideIcon } from "lucide-react";

interface Step {
  icon: LucideIcon;
  text: string;
}

const steps: Step[] = [
  {
    icon: ClipboardList,
    text: "Review basic details",
  },
  {
    icon: Search,
    text: "Check available options",
  },
  {
    icon: ArrowRight,
    text: "Continue to the full review",
  },
];

const WhatHappensNext = () => {
  return (
    <section className="px-5 py-10 md:py-12 surface-subtle">
      <div className="max-w-md mx-auto w-full">
        <h3 className="text-base font-medium text-heading mb-5 text-center">
          What happens next?
        </h3>

        <div className="flex items-start justify-between gap-2">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex-1 flex flex-col items-center text-center animate-fade-in"
              style={{ animationDelay: `${0.15 * (index + 1)}s` }}
            >
              <div className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center mb-2">
                <step.icon className="w-4 h-4 text-muted-foreground" />
              </div>
              <span className="text-xs text-body leading-snug px-1">
                {step.text}
              </span>
            </div>
          ))}
        </div>

        {/* Connecting line */}
        <div className="relative -mt-[52px] mb-8 mx-auto max-w-[200px] md:max-w-[240px]">
          <div className="h-px bg-border" />
        </div>
      </div>
    </section>
  );
};

export default WhatHappensNext;
