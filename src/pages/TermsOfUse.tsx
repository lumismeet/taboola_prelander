const TermsOfUse = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Terms of Use</h1>
        <p className="text-sm text-gray-500 mb-8">Last updated: March 11, 2026</p>

        <p className="text-gray-700 mb-8 leading-relaxed">
          Please read these Terms of Use ("Terms") carefully before using the CheckAutoPlans website
          and services. By accessing or using our site, you agree to be bound by these Terms. If you
          do not agree, please do not use our services.
        </p>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">1. About CheckAutoPlans</h2>
          <p className="text-gray-700 leading-relaxed">
            CheckAutoPlans is a free online platform that helps consumers compare auto insurance options
            by connecting them with licensed insurance carriers, agents, and brokers. We do not sell
            insurance directly. We are a lead generation and comparison service.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">2. Eligibility</h2>
          <p className="text-gray-700 leading-relaxed">
            You must be at least 18 years of age and a resident of the United States to use our
            services. By using CheckAutoPlans, you represent and warrant that you meet these requirements.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">3. No Insurance Advice</h2>
          <p className="text-gray-700 leading-relaxed">
            CheckAutoPlans does not provide insurance advice, recommendations, or brokerage services.
            Any information presented on this site is for general informational purposes only. You should
            consult with a licensed insurance professional before making any decisions about your
            auto insurance coverage.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Third-Party Partners</h2>
          <p className="text-gray-700 leading-relaxed">
            By submitting your information through CheckAutoPlans, you consent to being contacted by
            our insurance partners — including carriers, agents, and brokers — via phone, email, or
            text message, even if your number is on a Do Not Call registry. These contacts may be
            made using automated dialing systems or pre-recorded messages. You are not required to
            make any purchase as a condition of using our services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">5. Accuracy of Information</h2>
          <p className="text-gray-700 leading-relaxed">
            You agree to provide accurate, current, and complete information when using our services.
            Providing false or misleading information may result in inaccurate quotes and is a violation
            of these Terms. CheckAutoPlans is not responsible for any errors resulting from inaccurate
            information you provide.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">6. Intellectual Property</h2>
          <p className="text-gray-700 leading-relaxed">
            All content on this site, including text, graphics, logos, and software, is the property
            of CheckAutoPlans or its licensors and is protected by applicable intellectual property laws.
            You may not reproduce, distribute, or create derivative works without our express written
            permission.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">7. Disclaimer of Warranties</h2>
          <p className="text-gray-700 leading-relaxed">
            Our services are provided "as is" and "as available" without warranties of any kind, either
            express or implied. CheckAutoPlans does not warrant that the site will be uninterrupted,
            error-free, or free of viruses or other harmful components. We make no guarantees regarding
            the accuracy or completeness of any information provided.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">8. Limitation of Liability</h2>
          <p className="text-gray-700 leading-relaxed">
            To the fullest extent permitted by law, CheckAutoPlans shall not be liable for any indirect,
            incidental, special, consequential, or punitive damages arising from your use of our services
            or your reliance on any information provided on this site, even if we have been advised of
            the possibility of such damages.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">9. Governing Law</h2>
          <p className="text-gray-700 leading-relaxed">
            These Terms shall be governed by and construed in accordance with the laws of the United
            States and the state in which CheckAutoPlans is headquartered, without regard to its conflict
            of law provisions. Any disputes arising under these Terms shall be resolved in the applicable
            courts of that jurisdiction.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">10. Changes to These Terms</h2>
          <p className="text-gray-700 leading-relaxed">
            We reserve the right to modify these Terms at any time. Changes will be effective upon
            posting to the website. Your continued use of our services after any changes constitutes
            your acceptance of the revised Terms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">11. Contact Us</h2>
          <p className="text-gray-700 leading-relaxed">
            If you have any questions about these Terms of Use, please contact us at:
          </p>
          <div className="mt-3 text-gray-700">
            <p className="font-medium">CheckAutoPlans</p>
            <p>
              Email:{" "}
              <a href="mailto:legal@checkautoplans.com" className="text-blue-600 underline">
                legal@checkautoplans.com
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

export default TermsOfUse;
