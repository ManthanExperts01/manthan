'use client';
import React, { useEffect, useState } from 'react';
import CTA from '../Common/CTA';
import { CallToActionType } from '@/types/faq';
import { useRouter } from 'next/navigation';

const ThankYou = ({ popUpTextToShow }) => {
  const callToAction: CallToActionType = {
    text: 'See Our Blogs',
    href: '/blogs',
  };
  const router = useRouter();
  const [isRedirecting, setIsRedirecting] = useState(false);

//   useEffect(() => {
//     const checkFormSubmission = () => {
//       try {
//         const formSubmitted = localStorage.getItem('formSubmitted');
//         if (formSubmitted !== 'true') {
//           // Redirect to home page if the form has not been submitted
//           router.push('/');
//         } else {
//           // Flag is present, allow the user to stay on the Thank You page
//           // Set a state to manage redirection
//           setIsRedirecting(true);
//         }
//       } catch (error) {
//         console.error('Error accessing localStorage:', error);
//         router.push('/'); // Redirect to a fallback page if there's an error
//       }
//     };

//     checkFormSubmission();
//   }, [router]);

//   useEffect(() => {
//     if (isRedirecting) {
//       // Clear the flag after the page is rendered
//       try {
//         localStorage.removeItem('formSubmitted');
//       } catch (error) {
//         console.error('Failed to remove localStorage item:', error);
//       }
//     }
//   }, [isRedirecting]);
  return (
    <div id="ModelContainer" className="flex justify-center items-center">
      <div className="p-2  py-5 relative">
        <div className="w-full p-8 justify-center items-center flex flex-col">
          <h2 className="font-semibold py-3 text-center text-xl">{popUpTextToShow}</h2>
          <CTA
            callToAction={callToAction}
            linkClass="bg-secondary dark:bg-white dark:text-black m-1 px-4 py-2 text-white text-md font-normal shadow-none md:px-6"
          />
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
