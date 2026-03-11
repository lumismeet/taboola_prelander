import { useState, useEffect } from "react";

const DESTINATION_URL = "https://auto-savings.com/home.html";

const getCurrentMonth = () =>
  new Date().toLocaleString("en-US", { month: "long" });

const reasons = [
  {
    id: 1,
    title: "You Could Be Saving Over $1,800 a Year",
    body: "Studies consistently show that drivers who take the time to compare quotes save an average of $1,847 annually. That's not a small difference — that's a vacation, a car payment, or months of groceries. Most people never see those savings simply because they never look.",
  },
  {
    id: 2,
    title: "It Takes Less Than 2 Minutes",
    body: "There's a common assumption that switching insurance is a long, painful process. It isn't. Modern comparison tools let you enter your ZIP code, answer a few basic questions about your vehicle, and see real quotes in under two minutes — no phone calls, no waiting rooms.",
  },
  {
    id: 3,
    title: "Your Current Rate Is Probably Outdated",
    body: "Insurance companies adjust their pricing constantly based on market trends, claims data, and regional risk factors. A rate that felt competitive 12 months ago may no longer reflect what's actually available to you today. The only way to know is to check.",
  },
  {
    id: 4,
    title: "You Can Get the Same Coverage for Less",
    body: "Comparing rates doesn't mean settling for less protection. Identical coverage levels can carry wildly different price tags depending on the carrier. Many drivers discover they can get the exact same policy — same deductible, same limits — at a significantly lower monthly premium.",
  },
  {
    id: 5,
    title: "Over 50 Insurers Are Competing for Your Business",
    body: "You may only know three or four insurance brand names, but there are dozens of carriers actively writing policies in your state. When you compare, all of them are effectively bidding for your business. That competition almost always works in your favor.",
  },
  {
    id: 6,
    title: "Prices Vary More Than You'd Expect by ZIP Code",
    body: "Two drivers with identical vehicles and clean records can pay dramatically different premiums simply because of where they live. Local traffic patterns, theft rates, and weather history all factor in. Comparing locally ensures you're seeing rates that are actually relevant to your address.",
  },
  {
    id: 7,
    title: "There Are Discounts You Probably Don't Know About",
    body: "Most drivers are unaware of the full range of discounts available to them — good driver credits, bundling discounts, low mileage rates, military and student savings, and more. Comparing quotes often surfaces these automatically, rather than requiring you to ask the right questions.",
  },
  {
    id: 8,
    title: "Life Changes Mean Your Rate Should Change Too",
    body: "Got married? Moved to a new city? Bought a new vehicle? Each of these life events can qualify you for better pricing. If your policy hasn't been reviewed since your last major change, you may be paying a rate that no longer reflects your actual situation.",
  },
  {
    id: 9,
    title: "There's No Obligation and No Pressure",
    body: "Checking your rate doesn't mean you're committed to switching. You're simply getting information — real numbers from real carriers — so you can make an informed decision before your next renewal. If your current rate turns out to be competitive, you'll know that too.",
  },
  {
    id: 10,
    title: "Waiting Only Costs You More",
    body: "Every month you spend on an overpriced policy is money you don't get back. Rates fluctuate, and the best available pricing today may not be on the table six months from now. The comparison itself is free, and it takes less time than most people expect. There's no good reason to wait.",
  },
];

export default function Prelander() {
  const [stateName, setStateName] = useState("");
  const [visitorCount] = useState(() => Math.floor(Math.random() * 300) + 600);
  const currentMonth = getCurrentMonth();

  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then((r) => r.json())
      .then((d) => setStateName(d.region || ""))
      .catch(() => {});
  }, []);

  const handleCTA = () => {
    window.location.href = DESTINATION_URL;

  };

  return (
    <div style={{ minHeight: "100vh", background: "#f1f5f9", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif", color: "#1e293b" }}>

      {/* URGENCY BAR */}
      <div style={{
        background: "#fbbf24", color: "#1e293b", textAlign: "center",
        fontSize: 14, fontWeight: 700, padding: "9px 16px", position: "sticky", top: 0, zIndex: 50,
      }}>
        ⚠️ Rates in {stateName || "your area"} were updated today — {visitorCount} drivers compared this week.{" "}
        <span onClick={handleCTA} style={{ textDecoration: "underline", cursor: "pointer" }}>
          Check yours now →
        </span>
      </div>

      {/* NAVBAR */}
      <div style={{
        background: "#fff", boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
        position: "sticky", top: 36, zIndex: 40, padding: "14px 32px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <div style={{ fontSize: 20, fontWeight: 900, color: "#128CED", letterSpacing: -0.5 }}>
          CheckAutoPlans
        </div>
        <button
          onClick={handleCTA}
          style={{
            background: "#128CED", color: "#fff", fontWeight: 800, fontSize: 14,
            padding: "9px 22px", border: "none", borderRadius: 4, cursor: "pointer",
          }}
        >
          Check Rates — Free!
        </button>
      </div>

      {/* ARTICLE BODY */}
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "48px 24px 80px" }}>

        <p style={{ color: "#94a3b8", fontSize: 13, marginBottom: 12 }}>
          CheckAutoPlans · {new Date().toLocaleDateString()} · {currentMonth} Rates Updated
        </p>

        <h1 style={{ fontSize: "clamp(26px, 4vw, 44px)", fontWeight: 900, lineHeight: 1.15, marginBottom: 20, color: "#0f172a" }}>
          10 Reasons You Should Compare Car Insurance Prices Right Now
        </h1>

        <h2 style={{ fontSize: 20, fontWeight: 600, color: "#475569", marginBottom: 28, lineHeight: 1.5 }}>
          Most drivers are overpaying without knowing it. Here's why a quick comparison could save you hundreds this year.
        </h2>

        {/* PULL QUOTE */}
        <div style={{
          background: "#fff", borderLeft: "4px solid #38bdf8",
          borderRadius: "0 8px 8px 0", padding: "16px 22px", marginBottom: 36,
          boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
        }}>
          <p style={{ color: "#475569", fontSize: 15, lineHeight: 1.7, marginBottom: 8 }}>
            "My renewal jumped $47 a month. I took just about 2 minutes to compare on here and switched that same afternoon. I seriously saved over $500 for the year!"
          </p>
          <p style={{ fontWeight: 800, fontSize: 14, color: "#1e293b" }}>
            Melissa Tanner <span style={{ color: "#94a3b8", fontWeight: 400 }}>— Phoenix, AZ</span>
          </p>
        </div>

        <p style={{ fontSize: 17, color: "#475569", lineHeight: 1.8, marginBottom: 48 }}>
          Recent data suggests the average American family overspends by $400 or more per year on car insurance — simply because they never take the time to compare rates. Below are ten straightforward reasons why that comparison is worth making today.
        </p>

        {/* THE 10 REASONS */}
        <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
          {reasons.map((r) => (
            <div key={r.id}>
              <h3 style={{ fontSize: 21, fontWeight: 900, color: "#0f172a", marginBottom: 10, lineHeight: 1.3 }}>
                {r.id}. {r.title}
              </h3>
              <p style={{ fontSize: 16, color: "#475569", lineHeight: 1.85 }}>
                {r.body}
              </p>
            </div>
          ))}
        </div>

        {/* MID CTA */}
        <div style={{
          margin: "56px 0", textAlign: "center", background: "#fff",
          borderRadius: 12, padding: "36px 28px",
          boxShadow: "0 2px 12px rgba(0,0,0,0.07)", border: "1px solid #e2e8f0",
        }}>
          <h3 style={{ fontSize: 22, fontWeight: 900, marginBottom: 10 }}>
            See What's Available in Your Area
          </h3>
          <p style={{ color: "#64748b", fontSize: 15, marginBottom: 24, lineHeight: 1.7 }}>
            Free to check. Takes 90 seconds. No obligation to switch.
          </p>
          <button
            onClick={handleCTA}
            style={{
              background: "#128CED", color: "#fff", fontWeight: 900, fontSize: 18,
              padding: "15px 40px", border: "none", borderRadius: 4, cursor: "pointer",
              boxShadow: "0 4px 16px rgba(18,140,237,0.25)",
              display: "block", width: "100%", maxWidth: 420, margin: "0 auto 14px",
            }}
          >
            Check My Rate — Free, No Obligation →
          </button>
          <p style={{ color: "#94a3b8", fontSize: 13 }}>No spam calls · No commitment · Takes 90 seconds</p>
        </div>

        {/* CLOSING COPY */}
        <p style={{ fontSize: 16, color: "#475569", lineHeight: 1.85, marginBottom: 20 }}>
          Checking rates online is free and does not require you to make any immediate changes. It simply gives you visibility into what is currently available in your area so you can make a confident decision before your next renewal.
        </p>
        <p style={{ fontSize: 16, color: "#475569", lineHeight: 1.85, marginBottom: 48 }}>
          The process is designed to be simple and completely online. Enter your ZIP code, answer a few quick questions, and see available offers side by side.{" "}
          <a href={DESTINATION_URL} style={{ color: "#128CED", textDecoration: "underline" }}>
            Get started at Otto Savings →
          </a>
        </p>

        {/* TESTIMONIALS */}
        <h3 style={{ fontSize: 22, fontWeight: 900, marginBottom: 20 }}>What Drivers Are Saying</h3>
        <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 52 }}>
          {[
            { text: "I was expecting a long complicated form. It took me less than 3 minutes and I switched the same day.", name: "Daniel Ross", loc: "Austin, TX" },
            { text: "My renewal jumped $47 a month. I took just about 2 minutes to compare on here and switched that same afternoon. I seriously saved over $500 for the year!", name: "Melissa Tanner", loc: "Phoenix, AZ" },
            { text: "Super simple process. No spam calls, no pressure. Just clear options and better pricing than what I was paying.", name: "James Lenning", loc: "Orlando, FL" },
          ].map((t, i) => (
            <div key={i} style={{ background: "#fff", borderRadius: 8, padding: "20px 22px", boxShadow: "0 1px 6px rgba(0,0,0,0.06)" }}>
              <div style={{ color: "#fbbf24", fontSize: 15, marginBottom: 8 }}>★★★★★</div>
              <p style={{ color: "#475569", fontSize: 15, lineHeight: 1.7, marginBottom: 12 }}>"{t.text}"</p>
              <p style={{ fontWeight: 800, fontSize: 14, color: "#1e293b" }}>
                {t.name} <span style={{ color: "#94a3b8", fontWeight: 400 }}>— {t.loc}</span>
              </p>
            </div>
          ))}
        </div>

        {/* FINAL CTA */}
        <div style={{ textAlign: "center" }}>
          <button
            onClick={handleCTA}
            style={{
              background: "#128CED", color: "#fff", fontWeight: 900, fontSize: 20,
              padding: "18px 48px", border: "none", borderRadius: 4, cursor: "pointer",
              boxShadow: "0 4px 20px rgba(18,140,237,0.3)",
            }}
          >
            Check My Rate — Free, No Obligation →
          </button>
          <p style={{ color: "#94a3b8", fontSize: 14, marginTop: 10 }}>
            Takes 90 seconds · No phone calls · No spam
          </p>
        </div>

      </div>

      {/* FOOTER */}
      <footer style={{ background: "#111827", color: "#d1d5db", padding: "56px 32px 24px" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: 32, marginBottom: 40 }}>
            <div style={{ maxWidth: 280 }}>
              <div style={{ fontSize: 20, fontWeight: 900, color: "#38bdf8", marginBottom: 12 }}>CheckAutoPlans</div>
              <p style={{ color: "#9ca3af", fontSize: 14, lineHeight: 1.7, marginBottom: 8 }}>
                Make the right moves for <span style={{ color: "#38bdf8", fontWeight: 600 }}>your savings.</span>
              </p>
              <p style={{ color: "#6b7280", fontSize: 13 }}>1343 Main St Suite 705 · Sarasota FL 34236</p>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 40 }}>
              {[
                { heading: "Insurance Products", links: ["Car Insurance", "Home Insurance", "Life Insurance", "Health Insurance"] },
                { heading: "Resources", links: ["How It Works", "Rate Calculator", "Coverage Guide"] },
                { heading: "Contact Us", links: ["Facebook", "Twitter / X", "Email"] },
              ].map((col) => (
                <div key={col.heading}>
                  <div style={{ color: "#38bdf8", fontWeight: 700, fontSize: 13, letterSpacing: 1, marginBottom: 12 }}>{col.heading}</div>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
                    {col.links.map((l) => (
                      <li key={l}><a href={DESTINATION_URL} style={{ color: "#d1d5db", textDecoration: "none", fontSize: 14 }}>{l}</a></li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div style={{ borderTop: "1px solid #374151", paddingTop: 24, marginBottom: 16 }}>
            <p style={{ color: "#6b7280", fontSize: 12, lineHeight: 1.8 }}>
              CheckAutoPlans.com is an independent, advertising-supported comparison website. The products and offers that appear on this website are from third-party insurance partners. CheckAutoPlans.com is not a licensed insurance provider or broker. Content on this site is provided for informational purposes only. Available rates vary by location, driving history, and other factors.
            </p>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 12, fontSize: 13, color: "#6b7280" }}>
            <p>© {new Date().getFullYear()} Check Auto Plans. All rights reserved.</p>
            <div style={{ display: "flex", gap: 20 }}>
              <a href="/privacy/policy" target="_blank" rel="noopener noreferrer" style={{ color: "#9ca3af", textDecoration: "none" }}>Privacy Policy</a>
              <a href="/privacy/terms" target="_blank" rel="noopener noreferrer" style={{ color: "#9ca3af", textDecoration: "none" }}>Terms of Use</a>
              <a href="#" style={{ color: "#9ca3af", textDecoration: "none" }}>Contact</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}