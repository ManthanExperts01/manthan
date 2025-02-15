
import AboutSectionTwo from '@/components/About/AboutSectionTwo';
import BannerHorizontal from '@/components/BannerHorizontal';
import { Metadata } from 'next';
import Features from '@/components/Features';
import HeroBannerWithForm from '@/components/HeroBannerWithForm';
import Pricing from '@/components/Pricing';
import Testimonials from '@/components/Testimonials';
import { faqsData } from '../shared/contact.data';
import FAQ from '@/components/FAQ';
import SecondaryFooter from '@/components/SecondaryFooter';
import {
  headlineDataAboutSectionOne,
  headlineDataContact,
  headlineDataFeatures,
  headlinePricing,
  headlineTestimonials,
  stepsfeatureDataCollection,
} from '@/shared/headline.data';
import StepsFeature from '@/components/StepsFeature';
import { SITE } from '@/utils/site';
export const metadata: Metadata = {
  title: 'Financial Advisor - Manthan Experts',
  robots: 'index, follow',
  description: SITE.description,
  twitter: {
    card: 'summary_large_image',
  },
};

export default function Home() {
  return (
    <>
      {headlineDataContact && <HeroBannerWithForm {...headlineDataContact} />}
      {headlineDataFeatures && <Features {...headlineDataFeatures} />}
      {headlineDataAboutSectionOne && <AboutSectionTwo {...headlineDataAboutSectionOne} />}
      {stepsfeatureDataCollection && <StepsFeature stepsfeatureDataCollection={stepsfeatureDataCollection} />}
      <BannerHorizontal />
      {headlineTestimonials && <Testimonials {...headlineTestimonials} />}
      {/* {headlinePricing && <Pricing {...headlinePricing} />} */}
      {faqsData && <FAQ {...faqsData} />}
      <SecondaryFooter />

    </>
  );
}
