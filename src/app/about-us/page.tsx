import SecondaryFooter from '@/components/SecondaryFooter';

interface HeroBannerData {
  title: string;
  image: string;
}

const AboutUsPage = () => {
  const heroBannerData: HeroBannerData = {
    title: '',
    image: 'aboutus',
  };
  return (
    <div className="font-sans">
      {/* Hero Banner */}
      {<HeroBanner {...heroBannerData} />}
      {/* Section 1 */}
      <HeroSection />

      {/* Section 2 */}
      <CommitmentSection />

      {/* Section 3 */}
      <TrustedPartnerSection />

      {/* Section 4 */}
      <StressFreeTaxSection />

      {/* Section 5 */}
      <ExpertiseSection />

      {/* Section 6 */}
      <WhyChooseSection />

      {/* Section 7 */}
      <OurCommitmentExcellence />

      <SecondaryFooter />
    </div>
  );
};

const HeroBanner = ({ title, image }: HeroBannerData) => {
  return (
    <section className="">
      <div className="relative h-[520px] ">
        <div
          style={{ backgroundImage: `url(/images/services/${image}.png)` }}
          className={`absolute inset-0 bg-cover bg-center z-0`}
        ></div>
        <div className="relative h-full flex items-center justify-center z-10">
          <h5 className="md:w-[800px] text-center font-bold text-3xl tracking-tight text-white dark:text-white lg:text-6xl">
            {title}
          </h5>
        </div>
      </div>
    </section>
  );
};
// Section 1: Hero Section
const HeroSection = () => {
  return (
    <div className="bg-[#052E26] text-white p-8 md:p-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold">
            Your One Stop Destination for <br /> Financial Services
          </h1>
        </div>

        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-3/5 pr-0 md:pr-8">
            <p className="text-lg mb-6">
              Manthan Experts specializes in delivering tailored financial and taxation consulting services. From Income
              Tax, GST, and Accounting to Audit and Payroll Management, we offer comprehensive solutions. Whether you're
              launching a new business or expanding your business, our end-to-end services ensure compliance,
              efficiency, and long-term success.
            </p>

            <p className="text-lg">
              We have extensive experience and a team of highly trained professionals dedicated to providing quick,
              efficient, and automated taxation and financial services. Our goal is to simplify complex processes for
              our clients, ensuring a hassle-free experience while maintaining high standards of service excellence.
            </p>
          </div>

          <div className="md:w-1/3 md:pl-8">
            <div className="bg-white rounded-lg p-6">
              <img
                src="/images/services/aboutus-1st-video.gif"
                alt="Financial services illustration"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Section 2: Commitment Section
const CommitmentSection = () => {
  const commitments = [
    'At Manthan Experts, we are committed to simplifying tax compliance and financial management for businesses and individuals. Our expert team ensures seamless tax filing, accurate accounting, and timely compliance with regulations',
    'We offer error-free and timely Income Tax Return (ITR) filing, helping individuals and businesses comply with tax laws efficiently. Our tax experts optimize your returns while ensuring 100% compliance.',
    'Our experienced professionals analyze your case, respond strategically, and provide end-to-end solutions to resolve tax disputes and notices effectively.',
    'We take care of GST registration, return filing, audits, and compliance, ensuring businesses meet their GST obligations smoothly. Stay compliant with our expert GST advisory and support.',
    'Our professional accounting and bookkeeping services help businesses maintain error-free financial records, ensuring smooth operations and informed decision making.',
    'We provide comprehensive audit and assurance services, ensuring financial accuracy, regulatory compliance, and transparency in financial reporting.',
    'We offer end-to-end payroll services, ensuring timely salary processing, compliance with tax regulations, and seamless employee payroll management.',
  ];

  return (
    <div className="bg-white p-8 md:p-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">Our Commitment</h2>

        <div className="flex flex-col md:flex-row">
          <div className="md:w-2/3 mb-8 md:mb-0">
            {commitments.map((commitment, index) => (
              <div key={index} className="flex mb-8">
                <div className="mr-4 mt-1">
                  <div className="text-[#052E26] flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div>
                  <p className="text-gray-800">{commitment}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="md:w-1/3 md:pl-8 flex items-center justify-center">
            <img
              src="/images/services/aboutus-2nd-video.gif"
              alt="Financial services illustration"
              className="w-full"
            />
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-800">
            At Manthan Experts, we believe in accuracy, compliance, and client-centric solutions. Our dedicated team
            ensures that businesses stay financially sound and legally compliant. We are more than just financial
            consultants – we are your trusted partners in success. With a deep understanding of financial regulations
            and industry best practices, we provide tailored solutions that ensure accuracy, compliance, and efficiency.
            Our dedicated team works tirelessly to simplify complexities, mitigate risks, and optimize financial
            strategies, allowing businesses to focus on growth and innovation. Whether it's taxation, audit, assurance,
            or advisory services, we stand by our commitment to excellence, integrity, and client satisfaction.
          </p>
        </div>
      </div>
    </div>
  );
};

// Section 3: Trusted Partner Section
const TrustedPartnerSection = () => {
  return (
    <div className="bg-[#052E26] text-white p-8 md:p-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold">
            Your Trusted Partner for Accounting, <br /> Tax & Compliance Solutions
          </h1>
        </div>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-3/5 pr-0 md:pr-8">
            <p className="text-lg mb-6">
              Since its establishment in 2013, Manthan Experts has grown into a trusted full-service accounting, tax,
              and audit firm, catering to businesses, entrepreneurs, and individuals across diverse industries. Our firm
              is built on a foundation of accuracy, integrity, and client-focused solutions, ensuring businesses meet
              their financial and regulatory obligations with ease.
            </p>

            <p className="text-lg">
              Alongside a team of highly experienced partners, Manthan Experts brings together chartered accountants,
              tax consultants, and industry professionals with extensive expertise in taxation, accounting, and
              compliance.
            </p>
          </div>

          <div className="md:w-1/3 md:pl-8">
            <div className="bg-white rounded-lg p-6">
              <img
                src="/images/services/aboutus-3rd-video.gif"
                alt="Team collaboration illustration"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Section 4: Stress-Free Tax Section
const StressFreeTaxSection = () => {
  return (
    <div className="bg-white p-8 md:p-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold mb-8">Your Gateway to Stress-Free Tax Solutions</h1>

          <p className="text-lg max-w-4xl mx-auto">
            Navigating the complexities of taxation requires a trusted partner. Manthan Experts provides top-notch
            income tax filing services and ITR solutions, ensuring compliance, accuracy, and peace of mind for
            individuals and businesses alike.
          </p>
        </div>

        <div className="flex justify-center">
          <img
            src="/images/services/aboutus-4th-video.gif"
            alt="Tax solutions illustration"
            className="max-w-full"
          />
        </div>
      </div>
    </div>
  );
};

// Section 5: Expertise Section
const ExpertiseSection = () => {
  const services = [
    {
      title: 'Income Tax E-Filing & Return Preparation',
      points: [
        'Hassle-free income tax return (ITR) filing for individuals, businesses, and corporations.',
        'Maximizing tax benefits while ensuring full compliance with income tax laws.',
        'Expert guidance on deductions, exemptions, and tax planning strategies.',
      ],
    },
    {
      title: 'Income Tax Notice Solutions & Representation',
      points: [
        'Professional assistance in responding to income tax notices, scrutiny assessments, and appeals.',
        'Thorough analysis of tax disputes, ensuring proper representation before tax authorities.',
        'Advisory on tax compliance to minimize future risks of non-compliance.',
      ],
    },
    {
      title: 'Comprehensive GST Services',
      points: [
        'End-to-end GST registration, return filing, reconciliation, and audit assistance.',
        'Expert advisory on Input tax credit (ITC), GST compliance, and regulatory changes.',
        'Resolution of GST notices and litigation matters with professional representation.',
      ],
    },
    {
      title: 'Accounting & Bookkeeping Services',
      points: [
        'Accurate record-keeping, ledger maintenance, and financial reporting.',
        'Implementation of cloud-based and automated accounting solutions for efficiency.',
        'Ensuring businesses maintain up-to-date financial records for strategic decision-making.',
      ],
    },
    {
      title: 'Audit & Assurance Services',
      points: [
        'Statutory audits, internal audits, tax audits, and forensic audits conducted by experienced professionals.',
        'Ensuring financial transparency, accuracy, and regulatory compliance.',
        'Risk assessment and internal controls to strengthen financial processes.',
      ],
    },
    {
      title: 'Payroll & HR Compliance Services',
      points: [
        'Efficient payroll processing, salary structuring, and tax deductions.',
        'Compliance with EPF, ESI, TDS, and labor law regulations.',
        'Seamless integration of payroll management with accounting systems.',
      ],
    },
  ];

  return (
    <div className="bg-[#052E26] text-white p-8 md:p-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
          Our Area of <span className="text-green-400">Expertise</span>
        </h2>

        <div className="mb-8">
          <p className="text-lg mb-6">
            We provide end-to-end financial and compliance solutions, ensuring that businesses remain compliant while
            optimizing their financial performance. Our core services include:
          </p>
        </div>

        <div className="flex flex-col md:flex-row flex-wrap">
          <div className="md:w-2/3">
            {services.map((service, index) => (
              <div key={index} className="mb-8">
                <h3 className="text-xl font-bold mb-4">
                  {index + 1}. {service.title}
                </h3>
                <ul className="list-disc pl-8">
                  {service.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="mb-2">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="md:w-1/3 md:pl-8 flex items-center justify-center">
            <div className="bg-white rounded-lg p-6">
              <img
                src="/images/services/aboutus-5th-video.gif"
                alt="Business meeting illustration"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Section 6: Why Choose Section
const WhyChooseSection = () => {
  const reasons = [
    {
      title: 'Team of Seasoned Professionals',
      description: 'Our experts bring years of experience in tax, accounting, and financial advisory.',
    },
    {
      title: 'Compliance & Accuracy First',
      description: 'We prioritize regulatory compliance, ensuring clients avoid legal and financial risks.',
    },
    {
      title: 'Technology-Driven Approach',
      description: 'We leverage advanced tools for seamless e-filing, bookkeeping, and financial management.',
    },
    {
      title: 'Client-Centric Solutions',
      description: "We tailor our services to meet each client's specific business needs.",
    },
    {
      title: 'Timely & Reliable Services',
      description: 'Meeting deadlines and ensuring smooth compliance with tax and financial regulations.',
    },
  ];

  return (
    <div className="bg-white p-8 md:p-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
          Why Choose <span className="text-green-600">Manthan Experts</span>?
        </h2>

        <div className="flex flex-col md:flex-row mb-16">
          <div className="md:w-2/3 mb-8 md:mb-0">
            {reasons.map((reason, index) => (
              <div key={index} className="flex mb-6">
                <div className="mr-4 mt-1">
                  <div className="text-green-600 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold mb-1">{reason.title}:</h3>
                  <p className="text-gray-800">{reason.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="md:w-1/3 md:pl-8 flex items-center justify-center">
            <img
              src="/images/services/aboutus-6th-video.gif"
              alt="Illustration of professional at work"
              className="w-full max-w-xs"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const OurCommitmentExcellence = () => {
  return (
    <div className="bg-[#052E26] text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-5xl font-bold mb-6 text-center">
          Our <span className="text-green-400">Commitment</span> to Excellence
        </h2>

        <p className="text-center mb-8">
          At Manthan Experts, we uphold the highest standards of professionalism, integrity, and accountability. Our
          mission is to exceed client expectations by delivering reliable, high-quality, and innovative accounting, tax,
          and audit services. Our professionals continually enhance their knowledge to provide solutions that are not only
          accurate but also strategically aligned with our clients' financial goals.
        </p>

        <p className="text-center mb-8">
          We aim to build long-term relationships based on trust, transparency, and success, ensuring that our clients
          receive the best financial guidance for their business growth.
        </p>

        <div className="flex justify-center">
        <img
            src="/images/services/aboutus-7th-video.gif"
            alt="Thumbs up illustration"
            className="max-w-xs"
          />
        </div>
      </div>
    </div>
  );
};


export default AboutUsPage;
