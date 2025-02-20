import Breadcrumb from '@/components/Common/Breadcrumb';
import Maps from '@/components/Maps';
import { Metadata } from 'next';
import FAQ from '@/components/FAQ';
import { faqsData } from '../../shared/contact.data';
import ContactUsHorizontalCard from '@/components/ContactUsHorizontalCard';
import { headlineDataContact, headlineTestimonials } from '@/shared/headline.data';
import Testimonials from '@/components/Testimonials';

export const metadata: Metadata = {
  title: 'Contact',

  twitter: {
    card: 'summary_large_image',
  },
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        title="Have a Question or Feedback?"
        pageName="Contact"
        description="Reach Out to Us - We are Here to Assist You. Contact Our Dedicated Team for Prompt Support and Assistance."
      />

      {headlineDataContact && <ContactUsHorizontalCard {...headlineDataContact} />}
      {headlineTestimonials && <Testimonials {...headlineTestimonials} />}
      {faqsData && <FAQ {...faqsData} />}
      <Maps />
    </>
  );
};

export default ContactPage;
