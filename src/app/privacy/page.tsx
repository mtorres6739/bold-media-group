export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-yellow-900/20 to-transparent"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 animate-fadeInUp">
            Privacy <span className="text-yellow-400">Policy</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-900 rounded-2xl p-8 md:p-12 border border-gray-800">
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 mb-6">
                <strong>Last updated:</strong> January 1, 2025
              </p>
              
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. Introduction</h2>
              <p className="text-gray-300 mb-6">
                Bold Media Group (“we,” “us,” or “our”) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our podcast production services.
              </p>
              
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. Information We Collect</h2>
              <p className="text-gray-300 mb-6">
                We may collect several types of information from and about users of our website and services, including:
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-6 ml-4">
                <li><strong>Personal Information:</strong> Name, email address, phone number, company name, and payment information</li>
                <li><strong>Content Information:</strong> Audio/video files, transcripts, show notes, and other content you provide for production</li>
                <li><strong>Usage Information:</strong> Information about how you access and use our website and services</li>
                <li><strong>Technical Information:</strong> IP address, browser type, device information, and other technical data</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-300 mb-6">
                We use the information we collect for various purposes, including to:
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-6 ml-4">
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and send related information</li>
                <li>Send technical notices and support messages</li>
                <li>Respond to your comments, questions, and requests</li>
                <li>Communicate with you about products, services, and promotional offers</li>
                <li>Monitor and analyze trends and usage</li>
                <li>Detect, prevent, and address technical issues</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">4. Information Sharing</h2>
              <p className="text-gray-300 mb-6">
                We may share your information with third parties in the following circumstances:
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-6 ml-4">
                <li><strong>Service Providers:</strong> We may share information with third-party service providers who perform services on our behalf</li>
                <li><strong>Business Transfers:</strong> If we are involved in a merger, acquisition, or sale of assets, your information may be transferred</li>
                <li><strong>Legal Requirements:</strong> We may disclose your information if required to do so by law or in good faith belief that such action is necessary</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">5. Data Security</h2>
              <p className="text-gray-300 mb-6">
                We implement appropriate technical and organizational measures to protect your information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or method of electronic storage is 100% secure.
              </p>
              
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">6. Data Retention</h2>
              <p className="text-gray-300 mb-6">
                We retain your information for as long as necessary to provide our services and fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
              </p>
              
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">7. Your Rights</h2>
              <p className="text-gray-300 mb-6">
                Depending on your location, you may have the following rights regarding your personal information:
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-6 ml-4">
                <li><strong>Access:</strong> Request access to your personal information</li>
                <li><strong>Correction:</strong> Request correction of inaccurate personal information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Portability:</strong> Request transfer of your personal information to another service</li>
                <li><strong>Objection:</strong> Object to processing of your personal information</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">8. Cookies and Tracking</h2>
              <p className="text-gray-300 mb-6">
                We use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
              </p>
              
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">9. Third-Party Websites</h2>
              <p className="text-gray-300 mb-6">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices of such third-party websites. We encourage you to be aware when you leave our site and to read the privacy statements of each website that collects personal information.
              </p>
              
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">10. Children’s Privacy</h2>
              <p className="text-gray-300 mb-6">
                Our services are not intended for use by children under the age of 13. We do not knowingly collect personally identifiable information from children under 13. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us.
              </p>
              
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">11. Changes to This Privacy Policy</h2>
              <p className="text-gray-300 mb-6">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the “Last updated” date at the top.
              </p>
              
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">12. Contact Us</h2>
              <p className="text-gray-300 mb-6">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <div className="text-gray-300 mb-6">
                <p>Bold Media Group</p>
                <p>123 Media Street</p>
                <p>New York, NY 10001</p>
                <p>Email: privacy@boldmediagroup.com</p>
                <p>Phone: (555) 123-4567</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}