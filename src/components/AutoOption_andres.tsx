"use client";

import logoo from "../assets/logoauto.png";
import hero1 from "../assets/car-lady1.png";
import hero2 from "../assets/car_shocked.png";
import hero3 from "../assets/happy_family.png";
import heron1 from "../assets/creativen1.png";
import heron2 from "../assets/creativen2.png";
import heron3 from "../assets/creativen3.png";
import heron4 from "../assets/creativen4.png";
import heron5 from "../assets/creativen5.png";

import USMap from "./USMap";

// ─── CONFIG ──────────────────────────────────────────────────────────────────
const DESTINATION_URL = "https://auto-savings.com/home.html";

// ─── MAIN ────────────────────────────────────────────────────────────────────
const Prelander = () => {

  const handleClick = () => {
    window.location.href = DESTINATION_URL;
  };

  const CtaButton = () => (
    <button
      onClick={handleClick}
      className="andres-cta block w-full text-center text-white font-black text-lg py-4 px-6 rounded-md shadow-md transition"
    >
      Compare Rates Now
    </button>
  );

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Lato', 'Open Sans', Arial, sans-serif" }}>
     {/* NAVBAR */}
      <div className="sticky top-0 z-40 bg-white shadow-md">
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
     
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&family=Montserrat:wght@400;600;700;800;900&family=Open+Sans:wght@400;600;700;800&display=swap');

        .andres-wrapper {
          max-width: 800px;
          margin: 0 auto;
        }

        .andres-cta {
          background: #128CED;
          transition: background 0.3s ease, box-shadow 0.3s ease;
        }
        .andres-cta:hover {
          background: #0e7acc;
          box-shadow: 0 6px 20px rgba(18,140,237,0.35);
        }

        .andres-h2 {
          font-family: 'Montserrat', sans-serif;
          font-weight: 800;
          font-size: clamp(18px, 3vw, 23px);
          color: #1a1a2e;
          line-height: 1.35;
          margin-bottom: 16px;
          margin-top: 32px;
        }

        .andres-p {
          font-size: 16px;
          line-height: 1.85;
          color: #333;
          margin-bottom: 18px;
        }

        .andres-highlight {
          color: #128CED;
        }

        .andres-stat-row {
          display: flex;
          gap: 10px;
          margin-bottom: 14px;
          font-size: 16px;
          color: #222;
          line-height: 1.65;
        }

        .andres-bounce {
          animation: andres-bounce 2s ease infinite;
          display: block;
          margin: 28px auto;
          width: 36px;
        }

        @keyframes andres-bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-18px); }
          60% { transform: translateY(-9px); }
        }
      `}</style>
      

      <div className="andres-wrapper">

       

        {/* ══════════════════════════════════════════
            ARTICLE
        ══════════════════════════════════════════ */}
        <main className="px-6 py-8">

          {/* Byline */}
          <p className="text-xs text-gray-500 mb-4 font-semibold uppercase tracking-wide">
            Advertorial &nbsp;|&nbsp; By Michael Torres &nbsp;|&nbsp; 4-min read
          </p>

          {/* H1 */}
          <h1
            className="font-black leading-tight mb-5"
            style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(22px, 4.5vw, 34px)", color: "#1a1a2e" }}
          >
            EXPOSED: Your Auto Insurer May Be{" "}
            <span className="andres-highlight">Quietly Raising Your Rate</span>{" "}
            While New Customers Pay Less
          </h1>

          {/* Subheading */}
          <h2
            className="text-base font-semibold text-gray-600 mb-6 leading-relaxed border-l-4 border-[#128CED] pl-4"
            style={{ fontFamily: "'Open Sans', sans-serif" }}
          >
            Loyal, responsible drivers are routinely charged more than brand-new policyholders —
            and most have no idea it's happening to them right now.
          </h2>

          {/* Hero Image 1 */}
          <img
            src={heron1}
            alt="Driver reviewing insurance"
            className="w-full rounded-xl mb-6 object-cover"
            style={{ maxHeight: 340 }}
          />

          <p className="andres-p">
            Earlier this year, we set out to answer a simple question:{" "}
            <strong>why do responsible, long-term drivers keep paying more every year without ever pushing back?</strong>
          </p>
          <p className="andres-p">
            We spoke with drivers across the country — homeowners, parents, commuters, retirees — nearly all of them with clean records
            and years of uninterrupted coverage. None of them had filed a recent claim. None had moved or added a vehicle.{" "}
            <strong>And yet almost every single one had quietly absorbed a rate increase at their last renewal.</strong>
          </p>
          <p className="andres-p">
            When we asked if they felt they were paying a fair price, most said yes.{" "}
            <strong>
              When we asked if they had actually checked what other insurers would charge them, almost none had done so in the past year
            </strong>{" "}
            — and many couldn't remember the last time they had.
          </p>

          {/* H2 */}
          <h2 className="andres-h2">
            The Hidden Cost of <span className="andres-highlight">"Set It and Forget It"</span> Coverage
          </h2>

          {/* Hero Image 2 */}
          <img
            src={heron2}
            alt="Shocked driver"
            className="w-full rounded-xl mb-6 object-cover"
            style={{ maxHeight: 300 }}
          />

          <p className="andres-p">
            For most people, auto insurance runs quietly in the background.{" "}
            <strong>The premium gets paid automatically, the renewal letter arrives, and life moves on.</strong>{" "}
            A small increase gets chalked up to "just how it is." Nobody calls. Nobody compares. And the cycle repeats.
          </p>
          <p className="andres-p">Here's what drivers told us when we dug into why:</p>

          <div className="bg-gray-50 rounded-xl p-5 mb-6 space-y-1">
            <div className="andres-stat-row"><span>✅</span><span><strong>Nearly 72%</strong> of drivers said they have never once compared quotes at renewal time.</span></div>
            <div className="andres-stat-row"><span>✅</span><span><strong>More than 67%</strong> believed staying loyal to their insurer was rewarded with better pricing.</span></div>
            <div className="andres-stat-row"><span>✅</span><span><strong>59%</strong> assumed a clean driving record automatically keeps their rate from rising.</span></div>
            <div className="andres-stat-row"><span>✅</span><span><strong>Nearly 3 in 5</strong> said they believed their insurer would flag them if a better rate became available.</span></div>
          </div>

          <p className="andres-p">
            <strong>Every single one of those assumptions turned out to be wrong for the majority of people who held them.</strong>
          </p>
          <p className="andres-p">
            Insurance companies reprice their books constantly — adjusting for regional loss trends, inflation in repair costs,
            weather events, and shifts in their own business targets. Your personal record may be spotless,{" "}
            but the model that prices your ZIP code changes every quarter.
          </p>
          <p className="andres-p">
            <strong>Your loyalty doesn't slow that process down. In many cases, it funds it.</strong>
          </p>

          {/* H2 */}
          <h2 className="andres-h2">
            The Drivers Most <span className="andres-highlight">Blindsided</span>{" "}
            <span style={{ textDecoration: "underline" }}>Were the Responsible Ones</span>
          </h2>

          {/* Hero Image 3 */}
          <img
            src={heron3}
            alt="Happy family"
            className="w-full rounded-xl mb-6 object-cover"
            style={{ maxHeight: 300 }}
          />

          <p className="andres-p">
            What surprised us most wasn't that people were overpaying.{" "}
            <strong>
              It was who was overpaying — and just how confidently they believed everything was fine.
            </strong>
          </p>
          <p className="andres-p">
            The drivers we spoke with weren't reckless or careless. They were homeowners with multi-car policies, people with excellent credit,
            commuters who'd gone years without an incident.{" "}
            <strong>These were exactly the customers insurers claim to value most.</strong> And they were absorbing
            some of the steepest increases we documented.
          </p>
          <p className="andres-p">
            <strong>When we asked why they hadn't looked at alternatives, the reasons were nearly identical across the board:</strong>
          </p>

          <div className="bg-gray-50 rounded-xl p-5 mb-6 space-y-1">
            <div className="andres-stat-row"><span>✅</span><span><strong>Nearly 66%</strong> believed all insurers raise rates at roughly the same pace, so switching wouldn't help.</span></div>
            <div className="andres-stat-row"><span>✅</span><span><strong>More than 60%</strong> thought shopping around would mean hours of calls and paperwork.</span></div>
            <div className="andres-stat-row"><span>✅</span><span><strong>Almost half</strong> were convinced their current insurer would match any better offer if they asked.</span></div>
          </div>

          <p className="andres-p"><strong>None of those things are true. But when no one tests them, they feel true — and that's what keeps rates high.</strong></p>

          {/* H2 */}
          <h2 className="andres-h2">
            The <span className="andres-highlight">Five-Minute Check</span> That{" "}
            <span className="andres-highlight">Changed Everything</span>
          </h2>

          <p className="andres-p">
            To put this to the test, we had a group of drivers run their current policy details through an online quote comparison.{" "}
            <strong>
              They used OTTO Insurance — a platform that pulls real, bindable quotes from multiple carriers at once —
              entering their existing coverage levels, vehicle info, and ZIP code.
            </strong>{" "}
            Start to finish, it took under five minutes.
          </p>
          <p className="andres-p">
            What happened next caught even us off guard:{" "}
            <strong>
              over 65% of drivers saw at least one competing quote that came in lower than what they were currently paying —
              often from a carrier they already recognized and trusted.
            </strong>
          </p>
          <p className="andres-p">
            For some, the difference was modest — a few dollars a month. For others, it was hundreds of dollars per year.
            In both cases, the gap existed despite clean records and no changes in their situation.
          </p>
          <p className="andres-p">
            But the most common reaction wasn't shock at the number.{" "}
            <strong>It was the realization that they had been paying blind — trusting a renewal notice instead of actually checking.</strong>
          </p>
          <p className="andres-p">
            Once drivers saw exactly how their profile was priced across competing carriers, something clicked.
            The process felt less like "shopping" and more like simply seeing what was already out there for them.
          </p>
          <div className="my-6">
            <CtaButton />
          </div>

          {/* H2 */}
          <h2 className="andres-h2">
            Why Two Drivers With <span className="andres-highlight">Identical Records</span> Pay Very Different Rates
          </h2>

          

          <p className="andres-p">
            Every insurer builds its own pricing model — a proprietary formula that weighs your driving history, your ZIP code's claims trends,
            your vehicle's repair costs, your credit profile, and dozens of other variables.{" "}
            <strong>The same driver, with the same car and the same record, can look completely different to two separate carriers.</strong>
          </p>
          <p className="andres-p">
            One company might weight homeownership heavily. Another might penalize certain ZIP codes more aggressively after a string of local accidents.
            A third might reward years of uninterrupted coverage — or might not factor it in at all.
          </p>
          <p className="andres-p">
            <strong>All you see at renewal is a single dollar amount. What you don't see is how many other numbers were available to you.</strong>
          </p>

          {/* H2 */}
          <h2 className="andres-h2">
            <span className="andres-highlight">One Short Form.</span> Real Quotes. Zero Obligation.
          </h2>

          <p className="andres-p">
            The old way of comparing insurance meant calling multiple agents, sitting through sales pitches, and waiting days for quotes.{" "}
            <strong>Most people didn't bother — and insurers counted on that.</strong>
          </p>
          <p className="andres-p">
            OTTO Insurance changed that equation. Instead of going carrier by carrier,{" "}
            <strong>
              drivers enter their information once and instantly see real, personalized quotes from multiple competing providers —
              displayed side by side, with no calls required.
            </strong>
          </p>
          <p className="andres-p">
            You just need your ZIP code, basic vehicle details, and your current coverage level.{" "}
            <strong>The quotes are free, the process takes minutes, and there is absolutely no obligation to switch.</strong>{" "}
            Drivers in our group described it as "surprisingly painless" and "way faster than I expected."
          </p>
          <p className="andres-p">
            <strong>The thing standing between most drivers and a better rate isn't paperwork. It's the assumption that it isn't worth checking.</strong>
          </p>

          {/* H2 */}
          <h2 className="andres-h2">
            Read <span className="andres-highlight">This Before</span> Your Next Renewal Notice Arrives
          </h2>

          <p className="andres-p">
            At the end of our study, we asked drivers one final question after they'd completed the comparison exercise.{" "}
            <strong>
              Regardless of whether they found a better rate, did they think it was worth spending five minutes to check —
              even if they ultimately stayed with their current carrier?
            </strong>
          </p>

          {/* Big stat callout */}
          <div className="text-center bg-[#eef6ff] border border-[#128CED] rounded-xl py-8 px-4 mb-6">
            <p
              className="text-6xl font-black text-[#128CED]"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              91%
            </p>
            <p className="text-gray-700 mt-3 font-semibold text-base">
              said yes — knowing your options is worth it, even if you don't switch.
            </p>
          </div>

          <p className="andres-p">That number says something important: once people actually see the landscape, they want to be part of it.</p>
          <p className="andres-p">
            Whether you're carrying a policy that's $40 overpriced or $200, the difference compounds every month.
            And beyond the dollars, there's a real peace of mind that comes from knowing you're not being taken
            advantage of simply because you never looked.
          </p>
          <p className="andres-p">
            <strong>Your renewal is automatic. Whether you're getting a fair deal is not.</strong>
          </p>

          {/* CTA */}
          <div className="my-6">
            <CtaButton />
          </div>

          {/* H2 */}
          <h2 className="andres-h2">
            So <span className="andres-highlight">What Should You Actually Do</span> Right Now?
          </h2>

          <p className="andres-p">
            <strong>
              If you have auto insurance and haven't compared rates in the last twelve months, there's a very real chance
              you're paying more than you need to — based on nothing more than inertia.
            </strong>
          </p>
          <p className="andres-p">
            You might check and confirm your rate is genuinely competitive. Or you might find a lower offer from a carrier
            you already know and trust. Either way, you'll know — and that's worth more than the five minutes it takes.
          </p>
          <p className="andres-p">
            <strong>
              OTTO Insurance lets you compare real quotes from multiple carriers in one place, for free, with no sales calls
              and no obligation to do anything.
            </strong>{" "}
            You don't need to cancel your current policy. You don't need to commit to anything. You just need to look.
          </p>
          <p className="andres-p">
            <strong>Five minutes from now, you could already know if you're overpaying.</strong>
          </p>

          
          

          {/* Bounce Arrow */}
          {/* <svg
            className="andres-bounce text-[#128CED]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg> */}

          {/* Who Benefits Heading */}
          <h2
            className="text-center font-black text-[#128CED] mb-6"
            style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(20px, 3.5vw, 26px)" }}
          >
            Find the rates in your state
          </h2>

          {/* Benefit Box */}
          {/* <div className="bg-[#eef6ff] border-2 border-[#128CED] rounded-xl p-7 mb-8">
            <p className="andres-p">
              Based on our findings, the drivers most likely to uncover a better rate are:
            </p>
            <div className="space-y-1 mb-6">
              <div className="andres-stat-row"><span>✅</span><span><strong>Drivers who are currently insured and haven't switched carriers in the last 2+ years.</strong></span></div>
              <div className="andres-stat-row"><span>✅</span><span><strong>Drivers with a clean record and no recent at-fault claims.</strong></span></div>
              <div className="andres-stat-row"><span>✅</span><span><strong>Drivers with good or excellent credit.</strong></span></div>
              <div className="andres-stat-row"><span>✅</span><span><strong>Drivers insuring two or more vehicles under one policy.</strong></span></div>
            </div>
            <p className="andres-p mb-6">
              <strong>If any of these describe you, the data strongly suggests your current rate may not reflect what's actually available to you.</strong>
            </p>
            <CtaButton />
          </div> */}

          <USMap />

          <div className="my-6">
            <CtaButton />
          </div>

          {/* Trust line */}
          <p className="text-center text-xs text-gray-400 mt-4 mb-2">
            <strong>All rights reserved. Copyright &copy; {new Date().getFullYear()} OTTO Quotes, LLC</strong>
          </p>

        </main>

        

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
  );
};

export default Prelander;
