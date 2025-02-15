'use client';
import React, { useEffect } from 'react';
import Button from '../Button';
import Contact from '../Contact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { HeroBannerWithFormProps } from '@/types/faq';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FADE_UP_ANIMATION_VARIANTS } from '@/utils/animation';

const HeroBannerWithForm = ({ headline }: HeroBannerWithFormProps) => {

  useEffect(() => {
    let parallax = null;
    if (typeof window !== 'undefined') {
      parallax = document.getElementById('parallax');
      window.addEventListener('scroll', function () {
        let offset = window.scrollY;
        parallax.style.backgroundPositionY = offset * 0.3 + 'px';
      });
    }
  }, []);
  return (
    <div className="homepage flex w-full flex-col justify-between md:flex-row">
      <div className="mx-auto block w-full overflow-hidden lg:flex  xl:h-[800px]">
        <div className="flex w-full bg-secondary lg:justify-end">
          <div className="flex w-11/12 flex-col justify-between px-[20px] py-[40px] leading-normal lg:min-h-[700px] lg:max-w-[670px] lg:py-[90px] xl:pl-0 xl:pr-[120px] ">
            <div>
              {/* eyebrow heading */}
              {/* <p className="subtitle inline px-2 py-1 text-white">
                  Expert tax guidance
                </p> */}
              <h5 className="mb-2 pt-0 text-3xl font-medium tracking-tight text-white dark:text-white">
                Your Trusted Partner For Effective Tax Strategies & Seamless Compliances
              </h5>
            </div>
            <div>
              <p className="mb-3 font-normal text-white dark:text-gray-400">
                Unmatched Quality with Trusted CA Guidance. Book a consultation with our tax experts today.
              </p>
              <Link href="/contact" passHref>
                <Button
                  className=" border-2 bg-white p-3 text-base font-medium text-black transition duration-300 ease-in-out hover:border-white hover:bg-secondary hover:text-white"
                  buttonText=" Free consultation"
                />
              </Link>

              <div className="elementor-widget-container mt-8 text-white">
                <ul className="elementor-icon-list-items elementor-inline-items flex flex-wrap items-center">
                  <li className="flex pr-2  text-[15px]">
                    <span className="">
                      <FontAwesomeIcon className="w-[17px] opacity-20" icon={faCircleCheck} />
                    </span>
                    <span className="pl-2">Expert Help</span>
                  </li>
                  <li className="flex px-2 text-[15px]">
                    <span>
                      <FontAwesomeIcon className="w-[17px] opacity-20" icon={faCircleCheck} />
                    </span>
                    <span className="pl-2">Proven Results</span>
                  </li>
                  <li className="flex pt-2 text-[15px] xl:px-2 md:pt-0">
                    <span>
                      <FontAwesomeIcon className="w-[17px] opacity-20" icon={faCircleCheck} />
                    </span>
                    <span className="pl-2">Ongoing Support</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div id="parallax" className="homepageLeftContent relative w-full bg-center object-cover">
          <motion.div animate="show" initial="hidden" variants={FADE_UP_ANIMATION_VARIANTS}>
            <Contact
              headline={headline}
              classNameContainer="absolute top-8 lg:top-14 px-5 md:px-6 xl:pl-[120px] md:pt-6"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroBannerWithForm;
