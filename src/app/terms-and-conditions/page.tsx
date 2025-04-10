import SecondaryFooter from '@/components/SecondaryFooter';

interface HeroBannerData {
  title: string;
  image: string;
}

const TermsConditionsPage = () => {
  const heroBannerData: HeroBannerData = {
    title: 'Terms and Conditions',
    image: '',
  };
  return (
    <div className="font-sans">
      {/* Hero Banner */}
      {<HeroBanner {...heroBannerData} />}

      {/* Terms Content */}
      <TermsContent />

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

// Terms Content Section
const TermsContent = () => {
  return (
    <div className="bg-white p-8 md:p-16">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center text-[#052E26]">
            Terms of Service
          </h1>
          <p className="text-lg mb-6">
            Welcome to Manthanam Experts Private Limited!
          </p>
          <p className="text-lg mb-6">
            This website, www.manthanexperts.com, is owned and operated by Manthanam Experts Private Limited. 
            By accessing or using our website, services, products, and tools, you agree to comply with and be bound 
            by the following Terms of Service (referred to as the "User Agreement") along with our Privacy Policy. 
            Please read these terms carefully.
          </p>
          <p className="text-lg mb-8">
            We reserve the right to modify this User Agreement at any time without prior notice. It is your 
            responsibility to review this agreement periodically. Your continued use of our website after any 
            changes constitutes your acceptance of the updated terms.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-[#052E26]">1. Responsible Use and Conduct</h2>
          <p className="ml-4 mb-3">a) To access our resources, you may be required to provide personal information such as your identification, email, phone number, and contact details during registration. You agree to provide accurate, correct, and up-to-date information.</p>
          <p className="ml-4 mb-3">b) You are responsible for maintaining the confidentiality of your login information and for all activities under your account.</p>
          <p className="ml-4 mb-3">c) Accessing our resources through any unauthorized means is strictly prohibited. This includes the use of automated, deceptive, or irregular methods.</p>
          <p className="ml-4 mb-3">d) Any activity that disrupts or interferes with our resources, including servers and networks, is strictly forbidden.</p>
          <p className="ml-4 mb-3">e) Copying, reproducing, selling, trading, or exploiting our resources for commercial purposes is strictly prohibited.</p>
          <p className="ml-4 mb-3">f) You are solely responsible for any consequences, losses, or damages resulting from unauthorized activities, which may result in legal action.</p>
          <p className="ml-4 mb-3">g) We provide various public tools such as blog comments, discussion forums, message boards, and social media services. You agree to use these tools ethically and responsibly. You must not post content that:</p>
          <ul className="list-disc ml-12 mb-3">
            <li className="mb-2">Is illegal, threatening, defamatory, offensive, or inappropriate.</li>
            <li className="mb-2">Infringes on any intellectual property rights.</li>
            <li className="mb-2">Contains unsolicited advertising or promotional material.</li>
            <li className="mb-2">Impersonates any individual, including employees or representatives of Manthan Experts.</li>
          </ul>
          <p className="ml-4 mb-3">We reserve the right to remove any content that violates this User Agreement or is deemed offensive, harmful, or infringing on third-party rights.</p>
          <p className="ml-4 mb-3">You agree to indemnify and hold Manthanam Experts Private Limited harmless from any claims, damages, or losses arising from your violation of this agreement.</p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-[#052E26]">2. Privacy</h2>
          <p className="mb-3">
            Your privacy is important to us. We have a separate Privacy Policy that details how we collect, manage, process, 
            and protect your personal information. This policy is an integral part of this User Agreement.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-[#052E26]">3. Limitation of Warranties</h2>
          <p className="mb-3">
            All resources provided are offered on an &quot;as-is&quot; and &quot;as-available&quot; basis. We do not guarantee that our website 
            will be uninterrupted, error-free, or free from viruses or other harmful components.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-[#052E26]">4. Limitation of Liability</h2>
          <p className="mb-3">
            To the fullest extent permitted by applicable law, our liability will be limited to the amount you paid, if any, 
            for the use of our products or services. We are not liable for any direct, indirect, incidental, consequential, 
            or exemplary damages arising from your use of our resources.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-[#052E26]">5. Copyrights and Trademarks</h2>
          <p className="mb-3">
            All content and materials on www.manthanexperts.com, including but not limited to text, graphics, logos, images, 
            and code, are the intellectual property of Manthanam Experts Private Limited and are protected by copyright and 
            trademark laws. Unauthorized use, reproduction, or distribution of any content is strictly prohibited unless 
            expressly authorized.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-[#052E26]">6. Termination of Use</h2>
          <p className="mb-3">
            We reserve the right to suspend or terminate your access to our website and resources at our sole discretion, 
            with or without notice, for any reason, including breach of this User Agreement.
          </p>
          <p className="mb-3">
            Upon termination, your right to use our services will immediately cease, and we may delete any data associated 
            with your account.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-[#052E26]">7. Governing Law</h2>
          <p className="mb-3">
            This User Agreement is governed by the laws of India, without regard to its conflict of law principles. 
            Any disputes will be resolved in the courts located in Delhi, India, and you consent to the jurisdiction 
            of such courts.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-[#052E26]">8. Cancellation and Refund Policy</h2>
          <p className="mb-6">
            At Manthanam Experts Private Limited, we are committed to providing high-quality services and ensuring 
            customer satisfaction. This Cancellation and Refund Policy outlines the terms under which you may cancel 
            your order or request a refund. By using our services, you agree to the terms of this policy.
          </p>

          <h3 className="text-xl font-bold mb-2 text-[#052E26]">A. Cancellation Policy</h3>
          <h4 className="text-lg font-bold ml-4 mb-2">A.1. Cancellation by the Customer:</h4>
          <ul className="list-disc ml-12 mb-3">
            <li className="mb-2">You may request to cancel your order or service at any time before the service is initiated.</li>
            <li className="mb-2">Cancellation requests must be submitted in writing via email at info@manthanexperts.com or through our customer support.</li>
            <li className="mb-2">If the service has not yet been delivered or initiated, you will be eligible for a full refund (subject to the conditions below).</li>
          </ul>

          <h4 className="text-lg font-bold ml-4 mb-2">A.2. Cancellation by Manthanam Experts Private Limited:</h4>
          <p className="ml-8 mb-2">We reserve the right to cancel any order or service at our sole discretion, including but not limited to situations where:</p>
          <ul className="list-disc ml-12 mb-3">
            <li className="mb-2">The customer violates our Terms of Service.</li>
            <li className="mb-2">Payment issues or fraudulent activities are detected.</li>
            <li className="mb-2">The requested service is unavailable.</li>
          </ul>
          <p className="ml-8 mb-3">In such cases, we will notify you promptly, and any payments made will be refunded according to the terms of this policy.</p>

          <h3 className="text-xl font-bold mb-2 text-[#052E26]">B. Refund Policy</h3>
          <h4 className="text-lg font-bold ml-4 mb-2">B.1. Eligibility for a Refund:</h4>
          <ul className="list-disc ml-12 mb-3">
            <li className="mb-2">Refunds are only applicable if the service has not been delivered or the cancellation request is made before the service initiation.</li>
            <li className="mb-2">If a service has been partially delivered, the refund amount will be calculated based on the extent of the service provided.</li>
          </ul>

          <h4 className="text-lg font-bold ml-4 mb-2">B.2. Non-Refundable Situations:</h4>
          <p className="ml-8 mb-2">Refunds will NOT be issued in the following cases:</p>
          <ul className="list-disc ml-12 mb-3">
            <li className="mb-2">After the service has been fully provided or initiated.</li>
            <li className="mb-2">If the customer fails to provide necessary information or access required to deliver the service.</li>
            <li className="mb-2">For any third-party services or products purchased through our platform.</li>
            <li className="mb-2">If the cancellation request is made after the service completion.</li>
          </ul>

          <h4 className="text-lg font-bold ml-4 mb-2">B.3. Processing Refunds:</h4>
          <ul className="list-disc ml-12 mb-3">
            <li className="mb-2">Refunds will be processed within 7-10 business days from the date of approval.</li>
            <li className="mb-2">Refunds will be made through the original payment method used during the purchase.</li>
            <li className="mb-2">Please note that bank processing times may vary, and delays beyond our control may occur.</li>
          </ul>

          <h3 className="text-xl font-bold mb-2 text-[#052E26]">C. How to Request a Cancellation or Refund</h3>
          <ul className="list-disc ml-12 mb-3">
            <li className="mb-2">Email: info@manthanexperts.com</li>
            <li className="mb-2">Subject: "Cancellation/Refund Request"</li>
            <li className="mb-2">Include the following details:
              <ul className="list-disc ml-8 mt-2">
                <li>Order ID or Invoice Number</li>
                <li>Full Name</li>
                <li>Contact Information</li>
                <li>Reason for Cancellation/Refund</li>
              </ul>
            </li>
          </ul>

          <h3 className="text-xl font-bold mb-2 text-[#052E26]">D. Modifications to the Policy</h3>
          <p className="mb-3">
            We reserve the right to modify this Cancellation and Refund Policy at any time without prior notice. 
            Any changes will be effective immediately upon posting on our website. Your continued use of our services 
            after any modifications constitutes your acceptance of the updated policy.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-[#052E26]">9. Guarantee</h2>
          <p className="mb-3">
            Unless otherwise stated, we disclaim all warranties, both express and implied, including but not limited to 
            implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-[#052E26]">10. Contact Information</h2>
          <p className="mb-3">
            For any questions or concerns regarding this User Agreement, please contact us at:
          </p>
          <div className="ml-4">
            <p className="font-bold mb-2">Manthanam Experts Private Limited</p>
            <p className="mb-2">Address: A-92C, 2nd Floor, Right Side, Namberdar Estates, Taimoor Nagar, New Friends Colony, New Delhi – 110065</p>
            <p className="mb-2">Email: info@manthanexperts.com</p>
            <p className="mb-2">Phone: +91-9643 969 969</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsConditionsPage;