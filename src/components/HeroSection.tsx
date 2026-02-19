import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";
import heroIllustration from "@/assets/hero-illustration.png";
import { useVisitorTracking } from "@/hooks/useVisitorTracking";
import logoo from "../assets//logoauto.png"
import hero from "../assets/car-lady1.png"
import img1 from "../assets/car_shocked.png"
// import img1 from "../assets/money_policy.png"
import img2 from "../assets/happy_family.png"
import { useState, useEffect } from "react";

const DESTINATION_URL = "https://auto-savings.com/home.html";

const getCurrentMonth = () => {
  return new Date().toLocaleString("en-US", { month: "long" });
};

const HeroSection = () => {
  // const { trackCtaClick } = useVisitorTracking();
  const { trackCtaClick } = useVisitorTracking();
const [stateName, setStateName] = useState("");
const [visitorCount] = useState(() => Math.floor(Math.random() * 300) + 600); // e.g. 847

useEffect(() => {
  fetch("https://ipapi.co/json/")
    .then((r) => r.json())
    .then((d) => setStateName(d.region || ""))
    .catch(() => {}); // fail silently
}, []);

  const handleClick = () => {
    trackCtaClick();
    window.location.href = DESTINATION_URL;
  };

  const currentMonth = getCurrentMonth();

  return (
   
    <div className="bg-gray-100 text-slate-800">

      {/* NAVBAR */}
      {/* <div className="sticky top-0 z-50 bg-white shadow-md">
        <div className="mx-10 px-6 py-4 flex items-center justify-center md:justify-between">

          
          <img
            src={logoo}
            alt="Logo"
            className="h-10"
          />

          
          <button
            onClick={handleClick}
            className="hidden md:block bg-sky-400 hover:bg-sky-500 text-white font-semibold px-6 py-2 rounded-full transition cursor-pointer"
          >
            Learn How
          </button>

        </div>
      </div> */}

      {/* URGENCY BAR */}
      <div className="bg-amber-400 text-slate-900 text-center text-sm font-semibold py-2 px-4 sticky top-0 z-50">
        ⚠️ Rates in {stateName || "your area"} were updated today —{" "}
        {visitorCount} drivers checked this week.{" "}
        <span className="underline cursor-pointer" onClick={handleClick}>
          Check yours now →
        </span>
      </div>

{/* NAVBAR */}
<div className="sticky top-8 z-40 bg-white shadow-md">
  <div className="mx-10 px-6 py-4 flex items-center justify-center md:justify-between">
    <img src={logoo} alt="Logo" className="h-10" />
    <button
      onClick={handleClick}
      className="hidden md:block bg-sky-400 hover:bg-sky-500 text-white font-semibold px-6 py-2 rounded-full transition cursor-pointer"
    >
      Check Rates for free!
    </button>
  </div>
</div>


      <div className="max-w-3xl mx-auto px-6">

        {/* HERO */}
        <section className="text-center pt-16 pb-7">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Still Paying Too Much for Car Insurance? Most Drivers Are.
          </h1>

          <h2 className="text-xl md:text-2xl font-semibold text-slate-700 mb-4">
            Most drivers stick with the same insurer for years without checking if they're overpaying
          </h2>

          <p className="text-sm text-slate-500 mb-4">
            CheckAutoPlans • {new Date().toLocaleDateString()}
          </p>

          <p className="text-slate-600 max-w-2xl mx-auto">
            Recent data suggests the average American family may overspend by $400+ per year on car insurance,
            simply because they never compare rates.
          </p>

          {/* <div className="bg-white shadow-md rounded p-4 my-6 inline-block">
  <p className="font-semibold text-slate-800">
    “Average drivers saved $420 last month using Auto Savings!”
  </p>
</div> */}



        </section>

       
<div className="bg-white border-l-4 border-sky-400 shadow-sm rounded-r-xl px-6 py-4 mb-8 text-left">
  <p className="text-slate-700 text-sm leading-relaxed mb-2">
    "My renewal jumped $47 a month. I took just about 2 minutes to compare on here and switched that same afternoon. 
    I seriously saved over $500 for the year!"
  </p>
  <p className="text-sm font-semibold text-slate-800">
    Melissa Tanner <span className="text-slate-400 font-normal">— Phoenix, AZ</span>
  </p>
</div>

        {/* LARGE IMAGE */}
        <img
          src={img1}
          alt="Car Insurance"
          className="w-full h-[350px] object-cover"
        />

       
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
            Checking rates online is free and does not require you to make any immediate changes. It simply gives you visibility into what is available in your area so you can choose what fits your needs and your budget by clicking on <a href="https://auto-savings.com/home.html" className="text-blue-600 underline">Auto Savings</a>
          </p>
        </section>

        {/* TWO IMAGES */}
        <div className="grid md:grid-cols-2 gap-6 mb-1 mt-7">
          <img
            src={hero}
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
            <p>Just a fast and simple way to see what is currently available near you. Click here <a href="https://auto-savings.com/home.html" className="text-blue-600 underline">Auto Savings</a> to get the best deals!</p>
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
            There is no obligation to switch providers. To be more informed visit <a href="https://auto-savings.com/home.html" className="text-blue-600 underline">Auto Savings</a> today. You are simply gathering information so you can make a confident decision when your renewal date approaches.
          </p>
        </section>

        {/* TESTIMONIALS */}
        <section className="text-center mb-16">
          <h2 className="text-2xl font-bold mb-10">Testimonials</h2>

          <div className="grid md:grid-cols-3 gap-6 text-left">
            {[
              {
                text: "I was honestly expecting this to be one of those long, complicated forms. It took me less than 3 minutes and I ended up switching the same day. Just loved it",
                name: "Daniel Ross",
                location: "Austin, TX"
              },
              {
                text: "My renewal jumped $47 a month. I took just about 2 minutes to compare on here and switched that same afternoon. I seriously saved over $500 for the year!",
                name: "Melissa Tanner",
                location: "Phoenix, AZ"
              },
              {
                text: "Super simple process. No spam calls, no pressure. Just clear options and better pricing than what I was paying.",
                name: "James Lenning",
                location: "Orlando, FL"
              }
            ].map((item, i) => (
              <div key={i} className="bg-white shadow-md p-6">
                <p className="text-slate-600 text-sm mb-4">
                  “{item.text}”
                </p>
                <div className="font-semibold text-sm">
                  {item.name}
                  <span className="text-slate-500 font-normal"> - {item.location}</span>
                </div>
              </div>
            ))}
          </div>
        </section>


        {/* FINAL CTA */}
        {/* <div className="text-center mb-20">
          <button
            onClick={handleClick}
            className="bg-sky-400 hover:bg-sky-500 text-white font-semibold px-8 py-3 rounded-full transition cursor-pointer"
          >
            Learn How
          </button>
        </div> */}
        {/* FINAL CTA */}
<div className="text-center mb-20">
  <button
    onClick={handleClick}
    className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-10 py-4 rounded-full text-lg transition cursor-pointer shadow-lg"
  >
    Check My Rate - Free, No Obligation →
  </button>
  <p className="text-slate-400 text-sm mt-3">
    Takes 90 seconds • No phone calls • No spam
  </p>
</div>

      </div>

      {/* FOOTER */}
      {/* <footer className="bg-white border-t py-10 text-center text-sm text-slate-500">
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
      </footer> */}
      {/* FOOTER */}
<footer className="bg-gray-900 text-gray-300 pt-14 pb-6 mt-0">
  <div className="max-w-6xl mx-auto px-8">
    
    {/* TOP ROW */}
    <div className="flex flex-col md:flex-row justify-between gap-10 mb-10">
      
      {/* LEFT — Logo + tagline + address + badges */}
      <div className="flex flex-col gap-4 max-w-xs">
        <img src={logoo} alt="CheckAutoPlans Logo" className="h-10 w-fit" />
        <p className="text-gray-400 text-sm leading-relaxed">
          Make the right moves for{" "}
          <span className="text-sky-400 font-semibold">your savings.</span>
        </p>
        <p className="text-gray-500 text-xs">
          1343 Main St Suite 705 · Sarasota FL 34236
        </p>
        {/* Trust badges */}
        <div className="flex items-center gap-3 mt-1">
          <div className="bg-white rounded px-2 py-1 flex items-center gap-1">
            <span className="text-blue-800 font-black text-xs">BBB</span>
            <div className="text-[9px] text-blue-800 leading-tight font-semibold">
              ACCREDITED<br />BUSINESS
            </div>
          </div>
          <a href="#" className="bg-gray-700 hover:bg-gray-600 rounded p-2 transition">
            <svg className="w-5 h-5 text-white fill-current" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
          <a href="#" className="bg-gray-700 hover:bg-gray-600 rounded p-2 transition">
            <svg className="w-5 h-5 text-white fill-current" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
        </div>
      </div>

      {/* RIGHT — Nav columns */}
      <div className="flex flex-wrap gap-10 text-sm">
        
        <div>
          <h4 className="text-sky-400 font-semibold mb-3 tracking-wide">Insurance Products</h4>
          <ul className="space-y-2 text-gray-300">
            <li><a href={DESTINATION_URL} className="hover:text-white transition">Car Insurance</a></li>
            <li><a href="#" className="hover:text-white transition">Home Insurance</a></li>
            <li><a href="#" className="hover:text-white transition">Life Insurance</a></li>
            <li><a href="#" className="hover:text-white transition">Health Insurance</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sky-400 font-semibold mb-3 tracking-wide">Resources</h4>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-white transition">How It Works</a></li>
            <li><a href="#" className="hover:text-white transition">Rate Calculator</a></li>
            <li><a href="#" className="hover:text-white transition">Coverage Guide</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sky-400 font-semibold mb-3 tracking-wide">Contact Us</h4>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-white transition">Facebook</a></li>
            <li><a href="#" className="hover:text-white transition">Twitter / X</a></li>
            <li><a href="mailto:support@checkautoplans.com" className="hover:text-white transition">Email</a></li>
          </ul>
        </div>

      </div>
    </div>

    {/* DIVIDER */}
    <div className="border-t border-gray-700 mb-6" />

    {/* DISCLAIMER */}
    <p className="text-gray-500 text-xs leading-relaxed mb-6">
      CheckAutoPlans.com is an independent, advertising-supported comparison website. The products 
      and offers that appear on this website are from third-party insurance partners and advertisers 
      from which CheckAutoPlans.com may receive compensation. This compensation may influence which 
      products we feature, how they are presented, and where they appear on the page. 
      CheckAutoPlans.com is not a licensed insurance provider or broker. Content on this site is 
      provided for informational purposes only and does not constitute insurance advice. Available 
      rates and offers vary by location, driving history, and other factors and are subject to 
      change without notice. Not all products or offers are available in all states.
    </p>

    {/* DIVIDER */}
    <div className="border-t border-gray-700 mb-6" />

    {/* BOTTOM BAR */}
    <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-gray-500">
      <p>© {new Date().getFullYear()} Check Auto Plans. All rights reserved.</p>
      <div className="flex gap-6">
        <a href="#" className="hover:text-white transition">Privacy Policy</a>
        <a href="#" className="hover:text-white transition">Terms of Service</a>
        <a href="#" className="hover:text-white transition">Contact</a>
      </div>
    </div>

  </div>
</footer>

    </div>

  );
};

export default HeroSection;



