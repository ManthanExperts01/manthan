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
  title: 'Bookkeeping & Accounting Services',
  description: SITE.description,
  twitter: {
    card: 'summary_large_image',
  },
};

const heroBannerData = {
  title: 'Bookkeeping & Accounting Services',
  subtitle: 'Years of Dedicated Expertise—Ensuring Financial Clarity, Accuracy, and Sustainable Growth',
  image: 'bookkeeping-and-accounting',
  list1: (
    <>
      Trusted by<span className="text-[#4fa447] font-bold"> 200+ </span>Clients
    </>
  ),
  list2: (
    <>
      Bookkeeping & Accounting Service Provided Till Now<span className="text-[#FF9B05] font-bold"> 700+ </span>
    </>
  ),
};
const heroBannerWithForm2Data = {
  title:
    'Turn Financial Data into Strategic Insights with Our Precise Bookkeeping and Accounting Services',
  bullets: [
    'Strong Books, Strong Business – Build Your Success on a Solid Foundation',
    'Leave Your Books to Us, Focus on Growing Your Business',
    'Affordable Expertise: Get the Best Value For Your Money',
  ],
};
const quotationCTAData = {
  bullets: ['Business Size & Structure', 'Reconciliations & Compliances Involved', 'Frequency of Reporting'],
};
const helpfulBlogsData = {
  title: 'Talk to Experts',
  contents: [
    'Optimize Financial Processes With Our Professional Bookkeeping Solutions. ',
    'We Handle Transactions, Reconciliations, and Reports With Accuracy, Keeping Records Organized and Compliant.',
    'Focus on Growth While We Manage The Numbers Efficiently.'
  ],
  lists: [
    {
      label: 'Accounting & Bookkeeping Tips to Keep Your Finances in Check',
      href: '/accounting--bookkeeping-tips-to-keep-your-finances-in-check',
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
