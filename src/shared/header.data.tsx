
import { IconChevronDown } from "@tabler/icons-react";
import { HeaderProps, Icon } from '@/types/faq';

export const headerData: HeaderProps = {
  links: [
    {
      label: "About Us",
      href: "/#about-section", // Change to absolute path
    },
    {
      label: "Services",
      icon: IconChevronDown as Icon,
      links: [
        {
          label: "Income Tax e-Filling",
          href: "/services/itr-filing",
        },
        {
          label: "Income Tax Demands and Notices Resolution",
          href: "/services/notices-to-resolutions",
        },
        {
          label: "GST (Registration, Return Filing & Notices Resolution)",
          href: "/services/gst-registration-return-filing-and-notice",
        },
        {
          label: "Bookkeeping & Accounting Services",
          href: "/services/bookkeeping-and-accounting",
        },
        {
          label: "Audit & Assurance Services",
          href: "/services/audit-and-assurance",
        },
        {
          label: "Payroll Services (PF & ESIC)",
          href: "/services/payroll-pf-esic",
        },
      
      ],
    },
    // {
    //   label: "Pricing",
    //   href: "/#pricing-section", // Change to absolute path
    // },
    {
      label: "Contact",
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
