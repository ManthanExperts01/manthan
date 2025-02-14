'use client';
import Image from 'next/image';
import Contact from '../Contact';
import { ContactUsHorizontalCardProps } from '@/types/faq';
import { motion } from 'framer-motion';
import ScrollAnimationWrapper from '../ScrollAnimationWrapper';
import { useMemo } from 'react';
import getScrollAnimation from '@/utils/getScrollAnimation';

const ContactUsHorizontalCard = ({ headline }: ContactUsHorizontalCardProps) => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  const description = `The team's exceptional service and proactive advice have
  been instrumental in optimizing our financial processes.`;

  return (
    <ScrollAnimationWrapper>
      <motion.section
        id="about"
        className="pt-16 md:pt-20 relative z-10"
        variants={scrollAnimation} // Apply animation variants to the entire card
      >
        <div className="container">
          <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
            <div className="lg:px-10 w-full xl:flex flex-wrap ">
              <div className="bg-lightGray contactBg w-full xl:w-1/2">
                <motion.div className="w-full bg-lightGray">{headline && <Contact headline={headline} />}</motion.div>
              </div>
              <div className="w-full xl:w-1/2 relative overflow-hidden">
                <div className="relative mx-auto h-full img-gradient">
                  <Image
                    src="/images/tax-banner-image.png" // Ensure the path is correct
                    alt="about-image"
                    layout="responsive" // Change to responsive layout
                    width={800} // Set a width suitable for your image
                    height={600} // Set a height suitable for your image
                    objectFit="cover" // Ensures the image covers the entire container without stretching
                    className="drop-shadow-three dark:hidden dark:drop-shadow-none"
                  />
                </div>
                <div
                  className="absolute bottom-0 px-10 md:px-12 xl:px-20 text-white text-[24px] leading-normal"
                  data-id="be1113f"
                  data-element_type="container"
                  data-settings='{"background_background":"classic"}'
                >
                  <div
                    className="pb-12"
                    data-id="acfd478"
                    data-element_type="widget"
                    data-settings='{"_animation":"fadeInUp","_animation_delay":200,"ekit_we_effect_on":"none"}'
                    data-widget_type="heading.default"
                  >
                    <div>
                      {/* <h4>{description}</h4> */}
                      <h4>
                        {`Optimize your tax filing experience with the guidance of seasoned CAs and unlock the maximum benefits.`}
                      </h4>
                    </div>
                  </div>
                  {/* <div className="text-[17px] pb-10">
                    <h6>Claire Olson</h6>
                    <p>Founder &amp; CEO</p>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </ScrollAnimationWrapper>
  );
};

export default ContactUsHorizontalCard;
