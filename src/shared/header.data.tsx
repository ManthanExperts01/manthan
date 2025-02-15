
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
      href: "/#services-section", // Change to absolute path
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
