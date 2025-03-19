import SecondaryFooter from '@/components/SecondaryFooter';

interface HeroBannerData {
  title: string;
  image: string;
}

const AboutUsPage = () => {
  const heroBannerData: HeroBannerData = {
    title: 'About Us',
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
                src="https://s3-alpha-sig.figma.com/img/fcdf/eb30/13770ad46783b68a6e8942a997634482?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=oHBgyVDiq1Fxfz~QINngN1fGCYB3JrkdJ9jnvCAfBk14pEB-OaLilmnCNe4rp6tFDjX4hgkG7TX5dSMprkt8SGMr7TuN6hzT5cRlFQ1I31Vi4T5zq2bxTa8fl77oWJc1mGNlXiu87Whb2e7VVp2BEDxeQIEwW0JwTUsXjRvSMKadVu7B1DdWu9M7IQ6CosD7yGqBUTQpgKYNbo9Ta~UTWPmFvP4pgZwtd9~aKRm91Yco6tFFfHBrX3arXwl4epzCUPC3vlz-ZzOapHxsERoNjxTchrjR9rOnsNS7rzP9Z0gSYrckyrHuZyOKCZVqhC36hmYiCz4B5WwU8~CuXL-V6Q__"
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
              src="https://s3-alpha-sig.figma.com/img/c9f9/6892/c045a4f52eb652220fed1f46912f4ec9?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=sLzV-3yNhHsFAYnHwZwGN7NsFvOPPm6GbIl~DKxRrUWtXg0HHFE1Ank6nnVfzQVf0aAAh5GcNT8~8Id5y3Wbh1VOFNWiuzUxSDtHzSlmzKz18jEW-Ix1O2lSMUHPTt40jZ6rsEQDfeGv1Tu0vcvEwefA8nC8G5CcdN6abhFDDDkW2hnQUWgaVGtniXEWJUqJB~WPAKKkF0JpZ7EQrsZKPSuwXWAAZJ3xkA9qbJbL2UMqCoYYNQmMTbwAc9Ox2uZGCbqzc0~HnKZKOhmk9EP9B2DEgytGOv2eVhHW2TD~HxUpMlfTrwZ6dzrbJZk2ZY~~scWR3B2-nqQIU9Fcd84j6Q__"
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
                src="https://s3-alpha-sig.figma.com/img/1655/0cd0/64b0faa6ef7b9a1778902e6f864b0fde?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=jE~9PFbgF9Lf7teLFbNo4x-P-eMEDUTDt1glAwYLME5XECixV6VQoZEOKBKdT8CVqmEe4-WqWI~ZC6YXYfJFPYoAODw2lHhSVZVTuEDVe0LT5NjiMcFrcI~2pbraEopZtCyzYzTNNfFWKrkLk~ySFz8Ox03NGsk9Cz~btCCZym--mvcFXQ9sddLO5i1u~rdDbCSMFgBwRpxhq37X5Cpb7z6erzNt3SxnByeFO75paAjll2~VlcU0NsAKgpwoeGoWvXFC19zXIU6BMGe2EteuXnyquC0gYLFqLD1AH1LkQJJwN0S8Rukb5B087bPIOilWMy1O~sA9uYKUoDCQPkgZ5A__"
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
            src="https://s3-alpha-sig.figma.com/img/2bdd/b0a0/7797fd5697cee85d9090e4b780be0b73?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=fSCZ0yuG4k5Yra8Df~8mkleUSNp656KETDO7FiVfd0401-VfMdeaPa~aN2CyKeB-yWhGilyz-t-1P0vrgGqDJ~uyYNEecsXKk2MB84ztj5ZsZr5-a3FPNc3Co8jCMrQjKoAMS6CTRfsDNmbqM7AaTgIXRM~1fxCHj6kdbsi2Wrb5dkXNcyr5Hx4ZP5cHZGu3l48f-gJ6VcVGvQlh5QYpBvACcPRvsN2yAwUNHzeSjedONTqJxHcF~uxKosQsHzIMySLkA51CJbcS6libzY8GAsug7Pq0ln6hyKaiYmzWYHC8B936xHW1pQkL0mYxsDxz~hPR6eQ8AsVTeoOrAzJ~7g__"
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
      title: 'Comprehensive GST Management',
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
                src="https://s3-alpha-sig.figma.com/img/db24/2962/cb05def0d9f72105537b1e6468d20cfb?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=i6E7RrOawCXuTODbh59h1zloy4Y4GAP0pKlMWDTxEm~zoqfdaJg0jq8DVw26bK6yfSWfuo0pmH82R4SAt1OIQPPgcKkP9p0kHnaTGjr~naNjctw5lNgndp3kblZvnUVc5VdpOpo4V3cemy5TIzwi5L5jrWXH~P0YK7bOncXUfUmtgheaMxfzY-GnOeAZP3sY~nF744ORStC9NOdRNDn-hmy9qMLgW~nb79OPn~jCupjSvOobW8m1Qjj3Jk8Nu~4wwhqlNweVQplwOt0NUHxs8KtEkAkho6NMxX5VbqL0TANrLraq4sa2JAJdocXslD9jIBHXjPWTw9VfjtKPrJ~c0w__"
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
              src="https://s3-alpha-sig.figma.com/img/60e6/fa2c/8e736ba040fbe0e45a3327bc73fad521?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=m90cXggYHw4Ddo~i2ZBntPIKYdZI8tPAAl3qXEls2rv~NM5mMmG1Ioxd~nGPWGNTPE6mRhaMqukakZA6fWfD3fLUwiWfzAgGcJsvWu82akDmaIju7y7FhHxLwwPzCzCQoZxgqMCq5WoU7R3QfDRrav2MF~VGTdgxoSYG0ukNLnb-ZsQWJblAKIJpIF~yUeeTFrKt2mTOXbXKK3GVHCnmTF0j9CdU3Nvutaz3ryxsSkWmS~hpcGdHxEeFHUFIFwDWf5G4vrvfVEKP6FXEu8nTuQ5jIp3kO807bU30gYEsvtpiiv13LGpgaxgHNunVbjaENM6iaWIVU3ljZe-XHCqnhw__"
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
            src="https://s3-alpha-sig.figma.com/img/f164/c5ad/0d4e36dadf161906aa451647f5915802?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=jtlyCeD50wGFOY0C20oK8~6tJBJIeEeQuCCmYgprlNx9MdiDXjRCFj7Nu0fyyu6pQ9yYYk2PPjqWpivpX8dLg-MOsAiNV2atxft3~HpLq3iSwJytCqCG0fmNXdvmMl2RiwfL0DVQNSJZxUi3n9S6JZhX3AzoXeK-I78KbqH4AaZLlm35wUQxW7mR77-REgb~pPs8EisN3TJ06l-vJNpMTLv1K8UTUhJBfk2DyVYUpNI9zVvSsltQ-1geHIxUVrexQjp8NzcDd6v7DLvE3ZPJLXC64u~YSdfjXl9yah-Ag1c-1e~OfRdI7g5r9QcEp-YzZlDfvgYyUZWwQRpmcWMaYQ__"
            alt="Thumbs up illustration"
            className="max-w-xs"
          />
        </div>
      </div>
    </div>
  );
};


export default AboutUsPage;
