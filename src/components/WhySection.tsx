import { MapPin, RefreshCw, Lightbulb } from "lucide-react";

const reasons = [
  {
    icon: MapPin,
    text: "Insurance options and availability can vary by location and vehicle",
  },
  {
    icon: RefreshCw,
    text: "Coverage needs change over time",
  },
  {
    icon: Lightbulb,
    text: "A short review can help clarify what's worth considering",
  },
];

const WhySection = () => {
  return (
    <section className="px-5 py-12 md:py-16 surface-subtle">
      <div className="max-w-lg mx-auto w-full">
        <h2 className="text-2xl md:text-3xl font-bold text-heading mb-8">
          Why Drivers Review Their Options
        </h2>

        <ul className="space-y-5">
          {reasons.map((reason, index) => (
            <li 
              key={index}
              className="flex items-start gap-4 animate-fade-in"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <reason.icon className="w-5 h-5 text-primary" />
              </div>
              <p className="text-body text-base md:text-lg leading-relaxed pt-2">
                {reason.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WhySection;
