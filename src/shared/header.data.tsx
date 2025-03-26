
import { IconChevronDown } from "@tabler/icons-react";
import { HeaderProps, Icon } from '@/types/faq';

export const headerData: HeaderProps = {
  links: [
    {
      label: "About Us",
      href: "/about-us", // Change to absolute path
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
    // {
    //   label: "Pricing",
    //   href: "/#pricing-section", // Change to absolute path
    // },
    {
      label: "Contact Us",
      href: "/contact",
    },
    {
      label: "Blogs",
      href: "/blogs",
    },
    // {
    //   label: "Knowledge Center",
    //   icon: IconChevronDown as Icon,
    //   links: [
    //     {
    //       label: "Blogs",
    //       href: "/services",
    //     },
    //     {
    //       label: "News",
    //       href: "/news",
    //     },
      
    //   ],
    // },
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
