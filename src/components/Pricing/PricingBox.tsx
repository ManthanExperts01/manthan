// PricingBox.tsx
import CTA from '../Common/CTA';
import React, { useEffect, useMemo, useState } from 'react';
import md from 'markdown-it';
import { motion } from 'framer-motion';
import ScrollAnimationWrapper from '../ScrollAnimationWrapper';
import getScrollAnimation from '@/utils/getScrollAnimation';
import { GlowingButton } from '../Header';
import Link from 'next/link';

const PricingBox = (props: { title: string; subtitle?: string; children: React.ReactNode }) => {
  const { title, subtitle = '', children } = props;

  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <ScrollAnimationWrapper>
      <motion.div className="h-full w-full" variants={scrollAnimation}
      whileHover={{
        y: -20
      }}
      >
        <div className="relative z-10 flex h-full flex-col rounded-sm bg-white px-8 py-10 shadow-three hover:shadow-one dark:bg-gray-dark dark:shadow-two dark:hover:shadow-gray-dark">
          <div className="flex items-center justify-between">
            {title && (
              <h3
                className="price mb-9 text-[24px] font-medium text-black dark:text-white text-center w-full"
                dangerouslySetInnerHTML={{
                  __html: md({ html: true }).render(title),
                }}
              />
            )}
          </div>
          {subtitle && (
            <div
              className="mb-7 text-base text-body-color"
              dangerouslySetInnerHTML={{
                __html: md({ html: true }).render(subtitle),
              }}
            />
          )}
          <div className="flex-grow">{children}</div>
          <div className="mt-8 border">
            <Link href='/contact' className='border w-full'>
              <GlowingButton>
                Get Started
              </GlowingButton>
            </Link>
          </div>
        </div>
      </motion.div>
    </ScrollAnimationWrapper>
  );
};

export default PricingBox;
