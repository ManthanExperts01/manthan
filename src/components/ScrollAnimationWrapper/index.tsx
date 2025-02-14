
import { motion } from 'framer-motion';
import React from 'react';

const ScrollAnimationWrapper = ({
  children,
  className,
  ...props
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.5 }} // Adjust amount if needed
        className={className}
        {...props}
      >
        {children}
      </motion.div>
    </>
  );
};

export default ScrollAnimationWrapper;
