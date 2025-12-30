import { MapPin, RefreshCw, Compass } from "lucide-react";

const reasons = [
  {
    icon: MapPin,
    text: "Insurance availability can vary by location and vehicle",
  },
  {
    icon: RefreshCw,
    text: "Coverage needs change over time",
  },
  {
    icon: Compass,
    text: "A short review helps clarify which options are relevant",
  },
];

const WhySection = () => {
  return (
    <section className="px-5 py-10 md:py-12 surface-subtle">
      <div className="max-w-md mx-auto w-full">
        <h2 className="text-xl md:text-2xl font-semibold text-heading mb-6">
          Why Drivers Review Their Options
        </h2>

        <ul className="space-y-4">
          {reasons.map((reason, index) => (
            <li 
              key={index}
              className="flex items-start gap-3 animate-fade-in"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-muted flex items-center justify-center mt-0.5">
                <reason.icon className="w-4 h-4 text-muted-foreground" />
              </div>
              <p className="text-body text-base leading-relaxed">
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
