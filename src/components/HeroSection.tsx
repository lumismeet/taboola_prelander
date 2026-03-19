import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";
import heroIllustration from "@/assets/hero-illustration.png";
import { useVisitorTracking } from "@/hooks/useVisitorTracking";
import logoo from "../assets//logoauto.png"
import hero from "../assets/car-lady1.png"
import img1 from "../assets/car_shocked.png"
import USMap from "@/components/USMap"
import img2 from "../assets/happy_family.png"
import { useState, useEffect } from "react";
import AgeSlider from "./AgeSlider";

const getDestinationURL = () => {
  const params = new URLSearchParams(window.location.search);
  const transactionid = params.get("transactionid") || "";
  const affiliateid = params.get("affiliateid") || "";
  const url = new URL("https://l.auto-savings.com/auto");
  url.searchParams.set("affid", "13152");
  if (transactionid) url.searchParams.set("s1", transactionid);
  if (affiliateid) url.searchParams.set("s2", affiliateid);
  return url.toString();
};

const getCurrentMonth = () => {
  return new Date().toLocaleString("en-US", { month: "long" });
};

const HeroSection = () => {
  const { trackCtaClick } = useVisitorTracking();
  const [stateName, setStateName] = useState("");
  const [visitorCount] = useState(() => Math.floor(Math.random() * 300) + 600);
  const [carModel, setCarModel] = useState("");
  const [carYear, setCarYear] = useState("");

  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then((r) => r.json())
      .then((d) => setStateName(d.region || ""))
      .catch(() => {});
  }, []);

  const handleClick = () => {
    trackCtaClick();
    // @ts-ignore
    if (typeof _tfa !== "undefined") _tfa.push({notify: 'event', name: 'other', id: 2007154});
    window.location.href = getDestinationURL();
  };

  const currentMonth = getCurrentMonth();

  return (
    <div className="bg-gray-100 text-slate-800">
      {/* URGENCY BAR */}
      <div className="bg-amber-400 text-slate-900 text-center text-base font-bold py-2 px-4 sticky top-0 z-50">
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
            className="hidden md:block bg-[#128CED] hover:bg-sky-500 text-white font-bold text-base px-6 py-2 rounded-sm transition cursor-pointer"
          >
            Check Rates for free!
          </button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6">

        {/* HERO */}
        <section className="text-center pt-16 pb-7">
          <h1 className="text-5xl md:text-6xl font-black leading-tight mb-6">
            Still Paying Too Much for Car Insurance? Most Drivers Are.
          </h1>

          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-700 mb-4">
            Most drivers stick with the same insurer for years without checking if they're overpaying
          </h2>

          <p className="text-sm text-slate-500 mb-4">
            CheckAutoPlans • {new Date().toLocaleDateString()}
          </p>

          <p className="text-slate-600 max-w-4xl md:text-2xl mx-auto leading-relaxed">
            Recent data suggests the average American family may overspend by $400+ per year on car insurance,
            simply because they never compare rates.
          </p>
        </section>

        <div className="bg-white border-l-4 border-sky-400 shadow-sm rounded-r-xl px-6 py-4 mb-8 text-left">
          <p className="text-slate-700 text-base leading-relaxed mb-2">
            "My renewal jumped $47 a month. I took just about 2 minutes to compare on here and switched that same afternoon.
            I seriously saved over $500 for the year!"
          </p>
          <p className="text-base font-bold text-slate-800">
            Melissa Tanner <span className="text-slate-400 font-normal">— Phoenix, AZ</span>
          </p>
        </div>

        {/* LARGE IMAGE */}
        <img
          src={img1}
          alt="Car Insurance"
          className="w-full h-[350px] object-cover"
        />
      </div>

        {/* US MAP */}
        <section className="my-16 text-center">
          <h3 className="text-3xl font-black mb-6">
            Check Availability in Your State
          </h3>
          <p className="text-slate-600 text-lg mb-8">
            Hover over your state to see where drivers are comparing rates.
          </p>
          <USMap />
        </section>

      
        

      <div className="max-w-4xl mx-auto px-6">

       

        <section className="py-14">
          <div className="max-w-full mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900">
                Tell Us About Your Vehicle
              </h2>
              <p className="text-slate-600 mt-2 text-lg">
                Takes less than 30 seconds to check your savings.
              </p>
            </div>

            <div className="bg-white shadow-md rounded-xl p-8 space-y-6 border">
              <div>
                <label className="block text-base font-bold text-slate-700 mb-2">
                  What do you drive?
                </label>
                <input
                  type="text"
                  placeholder="e.g. Honda Civic"
                  value={carModel}
                  onChange={(e) => setCarModel(e.target.value)}
                  className="w-full border border-slate-300 rounded-lg px-4 py-3 text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                />
              </div>

              <div>
                <label className="block text-base font-bold text-slate-700 mb-2">
                  Vehicle Year
                </label>
                <input
                  type="number"
                  placeholder="e.g. 2018"
                  value={carYear}
                  onChange={(e) => setCarYear(e.target.value)}
                  className="w-full border border-slate-300 rounded-lg px-4 py-3 text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                />
              </div>

              <button
                className="w-full bg-[#128CED] hover:bg-blue-400 text-white font-black py-5 rounded-sm text-xl transition shadow-md"
                onClick={handleClick}
              >
                See how much you can save →
              </button>

              <p className="text-center text-sm text-slate-400">
                Free • No obligation • No spam calls
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <h3 className="text-2xl font-black">
            Find the right car insurance rate and drive with confidence
          </h3>

          <p className="text-slate-600 text-lg leading-relaxed">
            Insurance pricing changes more often than many people realize. Factors such as driving data, claim trends, repair costs, and regional statistics can influence what you are quoted at renewal.
          </p>

          <p className="text-slate-600 text-lg leading-relaxed">
            What felt like a competitive rate twelve months ago may not reflect current market pricing. That is why more drivers are taking just a few minutes to review their options before committing to another policy term.
          </p>

          <p className="text-slate-600 text-lg leading-relaxed">
            Studies show that many households continue paying higher premiums simply because they have not compared rates recently. A quick comparison could reveal lower pricing for similar coverage, helping you better manage your monthly budget.
          </p>

          <p className="text-slate-600 text-lg leading-relaxed">
            Checking rates online is free and does not require you to make any immediate changes. It simply gives you visibility into what is available in your area so you can choose what fits your needs and your budget by clicking on <a href="https://auto-savings.com/home.html" className="text-blue-600 underline">Otto Savings</a>
          </p>
        </section>

        {/* TWO IMAGES */}
        <div className="grid md:grid-cols-2 gap-6 mb-1 mt-7">
          <img src={hero} className="w-full h-[250px] object-cover" />
          <img src={img2} className="w-full h-[250px] object-cover" />
        </div>

        {/* HOW IT WORKS */}
        <section className="space-y-4 mb-16">
          <h3 className="text-2xl font-black">
            Balance your budget and check rates now.
          </h3>

          <p className="text-slate-600 text-lg">
            Getting started only takes a moment. You are simply reviewing available options in your area to see if you could be paying less.
          </p>

          <p className="text-slate-600 text-lg">
            The process is designed to be simple, straightforward, and completely online. No complicated paperwork and no long conversations.
          </p>

          <p className="text-slate-600 text-lg font-bold">
            Here is how it works:
          </p>

          <ul className="list-disc pl-6 text-slate-600 text-lg space-y-2">
            <li>Click below to begin your free rate check</li>
            <li>Enter your ZIP code and answer a few quick questions about your vehicle</li>
            <li>Instantly compare available offers from insurers in your area</li>
          </ul>

          <p className="font-black text-lg">That is all there is to it.</p>

          <div className="text-slate-600 text-lg space-y-1">
            <p>No long phone calls.</p>
            <p>No pressure to switch.</p>
            <p>No obligation to purchase anything.</p>
            <p>Just a fast and simple way to see what is currently available near you. Click here <a href="https://auto-savings.com/home.html" className="text-blue-600 underline">Otto Savings</a> to get the best deals!</p>
          </div>
        </section>

        <section className="my-16 text-center max-w-full mx-auto ">
          <h3 className="text-3xl font-black mb-6">
            Check Availability in Your State
          </h3>
          <p className="text-slate-600 text-lg mb-8">
            Hover over your state to see where drivers are comparing rates.
          </p>
          <AgeSlider onCtaClick={handleClick} />
        </section>

        {/* WHY IT MATTERS */}
        <section className="space-y-6 mb-16">
          <h3 className="text-2xl font-black">Why Comparing Rates Matters</h3>

          <p className="text-slate-600 text-lg">
            Many drivers remain with the same insurance provider for years without checking whether their rate is still competitive. It is easy to set a policy on auto renewal and forget about it.
          </p>

          <p className="text-slate-600 text-lg">
            However, insurance companies frequently adjust pricing based on market conditions, driving data, location trends, and other risk factors. A policy that was affordable last year may not be the most cost effective option today.
          </p>

          <p className="text-slate-600 text-lg">
            Even small monthly differences can add up over time. Saving twenty or thirty dollars per month could mean hundreds of dollars kept in your pocket each year.
          </p>

          <p className="text-slate-600 text-lg font-bold">
            Reviewing your options only takes a few simple steps:
          </p>

          <ul className="list-disc pl-6 text-slate-600 text-lg space-y-2">
            <li>Enter your ZIP code to see what insurers are available near you</li>
            <li>Answer a few basic questions about your vehicle and driving history</li>
            <li>View available offers side by side to compare coverage and pricing</li>
          </ul>

          <p className="text-slate-600 text-lg">
            There is no obligation to switch providers. To be more informed visit <a href="https://auto-savings.com/home.html" className="text-blue-600 underline">Otto Savings</a> today. You are simply gathering information so you can make a confident decision when your renewal date approaches.
          </p>
        </section>

        {/* TESTIMONIALS */}
        <section className="text-center mb-16">
          <h2 className="text-3xl font-black mb-10">Testimonials</h2>

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
                <p className="text-slate-600 text-base mb-4">
                  "{item.text}"
                </p>
                <div className="font-bold text-base">
                  {item.name}
                  <span className="text-slate-500 font-normal"> - {item.location}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FINAL CTA */}
        <div className="text-center mb-20">
          <button
            onClick={handleClick}
            className="bg-[#128CED] hover:bg-blue-500 text-white font-black px-10 py-4 rounded-sm text-xl transition cursor-pointer shadow-lg"
          >
            Check My Rate - Free, No Obligation →
          </button>
          <p className="text-slate-400 text-base mt-3">
            Takes 90 seconds • No phone calls • No spam
          </p>
        </div>

      </div>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-300 pt-14 pb-6 mt-0">
        <div className="max-w-6xl mx-auto px-8">
          
          <div className="flex flex-col md:flex-row justify-between gap-10 mb-10">
            
            <div className="flex flex-col gap-4 max-w-xs">
              <img src={logoo} alt="CheckAutoPlans Logo" className="h-10 w-fit" />
              <p className="text-gray-400 text-base leading-relaxed">
                Make the right moves for{" "}
                <span className="text-sky-400 font-semibold">your savings.</span>
              </p>
              <p className="text-gray-500 text-sm">
                1343 Main St Suite 705 · Sarasota FL 34236
              </p>
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

            <div className="flex flex-wrap gap-10 text-base">
              
              <div>
                <h4 className="text-sky-400 font-bold mb-3 tracking-wide">Insurance Products</h4>
                <ul className="space-y-2 text-gray-300">
                  <li><a href={getDestinationURL()} className="hover:text-white transition">Car Insurance</a></li>
                  <li><a href="#" className="hover:text-white transition">Home Insurance</a></li>
                  <li><a href="#" className="hover:text-white transition">Life Insurance</a></li>
                  <li><a href="#" className="hover:text-white transition">Health Insurance</a></li>
                </ul>
              </div>

              <div>
                <h4 className="text-sky-400 font-bold mb-3 tracking-wide">Resources</h4>
                <ul className="space-y-2 text-gray-300">
                  <li><a href="#" className="hover:text-white transition">How It Works</a></li>
                  <li><a href="#" className="hover:text-white transition">Rate Calculator</a></li>
                  <li><a href="#" className="hover:text-white transition">Coverage Guide</a></li>
                </ul>
              </div>

              <div>
                <h4 className="text-sky-400 font-bold mb-3 tracking-wide">Contact Us</h4>
                <ul className="space-y-2 text-gray-300">
                  <li><a href="#" className="hover:text-white transition">Facebook</a></li>
                  <li><a href="#" className="hover:text-white transition">Twitter / X</a></li>
                  <li><a href="mailto:support@checkautoplans.com" className="hover:text-white transition">Email</a></li>
                </ul>
              </div>

            </div>
          </div>

          <div className="border-t border-gray-700 mb-6" />

          <p className="text-gray-500 text-sm leading-relaxed mb-6">
            CheckAutoPlans.com is an independent, advertising-supported comparison website. The products 
            and offers that appear on this website are from third-party insurance partners and advertisers 
            from which CheckAutoPlans.com may receive compensation. This compensation may influence which 
            products we feature, how they are presented, and where they appear on the page. 
            CheckAutoPlans.com is not a licensed insurance provider or broker. Content on this site is 
            provided for informational purposes only and does not constitute insurance advice. Available 
            rates and offers vary by location, driving history, and other factors and are subject to 
            change without notice. Not all products or offers are available in all states.
          </p>

          <div className="border-t border-gray-700 mb-6" />

          <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-gray-500">
            <p>© {new Date().getFullYear()} Check Auto Plans. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="/privacy/policy" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Privacy Policy</a>
              <a href="/privacy/terms" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Terms of Use</a>
              <a href="#" className="hover:text-white transition">Contact</a>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
};

export default HeroSection;