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
  title: 'ITR Filing Services in Delhi',
  description: 'Get accurate and fast ITR filing services in Delhi, Gurugram, Noida, Faridabad, Ghaziabad with expert tax consultants. Affordable pricing, free consultation and timely income tax return filing.',
  twitter: {
    card: 'summary_large_image',
  },
};

const heroBannerData = {
  title: 'We Handle The ITR Complexity, You Enjoy The Simplicity',
  subtitle: 'A Legacy of 15+ Years in Expertise of ITR Filing & Tax Consultancy',
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
  title: 'Team of Professionals',
  contents: [
    'Our Team of Tax Professionals Provides Expert Guidance and Support to Simplify the Complexities of Income Tax Return Filing.',
    'We Conduct a Thorough Analysis of Your Financial Situation, Identify Eligible Tax Benefits and Deductions, and Help You Make Informed Decisions to Optimize Your Tax Position Effectively.',
  ],
  lists: [
    {
      label: 'Who is Required to File Income Tax Returns (ITR) in India?',
      href: '/who-is-required-to-file-income-tax-returns-itr-in-india',
    },
    {
      label: 'Different Income Tax Forms You Should Know Before Filing',
      href: '/different-income-tax-forms-you-should-know-before-filing',
    },
    {
      label: 'Benefits of Filing Income Tax Return',
      href: '/benefits-of-filing-income-tax-return',
    },
    {
      label: 'Income Tax Penalty for Late Filing & Non-Compliance',
      href: '/income-tax-penalty-for-late-filing--non-compliance',
    },
  ],
};

export default function Page() {
  return (
    <>
      {<HeroBanner {...heroBannerData} />}
      {headlineDataContact2 && <HeroBannerWithForm2 {...heroBannerWithForm2Data} {...headlineDataContact2} />}
      {headlinePricing && <Pricing {...headlinePricing} />}
      {<HelpfulBlogs {...helpfulBlogsData} />}
      {<SecondaryFooter />}
      {headlineTestimonials && <Testimonials {...headlineTestimonials} />}
      {faqsData && <FAQ {...faqsData} />}
    </>
  );
}
