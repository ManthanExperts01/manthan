import HeroBanner from '@/components/Common/HeroBanner';
import HeroBannerWithForm2 from '@/components/HeroBannerWithForm2';
import QuotationCTA from '@/components/Common/QuotationCTA';
import HelpfulBlogs from '@/components/Common/HelpfulBlogs';
import SecondaryFooter from '@/components/SecondaryFooter';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';

import { faqsData } from '@/shared/contact.data';
import { headlinePricing, headlineTestimonials } from '@/shared/headline.data';
import { headlineDataContact2 } from '@/shared/headline.data';

import { Metadata } from 'next';
import { SITE } from '@/utils/site';
import Pricing from '@/components/Pricing';

export const metadata: Metadata = {
  title: 'From Notices to Resolutions - All Services',
  description: SITE.description,
  twitter: {
    card: 'summary_large_image',
  },
};

const heroBannerData = {
  title: 'From Notices to Resolutions - We Handle It All',
  subtitle: 'Years of Trusted Guidance For All Income Tax Matters – Effective, Efficient, and Reliable',
  image: 'itr',
  list1: (
    <>
      Trusted by<span className="text-[#4fa447] font-bold"> 10,000+ </span>Clients
    </>
  ),
  list2: (
    <>
      ITR Filled<span className="text-[#FF9B05] font-bold"> 50,000+ </span>Till Now
    </>
  ),
};
const heroBannerWithForm2Data = {
  title: 'File ITR From Home - Save Time, Save Money, No Office Visits Needed',
  bullets: [
    'Personalized Year - Round Customer Support, Always by Your Side',
    'Tailored Tax Strategies Designed Just for You!',
    'Clear Prices, No Surprises'
  ],
};
const quotationCTAData = {
  bullets: ['Thorough Assessment', 'Fair and Accurate Evaluation', 'Analyzing The Complexity and Requirements'],
};
const helpfulBlogsData = {
  title: 'Talk to Experts',
  contents: [
    'Our Team of Chartered Accountant Provides Comprehensive Assistance With Income Tax Notices & Demand Assessment, Helping You Navigate Complex Regulations.',
    'We Analyze The Income Tax Notices, Assesses The Demand, Identify Potential Reliefs, and Offer Strategic Solutions to Ensure Compliance While Minimizing Financial Impact.',
  ],
  lists: [
    {
      label: 'Types of Income Tax Notices (Sections & Reasons)',
      href: '/articles-link',
    },
    {
      label: 'Defective Notice & Faceless Scrutiny',
      href: '/articles-link',
    },
    {
      label: 'Preventive Measures to Avoid Notices & Demand',
      href: '/articles-link',
    },
  ],
};

export default function Page() {
  return (
    <>
      {<HeroBanner {...heroBannerData} />}
      {headlineDataContact2 && <HeroBannerWithForm2 {...heroBannerWithForm2Data} {...headlineDataContact2} />}
      {headlinePricing && <Pricing {...headlinePricing} />}
      {<QuotationCTA {...quotationCTAData} />}
      {<HelpfulBlogs {...helpfulBlogsData} />}
      {<SecondaryFooter />}
      {headlineTestimonials && <Testimonials {...headlineTestimonials} />}
      {faqsData && <FAQ {...faqsData} />}
    </>
  );
}
