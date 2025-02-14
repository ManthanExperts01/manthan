// PricingBox.tsx
import CTA from '../Common/CTA';
import React, { useEffect, useMemo, useState } from 'react';
import md from 'markdown-it';
import { motion } from 'framer-motion';
import ScrollAnimationWrapper from '../ScrollAnimationWrapper';
import getScrollAnimation from '@/utils/getScrollAnimation';

const PricingBox = (props: { title: string; subtitle?: string; children: React.ReactNode }) => {
  const { title, subtitle = '', children } = props;

  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <ScrollAnimationWrapper>
      <motion.div className="h-full w-full" variants={scrollAnimation}>
        <div className="relative z-10 flex h-full flex-col rounded-sm bg-white px-8 py-10 shadow-three hover:shadow-one dark:bg-gray-dark dark:shadow-two dark:hover:shadow-gray-dark">
          <div className="flex items-center justify-between">
            {title && (
              <h3
                className="price mb-9 text-[24px] font-medium text-black dark:text-white"
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
          <div className="mt-8">
            <CTA
              callToAction={{ text: 'Get started ', href: '/contact' }}
              linkClass="btn bg-black dark:bg-white dark:text-black m-1 py-4 px-8 text-white text-md font-normal shadow-none md:px-6 w-full flex justify-center"
            />
          </div>
        </div>
      </motion.div>
    </ScrollAnimationWrapper>
  );
};

export default PricingBox;
