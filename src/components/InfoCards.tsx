import { Car, MapPin, Shield, type LucideIcon } from "lucide-react";

interface InfoCard {
  icon: LucideIcon;
  title: string;
  text: string;
}

const cards: InfoCard[] = [
  {
    icon: Car,
    title: "Your Vehicle",
    text: "Insurance options vary depending on vehicle type.",
  },
  {
    icon: MapPin,
    title: "Your Location",
    text: "Availability can differ by state and region.",
  },
  {
    icon: Shield,
    title: "Coverage Preferences",
    text: "Different situations call for different coverage options.",
  },
];

const InfoCards = () => {
  return (
    <section className="px-5 py-10 md:py-12 surface-subtle">
      <div className="max-w-md mx-auto w-full">
        <h2 className="text-xl md:text-2xl font-semibold text-heading mb-6">
          Why Drivers Review Their Options
        </h2>

        <div className="space-y-3">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-card rounded-lg border border-border p-4 animate-fade-in"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-muted flex items-center justify-center">
                  <card.icon className="w-4 h-4 text-muted-foreground" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-heading mb-0.5">
                    {card.title}
                  </h3>
                  <p className="text-sm text-body leading-relaxed">
                    {card.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoCards;
