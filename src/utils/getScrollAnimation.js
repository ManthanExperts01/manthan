// getScrollAnimation.js
"use client";
const getScrollAnimation = () => ({
  offscreen: {
    y: typeof window !== 'undefined' ? 100 : 0, // Guard against SSR
    opacity: 0,
  },
  onscreen: ({ duration = 1 } = {}) => ({
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration,
    },
  }),
});

  

export default getScrollAnimation;