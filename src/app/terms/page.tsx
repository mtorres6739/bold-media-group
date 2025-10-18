export default function TermsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-yellow-900/20 to-transparent"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 animate-fadeInUp">
            Terms of <span className="text-yellow-400">Service</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
            Please read these terms carefully before using our services.
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-900 rounded-2xl p-8 md:p-12 border border-gray-800">
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 mb-6">
                <strong>Last updated:</strong> January 1, 2025
              </p>
              
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-300 mb-6">
                By accessing and using Bold Media Group’s services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
              
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. Description of Service</h2>
              <p className="text-gray-300 mb-6">
                Bold Media Group provides professional podcast production services including audio/video recording, editing, show notes creation, social media content generation, and distribution to major platforms. Specific services and deliverables vary by package selected.
              </p>
              
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. User Obligations</h2>
              <p className="text-gray-300 mb-6">
                As a user of our services, you agree to:
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-6 ml-4">
                <li>Provide accurate, current, and complete information as required by our service</li>
                <li>Ensure that all content you provide is original or that you have obtained all necessary permissions</li>
                <li>Not use our services for any illegal or unauthorized purpose</li>
                <li>Not transmit any material that is offensive, harmful, or violates any laws</li>
                <li>Make timely payments for services rendered</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">4. Payment Terms</h2>
              <p className="text-gray-300 mb-6">
                All services are billed on a monthly subscription basis unless otherwise agreed. Payments are due in advance of each billing cycle. Late payments may incur additional fees. All prices are listed in USD and are exclusive of applicable taxes.
              </p>
              
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">5. Cancellation and Refunds</h2>
              <p className="text-gray-300 mb-6">
                You may cancel your subscription at any time with 30 days’ notice. Refunds are provided on a case-by-case basis and at the sole discretion of Bold Media Group. No refunds will be issued for services already rendered.
              </p>
              
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">6. Intellectual Property</h2>
              <p className="text-gray-300 mb-6">
                You retain ownership of all content you provide. Bold Media Group retains ownership of our methodologies, processes, and tools. Upon full payment, you are granted a license to use the final produced content for your intended purposes.
              </p>
              
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">7. Confidentiality</h2>
              <p className="text-gray-300 mb-6">
                Both parties agree to keep confidential all information shared during the course of our business relationship, including but not limited to business strategies, client lists, and proprietary information.
              </p>
              
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">8. Limitation of Liability</h2>
              <p className="text-gray-300 mb-6">
                Bold Media Group shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the service.
              </p>
              
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">9. Indemnification</h2>
              <p className="text-gray-300 mb-6">
                You agree to indemnify and hold Bold Media Group harmless from any claim or demand, including reasonable attorneys’ fees, made by any third-party due to or arising out of your breach of these terms or the documents it incorporates by reference, or your violation of any law or the rights of a third-party.
              </p>
              
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">10. Termination</h2>
              <p className="text-gray-300 mb-6">
                We may terminate or suspend your account and bar access to the service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation.
              </p>
              
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">11. Governing Law</h2>
              <p className="text-gray-300 mb-6">
                These terms shall be interpreted and governed by the laws of the State of New York, United States, without regard to its conflict of law provisions.
              </p>
              
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">12. Changes to Terms</h2>
              <p className="text-gray-300 mb-6">
                Bold Media Group reserves the right to modify these terms at any time. We will notify users of any changes by email or by posting a notice on our website prior to the change becoming effective.
              </p>
              
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">13. Contact Information</h2>
              <p className="text-gray-300 mb-6">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <div className="text-gray-300 mb-6">
                <p>Bold Media Group</p>
                <p>123 Media Street</p>
                <p>New York, NY 10001</p>
                <p>Email: legal@boldmediagroup.com</p>
                <p>Phone: (555) 123-4567</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}