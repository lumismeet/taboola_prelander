"use client";

import { useState, useEffect } from "react";
import { CheckCircle, Lock, ChevronRight, MapPin, ShieldCheck } from "lucide-react";
import { useVisitorTracking } from "@/hooks/useVisitorTracking";
import logoo from "../assets/logoauto.png";
import USMap from "./USMap";
import AgeSlider from "./AgeSlider";
import hero from "../assets/car-lady1.png"
import img1 from "../assets/car_shocked.png"
import img2 from "../assets/happy_family.png"
import bglandscape from "../assets/bg-landscape.png"


// ─── CONFIG ──────────────────────────────────────────────────────────────────
const DESTINATION_URL = "https://auto-savings.com/home.html";
const AGE_RANGES = ["16 - 25", "26 - 35", "36 - 45", "46 - 55", "56 - 65", "66 +"];
const CARRIERS = ["Liberty Mutual", "Progressive", "The Hartford", "Direct", "Kemper"];
const getCurrentMonth = () => new Date().toLocaleString("en-US", { month: "long" });

// ─── MAIN ────────────────────────────────────────────────────────────────────
const Prelander = () => {
  const { trackCtaClick } = useVisitorTracking();

  const [zip, setZip] = useState("");
  const [zipError, setZipError] = useState("");
  const [selectedAge, setSelectedAge] = useState<string | null>(null);
  const [stateName, setStateName] = useState("");
  const [carModel, setCarModel] = useState("");
  const [carYear, setCarYear] = useState("");
  const [visitorCount] = useState(() => Math.floor(Math.random() * 300) + 600);

  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then(r => r.json())
      .then(d => setStateName(d.region || ""))
      .catch(() => {});
  }, []);

  const handleClick = () => {
    trackCtaClick();
    window.location.href = DESTINATION_URL;
  };

  const handleZip = () => {
    const t = zip.trim();
    if (!t) { setZipError("Please enter your ZIP code."); return; }
    if (!/^\d{5}$/.test(t)) { setZipError("Please enter a valid 5-digit ZIP."); return; }
    setZipError("");
    handleClick();
  };

  const handleAge = (age: string) => {
    setSelectedAge(age);
    setTimeout(handleClick, 280);
  };

  const displayState = stateName || "Your State";
  const currentMonth = getCurrentMonth();

  // ── Reusable ZIP row ──────────────────────────────────────────────────────
  const ZipRow = ({ dark = false }: { dark?: boolean }) => (
    <div>
      <div className="flex gap-2">
        <div className="relative flex-1">
          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            value={zip}
        
            onKeyDown={e => e.key === "Enter" && handleZip()}
            placeholder="Enter ZIP Code"
            maxLength={5}
            className={[
              "prel-zip w-full rounded-md pl-9 pr-3 py-3 text-sm border transition",
              dark
                ? "bg-gray-800 border-gray-600 text-white placeholder:text-gray-500"
                : "bg-white border-gray-300 text-gray-900",
            ].join(" ")}
          />
        </div>
        <button
          onClick={handleClick}
          className="bg-[#128CED] hover:bg-sky-500 text-white font-bold px-5 py-3 rounded-md text-sm flex items-center gap-1.5 whitespace-nowrap shadow transition"
        >
          GET RATES <ChevronRight className="w-4 h-4" />
        </button>
      </div>
      {zipError && <p className="text-red-500 text-xs mt-1">{zipError}</p>}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100 text-slate-800" style={{ fontFamily: "'Source Sans 3', Arial, sans-serif" }}>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,400;0,700;0,900;1,400&family=Source+Sans+3:wght@400;600;700&display=swap');
        .prel-serif { font-family: 'Merriweather', Georgia, serif; }
        .prel-zip:focus { outline: none; border-color: #128CED; box-shadow: 0 0 0 3px rgba(18,140,237,0.15); }
        .prel-age-btn {
          font-family: 'Source Sans 3', Arial, sans-serif;
          transition: all 0.15s;
          background: white;
          border: 2px solid #d1d5db;
          border-radius: 6px;
          padding: 14px 4px;
          font-weight: 600;
          font-size: 14px;
          color: #374151;
          cursor: pointer;
        }
        .prel-age-btn:hover, .prel-age-btn.sel {
          background: #128CED !important;
          color: white !important;
          border-color: #128CED !important;
        }
      `}</style>

      {/* ══════════════════════════════════════════
          URGENCY BAR
      ══════════════════════════════════════════ */}
      <div className="bg-amber-400 text-slate-900 text-center text-sm font-bold py-2 px-4 sticky top-0 z-50">
        ⚠️ Rates in {displayState} were updated today — {visitorCount} drivers checked this week.{" "}
        <span className="underline cursor-pointer" onClick={handleClick}>Check yours now →</span>
      </div>

      {/* ══════════════════════════════════════════
          NAVBAR
      ══════════════════════════════════════════ */}
      <div className="sticky top-8 z-40 bg-white shadow-md">
        <div className="max-w-4xl mx-auto px-6 py-3 flex items-center justify-between">
          <img src={logoo} alt="Logo" className="h-10" />
          <button
            onClick={handleClick}
            className="hidden md:block bg-[#128CED] hover:bg-sky-500 text-white font-bold text-sm px-6 py-2 rounded-sm transition"
          >
            Save Now!
          </button>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          HERO BANNER
          ↓ replace the placeholder div with:
          <img src={yourHeroImg} alt="hero"
            className="absolute inset-0 w-full h-full object-cover opacity-30" />
      ══════════════════════════════════════════ */}
      <div className="relative overflow-hidden" style={{ background: "linear-gradient(135deg,#0f172a 0%,#0c3a5e 55%,#0f172a 100%)", minHeight: 220 }}>

        {/* ↓ PHOTO PLACEHOLDER — swap this div with your <img> */}
        {/* <img src={bglandscape} className="absolute inset-0  rounded-lg border-2 border-dashed border-white/10 flex items-center justify-center text-white/15 text-xs uppercase tracking-widest" /> */}
        <img 
  src={bglandscape} 
  className="absolute inset-0 rounded-lg border-2 border-dashed border-white/10"
/>
        <div className="relative z-10 text-center py-16 px-4 max-w-3xl mx-auto">
          <div className="inline-block bg-amber-400 text-slate-900 text-xs font-black px-3 py-1 rounded-full mb-4 uppercase tracking-widest">
            {currentMonth} Update
          </div>
          <h1 className="prel-serif text-white font-black leading-tight" style={{ fontSize: "clamp(22px,4.5vw,40px)", textShadow: "0 2px 16px rgba(0,0,0,0.7)" }}>
            Why Did No One Tell {displayState} Drivers About This?
          </h1>
          <p className="text-sky-200 mt-3 text-sm">CheckAutoPlans • {new Date().toLocaleDateString()}</p>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          BREADCRUMB
      ══════════════════════════════════════════ */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-2xl mx-auto px-4 py-2 flex items-center gap-1 text-xs text-gray-400">
          <a href="#" className="text-[#128CED]">Home</a>
          <ChevronRight className="w-3 h-3" />
          <span>Why Did No One Tell {displayState} Drivers About This?</span>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          MAIN COLUMN
      ══════════════════════════════════════════ */}
      <div className="max-w-4xl mx-auto px-4 py-8 pb-20">
        {/* ── ZIP FORM CARD ── */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 mb-6">
          <div className="inline-flex items-center gap-1.5 bg-sky-50 border border-sky-100 text-sky-700 text-xs font-bold px-3 py-1 rounded-full mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            Trusted by 10M+ Drivers
          </div>
          <p className="text-sm font-semibold text-gray-900 mb-1">
            Enter your <strong>ZIP code</strong> to compare your different options and stop overpaying!
          </p>
          <p className="text-xs text-gray-500 mb-4 leading-relaxed">
            Insurance rates change constantly. Find out if you're eligible for lower premiums from leading providers.
          </p>

          <ZipRow />

          <div className="flex flex-wrap gap-4 mt-3 text-xs text-gray-500">
            <div className="flex items-center gap-1"><CheckCircle className="w-3.5 h-3.5 text-green-500" /> 100% Free</div>
            <div className="flex items-center gap-1"><CheckCircle className="w-3.5 h-3.5 text-green-500" /> No Obligation</div>
            <div className="flex items-center gap-1"><Lock className="w-3.5 h-3.5 text-green-500" /> Secure & Private</div>
          </div>

          <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-100">
            {CARRIERS.map(c => (
              <span key={c} className="bg-gray-100 border border-gray-200 text-gray-500 text-xs font-bold px-3 py-1 rounded">
                {c}
              </span>
            ))}
          </div>
        </div>

        {/* ── HERO PULL QUOTE (HeroSection style) ── */}
        <div className="bg-white border-l-4 border-sky-400 shadow-sm rounded-r-xl px-6 py-4 mb-6">
          <p className="text-slate-700 text-sm leading-relaxed mb-2">
            "My renewal jumped $47 a month. I took just about 2 minutes to compare on here and switched that same afternoon.
            I seriously saved over $500 for the year!"
          </p>
          <p className="text-sm font-bold text-slate-800">
            Melissa Tanner <span className="text-slate-400 font-normal">— Phoenix, AZ</span>
          </p>
        </div>

        {/* ── IMAGE PLACEHOLDER 1 ── */}
        {/* swap with: <img src={img1} alt="Car Insurance" className="w-full h-[300px] object-cover rounded-xl mb-6" /> */}
        <img src={img1} className="w-full h-74 rounded-xl mb-6 bg-gray-200 border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-400 text-xs uppercase tracking-widest font-semibold" />

        {/* ── BODY COPY 1 ── */}
        <p className="text-sm text-slate-600 mb-3 leading-relaxed">Here is the 1 simple truth according to experts:</p>

        <p className="text-sm font-bold text-slate-900 mb-2">If You:</p>
        <ul className="mb-5 space-y-1.5">
          {["Are Currently Insured", "Are Over The Age Of 25", "Drive Less Than 50 Miles Per Day", "Live In A Qualified Zip Code"].map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-slate-800 font-semibold">
              <span className="text-slate-400 mt-0.5">•</span>{item}
            </li>
          ))}
        </ul>

        <p className="text-sm text-slate-600 leading-relaxed mb-8">
          Then you may qualify for massive auto insurance discounts. If you have not had a traffic ticket in the last 3 years or do not have a DUI on your record, you may get an even larger discount and{" "}
          <a href={DESTINATION_URL} className="font-bold underline text-[#128CED]">save up to $500 a year.</a>
        </p>

        {/* ── H2 ── */}
        <h2 className="prel-serif font-black text-slate-900 leading-tight mb-4" style={{ fontSize: "clamp(20px,3.5vw,28px)" }}>
          Did Your Car Insurance Company Ever Tell You About This?
        </h2>

        <p className="text-sm text-slate-600 leading-relaxed mb-3">
          Probably not, since the insurance companies prefer you not to be aware of such savings. They count on you blindly renewing your policy at the same price — because that's how they increase profits.
        </p>

        <p className="text-sm text-slate-600 leading-relaxed mb-5">
          David was not happy with the rate he was paying for a long time, until he decided to compare rates online — and he was truly amazed to see how much he could save.
        </p>

        {/* ── PULL QUOTE ── */}
        <blockquote className="border-l-4 border-gray-300 pl-5 py-3 mb-6 bg-white rounded-r-lg shadow-sm">
          <p className="text-sm text-slate-600 italic leading-relaxed">
            "If I knew about all this earlier, I would've switched my insurance policy ages ago. I already saved hundreds of dollars by using this method."
            <strong className="not-italic"> - David A</strong>
          </p>
        </blockquote>

        {/* ── COMPARISON GRAPHIC ── */}
        <div className="border border-gray-200 rounded-xl overflow-hidden mb-6 shadow-sm">
          <div className="bg-slate-800 text-white text-xs font-bold px-4 py-2.5 flex justify-between">
            <span>Vehicle Total Premium</span>
            <span className="text-gray-400 font-normal">Savings Example</span>
          </div>
          <div className="grid grid-cols-2 divide-x divide-gray-200">
            <div className="p-5 bg-green-50">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-gray-500 font-bold uppercase tracking-wide">6 Month Premium</span>
                <span className="bg-green-600 text-white text-xs font-black px-2 py-0.5 rounded">NEW</span>
              </div>
              <p className="text-xs text-gray-400 mb-2">6 Month Premium = $67/mo</p>
              <div className="bg-green-200 text-green-900 prel-serif font-black text-3xl text-center py-4 rounded-lg mb-2">$402</div>
              <p className="text-xs text-gray-400 mb-1">Added 12-06-26</p>
              <p className="prel-serif font-black text-2xl text-green-700">$67/MO*</p>
            </div>
            <div className="p-5 bg-red-50">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-gray-500 font-bold uppercase tracking-wide">6 Month Premium</span>
                <span className="bg-red-500 text-white text-xs font-black px-2 py-0.5 rounded">OLD</span>
              </div>
              <p className="text-xs text-gray-400 mb-2">6 Month Premium = $120/mo</p>
              <div className="bg-red-200 text-red-900 prel-serif font-black text-3xl text-center py-4 rounded-lg mb-2">$720</div>
              <p className="text-xs text-gray-400 mb-1">Added 12-11-20</p>
              <p className="prel-serif font-black text-2xl text-red-700">$120/MO*</p>
            </div>
          </div>
          <div className="bg-green-600 text-white text-center text-xs font-bold py-2.5">
            💰 Potential Savings: $53/month · $318 every 6 months · $636/year
          </div>
        </div>

        {/* ── BODY COPY 2 ── */}
        <p className="text-sm text-slate-600 leading-relaxed mb-3">
          When people go to trusted sites like{" "}
          <a href={DESTINATION_URL} className="font-bold underline text-[#128CED]">this</a>,
          in 60 seconds they get a clear view of the best available rates in their area, including all discounts from multiple companies. You can even get rates as low as $19* a month! (* Average expenditure $89/mo).
        </p>
        <p className="text-sm text-slate-600 leading-relaxed mb-8">
          Here is the lesson — NEVER buy insurance without comparing rates. You're NEVER LOCKED into your current policy. If you've already paid your bill, you can cancel and the balance will be refunded.
        </p>

        
<div>
  <label className="block text-sm font-bold text-slate-700 mb-3">
    What do you drive?
  </label>

  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
    {[
      "Honda",
      "Toyota",
      "Ford",
      "Chevrolet",
      "Tesla",
      "BMW",
      "Nissan",
      "Hyundai",
      "Kia",
    ].map((make) => (
      <button
        key={make}
        type="button"
        onClick={handleClick}
        className={`py-3 px-3 rounded-lg border text-sm font-semibold transition
          ${
            carModel === make
              ? "bg-sky-100 border-sky-500 text-sky-700"
              : "bg-white border-slate-200 hover:border-sky-400 hover:bg-sky-50 text-slate-700"
          }
        `}
      >
        {make}
      </button>
    ))}
  </div>

  {/* Optional compact fallback dropdown */}
  <div className="mt-3">
    <select
      value={carModel}
      onClick={handleClick}
      onChange={(e) => setCarModel(e.target.value)}
      className="w-full border border-slate-300 rounded-lg px-4 py-2 text-sm bg-white focus:ring-2 focus:ring-sky-400 focus:border-sky-400 outline-none transition"
    >
      <option value="">Other make</option>
      <option value="Audi">Audi</option>
      <option value="Mercedes-Benz">Mercedes-Benz</option>
      <option value="Subaru">Subaru</option>
      <option value="Volkswagen">Volkswagen</option>
      <option value="Mazda">Mazda</option>
    </select>
  </div>
</div>

        {/* ── BODY COPY 3 ── */}
        <section className="space-y-4 mb-10">
          <h3 className="text-2xl font-black text-slate-900">Find the right car insurance rate and drive with confidence</h3>
          <p className="text-slate-600 text-base leading-relaxed">
            Insurance pricing changes more often than many people realize. Factors such as driving data, claim trends, repair costs, and regional statistics can influence what you are quoted at renewal.
          </p>
          <p className="text-slate-600 text-base leading-relaxed">
            What felt like a competitive rate twelve months ago may not reflect current market pricing. That is why more drivers are taking a few minutes to review their options before committing to another policy term.
          </p>
          <p className="text-slate-600 text-base leading-relaxed">
            Checking rates online is free and does not require you to make any immediate changes. Click on{" "}
            <a href={DESTINATION_URL} className="text-[#128CED] underline">Otto Savings</a> to get started.
          </p>
        </section>

        {/* ── TWO IMAGE PLACEHOLDERS ── */}
        {/* swap with: <img src={hero} className="w-full h-[250px] object-cover" /> etc. */}
        <div className="grid md:grid-cols-2 gap-4 mb-10">
          <img src={hero} className="w-full h-72 rounded-xl bg-gray-200 border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-400 text-xs uppercase tracking-widest font-semibold" />
            
          
          <img src={img2} className="w-full h-72 rounded-xl bg-gray-200 border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-400 text-xs uppercase tracking-widest font-semibold" />
           
         
        </div>

        {/* ── HOW IT WORKS ── */}
        <section className="space-y-4 mb-10">
          <h3 className="text-2xl font-black text-slate-900">Balance your budget and check rates now.</h3>
          <p className="text-slate-600 text-base leading-relaxed">Getting started only takes a moment. The process is simple, straightforward, and completely online. No complicated paperwork and no long conversations.</p>
          <p className="text-slate-600 text-base font-bold">Here is how it works:</p>
          <ul className="list-disc pl-6 text-slate-600 text-base space-y-2">
            <li>Click below to begin your free rate check</li>
            <li>Enter your ZIP code and answer a few quick questions about your vehicle</li>
            <li>Instantly compare available offers from insurers in your area</li>
          </ul>
          <p className="font-black text-base text-slate-900">That is all there is to it.</p>
          <div className="text-slate-600 text-base space-y-1">
            <p>No long phone calls.</p>
            <p>No pressure to switch.</p>
            <p>No obligation to purchase anything.</p>
            <p>Just a fast and simple way to see what is currently available near you. Click here <a href={DESTINATION_URL} className="text-[#128CED] underline">Otto Savings</a> to get the best deals!</p>
          </div>
        </section>

        {/* ── H2 — STEP BY STEP ── */}
        <h2 className="prel-serif font-black text-slate-900 leading-tight mb-4" style={{ fontSize: "clamp(20px,3.5vw,28px)" }}>
          Here's How You Do It
        </h2>
        <p className="text-sm text-slate-600 leading-relaxed mb-2">
          <strong>Step 1: </strong>
          <a href={DESTINATION_URL} className="font-semibold underline text-[#128CED]">Click your age below to instantly get your rate online.</a>
        </p>
        <p className="text-sm text-slate-600 leading-relaxed mb-8">
          <strong>Step 2: </strong> Once you enter your zip code and go through a few questions, you will have the opportunity to check the cheapest rates and save up to $500 a year.
        </p>

        {/* ── AGE SELECTOR ── */}
        <p className="text-center font-bold text-slate-900 text-base mb-4">Select Your Age</p>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-2 mb-4">
          {AGE_RANGES.map(age => (
            <button
              key={age}
              onClick={() => handleAge(age)}
              className={`prel-age-btn${selectedAge === age ? " sel" : ""}`}
            >
              {age}
            </button>
          ))}
        </div>
        <button
          onClick={handleClick}
          className="w-full bg-[#128CED] hover:bg-sky-500 text-white font-black text-xl py-5 rounded-sm mb-12 shadow-md flex items-center justify-center gap-2 transition"
        >
          Find My Rate <ChevronRight className="w-5 h-5" />
        </button>

        {/* ── AGE SLIDER ── */}
        {/* <section className="mb-12 text-center">
          <h3 className="text-3xl font-black text-slate-900 mb-2">Check Availability in Your State</h3>
          <p className="text-slate-600 text-base mb-6">Hover over your state to see where drivers are comparing rates.</p>
          <AgeSlider onCtaClick={handleClick} />
        </section> */}

        {/* ── US MAP PLACEHOLDER ── */}
        {/* swap with: <USMap /> */}
        {/* <section className="mb-12 text-center">
          <h3 className="text-3xl font-black text-slate-900 mb-2">Select Your State</h3>
          <p className="text-slate-600 text-base mb-6">Click your state to check available rates in your area.</p>
          <div
            onClick={handleClick}
            className="w-full rounded-xl border-2 border-dashed border-sky-300 bg-sky-50 flex flex-col items-center justify-center cursor-pointer transition hover:bg-sky-100"
            style={{ minHeight: 260 }}
          >
            <svg className="w-14 h-14 text-sky-300 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
            <p className="text-sm text-sky-400 font-bold mb-1">[ US Map Placeholder ]</p>
            <p className="text-xs text-sky-300">Replace with &lt;USMap /&gt;</p>
          </div>
        </section> */}
        <section className="my-16 text-center">
                  <h3 className="text-3xl font-black mb-6">
                    Check Availability in Your State
                  </h3>
                  <p className="text-slate-600 text-lg mb-8">
                    Hover over your state to see where drivers are comparing rates.
                  </p>
                  <USMap />
                </section>

        {/* ── WHY IT MATTERS ── */}
        <section className="space-y-4 mb-12">
          <h3 className="text-2xl font-black text-slate-900">Why Comparing Rates Matters</h3>
          <p className="text-slate-600 text-base leading-relaxed">Many drivers remain with the same insurance provider for years without checking whether their rate is still competitive. It is easy to set a policy on auto renewal and forget about it.</p>
          <p className="text-slate-600 text-base leading-relaxed">However, insurance companies frequently adjust pricing based on market conditions, driving data, location trends, and other risk factors. A policy that was affordable last year may not be the most cost effective option today.</p>
          <p className="text-slate-600 text-base leading-relaxed">Even small monthly differences can add up over time. Saving twenty or thirty dollars per month could mean hundreds of dollars kept in your pocket each year.</p>
          <p className="text-slate-600 text-base font-bold">Reviewing your options only takes a few simple steps:</p>
          <ul className="list-disc pl-6 text-slate-600 text-base space-y-2">
            <li>Enter your ZIP code to see what insurers are available near you</li>
            <li>Answer a few basic questions about your vehicle and driving history</li>
            <li>View available offers side by side to compare coverage and pricing</li>
          </ul>
          <p className="text-slate-600 text-base">
            There is no obligation to switch providers. To be more informed visit{" "}
            <a href={DESTINATION_URL} className="text-[#128CED] underline">Otto Savings</a> today.
          </p>
        </section>

        {/* ── TESTIMONIALS ── */}
        <section className="text-center mb-12">
          <h2 className="text-3xl font-black text-slate-900 mb-8">Testimonials</h2>
          <div className="grid md:grid-cols-3 gap-5 text-left">
            {[
              { text: "I was honestly expecting this to be one of those long, complicated forms. It took me less than 3 minutes and I ended up switching the same day. Just loved it", name: "Daniel Ross", location: "Austin, TX" },
              { text: "My renewal jumped $47 a month. I took just about 2 minutes to compare on here and switched that same afternoon. I seriously saved over $500 for the year!", name: "Melissa Tanner", location: "Phoenix, AZ" },
              { text: "Super simple process. No spam calls, no pressure. Just clear options and better pricing than what I was paying.", name: "James Lenning", location: "Orlando, FL" },
            ].map((item, i) => (
              <div key={i} className="bg-white shadow-md p-6">
                <p className="text-slate-600 text-sm mb-3 leading-relaxed">"{item.text}"</p>
                <p className="text-sm font-bold text-slate-800">
                  {item.name} <span className="text-slate-500 font-normal">- {item.location}</span>
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <div className="text-center mb-10">
          <button
            onClick={handleClick}
            className="bg-[#128CED] hover:bg-sky-500 text-white font-black px-10 py-4 rounded-sm text-xl transition shadow-lg"
          >
            Save your funds now!
          </button>
          <p className="text-slate-400 text-base mt-3">Takes 90 seconds • No phone calls • No spam</p>
        </div>

      </div>

      {/* ══════════════════════════════════════════
          FOOTER — exact HeroSection footer
      ══════════════════════════════════════════ */}
      <footer className="bg-gray-900 text-gray-300 pt-14 pb-6 mt-0">
        <div className="max-w-6xl mx-auto px-8">

          <div className="flex flex-col md:flex-row justify-between gap-10 mb-10">
            <div className="flex flex-col gap-4 max-w-xs">
              <img src={logoo} alt="CheckAutoPlans Logo" className="h-10 w-fit" />
              <p className="text-gray-400 text-base leading-relaxed">
                Make the right moves for <span className="text-sky-400 font-semibold">your savings.</span>
              </p>
              <p className="text-gray-500 text-sm">1343 Main St Suite 705 · Sarasota FL 34236</p>
              <div className="flex items-center gap-3 mt-1">
                <div className="bg-white rounded px-2 py-1 flex items-center gap-1">
                  <span className="text-blue-800 font-black text-xs">BBB</span>
                  <div className="text-[9px] text-blue-800 leading-tight font-semibold">ACCREDITED<br />BUSINESS</div>
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
                  <li><a href={DESTINATION_URL} className="hover:text-white transition">Car Insurance</a></li>
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
            CheckAutoPlans.com is an independent, advertising-supported comparison website. The products and offers that appear on this website are from third-party insurance partners and advertisers from which CheckAutoPlans.com may receive compensation. This compensation may influence which products we feature, how they are presented, and where they appear on the page. CheckAutoPlans.com is not a licensed insurance provider or broker. Content on this site is provided for informational purposes only and does not constitute insurance advice. Available rates and offers vary by location, driving history, and other factors and are subject to change without notice. Not all products or offers are available in all states.
          </p>
          <div className="border-t border-gray-700 mb-6" />
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-gray-500">
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

export default Prelander;