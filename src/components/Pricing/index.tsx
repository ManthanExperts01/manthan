/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
'use client';
import { useMemo, useState, useEffect } from 'react';
import OfferList from './OfferList';
import PricingBox from './PricingBox';
import Headline from '../Common/Headline';
import { PricingProps } from '@/types/faq';
import ScrollAnimationWrapper from '../ScrollAnimationWrapper';
import { motion } from 'framer-motion';
import getScrollAnimation from '@/utils/getScrollAnimation';
import { usePathname } from 'next/navigation';

const Pricing = ({ headline, pricingDataMonthly, pricingDataYearly }: PricingProps) => {
  const [isMonthly, setIsMonthly] = useState(true);
  const pricingData = isMonthly ? pricingDataMonthly : pricingDataYearly;
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  const pathname = usePathname();
  const isSpecificPage = pathname === '/services/itr-filing';

  return (
    <section id="pricing-section" className="relative z-10 bg-lightGray py-16 md:py-20 lg:py-20">
      <div className="container">
        {headline && <Headline taglineClass="" header={headline} titleClass="text-3xl capitalize md:text-5xl" />}
        <div className="w-full">
          <div className="mb-8 flex justify-center md:mb-12 lg:mb-16 px-4">
            <span
              onClick={() => setIsMonthly(true)}
              className={`${isMonthly ? 'pointer-events-none text-secondary' : 'text-dark dark:text-white'} mr-4 cursor-pointer text-base font-semibold`}
            >
              CA Assisted ITR
            </span>
            <div onClick={() => setIsMonthly(!isMonthly)} className="flex cursor-pointer items-center">
              <div className="relative">
                <div className="h-5 w-14 rounded-full border-2 border-secondary shadow-inner"></div>
                <div
                  className={`${isMonthly ? '' : 'translate-x-full'} shadow-switch-1 absolute left-0 top-[-4px] flex h-7 w-7 items-center justify-center rounded-full bg-secondary transition`}
                >
                  <span className="active h-4 w-4 rounded-full bg-white"></span>
                </div>
              </div>
            </div>

            <span
              onClick={() => setIsMonthly(false)}
              className={`${isMonthly ? 'text-dark dark:text-white' : 'pointer-events-none text-secondary'} ml-4 cursor-pointer text-base font-semibold`}
            >
              Tax Audit & Tax Notices
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
        {pricingData
            ?.filter((_, index) => !(isSpecificPage && !isMonthly && index === pricingData.length - 1)) 
            .map(
              (plan, index) =>
                plan.active && (
                  <PricingBox key={`index${index}`} title={plan?.title} subtitle={plan?.subtitle}>
                    {plan?.offerList?.map((offer, idx) => (
                      <OfferList key={`idx-${idx}`} text={offer?.text} status={offer?.status} />
                    ))}
                  </PricingBox>
                ),
            )}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
