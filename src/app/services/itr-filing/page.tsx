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
    'Our team of tax professionals provides expert guidance and support to simplify the complexities of income tax return filing.',
    'We conduct a thorough analysis of your financial situation, identify eligible tax benefits and deductions, and help you make informed decisions to optimize your tax position effectively.',
  ],
  lists: [
    {
      label: 'Eligibility for filing Income Tax Return',
      href: '/articles-link',
    },
    {
      label: 'Types of income Tax Forms',
      href: '/articles-link',
    },
    {
      label: 'Benefits of Filing Income Tax Return',
      href: '/articles-link',
    },
    {
      label: 'Income Tax Penalty',
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
      {<HelpfulBlogs {...helpfulBlogsData} />}
      {<SecondaryFooter />}
      {headlineTestimonials && <Testimonials {...headlineTestimonials} />}
      {faqsData && <FAQ {...faqsData} />}
    </>
  );
}
