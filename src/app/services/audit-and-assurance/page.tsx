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
  title: 'Audit & Assurance Services',
  description: SITE.description,
  twitter: {
    card: 'summary_large_image',
  },
};

const heroBannerData = {
  title: 'Audit & Assurance Services',
  subtitle: 'Years of Expertise—Helping You Navigate Financial Risks and Maintain Integrity.',
  image: 'audit-and-assurance',
  list1: (
    <>
      Trusted by<span className="text-[#4fa447] font-bold"> 200+ </span> Clients
    </>
  ),
  list2: (
    <>
      Audit & Assurance Services Provided Till Now<span className="text-[#FF9B05] font-bold"> 200+ </span>
    </>
  ),
};
const heroBannerWithForm2Data = {
  title:
    'Premier Audit Services by a Dedicated Team of Expert CAs!',
  bullets: [
    'Ensure Statutory Compliance, Gain Clarity, and Strengthen Business Stability.',
    'Safeguard Your Business From Regulatory Challenges While Driving Growth Through Reliable, Transparent, and Insightful Financial Guidance.',
    'Top-Tier Services At a Price That Makes Sense',
  ],
};
const quotationCTAData = {
  bullets: ['Types of Audit (Statutory/Tax/GST)', 'Internal Controls & Systems', 'Business Scale and Financial Volume'],
};
const helpfulBlogsData = {
  title: 'Talk to Experts',
  contents: [
    'With a Deep Understanding of Industry Regulations and Best Practices, We Provide Comprehensive Audit Services Designed to Offer You Clear Insights, Actionable Recommendations, and The Confidence to Make Informed Decisions.',
    'Trust Our Expertise to Safeguard Your Financial Integrity and Support Your Long-Term Success.',
  ],
  lists: [
    {
      label: 'Statutory Audit',
      href: '/articles-link',
    },
    {
      label: 'Tax Audit',
      href: '/articles-link',
    },
    {
      label: 'GST Audit: Types, Process, and Requirements',
      href: '/gst-audit-types-process-and-requirements',
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
