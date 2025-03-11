import HeroBanner from '@/components/Common/HeroBanner';
import HeroBannerWithForm2 from '@/components/HeroBannerWithForm2';
import QuotationCTA from '@/components/Common/QuotationCTA';
import HelpfulBlogs from '@/components/Common/HelpfulBlogs';
import SecondaryFooter from '@/components/SecondaryFooter';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';

import { faqsData } from '@/shared/contact.data';
import { headlineTestimonials } from '@/shared/headline.data';
import { headlineDataContact2 } from '@/shared/headline.data';

import { Metadata } from 'next';
import { SITE } from '@/utils/site';

export const metadata: Metadata = {
  title: 'Payroll Services (PF & ESIC)',
  description: SITE.description,
  twitter: {
    card: 'summary_large_image',
  },
};

const heroBannerData = {
  title: 'Payroll Services (PF & ESIC)',
  subtitle: 'Reliable Services With Years of Expertise—Keeping Your Workforce Paid Accurately and on Time, Every Time.',
  image: 'payroll',
  list1: (
    <>
      Trusted by<span className="text-[#4fa447] font-bold"> 200+ </span>Clients
    </>
  ),
  list2: (
    <>
      Payroll Services Provided Till Now<span className="text-[#FF9B05] font-bold"> 200+ </span>
    </>
  ),
};
const heroBannerWithForm2Data = {
  title: 'Reducing Complexity, Ensuring Compliance, and Enhancing Employee Satisfaction—We Manage it All.',
  bullets: [
    'Seamless & Smooth Operations With Our Reliable Payroll Solutions',
    'High-Quality Services, Cost-Effective Solutions',
    'Prevent Litigation & Promote Collaboration',
  ],
};
const quotationCTAData = {
  bullets: ['Number of Employees', 'Scope of Service', 'Frequency of Reporting'],
};
const helpfulBlogsData = {
  title: 'Talk to Experts',
  contents: [
    'Secure Your Business’s Payroll Management With Our Reliable Services.',
    'We Ensure Accuracy and Timeliness, Helping You Navigate Tax and Compliance Requirements For a Smooth Business Operation.',
  ],
  lists: [
    {
      label: 'ESIC Registration Made Easy Process, Benefits, Documents',
      href: '/esic-registration-made-easy-process-benefits-documents',
    },
    {
      label: 'Complete Guide on EPF(Employee’s Provident Fund)',
      href: '/articles-link',
    },
  ],
};

export default function Page() {
  return (
    <>
      {<HeroBanner {...heroBannerData} />}
      {headlineDataContact2 && <HeroBannerWithForm2 {...heroBannerWithForm2Data} {...headlineDataContact2} />}
      {<QuotationCTA {...quotationCTAData} />}
      {<HelpfulBlogs {...helpfulBlogsData} />}
      {<SecondaryFooter />}
      {headlineTestimonials && <Testimonials {...headlineTestimonials} />}
      {faqsData && <FAQ {...faqsData} />}
    </>
  );
}
