"use client";
import { HeadlineProps } from "@/types/faq";
import { twMerge } from "tailwind-merge";

const Headline = ({
  header,
  containerClass,
  titleClass,
  subtitleClass,
  taglineClass,
}: HeadlineProps) => {
  const { title, subtitle, tagline, position } = header;
  return (
      <div className="mb-4">
        {(title || subtitle || tagline) && (
          <div
            className={twMerge(
              `mx-auto mb-6 md:mb-12 ${
                position === "left"
                  ? "ml-0 text-left"
                  : position === "right"
                    ? "mr-0 text-right"
                    : "text-center"
              }`,
              containerClass,
            )}
          >
            {tagline && (
              <p
                
                className={twMerge(
                  `me-2 inline-block px-2.5 py-0.5 text-md font-medium text-gray-800`,
                  taglineClass,
                )}
              >
                {tagline}
              </p>
            )}
            {title && (
              <h2
                
                className={twMerge(
                  `font-heading mb-4 font-normal tracking-tight`,
                  titleClass,
                )}
              >
                {title}
              </h2>
            )}
            {subtitle && (
              <p
                
                className={twMerge(
                  `dark:text-white-400 mx-auto mt-4 max-w-3xl text-lg text-black ${
                    position === "left"
                      ? "ml-0 text-left"
                      : position === "right"
                        ? "mr-0 text-right"
                        : "text-center"
                  }`,
                  subtitleClass,
                )}
              >
                {subtitle}
              </p>
            )}
          </div>
        )}
      </div>
  );
};

export default Headline;
