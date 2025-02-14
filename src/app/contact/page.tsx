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
        title="Have a question or feedback?"
        pageName="Contact"
        description="Reach out to us – we are here to assist you. Contact our dedicated team for prompt support and assistance."
      />

      {headlineDataContact && <ContactUsHorizontalCard {...headlineDataContact} />}
      {headlineTestimonials && <Testimonials {...headlineTestimonials} />}
      {faqsData && <FAQ {...faqsData} />}
      <Maps />
    </>
  );
};

export default ContactPage;
