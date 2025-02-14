"use client";
import { Feature } from "@/types/feature";
import LinkWithAnimation from "../LinkWithAnimation";
import ScrollAnimationWrapper from "../ScrollAnimationWrapper";
import { motion } from "framer-motion";
import { useMemo } from "react";
import getScrollAnimation from "@/utils/getScrollAnimation";
import Link from "next/link";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  const { serviceNumber, title, paragraph } = feature;
  return (
    <Link href={`services/${feature.href}`} className="singleFeatureTransition flex w-full flex-col border-l-2 hover:bg-lightGray">
      <div
        className="wow fadeInUp flex flex-grow flex-col p-6"
        data-wow-delay=".15s"
      >
        <ScrollAnimationWrapper>
          <motion.div
            variants={scrollAnimation}
            className="rounded-m flex border-b border-solid border-black pb-3 "
          >
            {serviceNumber}
          </motion.div>
          <motion.h3
            variants={scrollAnimation}
            className="mb-5 mt-10 text-xl font-medium text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl"
          >
            {title}
          </motion.h3>
          <motion.p
            variants={scrollAnimation}
            className="flex-grow pb-3 pr-[10px] text-base font-normal leading-relaxed text-body-color"
          >
            {paragraph}
          </motion.p>
          <motion.div variants={scrollAnimation} className="mt-auto">
            <LinkWithAnimation
              href="/"
              className="text-black after:bg-black"
              LinkText="Learn More"
            />
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </Link>
  );
};

export default SingleFeature;
