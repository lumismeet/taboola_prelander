import { Button } from "@/components/ui/button";
import { ArrowRight, Clock } from "lucide-react";

const getDestinationURL = () => {
  const params = new URLSearchParams(window.location.search);
  const url = new URL("https://l.auto-savings.com/auto");
  url.searchParams.set("affid", "13152");
  const t = params.get("transactionid"); if (t) url.searchParams.set("s1", t);
  const a = params.get("affiliateid"); if (a) url.searchParams.set("s2", a);
  const tblciFromParam = params.get("taboola_clickid");
  if (tblciFromParam) localStorage.setItem("tblci", tblciFromParam);
  const tblci = tblciFromParam || localStorage.getItem("tblci") || "";
  if (tblci) url.searchParams.set("tblci", tblci);
  return url.toString();
};

const TransitionSection = () => {
  const handleClick = () => {
    // @ts-ignore
    if (typeof _tfa !== "undefined") _tfa.push({ notify: 'event', name: 'other', id: 2007154 });
    window.location.href = getDestinationURL();
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
          <span>Takes less than a minute!</span>
        </div>
      </div>
    </section>
  );
};

export default TransitionSection;
