const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-8">Last updated: March 11, 2026</p>

        <p className="text-gray-700 mb-8 leading-relaxed">
          CheckAutoPlans ("we," "us," or "our") is committed to protecting your privacy. This Privacy
          Policy explains how we collect, use, disclose, and safeguard your information when you visit
          our website or use our services to compare auto insurance plans.
        </p>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Information We Collect</h2>
          <p className="text-gray-700 mb-3 leading-relaxed">
            We collect information you provide directly to us, including:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 leading-relaxed">
            <li>Name, email address, phone number, and ZIP code</li>
            <li>Vehicle information (year, make, model, and usage)</li>
            <li>Driver information (age, driving history, current coverage)</li>
            <li>Any other information you choose to provide</li>
          </ul>
          <p className="text-gray-700 mt-3 leading-relaxed">
            We also automatically collect certain information when you use our site, such as IP address,
            browser type, pages visited, and time spent on pages.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">2. How We Use Your Information</h2>
          <p className="text-gray-700 mb-3 leading-relaxed">We use the information we collect to:</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 leading-relaxed">
            <li>Match you with auto insurance providers and present relevant quotes</li>
            <li>Share your information with insurance carriers, agents, and partners who may contact you</li>
            <li>Communicate with you about our services, offers, and updates</li>
            <li>Improve our website, services, and user experience</li>
            <li>Comply with legal obligations and enforce our Terms of Use</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">3. Sharing Your Information</h2>
          <p className="text-gray-700 mb-3 leading-relaxed">
            By submitting your information on CheckAutoPlans, you agree that we may share your
            personal information with:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 leading-relaxed">
            <li>Auto insurance carriers, agents, and licensed brokers</li>
            <li>Marketing and advertising partners</li>
            <li>Service providers who assist us in operating our website and conducting our business</li>
            <li>Third parties as required by law or to protect our rights</li>
          </ul>
          <p className="text-gray-700 mt-3 leading-relaxed">
            We do not sell your personal information to third parties for their own unrelated marketing
            purposes without your consent.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Cookies and Tracking Technologies</h2>
          <p className="text-gray-700 leading-relaxed">
            We use cookies, web beacons, and similar tracking technologies to enhance your experience,
            analyze usage patterns, and deliver relevant advertising. You can control cookie settings
            through your browser preferences, but disabling cookies may affect site functionality.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">5. Data Security</h2>
          <p className="text-gray-700 leading-relaxed">
            We implement reasonable administrative, technical, and physical security measures to protect
            your information. However, no method of transmission over the Internet is 100% secure, and
            we cannot guarantee absolute security.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">6. Your Choices</h2>
          <p className="text-gray-700 mb-3 leading-relaxed">You have the right to:</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 leading-relaxed">
            <li>Opt out of marketing communications by following the unsubscribe instructions in any email</li>
            <li>Request access to, correction of, or deletion of your personal information</li>
            <li>Opt out of the sale or sharing of your personal data where applicable under state law</li>
          </ul>
          <p className="text-gray-700 mt-3 leading-relaxed">
            To exercise these rights, contact us at{" "}
            <a href="mailto:privacy@checkautoplans.com" className="text-blue-600 underline">
              privacy@checkautoplans.com
            </a>.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">7. Children's Privacy</h2>
          <p className="text-gray-700 leading-relaxed">
            Our services are not directed to individuals under the age of 18. We do not knowingly collect
            personal information from children. If you believe we have inadvertently collected such
            information, please contact us immediately.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">8. Changes to This Policy</h2>
          <p className="text-gray-700 leading-relaxed">
            We may update this Privacy Policy from time to time. We will notify you of any material
            changes by posting the new policy on this page with an updated effective date. Your continued
            use of our services after such changes constitutes your acceptance of the updated policy.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">9. Contact Us</h2>
          <p className="text-gray-700 leading-relaxed">
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <div className="mt-3 text-gray-700">
            <p className="font-medium">CheckAutoPlans</p>
            <p>
              Email:{" "}
              <a href="mailto:privacy@checkautoplans.com" className="text-blue-600 underline">
                privacy@checkautoplans.com
              </a>
            </p>
          </div>
        </section>

        <div className="border-t border-gray-200 pt-6 mt-8">
          <p className="text-xs text-gray-500 text-center">
            &copy; {new Date().getFullYear()} CheckAutoPlans. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
