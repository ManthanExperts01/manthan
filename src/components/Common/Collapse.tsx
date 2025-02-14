"use client";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import useCollapse from "../../hooks/useCollapse";
import { CollapseProps } from "@/types/faq";
import ScrollAnimationWrapper from "../ScrollAnimationWrapper";
import { motion } from "framer-motion";
import { useMemo, useRef, useEffect, useState } from "react";
import getScrollAnimation from "@/utils/getScrollAnimation";
import md from 'markdown-it';

const Collapse = ({
  items,
  classCollapseItem,
  iconUp,
  iconDown,
}: CollapseProps) => {
  const { activeIndex, handleSetIndex } = useCollapse();
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [contentHeights, setContentHeights] = useState<number[]>([]);

  useEffect(() => {
    const heights = contentRefs.current.map((ref) => ref?.scrollHeight || 0);
    setContentHeights(heights);
  }, [items,activeIndex]);

  const handleKeyDown = (event, index) => {
    if (event.key === "Enter" || event.key === " ") {
      handleSetIndex(index);
    }
  };

  return (
    <>
      {items.map(({ title, description }, index) => (
        <div
          key={`accordion-${index}`}
          onClick={() => handleSetIndex(index)}
          onKeyDown={(event) => handleKeyDown(event, index)}
          role="button"
          tabIndex={0}
          className="mx-auto max-w-3xl select-none bg-transparent text-base text-gray-700"
        >
          <ScrollAnimationWrapper key={index}>
            <motion.div
              className={classCollapseItem}
              variants={scrollAnimation}
            >
              <motion.div
                variants={scrollAnimation}
                className="align-center flex justify-between"
                id={`accordion__heading-${index}`}
                aria-disabled="false"
                aria-expanded="false"
                aria-controls={`accordion__panel-${index}`}
                role="button"
                tabIndex={0}
                onKeyDown={(event) => handleKeyDown(event, index)}
              >
                <h2
                  className="w-full pr-2 text-lg font-medium leading-6 text-gray-900 dark:text-slate-300"
                >
                  {title}
                </h2>
                {iconDown && iconUp ? (
                  activeIndex === index ? (
                    iconUp
                  ) : (
                    iconDown
                  )
                ) : activeIndex === index ? (
                  <IconChevronUp className="text-primary-600 h-6 w-6 dark:text-slate-200" />
                ) : (
                  <IconChevronDown className="text-primary-600 h-6 w-6 dark:text-slate-200" />
                )}
              </motion.div>
              <motion.div
                initial={{ maxHeight: 0 }}
                animate={{ maxHeight: activeIndex === index ? contentHeights[index] : 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="overflow-hidden"
                aria-labelledby={`accordion__heading-${index}`}
                id={`accordion__panel-${index}`}
                ref={(el) => { contentRefs.current[index] = el; }}
              >
                <div className="mt-3 select-none pt-2 text-black dark:text-white">
                  <div
                    className="border-t border-solid border-slate-300 mt-2 pt-2 text-justify hyphens-none"
                    dangerouslySetInnerHTML={{
                      __html: md({
                        html: true,
                      }).render(description),
                    }}
                  />
                </div>
              </motion.div>
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
      ))}
    </>
  );
};

export default Collapse;
