import { useEffect } from "react";
import { useVisitorTracking } from "@/hooks/useVisitorTracking";
import logoo from "../assets/logoauto.png";

// ─── CONFIG ──────────────────────────────────────────────────────────────────
const getDestinationURL = () => {
  const params = new URLSearchParams(window.location.search);
  const transactionid = params.get("transactionid") || "";
  const affiliateid = params.get("affiliateid") || "";
  const url = new URL("https://l.auto-savings.com/auto");
  url.searchParams.set("affid", "13152");
  if (transactionid) url.searchParams.set("s1", transactionid);
  if (affiliateid) url.searchParams.set("s2", affiliateid);
  const tblciFromParam = params.get("taboola_clickid");
  if (tblciFromParam) localStorage.setItem("tblci", tblciFromParam);
  const tblci = tblciFromParam || localStorage.getItem("tblci") || "";
  if (tblci) url.searchParams.set("tblci", tblci);
  return url.toString();
};

// ─── MAIN ────────────────────────────────────────────────────────────────────
const AC_prelander = () => {
  const { trackCtaClick } = useVisitorTracking();

  const handleClick = () => {
    trackCtaClick();
    // @ts-ignore
    if (typeof _tfa !== "undefined") _tfa.push({ notify: 'event', name: 'other', id: 2007154 });
    window.location.href = getDestinationURL();
  };

  // Load webflow.js after mount, same as original HTML
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/js/webflow.js";
    script.type = "text/javascript";
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      {/* Same CSS links as original HTML */}
      <link rel="stylesheet" href="/css/normalize.css" />
      <link rel="stylesheet" href="/css/webflow.css" />
      <link rel="stylesheet" href="/css/nh-cont-donny-gamble.webflow.css" />

      {/* Google Fonts,same as original */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

      <body className="body-3 new-bk-col">
        {/* Full-width Sticky Header */}
        <div style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 9999, backgroundColor: "#fff", boxShadow: "0 2px 8px rgba(0,0,0,0.12)", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 24px" }}>
          <img loading="lazy" src={logoo} alt="CheckAutoPlans" style={{ height: 40 }} />
          <button onClick={handleClick} style={{ backgroundColor: "#00b67a", border: "none", borderRadius: 8, padding: "14px 28px", fontWeight: 900, cursor: "pointer", fontSize: 17, color: "#fff", boxShadow: "0 4px 15px rgba(0,182,122,0.5)", letterSpacing: "0.3px" }}>
            👉 Compare Rates Now, It's Free!
          </button>
        </div>

        {/* Inline styles from original HTML */}
        <div className="w-embed">
          <style>{`
            @media screen and (max-width:5000px){ .par-v4-body-wrapper { width: 20%; } }
            @media screen and (max-width:3500px){ .par-v4-body-wrapper { width: 25%; } }
            @media screen and (max-width:3000px){ .par-v4-body-wrapper { width: 30%; } }
            @media screen and (max-width:2600px){ .par-v4-body-wrapper { width: 35%; } }
            @media screen and (max-width:2000px){ .par-v4-body-wrapper { width: 45%; } }
            @media screen and (max-width:1900px){ .par-v4-body-wrapper { width: 50%; } }
            @media screen and (max-width:1850px){ .par-v4-body-wrapper { width: 55%; } }
            @media screen and (max-width:1650px){ .par-v4-body-wrapper { width: 60%; } }
            @media screen and (max-width:1500px){ .par-v4-body-wrapper { width: 70%; } }
            @media screen and (max-width:991px){ .par-v4-body-wrapper { width: 100%; } }

            .arrow-down-img {
              animation: bounce 2s ease infinite;
            }
            @keyframes bounce {
              0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
              40% { transform: translateY(-30px); }
              60% { transform: translateY(-15px); }
            }
            .par-v4-cta-box-item {
              transition: .7s all ease;
            }
            .par-v4-cta-box-item:hover {
              background: #FFC700;
              border-color: #FFC700;
              box-shadow: none;
            }
            .tgl-cta-btn-3.new-space.new-cta-col {
              font-size: 26px !important;
              padding-top: 1.2em !important;
              padding-bottom: 1.2em !important;
              border-radius: 10px !important;
              box-shadow: 0 6px 20px rgba(0,182,122,0.45);
              letter-spacing: 0.5px;
            }
          `}</style>
        </div>

        <div className="par-v4-body-wrapper pad-mar-adj" style={{ paddingTop: 64 }}>

          {/* Main content */}
          <section className="par-v4-content-2 new-width-1">
            <div className="par-v4-content-wrapper">
              <div className="par-v4-content-wrapper-extra-paddings-2 new-pad-mar">
                <p className="par-v4-article-info-2">Advertorial | By Jennifer Jones | 5-mins read</p>
                <h1 className="par-v4-heading new-style">
                  <strong>DISCOVERY: Millions of Insured </strong>
                  <span className="text-span-6"><strong>Drivers Could Be Saving Hundreds</strong></span>
                  <strong> on Auto Insurance,Here's How</strong>
                </h1>
                <h2 className="par-v4-subheading">
                  <strong className="bold-text-17">
                    A survey of insured drivers found that most consumers haven't compared their options in years,
                    and those who did often found meaningful savings waiting for them.
                  </strong>
                </h2>
              </div>

              <div className="par-v4-content-wrapper-extra-paddings-2 new-space-1 no-pad-1">
                <img
                  sizes="100vw"
                  srcSet="/images/H-1-p-500.avif 500w, /images/H-1.avif 1000w"
                  alt=""
                  src="/images/H-1.avif"
                  loading="lazy"
                  className="par-v4-hero-img"
                />

                <p className="par-v4-p-2">
                  When our newsroom commissioned a small consumer research study earlier this year, the goal was straightforward:{" "}
                  <strong>understand how drivers make decisions about auto insurance at renewal.</strong>
                </p>
                <p className="par-v4-p-2">
                  Over the course of several weeks, we reviewed the renewal experiences of consumers across the country: many of
                  them married homeowners, most insuring two or more vehicles, and nearly all with good or excellent credit. What
                  emerged wasn't a story about pricing errors or wrongdoing.{" "}
                  <strong>What we found was a genuine savings opportunity that most drivers simply hadn't taken the time to explore.</strong>
                </p>
                <p className="par-v4-p-2">
                  The majority of drivers were satisfied with their current coverage.{" "}
                  <strong>
                    But when we looked closer, we found that most hadn't compared rates elsewhere in years
                  </strong>{" "}
                 ,leaving potential savings on the table without ever realizing it.
                </p>

                <img
                  sizes="(max-width: 991px) 100vw, (max-width: 1428px) 70vw, (max-width: 1439px) 1000px, (max-width: 1919px) 69vw, 45vw"
                  srcSet="/images/H-2-p-500.avif 500w, /images/H-2.avif 1000w"
                  alt=""
                  src="/images/H-2.avif"
                  loading="lazy"
                  className="par-v4-hero-img"
                />

                <h2 className="par-v4-h top-mar">
                  <strong className="bold-text-18">Why </strong>
                  <span className="text-span-7"><strong className="bold-text-18">Good Drivers</strong></span>
                  <strong className="bold-text-18"> Often Have the Most to Gain</strong>
                </h2>

                <p className="par-v4-p-2">
                  Auto insurance, for many families, operates in the background.{" "}
                  <strong>Once a policy is in place, payments are automated and coverage rolls over year after year.</strong>{" "}
                  For responsible drivers, this consistency can actually work in their favor,if they take a few minutes to compare.
                </p>
                <p className="par-v4-p-2">According to our survey:</p>
                <p className="par-v4-p-2">
                  ✅ <strong>Nearly 68%</strong> of respondents said they "rarely" or "never" compare quotes at renewal.<br />‍<br />
                  ✅ <strong>More than 70%</strong> believed long-term loyalty helps secure their best rate.<br />‍‍<br />
                  ✅ <strong>61%</strong> assumed having good or excellent credit automatically ensures competitive pricing.<br /><br />
                  ✅ <strong>Over half</strong> believed insurers proactively adjust pricing downward to retain dependable customers.
                </p>
                <p className="par-v4-p-2">
                  <strong>
                    When asked whether they had verified those assumptions by comparing providers in the past 12 months,
                    fewer than 1 in 4 consumers had done so
                  </strong>{" "}
                 ,suggesting most drivers have a straightforward opportunity to confirm, or improve, their current rate.
                </p>

                <button onClick={handleClick} className="tgl-cta-btn-3 new-space new-cta-col w-button">
                  <strong className="bold-text-16 mobile-text">👉 Compare Rates Now</strong>
                </button>

                <p className="par-v4-p-2">
                  What many drivers haven't yet discovered is that insurance rates are recalculated continuously based on broader
                  factors: regional claims data, repair costs, accident trends, and proprietary underwriting models. Even if
                  nothing about your personal driving record changes, the way your profile is evaluated across different providers can vary widely.
                </p>
                <p className="par-v4-p-2">
                  <strong>
                    The result is that two companies may price the exact same driver very differently,and the only way to know is to compare.
                  </strong>
                </p>

                <h2 className="par-v4-h top-mar">
                  <strong className="bold-text-19">Most Drivers </strong>
                  <span className="text-span-8"><strong className="bold-text-19">Haven't Explored</strong></span>
                  <strong className="bold-text-19"> </strong>
                  <span className="text-span-9"><strong className="bold-text-19">Their Options Yet</strong></span>
                </h2>

                <img
                  sizes="100vw"
                  srcSet="/images/H-3-p-500.avif 500w, /images/H-3.avif 1000w"
                  alt=""
                  src="/images/H-3.avif"
                  loading="lazy"
                  className="par-v4-hero-img"
                />

                <p className="par-v4-p-2">
                  What stood out most from the findings was not a flaw in any individual's decision-making.{" "}
                  <strong>
                    It was how widespread the untapped opportunity was across income levels, education backgrounds, and household types.
                  </strong>
                </p>
                <p className="par-v4-p-2">
                  The survey included married and single drivers, homeowners and renters, single-vehicle and multi-car households.{" "}
                  <strong>The common thread was stability,these were, by and large, responsible, low-risk drivers.</strong> Most had
                  maintained continuous coverage for years. Many described themselves as financially cautious.
                </p>
                <p className="par-v4-p-2">
                  <strong>And yet, very few had recently compared their options.</strong> When asked why they hadn't reviewed
                  alternatives recently, respondents gave remarkably similar answers:
                </p>
                <p className="par-v4-p-2">
                  ✅ <strong>Nearly 64%</strong> said they believed rate differences between providers were unlikely to be
                  meaningful.<br />‍<br />
                  ✅ <strong>More than 58%</strong> assumed switching providers would be complicated or time-consuming.<br />‍<br />
                  ✅ <strong>Almost half</strong> believed their current insurer would automatically offer the most competitive
                  pricing available to retain them.<br />
                </p>
                <p className="par-v4-p-2">
                  <strong>In other words, the opportunity to find a better rate is real,and most drivers simply haven't acted on it yet.</strong>
                </p>

                <h2 className="par-v4-h top-mar">
                  <strong className="bold-text-20">The </strong>
                  <span className="text-span-10"><strong className="bold-text-20">Comparison</strong></span>
                  <strong className="bold-text-20"> Exercise That </strong>
                  <span className="text-span-11"><strong className="bold-text-20">Changed Perspectives</strong></span>
                </h2>

                <img
                  sizes="100vw"
                  srcSet="/images/H-4-p-500.avif 500w, /images/H-4.avif 1000w"
                  alt=""
                  src="/images/H-4.avif"
                  loading="lazy"
                  className="par-v4-hero-img"
                />

                <p className="par-v4-p-2">
                  To put those assumptions to the test, a portion of respondents agreed to complete a simple online comparison exercise.{" "}
                  <strong>
                    Using their existing coverage limits and driver details, they entered their information into Auto Savings,
                    a multi-provider quote comparison platform to see how their profile was priced elsewhere.
                  </strong>{" "}
                  The process took less than five minutes.
                </p>
                <p className="par-v4-p-2">
                  The results were eye-opening:{" "}
                  <strong>
                    more than 62% of surveyed drivers were presented with at least one lower-priced rate option than their
                    current premium when they completed the comparison exercise.
                  </strong>
                </p>
                <p className="par-v4-p-2">
                  In many cases, the difference was meaningful. Several respondents found that the lowest available
                  alternative came in well below their renewal rate, despite no recent claims or changes in their driving
                  history.
                </p>
                <p className="par-v4-p-2">
                  The savings potential was not the only positive takeaway.{" "}
                  <strong>
                    Just as valuable was the confidence that came from seeing their options side by side for the first time.
                  </strong>
                </p>
                <p className="par-v4-p-2">
                  That visibility,more than any single dollar figure,was what shifted perspective. Once drivers saw how
                  differently providers evaluated the same profile, many said they felt more informed and more in control
                  heading into their next renewal.
                </p>

                <button onClick={handleClick} className="tgl-cta-btn-3 new-space new-cta-col w-button">
                  <strong className="bold-text-16 mobile-text">👉 Compare Rates Now</strong>
                </button>

                <h2 className="par-v4-h top-mar">
                  <strong className="bold-text-20">Why </strong>
                  <span className="text-span-12"><strong className="bold-text-20">Pricing Variability</strong></span>
                  <strong className="bold-text-20"> Works in Your Favor</strong>
                </h2>

                <p className="par-v4-p-2">
                  Insurance pricing is built on risk modeling. Each provider uses its own actuarial formulas to weigh factors
                  such as driving history, geographic risk, vehicle type, mileage, claims data, and credit
                  scores.<strong> This means the same driver profile can yield meaningfully different prices across providers.</strong>
                </p>
                <p className="par-v4-p-2">
                  One company may reward long-term loyalty. Another may offer preferred rates in certain regions.
                  Another may place greater value on a clean recent driving record.
                </p>
                <p className="par-v4-p-2">
                  <strong>
                    For responsible drivers who take the time to compare, this variability isn't a problem,it's an advantage.
                  </strong>
                </p>

                <h2 className="par-v4-h top-mar">
                  <span className="text-span-13"><strong className="bold-text-20">Pricing Comparison</strong></span>
                  <strong className="bold-text-20"> Made Easy</strong>
                </h2>

                <img
                  sizes="100vw"
                  srcSet="/images/H-5-p-500.avif 500w, /images/H-5.avif 1000w"
                  alt=""
                  src="/images/H-5.avif"
                  loading="lazy"
                  className="par-v4-hero-img"
                />

                <p className="par-v4-p-2">
                  In the past, comparing multiple insurers meant contacting each company individually,a process most
                  drivers understandably put off.<strong> Today, that process has been simplified significantly.</strong>
                </p>
                <p className="par-v4-p-2">
                  Modern comparison platforms allow drivers to complete one short form and receive rate options from multiple
                  providers in one place.{" "}
                  <strong>
                    The platform used in our survey is Auto Savings, a comprehensive insurance comparison tool that connects
                    drivers with multiple carriers quickly and easily.
                  </strong>
                </p>
                <p className="par-v4-p-2">
                  After entering basic information such as ZIP code, vehicle details, and coverage preferences, users can view
                  personalized rate options{" "}
                  <strong>– completely free to use.</strong>{" "}
                  Participants in the survey who completed the exercise found the process straightforward and less time-consuming
                  than they had anticipated.
                </p>
                <p className="par-v4-p-2">
                  <strong>Once drivers experience how simple it is, most wish they had done it sooner.</strong>
                </p>

                <h2 className="par-v4-h top-mar">
                  <strong className="bold-text-20">Smart Drivers </strong>
                  <span className="text-span-14"><strong className="bold-text-20">Do This Before Renewing</strong></span>
                  <strong className="bold-text-20"> Their Auto Insurance</strong>
                </h2>

                <img
                  sizes="100vw"
                  srcSet="/images/H-8-p-500.avif 500w, /images/H-8.avif 1000w"
                  alt=""
                  src="/images/H-8.avif"
                  loading="lazy"
                  className="par-v4-hero-img"
                />

                <p className="par-v4-p-2">
                  Perhaps the most encouraging statistic in the survey came at the end.{" "}
                  <strong>
                    After completing the comparison exercise, respondents were asked whether they believed it was worthwhile to
                    review rate options periodically
                  </strong>{" "}
                 ,even if they ultimately stayed with their current provider.
                </p>
                <p className="par-v4-p-2"><strong>More than 93% said yes.</strong></p>
                <p className="par-v4-p-2">
                  This makes sense: once drivers see what's available, they feel more confident about their choice —
                  whether they switch or stay.
                </p>
                <p className="par-v4-p-2">
                  For many consumers (particularly those juggling households, car payments, and long-term financial goals),
                  finding a more competitive rate can make a real difference. And even those who stay with their current provider
                  gain something valuable: the peace of mind that comes from knowing their rate holds up against the market.
                </p>
                <p className="par-v4-p-2"><strong>Taking a few minutes to compare is simply the smart move at renewal.</strong></p>

                <button onClick={handleClick} className="tgl-cta-btn-3 new-space new-cta-col w-button">
                  <strong className="bold-text-16 mobile-text">👉 Compare Rates Now</strong>
                </button>

                <h2 className="par-v4-h top-mar">
                  <strong className="bold-text-20">Your Opportunity </strong>
                  <span className="text-span-15"><strong className="bold-text-20">as an Insured Driver</strong></span>
                </h2>

                <img
                  sizes="100vw"
                  srcSet="/images/H-7-p-500.avif 500w, /images/H-7.avif 1000w"
                  alt=""
                  src="/images/H-7.avif"
                  loading="lazy"
                  className="par-v4-hero-img"
                />

                <p className="par-v4-p-2">
                  <strong>
                    If you currently carry auto insurance and haven't compared rate options within the past year, our
                    survey suggests there's a good chance a more competitive rate is available to you,and it only takes
                    a few minutes to find out.
                  </strong>
                </p>
                <p className="par-v4-p-2">
                  You may confirm that your current premium is already among the best available. Or you may find an alternative
                  worth considering. Either way, you walk away with a clear, informed picture of where you stand.
                </p>
                <p className="par-v4-p-2">
                  <strong>
                    Drivers can review personalized rate options for free using Auto Savings, which connects multiple providers
                    in a single, streamlined form.
                  </strong>{" "}
                  The process doesn't require cancellation of an existing policy. By submitting your information, you may be
                  contacted by phone by one or more insurance providers with rate options.
                </p>
                <p className="par-v4-p-2">
                  <strong>You could start benefiting from a better rate in as little as 5 minutes.</strong>
                </p>

                <button onClick={handleClick} className="tgl-cta-btn-3 new-space new-cta-col w-button">
                  <strong className="bold-text-16 mobile-text">👉 Compare Rates Now</strong>
                </button>

                <img loading="lazy" src="/images/arrow-down-icon.svg" alt="" className="arrow-down-img" />

                <h2 className="par-v4-h h-centered new-col-blue other-blue-col top-mar-space">
                  <strong className="bold-text-21">Who Is Most Likely To Benefit?</strong>
                </h2>
              </div>

              {/* CTA Box */}
              <div className="par-v4-cta-box new-color-pp">
                <p className="par-v4-p-2">
                  Our survey showed that drivers most likely to find favorable rate options include:
                </p>
                <p className="par-v4-p-2">
                  ✅ <strong>Consumers who currently carry active auto insurance.</strong><br />‍<br />
                  ✅ <strong>Consumers who have maintained continuous coverage for over 3 years.</strong><br /><br />
                  ✅ <strong>Consumers with good or above average credit.<br /><br />
                  ✅ Consumers who insure two or more vehicles.</strong><br />
                </p>
                <p className="par-v4-p-2">
                  <strong>Drivers who fit these profiles found the most meaningful rate differences when they compared,making it well worth a few minutes to explore.</strong>
                </p>
                <button onClick={handleClick} className="tgl-cta-btn-3 new-space new-cta-col w-button">
                  <strong className="bold-text-16 mobile-text">👉 Compare Rates Now</strong>
                </button>
              </div>

              {/* Trust Box */}
              <div className="par-v4-trust-box">
                <p className="trust-description">
                  <strong>All rights reserved. Copyright © {new Date().getFullYear()} Auto Savings, LLC</strong>
                </p>
              </div>
            </div>
          </section>

          {/* Footer */}
          <section className="par-v4-footer">
            <div className="par-v4-footer-wrapper">
              <div className="footer-links">
                <a href="https://auto-savings.com/privacy-policy" target="_blank" rel="noopener noreferrer" className="footer-link">
                  <strong>Privacy Policy</strong>
                </a>
              </div>
              <div className="footer-links">
                <a href="https://auto-savings.com/terms" target="_blank" rel="noopener noreferrer" className="footer-link">
                  <strong>Terms Of Service</strong>
                </a>
              </div>
            </div>
          </section>
        </div>
      </body>
    </>
  );
};

export default AC_prelander;
