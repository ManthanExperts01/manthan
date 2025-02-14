import { Metadata } from 'next';
import ThankYou from '@/components/ThankYou';

export const metadata: Metadata = {
  title: 'Thank You',

  twitter: {
    card: 'summary_large_image',
  },
};

// 'Oops! Something went wrong.
const ThankYouPage = () => {
  return (
    <>
      <ThankYou popUpTextToShow="Your information has been received successfully! An expert will contact you shortly." />
    </>
  );
};

export default ThankYouPage;
