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
  return url.toString();
};

// ─── MAIN ────────────────────────────────────────────────────────────────────
const Andres_prelander = () => {
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

      {/* Google Fonts — same as original */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

      <body className="body-3 new-bk-col">
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
          `}</style>
        </div>

        <div className="par-v4-body-wrapper pad-mar-adj">
          {/* Header */}
          <section className="par-v4-header">
            <div className="par-v4-header-wrapper">
              <img loading="lazy" src={logoo} alt="CheckAutoPlans" className="image-2" />
            </div>
          </section>

          {/* Main content */}
          <section className="par-v4-content-2 new-width-1">
            <div className="par-v4-content-wrapper">
              <div className="par-v4-content-wrapper-extra-paddings-2 new-pad-mar">
                <p className="par-v4-article-info-2">Advertorial | By Jennifer Jones | 5-mins read</p>
                <h1 className="par-v4-heading new-style">
                  <strong>INVESTIGATION: Millions of Insured </strong>
                  <span className="text-span-6"><strong>Drivers are Overpaying</strong></span>
                  <strong> By 100's (And Don't Even Know It)</strong>
                </h1>
                <h2 className="par-v4-subheading">
                  <strong className="bold-text-17">
                    A survey of insured drivers found that most consumers believe they are protected from rate increases,
                    even when they haven't compared options in years.
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
                  emerged was not evidence of wrongdoing, a hidden fee, or a dramatic pricing error.{" "}
                  <strong>What we discovered was, in many ways, more concerning.</strong>
                </p>
                <p className="par-v4-p-2">
                  The majority of drivers expressed confidence that they were receiving competitive pricing.{" "}
                  <strong>
                    Yet when we dug deeper, it turned out that the vast majority had in fact experienced steady premium increases
                    at renewal for years
                  </strong>{" "}
                  – and almost none of them had compared their rates elsewhere.
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
                  <strong className="bold-text-18">Why Being </strong>
                  <span className="text-span-7"><strong className="bold-text-18">"Low-Risk"</strong></span>
                  <strong className="bold-text-18"> Doesn't Guarantee Better Rates</strong>
                </h2>

                <p className="par-v4-p-2">
                  Auto insurance, for many families, operates in the background.{" "}
                  <strong>Once a policy is in place, payments are automated and coverage rolls over year after year.</strong>{" "}
                  Renewal notices arrive by mail or email, are briefly scanned, and then filed away. If the increase is modest,
                  it rarely prompts further action.
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
                    Yet when asked whether they had verified those assumptions by comparing providers in the past 12 months,
                    fewer than 1 in 4 consumers had done so.
                  </strong>
                </p>
                <p className="par-v4-p-2">
                  What many drivers did not realize is that insurance rates are recalculated continuously based on broader
                  factors: regional claims data, repair costs, accident trends, and proprietary underwriting models. Even if
                  nothing about your personal driving record changes, the way your profile is evaluated can.
                </p>
                <p className="par-v4-p-2">
                  <strong>
                    The result is that two companies may price the exact same driver very differently; and unless that driver
                    checks, they may never know.
                  </strong>
                </p>

                <h2 className="par-v4-h top-mar">
                  <strong className="bold-text-19">Most Consumers </strong>
                  <span className="text-span-8"><strong className="bold-text-19">Don't Question</strong></span>
                  <strong className="bold-text-19"> </strong>
                  <span className="text-span-9"><strong className="bold-text-19">Renewal</strong></span>
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
                  What made the findings more concerning was not simply that many drivers were mistaken.{" "}
                  <strong>
                    It was how consistent the misconceptions were across income levels, education backgrounds, and household types.
                  </strong>
                </p>
                <p className="par-v4-p-2">
                  The survey included married and single drivers, homeowners and renters, single-vehicle and multi-car households.{" "}
                  <strong>The common thread was stability – these were, by and large, not high-risk drivers.</strong> Most had
                  maintained continuous coverage for years. Many described themselves as financially cautious.
                </p>
                <p className="par-v4-p-2">
                  <strong>Yet despite that caution, comparison shopping was rare.</strong> When asked why they hadn't reviewed
                  alternatives recently, respondents gave remarkably similar answers:
                </p>
                <p className="par-v4-p-2">
                  ✅ <strong>Nearly 64%</strong> said they believed rate increases were "industry-wide" and therefore unlikely to
                  vary meaningfully between providers.<br />‍<br />
                  ✅ <strong>More than 58%</strong> assumed switching providers would be complicated or time-consuming.<br />‍<br />
                  ✅ <strong>Almost half</strong> believed their current insurer would automatically offer the most competitive
                  pricing available to retain them.<br />
                </p>
                <p className="par-v4-p-2">
                  <strong>In other words, the majority are operating on assumptions – not current data.</strong>
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
                  To test those assumptions, a portion of respondents agreed to complete a simple online comparison exercise.{" "}
                  <strong>
                    Using their existing coverage limits and driver details, they entered their information into OTTO Insurance,
                    a multi-provider quote comparison platform to see how their profile was priced elsewhere.
                  </strong>{" "}
                  The process took less than five minutes.
                </p>
                <p className="par-v4-p-2">
                  The results were shocking:{" "}
                  <strong>
                    more than 62% of surveyed drivers were presented with at least one lower-priced rate option than their
                    current premium when they completed the comparison exercise.
                  </strong>
                </p>
                <p className="par-v4-p-2">
                  In many cases, the difference was not marginal. Several respondents reported that the lowest available
                  alternative was meaningfully below their renewal rate, despite no recent claims or changes in their driving
                  history.
                </p>
                <p className="par-v4-p-2">
                  The pricing itself was not the only surprise.{" "}
                  <strong>
                    Just as significant was the realization among most respondents that they had never compared their options
                    side by side.
                  </strong>
                </p>
                <p className="par-v4-p-2">
                  That visibility, even more than the dollar amount, was what shifted perception. Once drivers saw how
                  differently providers evaluated the same information, many said they felt better equipped to make an informed
                  decision at renewal.
                </p>

                <h2 className="par-v4-h top-mar">
                  <strong className="bold-text-20">Why </strong>
                  <span className="text-span-12"><strong className="bold-text-20">Pricing Varies</strong></span>
                  <strong className="bold-text-20"> So Significantly</strong>
                </h2>

                <p className="par-v4-p-2">
                  Insurance pricing is built on risk modeling. Each provider uses its own actuarial formulas to weigh factors
                  such as driving history, geographic risk, vehicle type, mileage, claims data, and credit
                  scores.<strong> Even subtle differences in weighting can produce different outcomes for the same driver.</strong>
                </p>
                <p className="par-v4-p-2">
                  One company may prioritize longevity. Another may emphasize recent claims trends in a specific ZIP code.
                  Another may adjust pricing more aggressively based on vehicle repair costs.
                </p>
                <p className="par-v4-p-2">
                  <strong>
                    From the outside, consumers see only a single renewal number. Behind the scenes, dozens of variables are
                    being recalculated.
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
                  Historically, comparing multiple insurers required contacting each company individually and requesting
                  quotes.<strong> For many drivers, that friction alone was enough to avoid the process altogether.</strong>
                </p>
                <p className="par-v4-p-2">
                  Today, comparison platforms streamline the process by allowing drivers to complete one short form and receive
                  rate options from multiple providers in one place.{" "}
                  <strong>
                    The platform used in our survey is OTTO Insurance, the easiest-to-use and most comprehensive insurance
                    comparison tool on the market.
                  </strong>
                </p>
                <p className="par-v4-p-2">
                  After entering basic information such as ZIP code, vehicle details, and coverage preferences, users can view
                  personalized rate options{" "}
                  <strong>– completely for free and without any obligation.</strong>{" "}
                  Participants in the survey who completed the exercise described it as "simpler than expected" and "less
                  disruptive" than they had assumed.
                </p>
                <p className="par-v4-p-2">
                  <strong>The biggest barrier, it turned out, was not complexity. It was inertia.</strong>
                </p>

                <h2 className="par-v4-h top-mar">
                  <strong className="bold-text-20">Consider </strong>
                  <span className="text-span-14"><strong className="bold-text-20">This Before Renewing</strong></span>
                  <strong className="bold-text-20"> Your Auto Insurance</strong>
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
                  Perhaps the most telling statistic in the survey came at the end.{" "}
                  <strong>
                    After completing the comparison exercise, respondents were asked whether they believed it was worthwhile to
                    review rate options periodically
                  </strong>{" "}
                  – even if they ultimately stayed with their current provider.
                </p>
                <p className="par-v4-p-2"><strong>More than 93% said yes.</strong></p>
                <p className="par-v4-p-2">
                  This statistic reveals something fundamental: drivers value transparency once they experience it.
                </p>
                <p className="par-v4-p-2">
                  For many consumers (particularly those juggling households, car payments, and long-term financial goals),
                  even incremental savings can matter. But just as important is the confidence that comes from knowing your
                  rate has been evaluated against alternatives.
                </p>
                <p className="par-v4-p-2"><strong>Renewal may be automatic, but optimization is not.</strong></p>

                <button onClick={handleClick} className="tgl-cta-btn-3 new-space new-cta-col w-button">
                  <strong className="bold-text-16 mobile-text">👉 Compare Rates Now</strong>
                </button>

                <h2 className="par-v4-h top-mar">
                  <strong className="bold-text-20">What This Means </strong>
                  <span className="text-span-15"><strong className="bold-text-20">For Insured Drivers</strong></span>
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
                    If you currently carry auto insurance and have not compared rate options within the past year, our
                    investigation suggests you may be relying on false assumptions shared by a majority of drivers.
                  </strong>
                </p>
                <p className="par-v4-p-2">
                  You may confirm that your current premium remains competitive. Or you may discover alternatives worth
                  considering. Either way, the decision becomes informed rather than automatic.
                </p>
                <p className="par-v4-p-2">
                  <strong>
                    Drivers who wish to review personalized rate options can do so for free using OTTO Insurance, which
                    aggregates multiple providers into a single, streamlined form.
                  </strong>{" "}
                  The process doesn't require cancellation of an existing policy and carries absolutely no obligation to switch.
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
                  Our investigation showed that those most likely to benefit from reviewing their rate options include:
                </p>
                <p className="par-v4-p-2">
                  ✅ <strong>Consumers who currently carry active auto insurance.</strong><br />‍<br />
                  ✅ <strong>Consumers who have maintained continuous coverage for over 3 years.</strong><br /><br />
                  ✅ <strong>Consumers with good or above average credit.<br /><br />
                  ✅ Consumers who insure two or more vehicles.</strong><br />
                </p>
                <p className="par-v4-p-2">
                  <strong>Drivers who fit these profiles were the most likely in our survey to see significant pricing variability.</strong>
                </p>
                <button onClick={handleClick} className="tgl-cta-btn-3 new-space new-cta-col w-button">
                  <strong className="bold-text-16 mobile-text">👉 Compare Rates Now</strong>
                </button>
              </div>

              {/* Trust Box */}
              <div className="par-v4-trust-box">
                <p className="trust-description">
                  <strong>All rights reserved. Copyright © {new Date().getFullYear()} OTTO Quotes, LLC</strong>
                </p>
              </div>
            </div>
          </section>

          {/* Footer */}
          <section className="par-v4-footer">
            <div className="par-v4-footer-wrapper">
              <div className="footer-links">
                <a href="https://ottoinsurance.com/privacypolicy.html" target="_blank" rel="noopener noreferrer" className="footer-link">
                  <strong>Privacy Policy</strong>
                </a>
              </div>
              <div className="footer-links">
                <a href="https://f.ottoinsurance.com/terms" target="_blank" rel="noopener noreferrer" className="footer-link">
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

export default Andres_prelander;
