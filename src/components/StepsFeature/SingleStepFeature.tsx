import { StepsFeatureProps } from "@/types/faq";
import { twMerge } from "tailwind-merge";
// import ScrollAnimationWrapper from "../ScrollAnimationWrapper";
// import { motion } from "framer-motion";
// import { useMemo } from "react";
// import getScrollAnimation from "@/utils/getScrollAnimation";

const SingleFeature = ({ feature }: { feature: StepsFeatureProps }) => {
  // const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  const { icon: Icon, title, paragraph, btn, btnLink } = feature;
  return (
    // <ScrollAnimationWrapper>
      <div  className="w-full px-4 md:w-1/2 lg:w-1/4">
        <div
          className="wow fadeInUp group mb-12 flex flex-col items-center"
          data-wow-delay=".15s"
        >
          <div className="relative z-10 mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-secondary">
            <span className="absolute left-0 top-0 z-[-1] mb-8 flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-2xl bg-secondary bg-opacity-20 duration-300 group-hover:rotate-45"></span>
            {Icon && (
              <Icon
                color="white"
                className={twMerge("")}
              />
            )}
          </div>
          <h3 className="mb-3 text-center text-2xl font-normal text-dark dark:text-white">
            {title}
          </h3>
          <p className="dark:text-dark-6 mb-8 text-center text-body-color lg:mb-11">
            {paragraph}
          </p>
          {/* <Link
          href={btnLink}
          className="text-base font-medium text-dark hover:text-primary dark:text-white dark:hover:text-primary"
        >
          {btn}
        </Link> */}
        </div>
      </div>
    // </ScrollAnimationWrapper>
  );
};

export default SingleFeature;
