"use client"
import TestimonialCarousel from '../Carousel';
import Headline from '../Common/Headline';
import { TestimonialsProps } from '@/types/faq';
import ScrollAnimationWrapper from '../ScrollAnimationWrapper';
import { motion } from 'framer-motion';
import TestimonialSection from './TestimonialSection';
import { useMemo } from 'react';
import getScrollAnimation from '@/utils/getScrollAnimation';

const Testimonials = ({ headline, testimonialData }: TestimonialsProps) => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  return (
    <section className="relative z-10 bg-white py-16 dark:bg-bg-color-dark md:py-20 lg:py-28">
      <div className="container">
        {headline && <Headline taglineClass="bg-lightGray" header={headline} titleClass="text-3xl md:text-5xl" />}
        {/* {testimonialData && (
          <TestimonialCarousel carouselData={testimonialData} />
        )} */}
        <ScrollAnimationWrapper className="w-full flex flex-col py-12">
          <motion.div variants={scrollAnimation}>
            <TestimonialSection carouselData={testimonialData}/>
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
};

export default Testimonials;
