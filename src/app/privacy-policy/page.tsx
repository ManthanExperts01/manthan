import SecondaryFooter from '@/components/SecondaryFooter';

interface HeroBannerData {
  title: string;
  image: string;
}

const PrivacyPolicyPage = () => {
  const heroBannerData: HeroBannerData = {
    title: 'Privacy Policy',
    image: 'privacy',
  };
  return (
    <div className="font-sans">
      {/* Hero Banner */}
      {<HeroBanner {...heroBannerData} />}

      {/* Privacy Content */}
      <PrivacyContent />

      <SecondaryFooter />
    </div>
  );
};

const HeroBanner = ({ title }: HeroBannerData) => {
  return (
    <section className="">
      <div className="relative h-[520px] bg-[#052E26]">
        <div className="relative h-full flex items-center justify-center z-10">
          <h5 className="md:w-[800px] text-center font-bold text-3xl tracking-tight text-white dark:text-white lg:text-6xl">
            {title}
          </h5>
        </div>
      </div>
    </section>
  );
};

// Privacy Content Section
const PrivacyContent = () => {
  return (
    <div className="bg-white p-8 md:p-16">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-lg mb-6">
            Welcome to Manthanam Experts Private Limited. This Privacy Policy explains how we collect, use, 
            protect, and disclose your personal information when you visit our website, 
            www.manthanexperts.com ("Site"), and use our products and services. By using our Site, 
            you agree to the practices described in this policy.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-[#052E26]">1. Information We Collect</h2>
          
          <h3 className="text-xl font-bold ml-4 mb-3">1.1. Personal Identification Information</h3>
          <p className="ml-4 mb-3">We may collect personal information from you when you:</p>
          <ul className="list-disc ml-12 mb-3">
            <li className="mb-2">Visit our Site</li>
            <li className="mb-2">Register for an account</li>
            <li className="mb-2">Place an order</li>
            <li className="mb-2">Engage in activities such as using services, features, or resources provided on our Site</li>
          </ul>
          
          <p className="ml-4 mb-3">The personal information we may collect includes:</p>
          <ul className="list-disc ml-12 mb-3">
            <li className="mb-2">Full Name</li>
            <li className="mb-2">Email Address</li>
            <li className="mb-2">Mailing Address</li>
            <li className="mb-2">Phone Number</li>
            <li className="mb-2">Payment Information</li>
          </ul>
          
          <p className="ml-4 mb-3">
            You can choose to visit our Site anonymously. However, refusing to provide personal information 
            may limit your ability to participate in certain activities on our Site.
          </p>
          
          <h3 className="text-xl font-bold ml-4 mb-3">1.2. Non-Personal Identification Information</h3>
          <p className="ml-4 mb-3">We may collect non-personally identifiable information about users, such as:</p>
          <ul className="list-disc ml-12 mb-3">
            <li className="mb-2">Browser type</li>
            <li className="mb-2">Operating system</li>
            <li className="mb-2">IP address</li>
            <li className="mb-2">Device information</li>
            <li className="mb-2">Browsing behavior on our Site</li>
          </ul>
          
          <p className="ml-4 mb-3">
            This data helps us improve our Site's functionality and user experience.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-[#052E26]">2. Use of Cookies</h2>
          <p className="mb-3">
            Our Site uses cookies to enhance your user experience. Cookies are small files stored on 
            your device that help us understand how you interact with our Site.
          </p>
          <ul className="list-disc ml-8 mb-3">
            <li className="mb-2">You can configure your browser to refuse cookies or alert you when cookies are being sent.</li>
            <li className="mb-2">Disabling cookies may affect the functionality of certain Site features.</li>
          </ul>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-[#052E26]">3. How We Use Your Information</h2>
          <p className="mb-3">
            We use the information we collect for the following purposes:
          </p>
          <ul className="list-disc ml-8 mb-3">
            <li className="mb-2"><strong>To Improve Customer Service:</strong> Respond to your service requests efficiently.</li>
            <li className="mb-2"><strong>To Personalize User Experience:</strong> Understand how users interact with our Site and improve our offerings.</li>
            <li className="mb-2"><strong>To Process Payments:</strong> Manage transactions securely without sharing your information with unauthorized parties.</li>
            <li className="mb-2"><strong>To Send Communications:</strong> Send updates, newsletters, alerts, and promotional materials (if you've opted in).</li>
            <li className="mb-2"><strong>To Improve Our Site:</strong> Utilize feedback to enhance our services.</li>
          </ul>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-[#052E26]">4. Data Protection Measures</h2>
          <p className="mb-3">
            We prioritize the security of your personal information:
          </p>
          <ul className="list-disc ml-8 mb-3">
            <li className="mb-2"><strong>SSL Encryption:</strong> We use advanced SSL certificates to secure data transmission.</li>
            <li className="mb-2"><strong>PCI Certified Payment Gateways:</strong> For secure online transactions.</li>
            <li className="mb-2"><strong>Data Deletion Policy:</strong> Every three months, we delete project-related data from our servers and email systems.</li>
            <li className="mb-2"><strong>Confidentiality:</strong> We never share your personal documents with third parties without your explicit consent.</li>
          </ul>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-[#052E26]">5. Sharing Your Information</h2>
          <p className="mb-3">
            We do not sell, rent, or trade your personal information. However, we may share your data with trusted 
            third-party service providers who assist us in operating our business, such as:
          </p>
          <ul className="list-disc ml-8 mb-3">
            <li className="mb-2">Payment processors</li>
            <li className="mb-2">Email marketing services</li>
            <li className="mb-2">Customer support platforms</li>
          </ul>
          <p className="mb-3">
            We only share information with these third parties with your consent and for specific purposes.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-[#052E26]">6. Use of Google AdSense</h2>
          <p className="mb-3">
            Some ads on our Site may be served by Google through Google AdSense. Google uses the DART cookie 
            to display personalized ads based on your browsing activity.
          </p>
          <ul className="list-disc ml-8 mb-3">
            <li className="mb-2">You can opt-out of DART cookie usage by visiting Google's Ad Settings.</li>
          </ul>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-[#052E26]">7. Children's Privacy</h2>
          <p className="mb-3">
            Our Site is not intended for children under the age of 13. We do not knowingly collect personal 
            information from children. If we become aware that we have inadvertently collected information 
            from a child under 13, we will delete such data promptly.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-[#052E26]">8. Changes to This Privacy Policy</h2>
          <p className="mb-3">
            We may update this Privacy Policy periodically. Any changes will be posted on this page with an 
            updated Effective Date. Your continued use of our Site after changes indicates your acceptance 
            of the new policy.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-[#052E26]">9. Contact Us</h2>
          <p className="mb-3">
            If you have any questions or concerns regarding this Privacy Policy or our data practices, 
            please contact us at:
          </p>
          <div className="ml-4">
            <p className="font-bold mb-2">Manthanam Experts Private Limited</p>
            <p className="mb-2">
              <span className="inline-block mr-2">📍</span> 
              Address: A-92C, 2nd Floor, Right Side, Namberdar Estates, Taimoor Nagar, New Friends Colony, New Delhi-110065
            </p>
            <p className="mb-2">
              <span className="inline-block mr-2">📧</span> 
              Email: info@manthanexperts.com
            </p>
            <p className="mb-2">
              <span className="inline-block mr-2">📞</span> 
              Phone: +91-9643 969 969
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;