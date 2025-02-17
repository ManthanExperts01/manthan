'use client';
import Image from 'next/image';
import Person from '../Icons/About/Person';
import Calendar from '../Icons/About/Calendar';
import Lamp from '../Icons/About/Lamp';
import Book from '../Icons/About/Book';
import Headline from '../Common/Headline';
import { AboutSectionTwoProps } from '@/types/faq';
import { motion } from 'framer-motion';
import { useMemo } from 'react';
import getScrollAnimation from '@/utils/getScrollAnimation';
import ScrollAnimationWrapper from '../ScrollAnimationWrapper';

const AboutSectionTwo = ({ headline }: AboutSectionTwoProps) => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  return (
    <section className="pb-16 md:pb-20 lg:pb-20">
      <div className="">
        <div className="flex flex-wrap items-center bg-lightGray">
          <div className="flex w-full flex-wrap justify-end bg-lightGray px-6 lg:pr-28 pt-10 lg:w-1/2 lg:pt-0">
            <div
              className="relative mx-auto mb-12 max-w-[550px] text-left md:aspect-[25/24] lg:m-0"
              data-wow-delay=".15s"
            >
              {headline && <Headline header={headline} titleClass="text-3xl md:text-5xl" taglineClass="bg-white" />}
              <div className="py-10 md:py-0">
                <div className="relative mx-auto h-[203px] w-[210px] overflow-hidden rounded-full md:h-[290px] md:w-[300px]">
                  <Image src="/images/gurantee-logo.png" alt="author" fill className="h-full w-full" />
                </div>
              </div>

              <p className="mt-12">
                Our Consultants Handles Consultation And Legal Work Through Mobile Phone, e-mail and Our Secure Client Portal For Maximum Convenience and Security.
              </p>
            </div>
          </div>

          <div className="w-full bg-secondary px-4 pt-6 text-white lg:w-1/2">
            <div className="w-full md:w-11/12 lg:max-w-[500px]">
              <ScrollAnimationWrapper>
                <motion.div variants={scrollAnimation} className="mb-9 ml-1 flex items-center lg:ml-20">
                  <Person />
                  <div>
                    <h3 className="textblack mb-4 text-2xl font-normal dark:text-white">
                      Year-Round Assistance
                    </h3>
                    <p className="textbody-color text-base font-medium">
                      From Start to Finish, We Offer Continuos Support.
                    </p>
                  </div>
                </motion.div>
                <motion.div variants={scrollAnimation} className="mb-9 ml-1 flex items-center lg:ml-20">
                  <Calendar />
                  <div>
                    <h3 className="textblack mb-4 text-2xl font-medium dark:text-white">
                      Each Case is Handled Separately
                    </h3>
                    <p className="textbody-color text-base font-medium">
                      A Personalized Strategy Crafted Exclusively for your Situation.
                    </p>
                  </div>
                </motion.div>
                <motion.div variants={scrollAnimation} className="mb-9 ml-1 flex items-center lg:ml-20">
                  <Lamp />
                  <div>
                    <h3 className="textblack mb-4 text-2xl font-medium dark:text-white">Chat with Our Expert</h3>
                    <p className="textbody-color text-base font-medium">
                      Our Team of Professionals is Accessible for Instant Chat Sessions.
                    </p>
                  </div>
                </motion.div>
                <motion.div variants={scrollAnimation} className="mb-9 ml-1 flex items-center lg:ml-20">
                  <Book />
                  <div>
                    <h3 className="textblack mb-4 text-2xl font-medium dark:text-white">
                      Valuable Resources To Empower Your Decisions
                    </h3>
                    <p className="textbody-color text-base font-medium">
                      Access Top-Tier Consultants Providing The Latest and Most Comprehensive Information
                    </p>
                  </div>
                </motion.div>
              </ScrollAnimationWrapper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
