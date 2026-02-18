import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";
import heroIllustration from "@/assets/hero-illustration.png";
import { useVisitorTracking } from "@/hooks/useVisitorTracking";
import logoo from "../assets//logoauto.png"
import hero from "../assets/car-lady1.png"
import img1 from "../assets/car_shocked.png"
// import img1 from "../assets/money_policy.png"
import img2 from "../assets/happy_family.png"

const DESTINATION_URL = "https://auto-savings.com/home.html";

const getCurrentMonth = () => {
  return new Date().toLocaleString("en-US", { month: "long" });
};

const HeroSection = () => {
  const { trackCtaClick } = useVisitorTracking();

  const handleClick = () => {
    trackCtaClick();
    window.location.href = DESTINATION_URL;
  };

  const currentMonth = getCurrentMonth();

  return (
    // <section className="min-h-[70vh] flex flex-col justify-center px-5 py-10 md:py-14 text-center">
    //   <div className="max-w-md mx-auto w-full">
    //     {/* Process indicator */}
    //     <div 
    //       className="mb-6 animate-fade-in"
    //       style={{ animationDelay: "0.05s" }}
    //     >
    //       <div className="flex items-center justify-center gap-3 mb-2">
    //         <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
    //           Step 1 of 2
    //         </span>
    //         <span className="text-xs text-subtle">-</span>
    //         <span className="text-xs text-subtle">Review Available Options</span>
    //       </div>
    //       <div className="h-1 bg-muted rounded-full overflow-hidden">
    //         <div 
    //           className="h-full bg-primary/40 rounded-full transition-all duration-700"
    //           style={{ width: "30%" }}
    //         />
    //       </div>
    //     </div>

    //     {/* Hero illustration */}
    //     <div 
    //       className="mb-6 animate-fade-in"
    //       style={{ animationDelay: "0.1s" }}
    //     >
    //       <img 
    //         src={heroIllustration} 
    //         alt="Insurance options review checklist" 
    //         className="w-full max-w-[280px] mx-auto rounded-lg"
    //       />
    //     </div>

    //     {/* Contextual header */}
    //     <p 
    //       className="text-sm text-muted-foreground mb-2 animate-fade-in"
    //       style={{ animationDelay: "0.12s" }}
    //     >
    //       Many drivers are rechecking their car insurance options this {currentMonth}
    //     </p>

    //     {/* Headline */}
    //     <h1 
    //       className="text-2xl md:text-3xl font-semibold text-heading leading-snug mb-4 animate-fade-in"
    //       style={{ animationDelay: "0.15s" }}
    //     >
    //       A Quick Way to Review Available Car Insurance Options
    //     </h1>

    //     {/* Subheadline */}
    //     <p 
    //       className="text-base md:text-lg text-body leading-relaxed mb-8 animate-fade-in"
    //       style={{ animationDelay: "0.2s" }}
    //     >
    //       Many drivers take a moment to review which insurance options may fit their situation before continuing.
    //     </p>

    //     {/* Primary CTA */}
    //     <div 
    //       className="animate-fade-in"
    //       style={{ animationDelay: "0.25s" }}
    //     >
    //       <Button 
    //         variant="cta" 
    //         size="lg" 
    //         onClick={handleClick}
    //         className="w-full md:w-auto"
    //       >
    //         Check Available Options
    //       </Button>
          
    //       {/* Micro-copy */}
    //       <div className="flex items-center justify-center gap-1.5 mt-3 text-subtle text-sm">
    //         <Clock className="w-3.5 h-3.5" />
    //         <span>Takes less than a minute</span>
    //       </div>
    //     </div>
    //   </div>
    // </section>
     <div className="bg-gray-100 text-slate-800">

      {/* NAVBAR */}
      <div className="sticky top-0 z-50 bg-white shadow-md">
        <div className="mx-10 px-6 py-4 flex items-center justify-center md:justify-between">

          {/* Logo */}
          <img
            src={logoo}
            alt="Logo"
            className="h-10"
          />

          {/* Button (hidden on tablet & mobile) */}
          <button
            onClick={handleClick}
            className="hidden md:block bg-sky-400 hover:bg-sky-500 text-white font-semibold px-6 py-2 rounded-full transition cursor-pointer"
          >
            Learn How
          </button>

        </div>
      </div>


      <div className="max-w-3xl mx-auto px-6">

        {/* HERO */}
        <section className="text-center pt-16 pb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Still Paying Too Much for Car Insurance? Most Drivers Are.
          </h1>

          <h2 className="text-xl md:text-2xl font-semibold text-slate-700 mb-4">
            Most drivers stick with the same insurer for years without checking if they're overpaying
          </h2>

          <p className="text-sm text-slate-500 mb-6">
            CheckAutoPlans • {new Date().toLocaleDateString()}
          </p>

          <p className="text-slate-600 max-w-2xl mx-auto">
            Recent data suggests the average American family may overspend by $400+ per year on car insurance,
            simply because they never compare rates.
          </p>
        </section>

        {/* LARGE IMAGE */}
        <img
          src={hero}
          alt="Car Insurance"
          className="w-full h-[350px] object-cover"
        />

        {/* TEXT SECTION */}
        {/* <section className="space-y-6">
          <h3 className="text-xl font-bold">
            Find the right car insurance rate and drive stress-free!
          </h3>

          <p className="text-slate-600 leading-relaxed">
            Insurance companies adjust pricing constantly. What was a good deal 12 months ago may not be the best option today.
            That's why more drivers are taking 2 minutes to compare offers online before their next renewal.
          </p>

          <p className="text-slate-600 leading-relaxed">
            The average American family still overspends by $416 or more per year on car insurance - often without realizing it.
            A free comparison tool lets you check rates from trusted insurers in your area in just minutes.
          </p>
        </section> */}
        <section className="space-y-6">
  <h3 className="text-xl font-bold">
    Find the right car insurance rate and drive with confidence
  </h3>

  <p className="text-slate-600 leading-relaxed">
    Insurance pricing changes more often than many people realize. Factors such as driving data, claim trends, repair costs, and regional statistics can influence what you are quoted at renewal.
  </p>

  <p className="text-slate-600 leading-relaxed">
    What felt like a competitive rate twelve months ago may not reflect current market pricing. That is why more drivers are taking just a few minutes to review their options before committing to another policy term.
  </p>

  <p className="text-slate-600 leading-relaxed">
    Studies show that many households continue paying higher premiums simply because they have not compared rates recently. A quick comparison could reveal lower pricing for similar coverage, helping you better manage your monthly budget.
  </p>

  <p className="text-slate-600 leading-relaxed">
    Checking rates online is free and does not require you to make any immediate changes. It simply gives you visibility into what is available in your area so you can choose what fits your needs and your budget.
  </p>
</section>

        {/* TWO IMAGES */}
        <div className="grid md:grid-cols-2 gap-6 mb-1">
          <img
            src={img1}
            className="w-full h-[250px] object-cover"
          />
          <img
            src={img2}
            className="w-full h-[250px] object-cover"
          />
        </div>

        {/* HOW IT WORKS */}
        {/* <section className="space-y-3 mb-12">
          <h3 className="text-xl font-bold">
            Balance your budget and check rates now.
          </h3>

          <p className="text-slate-600">
            Here's how it works:
          </p>

          <ul className="list-disc pl-6 text-slate-600 space-y-2">
            <li>Click below to check rates</li>
            <li>Answer a few quick questions</li>
            <li>Instantly compare available offers</li>
          </ul>

          <p className="font-semibold">That's it.</p>

          <div className=" text-slate-600">
            <p>No long phone calls.</p>
            <p>No pressure.</p>
            <p>Just a quick look at what's available in your zip code.</p>
          </div>
        </section> */}
        {/* HOW IT WORKS */}
<section className="space-y-4 mb-16">
  <h3 className="text-xl font-bold">
    Balance your budget and check rates now.
  </h3>

  <p className="text-slate-600">
    Getting started only takes a moment. You are simply reviewing available options in your area to see if you could be paying less.
  </p>

  <p className="text-slate-600">
    The process is designed to be simple, straightforward, and completely online. No complicated paperwork and no long conversations.
  </p>

  <p className="text-slate-600 font-semibold">
    Here is how it works:
  </p>

  <ul className="list-disc pl-6 text-slate-600 space-y-2">
    <li>Click below to begin your free rate check</li>
    <li>Enter your ZIP code and answer a few quick questions about your vehicle</li>
    <li>Instantly compare available offers from insurers in your area</li>
  </ul>

  <p className="font-semibold">That is all there is to it.</p>

  <div className="text-slate-600 space-y-1">
    <p>No long phone calls.</p>
    <p>No pressure to switch.</p>
    <p>No obligation to purchase anything.</p>
    <p>Just a fast and simple way to see what is currently available near you.</p>
  </div>
</section>

        {/* WHY IT MATTERS */}
        {/* <section className="space-y-6 mb-16">
          <h3 className="text-xl font-bold">Why Comparing Rates Matters</h3>

          <p className="text-slate-600">
            Many drivers stay with the same insurance company for years without checking if their rate is still competitive.
          </p>

          <p className="text-slate-600">
            Insurance companies adjust pricing frequently. A policy that was affordable a year ago may not be the best option today.
          </p>

          <ul className="list-disc text-slate-600 ">
            <li>Enter your ZIP code</li>
            <li>Answer a few basic questions</li>
            <li>View available offers side by side</li>
          </ul>

          <p className="text-slate-600">
            There's no obligation to switch - you're simply reviewing what's available in your area.
          </p>
        </section> */}
        {/* WHY IT MATTERS */}
<section className="space-y-6 mb-16">
  <h3 className="text-xl font-bold">Why Comparing Rates Matters</h3>

  <p className="text-slate-600">
    Many drivers remain with the same insurance provider for years without checking whether their rate is still competitive. It is easy to set a policy on auto renewal and forget about it.
  </p>

  <p className="text-slate-600">
    However, insurance companies frequently adjust pricing based on market conditions, driving data, location trends, and other risk factors. A policy that was affordable last year may not be the most cost effective option today.
  </p>

  <p className="text-slate-600">
    Even small monthly differences can add up over time. Saving twenty or thirty dollars per month could mean hundreds of dollars kept in your pocket each year.
  </p>

  <p className="text-slate-600 font-semibold">
    Reviewing your options only takes a few simple steps:
  </p>

  <ul className="list-disc pl-6 text-slate-600 space-y-2">
    <li>Enter your ZIP code to see what insurers are available near you</li>
    <li>Answer a few basic questions about your vehicle and driving history</li>
    <li>View available offers side by side to compare coverage and pricing</li>
  </ul>

  <p className="text-slate-600">
    There is no obligation to switch providers. You are simply gathering information so you can make a confident decision when your renewal date approaches.
  </p>
</section>

        {/* TESTIMONIALS */}
        <section className="text-center mb-16">
          <h2 className="text-2xl font-bold mb-10">Testimonials</h2>

          <div className="grid md:grid-cols-3 gap-6 text-left">
            {[
              {
                text: "I was honestly expecting this to be one of those long, complicated forms. It took me less than 3 minutes and I ended up switching the same day.",
                name: "Daniel R.",
                location: "Austin, TX"
              },
              {
                text: "My renewal quote went up almost $40 a month. I checked here just to compare and found a better rate almost immediately.",
                name: "Melissa T.",
                location: "Phoenix, AZ"
              },
              {
                text: "Super simple process. No spam calls, no pressure. Just clear options and better pricing than what I was paying.",
                name: "James L.",
                location: "Orlando, FL"
              }
            ].map((item, i) => (
              <div key={i} className="bg-white shadow-md p-6">
                <p className="text-slate-600 text-sm mb-4">
                  “{item.text}”
                </p>
                <div className="font-semibold text-sm">
                  {item.name}
                  <span className="text-slate-500 font-normal"> — {item.location}</span>
                </div>
              </div>
            ))}
          </div>
        </section>


        {/* FINAL CTA */}
        <div className="text-center mb-20">
          <button
            onClick={handleClick}
            className="bg-sky-400 hover:bg-sky-500 text-white font-semibold px-8 py-3 rounded-full transition cursor-pointer"
          >
            Learn How
          </button>
        </div>

      </div>

      {/* FOOTER */}
      <footer className="bg-white border-t py-10 text-center text-sm text-slate-500">
        <div className="max-w-3xl mx-auto px-6 space-y-6">
          <p>
            This website is an informational resource. We are not an insurance provider or agency.
            We may receive compensation from partners for referrals.
          </p>

          <div className="flex justify-center gap-6">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Service</a>
            <a href="#" className="hover:underline">Contact</a>
          </div>

          <p>© 2026 Check Auto Plans. All rights reserved.</p>
        </div>
      </footer>

    </div>

  );
};

export default HeroSection;



