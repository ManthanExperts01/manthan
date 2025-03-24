'use client';
import React, { useEffect } from 'react';
import Button from '../Button';
import Contact from '../Contact';
import { HeroBannerWithForm2Props } from '@/types/faq';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FADE_UP_ANIMATION_VARIANTS } from '@/utils/animation';
import { GlowingButton } from '../Header';

const HeroBannerWithForm2 = ({ headline, title, bullets }: HeroBannerWithForm2Props) => {
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
      <div className="flex flex-col lg:flex-row w-full ">
        <div className="flex w-full bg-secondary lg:justify-end">
          <div className="flex w-11/12 flex-col px-[20px] py-[40px] leading-normal lg:min-h-[700px] lg:max-w-[670px] gap-10 lg:p-[40px] xl:pl-0">
            <div>
              <h5 className="mb-2 pt-6 text-2xl font-medium tracking-tight text-white lg:text-3xl">{title}</h5>
            </div>
            <ul className="text-white text-lg space-y-4 font-medium list-disc pl-6">
              {bullets.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>
            <Link href="/contact" passHref>
              <GlowingButton>
                Free Consultation
              </GlowingButton>
            </Link>
            <div className="flex gap-8 flex-wrap items-center">
              <img className="w-48" src="/images/ratings/google.png" alt="google Rating" />
              <img className="w-48" src="/images/ratings/trustpilot.png" alt="trust score" />
            </div>
          </div>
        </div>
        <div id="parallax" className="w-full">
          <motion.div animate="show" initial="hidden" variants={FADE_UP_ANIMATION_VARIANTS}>
            <Contact headline={headline} classNameContainer="px-5 md:px-6 xl:pl-[80px] md:pt-6" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroBannerWithForm2;
