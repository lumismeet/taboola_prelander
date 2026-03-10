import { useState, useEffect } from "react";
import { useVisitorTracking } from "@/hooks/useVisitorTracking";
const DESTINATION_URL = "https://f.ottoinsurance.com/auto/insurance";


const reasons = [
  {
    id: 1,
    icon: "💸",
    title: "You Could Be Saving $1,847/Year",
    desc: "Studies show drivers who compare quotes save an average of $1,847 annually — just by spending 2 minutes online.",
    badge: "#1 REASON",
    stat: "$1,847",
    statLabel: "avg. annual savings",
    color: "#128CED",
  },
  {
    id: 2,
    icon: "⏱️",
    title: "It Takes Less Than 2 Minutes",
    desc: "No phone calls. No waiting on hold. Enter your ZIP, answer a few quick questions, and you're done.",
    badge: "FAST",
    stat: "2 min",
    statLabel: "average time",
    color: "#0ea5e9",
  },
  {
    id: 3,
    icon: "🏢",
    title: "50+ Insurers Compete For Your Business",
    desc: "When companies compete, you win. We put your profile in front of dozens of carriers fighting for your policy.",
    badge: "EXCLUSIVE",
    stat: "50+",
    statLabel: "competing carriers",
    color: "#128CED",
  },
  {
    id: 4,
    icon: "📅",
    title: "Your Current Rate May Be Outdated",
    desc: "Rates change constantly. If you haven't compared in 6+ months, you're almost certainly overpaying right now.",
    badge: "URGENT",
    stat: "6 mo",
    statLabel: "before rates change",
    color: "#f59e0b",
  },
  {
    id: 5,
    icon: "🛡️",
    title: "Same Coverage, Lower Price",
    desc: "Identical coverage. Different price tags. Don't keep paying more for the exact same protection.",
    badge: "SMART MOVE",
    stat: "100%",
    statLabel: "coverage matched",
    color: "#16a34a",
  },
  {
    id: 6,
    icon: "📍",
    title: "Rates Vary Wildly By ZIP Code",
    desc: "Your neighbor could be paying $200 less per year on the same vehicle. Local rates differ more than you think.",
    badge: "LOCAL DATA",
    stat: "ZIP",
    statLabel: "specific pricing",
    color: "#128CED",
  },
  {
    id: 7,
    icon: "🎁",
    title: "Hidden Discounts You're Missing",
    desc: "Bundling, good driver, loyalty, military, and student discounts — most people miss savings worth hundreds per year.",
    badge: "BONUS",
    stat: "8+",
    statLabel: "discount types",
    color: "#7c3aed",
  },
  {
    id: 8,
    icon: "🚗",
    title: "New Car or Life Change? New Rates Await",
    desc: "Got married, moved, or bought a new car? These all trigger new rates. Comparing now could unlock lower pricing.",
    badge: "LIFE UPDATE",
    stat: "3x",
    statLabel: "more savings chances",
    color: "#0ea5e9",
  },
  {
    id: 9,
    icon: "🔒",
    title: "Zero Obligation, Zero Pressure",
    desc: "You're not signing anything by comparing. Browse real quotes, decide on your own terms, no spam calls.",
    badge: "RISK FREE",
    stat: "0",
    statLabel: "obligations",
    color: "#16a34a",
  },
  {
    id: 10,
    icon: "📈",
    title: "Prices Shift Daily — Act Before Yours Do",
    desc: "Auto insurance rates fluctuate with market conditions. Today's best deal might not exist tomorrow.",
    badge: "TIME SENSITIVE",
    stat: "Daily",
    statLabel: "rate updates",
    color: "#ef4444",
  },
];

const getCurrentMonth = () =>
  new Date().toLocaleString("en-US", { month: "long" });

function ProgressBar({ value, max }) {
  return (
    <div style={{ background: "#e2e8f0", borderRadius: 99, height: 10, width: "100%", overflow: "hidden" }}>
      <div
        style={{
          height: "100%",
          width: `${(value / max) * 100}%`,
          background: "linear-gradient(90deg, #128CED, #38bdf8)",
          borderRadius: 99,
          transition: "width 0.5s cubic-bezier(0.4,0,0.2,1)",
        }}
      />
    </div>
  );
}

function ReasonCard({ reason, index, isUnlocked, onUnlock }) {
  const [flipped, setFlipped] = useState(false);

  const handleClick = () => {
    if (!isUnlocked) onUnlock(reason.id);
    setFlipped((f) => !f);
  };

  return (
    <div
      onClick={handleClick}
      style={{
        perspective: "1000px",
        height: 200,
        cursor: "pointer",
        animation: `fadeUp 0.5s ease both`,
        animationDelay: `${index * 0.06}s`,
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          transformStyle: "preserve-3d",
          transition: "transform 0.55s cubic-bezier(0.4,0,0.2,1)",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* FRONT */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backfaceVisibility: "hidden",
            borderRadius: 12,
            background: isUnlocked ? "#fff" : "#f8fafc",
            border: `2px solid ${isUnlocked ? reason.color + "33" : "#e2e8f0"}`,
            boxShadow: isUnlocked ? `0 4px 20px ${reason.color}18` : "0 1px 4px rgba(0,0,0,0.06)",
            padding: "18px 20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            overflow: "hidden",
          }}
        >
          {/* Locked overlay */}
          {!isUnlocked && (
            <div style={{
              position: "absolute", inset: 0, borderRadius: 10,
              background: "rgba(248,250,252,0.85)", display: "flex",
              flexDirection: "column", alignItems: "center", justifyContent: "center",
              gap: 8, backdropFilter: "blur(2px)", zIndex: 3,
            }}>
              <span style={{ fontSize: 28 }}>🔒</span>
              <span style={{ color: "#94a3b8", fontSize: 12, fontWeight: 700, letterSpacing: 1.5 }}>TAP TO REVEAL</span>
            </div>
          )}

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <span style={{ fontSize: 30 }}>{reason.icon}</span>
            <span style={{
              background: reason.color, color: "#fff", fontSize: 10,
              fontWeight: 800, letterSpacing: 1.5, padding: "3px 10px",
              borderRadius: 99,
            }}>{reason.badge}</span>
          </div>

          <div>
            <div style={{ color: "#1e293b", fontSize: 15, fontWeight: 800, marginBottom: 6, lineHeight: 1.3 }}>
              {reason.id}. {reason.title}
            </div>
            <div style={{ color: "#64748b", fontSize: 12.5, lineHeight: 1.6 }}>
              {reason.desc}
            </div>
          </div>
        </div>

        {/* BACK */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            borderRadius: 12,
            background: `linear-gradient(135deg, ${reason.color}12, ${reason.color}04)`,
            border: `2px solid ${reason.color}44`,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 6,
            padding: 20,
          }}
        >
          <div style={{ fontSize: 44, fontWeight: 900, color: reason.color, lineHeight: 1, fontFamily: "Georgia, serif" }}>
            {reason.stat}
          </div>
          <div style={{ color: "#64748b", fontSize: 13, textAlign: "center", fontWeight: 600 }}>
            {reason.statLabel}
          </div>
          <button
            style={{
              marginTop: 14, background: reason.color, border: "none", borderRadius: 4,
              padding: "10px 22px", color: "#fff", fontWeight: 800, fontSize: 13,
              cursor: "pointer", letterSpacing: 0.5,
            }}
          >
            Compare Rates →
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Prelander() {
  const { trackCtaClick } = useVisitorTracking();
  const [unlocked, setUnlocked] = useState(new Set([1]));
  const [score, setScore] = useState(50);
  const [streak, setStreak] = useState(1);
  const [scorePop, setScorePop] = useState(false);
  const [showCTA, setShowCTA] = useState(false);
  const [stateName, setStateName] = useState("");
  const [visitorCount] = useState(() => Math.floor(Math.random() * 300) + 600);
  const currentMonth = getCurrentMonth();

  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then((r) => r.json())
      .then((d) => setStateName(d.region || ""))
      .catch(() => {});
  }, []);

  const handleUnlock = (id) => {
    if (unlocked.has(id)) return;
    const newUnlocked = new Set([...unlocked, id]);
    setUnlocked(newUnlocked);
    setScore((s) => s + 50);
    setStreak((s) => s + 1);
    setScorePop(true);
    setTimeout(() => setScorePop(false), 500);
    if (newUnlocked.size >= 5) setShowCTA(true);
  };

  const handleCTA = () => {
    trackCtaClick();
    window.location.href = DESTINATION_URL;
  };

  return (
    <>
      <style>{`
        @keyframes fadeUp { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }
        @keyframes scoreBounce { 0%,100%{transform:scale(1);} 50%{transform:scale(1.25);} }
        @keyframes shimmer { 0%{background-position:-400px 0} 100%{background-position:400px 0} }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #f1f5f9; }
      `}</style>

      <div style={{ minHeight: "100vh", background: "#f1f5f9", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif", color: "#1e293b" }}>

        {/* URGENCY BAR */}
        <div style={{
          background: "#fbbf24", color: "#1e293b", textAlign: "center",
          fontSize: 14, fontWeight: 700, padding: "9px 16px", position: "sticky", top: 0, zIndex: 50,
        }}>
          ⚠️ Rates in {stateName || "your area"} were updated today — {visitorCount} drivers compared this week.{" "}
          <span
            onClick={handleCTA}
            style={{ textDecoration: "underline", cursor: "pointer" }}
          >
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

        {/* GAMIFICATION SCORE BAR */}
        <div style={{
          background: "#fff", borderBottom: "1px solid #e2e8f0",
          padding: "12px 24px", position: "sticky", top: 94, zIndex: 39,
        }}>
          <div style={{ maxWidth: 860, margin: "0 auto" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8, gap: 12 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, flex: 1 }}>
                <span style={{ color: "#64748b", fontSize: 12, fontWeight: 700, letterSpacing: 1, whiteSpace: "nowrap" }}>
                  {unlocked.size}/10 REASONS UNLOCKED
                </span>
                <div style={{ flex: 1 }}>
                  <ProgressBar value={unlocked.size} max={10} />
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
                {streak > 1 && (
                  <div style={{
                    background: "#fff7ed", border: "1px solid #fed7aa", borderRadius: 99,
                    padding: "3px 12px", fontSize: 12, fontWeight: 700, color: "#ea580c",
                    display: "flex", alignItems: "center", gap: 4,
                  }}>
                    🔥 {streak} streak
                  </div>
                )}
                <div
                  style={{
                    background: "#eff6ff", border: "1px solid #bfdbfe", borderRadius: 99,
                    padding: "3px 14px", fontSize: 13, fontWeight: 800, color: "#128CED",
                    animation: scorePop ? "scoreBounce 0.4s ease" : "none",
                  }}
                >
                  ⚡ {score} pts
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ maxWidth: 860, margin: "0 auto", padding: "0 20px 60px" }}>

          {/* HERO */}
          <section style={{ textAlign: "center", padding: "52px 0 36px", animation: "fadeUp 0.6s ease both" }}>
            <div style={{
              display: "inline-block", background: "#eff6ff", border: "1px solid #bfdbfe",
              borderRadius: 99, padding: "5px 18px", marginBottom: 20,
              color: "#128CED", fontSize: 12, fontWeight: 700, letterSpacing: 1.5,
            }}>
              🎯 UNLOCK ALL 10 REASONS + EARN POINTS
            </div>

            <h1 style={{ fontSize: "clamp(28px, 5vw, 52px)", fontWeight: 900, color: "#0f172a", lineHeight: 1.1, marginBottom: 16 }}>
              Still Paying Too Much for Car Insurance?
            </h1>
            <h2 style={{ fontSize: "clamp(18px, 3vw, 26px)", fontWeight: 700, color: "#475569", marginBottom: 16 }}>
              Here Are 10 Reasons You Should Compare Prices Today
            </h2>
            <p style={{ color: "#64748b", fontSize: 16, maxWidth: 560, margin: "0 auto 28px", lineHeight: 1.7 }}>
              Most drivers overspend by $400+ per year without knowing it. Tap each card to unlock the reason, flip it to see the real number, and earn points as you go.
            </p>

            {/* Mini stat row */}
            <div style={{ display: "flex", justifyContent: "center", gap: 28, flexWrap: "wrap", marginBottom: 8 }}>
              {[
                { val: "+50 pts", label: "per unlock" },
                { val: "🔥 Streak", label: "bonus for consecutive taps" },
                { val: "Flip card", label: "to reveal the stat" },
              ].map((s, i) => (
                <div key={i} style={{ textAlign: "center" }}>
                  <div style={{ color: "#128CED", fontWeight: 800, fontSize: 15 }}>{s.val}</div>
                  <div style={{ color: "#94a3b8", fontSize: 12 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* TESTIMONIAL PULL QUOTE */}
          <div style={{
            background: "#fff", borderLeft: "4px solid #38bdf8", borderRadius: "0 12px 12px 0",
            padding: "16px 24px", marginBottom: 32, boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
          }}>
            <p style={{ color: "#475569", fontSize: 15, lineHeight: 1.6, marginBottom: 8 }}>
              "My renewal jumped $47 a month. I took just about 2 minutes to compare on here and switched that same afternoon. I seriously saved over $500 for the year!"
            </p>
            <p style={{ fontWeight: 800, fontSize: 14, color: "#1e293b" }}>
              Melissa Tanner <span style={{ color: "#94a3b8", fontWeight: 400 }}>— Phoenix, AZ</span>
            </p>
          </div>

          {/* CARDS GRID */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
            gap: 16,
            marginBottom: 40,
          }}>
            {reasons.map((reason, i) => (
              <ReasonCard
                key={reason.id}
                reason={reason}
                index={i}
                isUnlocked={unlocked.has(reason.id)}
                onUnlock={handleUnlock}
              />
            ))}
          </div>

          {/* CTA PANEL — reveals at 5 unlocks */}
          {showCTA && (
            <div style={{
              background: "#fff", border: "2px solid #128CED", borderRadius: 16,
              padding: "40px 32px", textAlign: "center", marginBottom: 40,
              boxShadow: "0 8px 40px rgba(18,140,237,0.12)",
              animation: "fadeUp 0.6s ease both",
            }}>
              <div style={{ fontSize: 40, marginBottom: 12 }}>🎉</div>
              <h2 style={{ fontSize: "clamp(22px, 4vw, 34px)", fontWeight: 900, color: "#0f172a", marginBottom: 10 }}>
                You've Unlocked {unlocked.size} Reasons!
              </h2>
              <p style={{ color: "#64748b", fontSize: 16, maxWidth: 460, margin: "0 auto 28px", lineHeight: 1.7 }}>
                You've earned <strong style={{ color: "#128CED" }}>{score} points</strong>. Now put that knowledge to work — compare real quotes from 50+ carriers and start saving today.
              </p>
              <button
                onClick={handleCTA}
                style={{
                  background: "#128CED", color: "#fff", fontWeight: 900, fontSize: 18,
                  padding: "16px 40px", border: "none", borderRadius: 4, cursor: "pointer",
                  boxShadow: "0 4px 20px rgba(18,140,237,0.3)", transition: "background 0.2s",
                  display: "block", width: "100%", maxWidth: 420, margin: "0 auto 14px",
                }}
                onMouseEnter={e => e.currentTarget.style.background = "#0ea5e9"}
onMouseLeave={e => e.currentTarget.style.background = "#128CED"}
              >
                Check My Rate — Free, No Obligation →
              </button>
              <p style={{ color: "#94a3b8", fontSize: 13 }}>
                Free • Takes 90 seconds • No spam calls
              </p>
            </div>
          )}

          {/* All-10-unlocked achievement */}
          {unlocked.size === 10 && (
            <div style={{
              textAlign: "center", marginBottom: 40,
              animation: "fadeUp 0.5s ease both",
            }}>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 10,
                background: "#fefce8", border: "1px solid #fde68a", borderRadius: 99,
                padding: "10px 24px",
              }}>
                <span style={{ fontSize: 20 }}>🏆</span>
                <span style={{ fontWeight: 800, color: "#b45309", fontSize: 14, letterSpacing: 0.5 }}>
                  ALL 10 UNLOCKED — {score} PTS EARNED!
                </span>
              </div>
            </div>
          )}

          {/* HOW IT WORKS */}
          <section style={{ background: "#fff", borderRadius: 16, padding: "36px 32px", marginBottom: 32, boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}>
            <h3 style={{ fontSize: 22, fontWeight: 900, marginBottom: 16 }}>
              How Comparing Works
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {[
                { n: "1", text: "Click below and enter your ZIP code" },
                { n: "2", text: "Answer a few quick questions about your vehicle and driving history" },
                { n: "3", text: "Instantly view available offers from multiple insurers side by side" },
              ].map((step) => (
                <div key={step.n} style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                  <div style={{
                    background: "#128CED", color: "#fff", width: 30, height: 30, borderRadius: "50%",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontWeight: 900, fontSize: 14, flexShrink: 0,
                  }}>{step.n}</div>
                  <p style={{ color: "#475569", fontSize: 16, lineHeight: 1.6, paddingTop: 4 }}>{step.text}</p>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 24, color: "#64748b", fontSize: 15, lineHeight: 1.7 }}>
              <p>No long phone calls. No pressure to switch. No obligation to purchase anything.</p>
            </div>
          </section>

          {/* TESTIMONIALS */}
          <section style={{ marginBottom: 40 }}>
            <h3 style={{ fontSize: 22, fontWeight: 900, textAlign: "center", marginBottom: 20 }}>
              What Drivers Are Saying
            </h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 16 }}>
              {[
                { text: "I was expecting a complicated form. It took under 3 minutes and I switched the same day.", name: "Daniel Ross", loc: "Austin, TX" },
                { text: "My renewal jumped $47 a month. I saved over $500 for the year after comparing here!", name: "Melissa Tanner", loc: "Phoenix, AZ" },
                { text: "Super simple. No spam calls, no pressure. Just clear options and better pricing.", name: "James Lenning", loc: "Orlando, FL" },
              ].map((t, i) => (
                <div key={i} style={{ background: "#fff", borderRadius: 12, padding: "20px 22px", boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
                  <div style={{ color: "#fbbf24", fontSize: 16, marginBottom: 10 }}>★★★★★</div>
                  <p style={{ color: "#475569", fontSize: 14, lineHeight: 1.7, marginBottom: 14 }}>"{t.text}"</p>
                  <p style={{ fontWeight: 800, fontSize: 14, color: "#1e293b" }}>
                    {t.name} <span style={{ color: "#94a3b8", fontWeight: 400 }}>— {t.loc}</span>
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* FINAL CTA */}
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <button
              onClick={handleCTA}
              style={{
                background: "#128CED", color: "#fff", fontWeight: 900, fontSize: 20,
                padding: "18px 48px", border: "none", borderRadius: 4, cursor: "pointer",
                boxShadow: "0 4px 24px rgba(18,140,237,0.3)", transition: "background 0.2s",
              }}
              onMouseEnter={e => e.currentTarget.style.background = "#0ea5e9"}
onMouseLeave={e => e.currentTarget.style.background = "#128CED"}
            >
              Check My Rate — Free, No Obligation →
            </button>
            <p style={{ color: "#94a3b8", fontSize: 14, marginTop: 10 }}>
              Takes 90 seconds • No phone calls • No spam
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
                {["Privacy Policy", "Terms of Service", "Contact"].map((l) => (
                  <a key={l} href="#" style={{ color: "#9ca3af", textDecoration: "none" }}>{l}</a>
                ))}
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}