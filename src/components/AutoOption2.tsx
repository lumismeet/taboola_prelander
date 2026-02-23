"use client";

import { useState } from "react";
import { CheckCircle, Lock, ChevronRight, MapPin, ShieldCheck } from "lucide-react";

// ─── CONFIG ──────────────────────────────────────────────────────────────────
const DESTINATION_URL = "https://auto-savings.com/home.html";
const STATE_NAME = "Oregon"; // ← swap this to make state-specific versions
const AGE_RANGES = ["16 – 25", "26 – 35", "36 – 45", "46 – 55", "56 – 65", "66 +"];
const CARRIERS = ["Liberty Mutual", "Progressive", "The Hartford", "Direct", "Kemper"];

// ─── COMPONENT ───────────────────────────────────────────────────────────────
export default function Prelander() {
  const [zip, setZip] = useState("");
  const [zipError, setZipError] = useState("");
  const [selectedAge, setSelectedAge] = useState<string | null>(null);

  const go = () => (window.location.href = DESTINATION_URL);

  const handleZip = () => {
    const t = zip.trim();
    if (!t) { setZipError("Please enter your ZIP code."); return; }
    if (!/^\d{5}$/.test(t)) { setZipError("Please enter a valid 5-digit ZIP."); return; }
    setZipError("");
    go();
  };

  const handleAge = (age: string) => {
    setSelectedAge(age);
    setTimeout(go, 280);
  };

  // Shared ZIP input + button UI
  const ZipRow = ({ dark = false }: { dark?: boolean }) => (
    <div>
      <div className="flex gap-2">
        <div className="relative flex-1">
          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            value={zip}
            onChange={(e) => { setZip(e.target.value); setZipError(""); }}
            onKeyDown={(e) => e.key === "Enter" && handleZip()}
            placeholder="Enter ZIP Code"
            maxLength={5}
            className={[
              "prelander-zip w-full rounded-md pl-9 pr-3 py-3 text-sm border transition",
              dark
                ? "bg-gray-800 border-gray-600 text-white placeholder:text-gray-500"
                : "bg-white border-gray-300 text-gray-900",
            ].join(" ")}
          />
        </div>
        <button
          onClick={handleZip}
          className="prelander-gbtn bg-green-600 text-white font-bold px-5 py-3 rounded-md text-sm flex items-center gap-1.5 whitespace-nowrap shadow"
        >
          GET RATES <ChevronRight className="w-4 h-4" />
        </button>
      </div>
      {zipError && <p className="text-red-500 text-xs mt-1">{zipError}</p>}
    </div>
  );

  return (
    <div className="min-h-screen bg-white text-gray-900" style={{ fontFamily: "'Source Sans 3', Arial, sans-serif" }}>

      {/* ── GOOGLE FONTS ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,400;0,700;0,900;1,400&family=Source+Sans+3:wght@400;600;700&display=swap');

        .prelander-serif  { font-family: 'Merriweather', Georgia, serif; }
        .prelander-sans   { font-family: 'Source Sans 3', Arial, sans-serif; }

        .prelander-zip:focus {
          outline: none;
          border-color: #1d4ed8;
          box-shadow: 0 0 0 3px rgba(29,78,216,0.12);
        }
        .prelander-gbtn { transition: background 0.15s; }
        .prelander-gbtn:hover { background: #15803d !important; }

        .prelander-age-btn {
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
        .prelander-age-btn:hover,
        .prelander-age-btn.selected {
          background: #1d4ed8 !important;
          color: white !important;
          border-color: #1d4ed8 !important;
        }
      `}</style>

      {/* ════════════════════════════════════════════
          NAVBAR
      ════════════════════════════════════════════ */}
      <nav style={{ background: "white", borderBottom: "1px solid #e5e7eb" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", padding: "10px 16px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div className="prelander-serif" style={{ fontSize: 22, fontWeight: 900, letterSpacing: "-0.5px" }}>
            <span style={{ color: "#2563eb" }}>P</span>retected
          </div>
          <div style={{ fontSize: 11, color: "#9ca3af", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" }}>
            AUTO INSURANCE
          </div>
        </div>
      </nav>

      {/* ════════════════════════════════════════════
          HERO BANNER  ← swap the placeholder div
          with your <Image> or <img> tag
      ════════════════════════════════════════════ */}
      <div style={{ position: "relative", minHeight: 200, background: "linear-gradient(135deg,#0f172a 0%,#1e3a5f 55%,#0f172a 100%)", overflow: "hidden" }}>

        {/*
          ╔══════════════════════════════════════╗
          ║   PHOTO PLACEHOLDER                  ║
          ║   Replace this <div> with:           ║
          ║   <Image                             ║
          ║     src="/your-hero-photo.jpg"       ║
          ║     alt="hero"                       ║
          ║     fill                             ║
          ║     className="object-cover"         ║
          ║     style={{ opacity: 0.35 }}        ║
          ║   />                                 ║
          ╚══════════════════════════════════════╝
        */}
        <div style={{
          position: "absolute", inset: 0,
          display: "flex", alignItems: "center", justifyContent: "center",
          border: "2px dashed rgba(255,255,255,0.15)", margin: 8, borderRadius: 8,
          color: "rgba(255,255,255,0.2)", fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase",
          fontFamily: "sans-serif",
        }}>
          [ Hero Photo — replace with your &lt;Image /&gt; ]
        </div>

        <div style={{ position: "relative", zIndex: 10, maxWidth: 700, margin: "0 auto", padding: "60px 16px", textAlign: "center" }}>
          <h1
            className="prelander-serif"
            style={{ fontSize: "clamp(20px,4vw,36px)", fontWeight: 900, color: "white", lineHeight: 1.25, textShadow: "0 2px 12px rgba(0,0,0,0.7)" }}
          >
            Why Did No One Tell {STATE_NAME} Drivers About This?
          </h1>
        </div>
      </div>

      {/* ── BREADCRUMB ── */}
      <div style={{ background: "#f9fafb", borderBottom: "1px solid #e5e7eb" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", padding: "8px 16px", display: "flex", alignItems: "center", gap: 4, fontSize: 12, color: "#9ca3af" }}>
          <a href="#" style={{ color: "#3b82f6" }}>Home</a>
          <ChevronRight style={{ width: 12, height: 12 }} />
          <span>Why Did No One Tell {STATE_NAME} Drivers About This?</span>
        </div>
      </div>

      {/* ════════════════════════════════════════════
          MAIN COLUMN
      ════════════════════════════════════════════ */}
      <div style={{ maxWidth: 620, margin: "0 auto", padding: "28px 16px 60px" }}>

        {/* ─────────────────────────────────────────
            ZIP FORM CARD
        ───────────────────────────────────────── */}
        <div style={{ border: "1px solid #e5e7eb", borderRadius: 10, padding: 20, marginBottom: 28, background: "white", boxShadow: "0 1px 6px rgba(0,0,0,0.06)" }}>

          {/* Badge */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "#eff6ff", border: "1px solid #bfdbfe", color: "#1d4ed8", fontSize: 12, fontWeight: 700, padding: "4px 12px", borderRadius: 999, marginBottom: 14 }}>
            <ShieldCheck style={{ width: 14, height: 14 }} />
            Trusted by 10M+ Drivers
          </div>

          <p style={{ fontSize: 14, fontWeight: 600, color: "#111827", marginBottom: 4 }}>
            Enter your <strong>ZIP code</strong> to compare your different options and stop overpaying!
          </p>
          <p style={{ fontSize: 12, color: "#6b7280", marginBottom: 16, lineHeight: 1.6 }}>
            Insurance rates change constantly. Find out if you're eligible for lower premiums from leading providers.
          </p>

          <ZipRow />

          {/* Trust badges */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 16, marginTop: 12, fontSize: 12, color: "#6b7280" }}>
            {[
              { icon: <CheckCircle style={{ width: 14, height: 14, color: "#16a34a" }} />, label: "100% Free" },
              { icon: <CheckCircle style={{ width: 14, height: 14, color: "#16a34a" }} />, label: "No Obligation" },
              { icon: <Lock style={{ width: 14, height: 14, color: "#16a34a" }} />, label: "Secure & Private" },
            ].map((t, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 4 }}>{t.icon}{t.label}</div>
            ))}
          </div>

          {/* Carrier pills */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 14, paddingTop: 14, borderTop: "1px solid #f3f4f6" }}>
            {CARRIERS.map(c => (
              <span key={c} style={{ background: "#f3f4f6", border: "1px solid #e5e7eb", color: "#6b7280", fontSize: 11, fontWeight: 700, padding: "4px 10px", borderRadius: 4 }}>
                {c}
              </span>
            ))}
          </div>
        </div>

        {/* ─────────────────────────────────────────
            BODY COPY — SECTION 1
        ───────────────────────────────────────── */}
        <p style={{ fontSize: 14, color: "#4b5563", marginBottom: 12, lineHeight: 1.7 }}>
          Here is the 1 simple truth according to experts:
        </p>

        <p style={{ fontSize: 14, fontWeight: 700, color: "#111827", marginBottom: 8 }}>If You:</p>

        <ul style={{ marginBottom: 16, paddingLeft: 4, listStyle: "none" }}>
          {["Are Currently Insured", "Are Over The Age Of 25", "Drive Less Than 50 Miles Per Day", "Live In A Qualified Zip Code"].map((item, i) => (
            <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 8, marginBottom: 6, fontSize: 14, color: "#1f2937", fontWeight: 600 }}>
              <span style={{ color: "#6b7280", lineHeight: 1.6 }}>•</span> {item}
            </li>
          ))}
        </ul>

        <p style={{ fontSize: 14, color: "#4b5563", lineHeight: 1.7, marginBottom: 32 }}>
          Then you may qualify for massive auto insurance discounts. If you have not had a traffic ticket in the last 3 years or do not have a DUI on your record, you may get an even larger discount and{" "}
          <a href={DESTINATION_URL} style={{ color: "#2563eb", fontWeight: 700, textDecoration: "underline" }}>
            save up to $500 a year.
          </a>
        </p>

        {/* ─────────────────────────────────────────
            H2
        ───────────────────────────────────────── */}
        <h2 className="prelander-serif" style={{ fontSize: "clamp(20px,3.5vw,30px)", fontWeight: 900, color: "#111827", lineHeight: 1.3, marginBottom: 16 }}>
          Did Your Car Insurance Company Ever Tell You About This?
        </h2>

        <p style={{ fontSize: 14, color: "#4b5563", lineHeight: 1.7, marginBottom: 12 }}>
          Probably not, since the insurance companies prefer you not to be aware of such savings. They count on you just blindly renewing your policy at the same price — because that's how they increase profits.
        </p>

        <p style={{ fontSize: 14, color: "#4b5563", lineHeight: 1.7, marginBottom: 20 }}>
          David was not happy with the rate he was paying for a long time, until he decided to enter his zip code at{" "}
          <a href={DESTINATION_URL} style={{ color: "#2563eb", textDecoration: "underline" }}>Pretected.com</a>
          {" "}— and he was truly amazed to see how much he could save.
        </p>

        {/* ─────────────────────────────────────────
            PULL QUOTE
        ───────────────────────────────────────── */}
        <blockquote style={{ borderLeft: "4px solid #d1d5db", paddingLeft: 20, paddingTop: 12, paddingBottom: 12, marginBottom: 24, background: "#f9fafb", borderRadius: "0 8px 8px 0" }}>
          <p style={{ fontSize: 14, color: "#4b5563", fontStyle: "italic", lineHeight: 1.7, margin: 0 }}>
            "If I knew about all this earlier, I would've switched my insurance policy ages ago. I already saved hundreds of dollars by using this method."
            <strong style={{ fontStyle: "normal" }}> – David A</strong>
          </p>
        </blockquote>

        {/* ─────────────────────────────────────────
            COMPARISON GRAPHIC
        ───────────────────────────────────────── */}
        <div style={{ border: "1px solid #e5e7eb", borderRadius: 10, overflow: "hidden", marginBottom: 24, boxShadow: "0 1px 6px rgba(0,0,0,0.06)" }}>
          {/* Header bar */}
          <div style={{ background: "#1f2937", color: "white", fontSize: 12, fontWeight: 700, padding: "10px 16px", display: "flex", justifyContent: "space-between" }}>
            <span>Vehicle Total Premium</span>
            <span style={{ color: "#9ca3af", fontWeight: 400 }}>Savings Example</span>
          </div>

          {/* Two columns */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
            {/* NEW */}
            <div style={{ padding: 20, background: "#f0fdf4", borderRight: "1px solid #e5e7eb" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                <span style={{ fontSize: 11, color: "#6b7280", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em" }}>6 Month Premium</span>
                <span style={{ background: "#16a34a", color: "white", fontSize: 10, fontWeight: 800, padding: "2px 8px", borderRadius: 4 }}>NEW</span>
              </div>
              <p style={{ fontSize: 11, color: "#9ca3af", marginBottom: 8 }}>6 Month Premium = $67/mo</p>
              <div style={{ background: "#bbf7d0", color: "#14532d", fontSize: 28, fontWeight: 900, textAlign: "center", padding: "16px 8px", borderRadius: 8, marginBottom: 10, fontFamily: "'Merriweather', Georgia, serif" }}>
                $402
              </div>
              <p style={{ fontSize: 11, color: "#9ca3af", marginBottom: 4 }}>Added 12-06-26</p>
              <p style={{ fontSize: 22, fontWeight: 900, color: "#15803d", fontFamily: "'Merriweather', Georgia, serif" }}>$67/MO*</p>
            </div>

            {/* OLD */}
            <div style={{ padding: 20, background: "#fff5f5" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                <span style={{ fontSize: 11, color: "#6b7280", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em" }}>6 Month Premium</span>
                <span style={{ background: "#dc2626", color: "white", fontSize: 10, fontWeight: 800, padding: "2px 8px", borderRadius: 4 }}>OLD</span>
              </div>
              <p style={{ fontSize: 11, color: "#9ca3af", marginBottom: 8 }}>6 Month Premium = $120/mo</p>
              <div style={{ background: "#fecaca", color: "#7f1d1d", fontSize: 28, fontWeight: 900, textAlign: "center", padding: "16px 8px", borderRadius: 8, marginBottom: 10, fontFamily: "'Merriweather', Georgia, serif" }}>
                $720
              </div>
              <p style={{ fontSize: 11, color: "#9ca3af", marginBottom: 4 }}>Added 12-11-20</p>
              <p style={{ fontSize: 22, fontWeight: 900, color: "#b91c1c", fontFamily: "'Merriweather', Georgia, serif" }}>$120/MO*</p>
            </div>
          </div>

          {/* Savings banner */}
          <div style={{ background: "#16a34a", color: "white", textAlign: "center", fontSize: 12, fontWeight: 700, padding: "10px 16px", letterSpacing: "0.02em" }}>
            💰 Potential Savings: $53/month · $318 every 6 months · $636/year
          </div>
        </div>

        {/* ─────────────────────────────────────────
            BODY COPY — SECTION 2
        ───────────────────────────────────────── */}
        <p style={{ fontSize: 14, color: "#4b5563", lineHeight: 1.7, marginBottom: 12 }}>
          When people go to trusted sites like{" "}
          <a href={DESTINATION_URL} style={{ color: "#2563eb", fontWeight: 700, textDecoration: "underline" }}>this</a>,
          in 60 seconds they get a clear view of the best available rates in their area — and that includes all the discounts from multiple companies. You can even get rates as low as $19* a month! (* Average expenditure $89/mo).
        </p>

        <p style={{ fontSize: 14, color: "#4b5563", lineHeight: 1.7, marginBottom: 36 }}>
          Here is the lesson to learn — NEVER buy insurance without comparing rates on sites that include updated rates that have all the discounts available. Important: You're NEVER LOCKED into your current policy. If you've already paid your bill, you can very easily cancel, and the balance will be refunded.
        </p>

        {/* ─────────────────────────────────────────
            H2 — HOW TO DO IT
        ───────────────────────────────────────── */}
        <h2 className="prelander-serif" style={{ fontSize: "clamp(20px,3.5vw,30px)", fontWeight: 900, color: "#111827", lineHeight: 1.3, marginBottom: 16 }}>
          Here's How You Do It
        </h2>

        <p style={{ fontSize: 14, color: "#4b5563", lineHeight: 1.7, marginBottom: 6 }}>
          <strong>Step 1: </strong>
          <a href={DESTINATION_URL} style={{ color: "#2563eb", fontWeight: 600, textDecoration: "underline" }}>
            Click your age below to instantly get your rate online.
          </a>
        </p>

        <p style={{ fontSize: 14, color: "#4b5563", lineHeight: 1.7, marginBottom: 28 }}>
          <strong>Step 2: </strong> Once you enter your zip code and go through a few questions, you will have the opportunity to check the cheapest rates and save up to $500 a year.
        </p>

        {/* ─────────────────────────────────────────
            AGE SELECTOR
        ───────────────────────────────────────── */}
        <p style={{ textAlign: "center", fontWeight: 700, fontSize: 16, color: "#111827", marginBottom: 14 }}>
          Select Your Age
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(6,1fr)", gap: 8, marginBottom: 14 }}>
          {AGE_RANGES.map(age => (
            <button
              key={age}
              onClick={() => handleAge(age)}
              className={`prelander-age-btn${selectedAge === age ? " selected" : ""}`}
            >
              {age}
            </button>
          ))}
        </div>

        <button
          onClick={go}
          className="prelander-gbtn"
          style={{ width: "100%", background: "#16a34a", color: "white", fontWeight: 700, fontSize: 16, padding: "16px 24px", borderRadius: 8, border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 8, boxShadow: "0 2px 10px rgba(22,163,74,0.3)", marginBottom: 40 }}
        >
          Find My Rate <ChevronRight style={{ width: 20, height: 20 }} />
        </button>

        {/* ─────────────────────────────────────────
            US MAP PLACEHOLDER
            Replace with your <USMap /> component
        ───────────────────────────────────────── */}
        <p style={{ textAlign: "center", fontWeight: 700, fontSize: 15, color: "#111827", marginBottom: 14 }}>
          Or Select Your State
        </p>

        {/*
          ╔══════════════════════════════════════╗
          ║   US MAP PLACEHOLDER                 ║
          ║   Replace this <div> with:           ║
          ║   <USMap onClick={go} />             ║
          ║   (your existing USMap component)    ║
          ╚══════════════════════════════════════╝
        */}
        <div
          onClick={go}
          style={{
            width: "100%", minHeight: 240, border: "2px dashed #93c5fd", borderRadius: 12,
            background: "#eff6ff", display: "flex", flexDirection: "column", alignItems: "center",
            justifyContent: "center", cursor: "pointer", marginBottom: 48, transition: "background 0.15s",
          }}
          onMouseEnter={e => (e.currentTarget.style.background = "#dbeafe")}
          onMouseLeave={e => (e.currentTarget.style.background = "#eff6ff")}
        >
          <svg style={{ width: 64, height: 64, color: "#93c5fd", marginBottom: 12 }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
          </svg>
          <p style={{ fontSize: 13, color: "#60a5fa", fontWeight: 700, marginBottom: 4 }}>[ US Map Component ]</p>
          <p style={{ fontSize: 11, color: "#93c5fd" }}>Replace with your &lt;USMap /&gt; — click navigates to {DESTINATION_URL}</p>
        </div>

      </div>

      {/* ════════════════════════════════════════════
          FOOTER
      ════════════════════════════════════════════ */}
      <footer style={{ borderTop: "1px solid #e5e7eb", background: "#f9fafb", padding: "32px 16px" }}>
        <div style={{ maxWidth: 620, margin: "0 auto", textAlign: "center" }}>
          <div className="prelander-serif" style={{ fontSize: 18, fontWeight: 900, color: "#374151", marginBottom: 12 }}>
            <span style={{ color: "#2563eb" }}>P</span>retected
          </div>
          <p style={{ fontSize: 11, color: "#9ca3af", lineHeight: 1.7, maxWidth: 520, margin: "0 auto 16px" }}>
            This site is not affiliated with any government program. Rates shown are examples only. Actual savings vary by location, driving history, and coverage level. Insurance rates change frequently. This service is 100% free and there is no obligation to purchase.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: 20, fontSize: 11, color: "#9ca3af", marginBottom: 12 }}>
            {["Privacy Policy", "Terms of Service", "Contact Us"].map(l => (
              <a key={l} href="#" style={{ color: "#9ca3af", textDecoration: "none" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#2563eb")}
                onMouseLeave={e => (e.currentTarget.style.color = "#9ca3af")}>
                {l}
              </a>
            ))}
          </div>
          <p style={{ fontSize: 11, color: "#d1d5db" }}>© {new Date().getFullYear()} Pretected. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}