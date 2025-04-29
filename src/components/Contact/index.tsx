'use client';
import React, { useState } from 'react';
//@ts-ignore
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Headline from '../Common/Headline';
import { ContactProps } from '@/types/faq';
import PopUp from '../PopUp';
import { db } from '@/app/firebase';
import { addDoc, collection } from 'firebase/firestore';
import { useRouter } from 'next/navigation';

const ContactSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email address'),
  phone: Yup.string()
    .matches(/^(\+91)?\d{10}$/, 'Invalid phone number')
    .required('Phone number is required'),
  message: Yup.string(),
});

const Contact = ({ classNameContainer, headline }: ContactProps) => {
  const [openPopup, setOpenPopup] = useState(false);
  const [popUpTextToShow, setPopUpTextToShow] = useState('');
  const router = useRouter();
  
  const HandleRemovePopUp = () => setOpenPopup(false);
  
  const showModal = (popUpText) => {
    setPopUpTextToShow(popUpText);
    setOpenPopup(true);
  };
  
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      // Step 1: Save to Firestore
      console.log('Saving form data to Firestore...');
      const docRef = await addDoc(collection(db, 'customer-details'), {
        name: values?.name,
        email: values?.email,
        phone: values?.phone,
        message: values?.message,
        createdAt: new Date(),
      });

      if (!docRef.id) {
        throw new Error('Failed to submit the form to Firestore');
      }
      
      console.log('Form data saved to Firestore with ID:', docRef.id);

      // Step 2: Send email notification
      console.log('Sending email notification...');
      const emailResponse = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          phone: values.phone,
          message: values.message,
          documentId: docRef.id,
        }),
      });
      
      if (!emailResponse.ok) {
        const errorData = await emailResponse.json();
        console.warn('Email notification failed:', errorData);
      } else {
        const emailResult = await emailResponse.json();
        console.log('Email sent successfully:', emailResult);
      }

      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.setItem('formSubmitted', 'true');
      }
      
      // Show success message
      // showModal('Thank you! Your form has been submitted successfully.');
      
      // Reset the form
      resetForm();
      
      // Redirect after a short delay
      setTimeout(() => {
        router.push('/thank-you');
      }, 2000);
      
    } catch (error) {
      console.error('Error during form submission:', error);
      showModal('Oops! Something went wrong. Please try again later.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className={classNameContainer}>
      <PopUp openPopUp={openPopup} closePopUp={HandleRemovePopUp} popUpTextToShow={popUpTextToShow} />
      <div className="contact-form-bg mx-auto w-full bg-white/80 px-4 py-2 lg:px-6 xl:max-w-[540px] xl:py-10 ">
        {headline && (
          <Headline
            header={headline}
            titleClass="text-2xl md:text-3xl md:px-6"
            taglineClass=""
            subtitleClass="md:px-6"
          />
        )}

        <div className="px-0 sm:rounded-md md:px-6">
          <Formik
            initialValues={{ name: '', email: '', phone: '', message: '' }}
            validationSchema={ContactSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                <div className="mb-6 block">
                  <label htmlFor="name" className="hidden text-gray-700">
                    Your name
                  </label>
                  <Field
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name"
                    className="mt-1 block h-[50px] w-full border-2 border-border px-4"
                  />
                  <div className="text-red-500">
                    <ErrorMessage name="name" component="div" />
                  </div>
                </div>
                <div className="mb-6 block">
                  <label htmlFor="email" className="hidden text-gray-700">
                    Email address
                  </label>
                  <Field
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    className="mt-1 block h-[50px] w-full border-2 border-border px-4"
                  />
                  <div className="text-red-500">
                    <ErrorMessage name="email" component="div" />
                  </div>
                </div>
                <div className="mb-6 block">
                  <label htmlFor="phone" className="hidden text-gray-700">
                    Mobile Number
                  </label>
                  <Field
                    type="tel"
                    name="phone"
                    id="phone"
                    placeholder="Mobile Number"
                    className="mt-1 block h-[50px] w-full border-2 border-border px-4"
                  />
                  <div className="text-red-500">
                    <ErrorMessage name="phone" component="div" />
                  </div>
                </div>
                <div className="mb-6 block">
                  <label htmlFor="message" className="hidden text-gray-700">
                    Message
                  </label>
                  <Field
                    as="textarea"
                    name="message"
                    id="message"
                    placeholder="Message"
                    className="mt-1 block h-[100px] w-full border-2 border-border px-4"
                  />
                  <div className="text-red-500">
                    <ErrorMessage name="message" component="div" />
                  </div>
                </div>
                <div className="g-recaptcha" data-sitekey="6Lf6d-QpAAAAAJjH24XCH0lJX8U8kCJs1nXZu8pg"></div>
                <div className="mb-2">
                  <button 
                    type='submit'
                    disabled={isSubmitting}
                    className='bg-[#4fa447] w-full text-white rounded-10px border-none cursor-pointer inline-block font-arial text-lg text-center no-underline animate-glowing px-8 py-3 whitespace-nowrap font-medium'
                  >
                    {isSubmitting ? 'Please wait...' : 'Submit'}
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Contact;