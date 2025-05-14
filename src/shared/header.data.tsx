import { IconChevronDown } from "@tabler/icons-react";
import { HeaderProps, Icon } from '@/types/faq';
import { useRouter } from 'next/router';
import { useMemo } from 'react';

// Original headerData object
export const headerData: HeaderProps = {
  links: [
    {
      label: "About Us",
      href: "/about-us",
    },
    {
      label: "Our Services",
      icon: IconChevronDown as Icon,
      links: [
        {
          label: "ITR e-Filling",
          href: "/services/itr-filing",
          iconSrc: "itr"
        },
        {
          label: "Income Tax Consultancy",
          href: "/services/notices-to-resolutions",
          iconSrc: "resolutions"
        },
        {
          label: "GST Services",
          href: "/services/gst-registration-return-filing-and-notice",
          iconSrc: "gst"
        },
        {
          label: "Bookkeeping & Accounting Services",
          href: "/services/bookkeeping-and-accounting",
          iconSrc: "book"
        },
        {
          label: "Audit & Assurance Services",
          href: "/services/audit-and-assurance",
          iconSrc: "audit"
        },
        {
          label: "Payroll Services (PF & ESIC)",
          href: "/services/payroll-pf-esic",
          iconSrc: "payroll"
        },
      ],
    },
    {
      label: "Contact Us",
      href: "/contact",
    },
    {
      label: "Blogs",
      href: "/blogs",
    },
  ],
  actions: [
    {
      text: "Free consultation ",
      href: "/contact",
      targetBlank: false,
    },
  ],
  isSticky: true,
  showToggleTheme: true,
  showRssFeed: false,
  position: "center",
};

// Custom hook to get dynamic header data with Home link when not on home page
export function useHeaderData() {
  const router = useRouter();
  
  return useMemo(() => {
    // Check if we're on the home page
    const isHomePage = router.pathname === '/' || router.pathname === '/index';
    
    // If we're on the home page, return the original data without modifications
    if (isHomePage) {
      return headerData;
    }
    
    // If we're on any other page, add the Home link at the beginning
    return {
      ...headerData,
      links: [
        {
          label: "Home",
          href: "/",
        },
        ...headerData.links,
      ],
    };
  }, [router.pathname]);
}