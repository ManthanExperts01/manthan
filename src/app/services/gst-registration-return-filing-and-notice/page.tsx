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
  title: 'GST Registration, Return Filing and Notice Services',
  description: SITE.description,
  twitter: {
    card: 'summary_large_image',
  },
};

const heroBannerData = {
  title: 'Comprehensive GST Solutions: Quick Registration, Accurate Filing, and Proactive Notice Management',
  subtitle: 'Decades of Expertise in GST – Precise, Practical, and Punctual',
  image: 'gst-registration-return-filing-and-notice',
  list1: (
    <>
      Trusted by<span className="text-[#4fa447] font-bold"> 10,00+ </span>Clients
    </>
  )
};
const heroBannerWithForm2Data = {
  title: 'Leading The Way in GST – Where Expertise Meets Efficiency.',
  bullets: [
    'Your GST Journey Starts Here – Clear Guidance, Effective Solutions.',
    'Stay Ahead in GST Filing With Affordable Pricing.',
    'Dealing With GST Queries? We’re Here to Resolve Them, Step by Step!',
  ],
};
const quotationCTAData = {
  bullets: ['Type of Business', 'Turnover & Complexity Involved', 'GST Audit & Compliance Requirements'],
};
const helpfulBlogsData = {
  title: 'Talk to Experts',
  contents: [
    'Our Dedicated GST Team Offers Comprehensive Solutions to Help You Navigate the Complexity of GST Regulations.',
    'We Assess Your Liabilities, Identify Available Reliefs, and Develop Effective Strategies For Compliance and Financial Savings.',
  ],
  lists: [
    {
      label: 'GST Registration, Process, Eligibility & Documents Required',
      href: '/articles-link',
    },
    {
      label: 'GST Returns',
      href: '/articles-link',
    },
    {
      label: 'Composition Scheme',
      href: '/articles-link',
    },
    {
      label: 'Input Tax Credit',
      href: '/articles-link',
    },
    {
      label: 'Reverse Charge Machenism (RCM)',
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
