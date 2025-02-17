'use client';
import { MouseEventHandler, ReactElement } from 'react';
import { StaticImageData } from 'next/image';

export type Icon = React.ComponentType<React.ComponentProps<'svg'>>;

type Widget = {
  id?: string;
  /** Does it have a background? */
  hasBackground?: boolean;
};

export type WrapperTagProps = Widget & {
  children: React.ReactNode;
  containerClass?: string;
};

export type HeaderProps = {
  links?: Array<MenuLink>;
  actions?: Array<CallToActionType>;
  // actions?: Array<ActionLink>;
  isSticky?: boolean;
  showToggleTheme?: boolean;
  showRssFeed?: boolean;
  position?: 'center' | 'right' | 'left';
};

export type ToggleMenuProps = {
  handleToggleMenuOnClick: MouseEventHandler<HTMLButtonElement>;
  isToggleMenuOpen: boolean;
};

export type FeaturesProps = Widget & {
  header?: Header;
  items?: Array<Item>;
  /** How many columns should it have? */
  columns?: 1 | 2 | 3;
  /** Do you want the image to be displayed? */
  isImageDisplayed?: boolean;
  image?: Image;
  isBeforeContent?: boolean;
  isAfterContent?: boolean;
};
type Header = {
  title?: string | ReactElement;
  subtitle?: string | ReactElement;
  tagline?: string;
  position?: 'center' | 'right' | 'left';
};

export type CallToActionType = {
  text?: string;
  href: string;
  icon?: Icon;
  targetBlank?: boolean;
};

export type LinkOrButton = {
  callToAction?: CallToActionType;
  containerClass?: string;
  linkClass?: string;
  iconClass?: string;
};

type Button = {
  title: string;
  type: 'button' | 'submit' | 'reset';
};

type Input = {
  type: string;
  label?: string;
  value?: string;
  name?: string;
  autocomplete?: string;
  placeholder?: string;
};

type SmallForm = {
  icon?: Icon;
  input: Input;
  btn: Button;
};

type Image = {
  link?: string;
  src: string | StaticImageData;
  alt: string;
};
export type HeadlineProps = {
  header: Header;
  containerClass?: string;
  titleClass?: string;
  subtitleClass?: string;
  taglineClass?: string;
};
export type Item = {
  title?: string | boolean | number;
  description?: string | Array<string>;
  href?: string;
  form?: SmallForm;
  icon?: Icon;
  callToAction?: CallToActionType;
};

export type ItemGrid = {
  id?: string;
  items?: Array<Item>;
  columns?: number;
  defaultColumns?: number;
  defaultIcon?: Icon;
  containerClass?: string;
  panelClass?: string;
  iconClass?: string;
  titleClass?: string;
  descriptionClass?: string;
  actionClass?: string;
};

type Link = {
  label?: string;
  href?: string;
  ariaLabel?: string;
  icon?: Icon;
  iconSrc?: string;
};

type MenuLink = Link & {
  links?: Array<Link>;
};

type Tab = {
  link?: Link;
  items: Array<Item>;
};
export type FAQsProps = Widget & {
  header?: Header;
  items?: Array<Item>;
  columns?: number;
  tabs?: Array<Tab>;
  callToAction?: CallToActionType;
};

export type CollapseProps = {
  items: Array<Item>;
  classCollapseItem?: string;
  iconUp?: ReactElement;
  iconDown?: ReactElement;
};
export type AboutSectionOneProps = {
  headline?: Header;
};
export type AboutSectionTwoProps = {
  headline?: Header;
};
export type FeatureProps = {
  headline?: Header;
};
export type BlogProps = {
  headline?: Header;
};
export type ContactProps = {
  headline?: Header;
  classNameContainer?: string;
};
export type ContactUsHorizontalCardProps = {
  headline?: Header;
};
export type HeroBannerProps = {
  title?: string;
  subtitle?: string;
  image?: string;
  list1?: ReactElement;
  list2?: ReactElement;
};
export type HeroBannerWithFormProps = {
  headline?: Header;
};
export type HeroBannerWithForm2Props = {
  headline?: Header;
  title: string;
  bullets: string[];
};
export type HelpfulBlogsProps = {
  title: string;
  contents: string[];
  lists: {
    href: string;
    label: string;
  }[];
};
type PriceMoYe = {
  isMonthly?: string;
  isYearly?: string;
};
type Duration = {
  isMonthly?: string;
  isYearly?: string;
};
export type OfferListItem = {
  text?: string;
  status?: string | boolean;
};
type Pricing = {
  packageName?: string;
  active?: boolean;
  price?: PriceMoYe;
  duration?: Duration;
  title?: string;
  subtitle?: string;
  offerList?: Array<OfferListItem>;
};
export type StepsFeatureProps = {
  id: number;
  icon: Icon;
  title: string;
  paragraph: string;
  btn: string;
  btnLink: string;
};
export type StepsFeatureDataProps = {
  id: number;
  icon: Icon;
  title: string;
  paragraph: string;
  btn: string;
  btnLink: string;
};

export type StepsFeatureDataCollectionProps = {
  headline?: Header;
  stepsFeatureData?: Array<StepsFeatureDataProps>;
};

export type PricingProps = {
  headline?: Header;
  pricingDataMonthly?: Array<Pricing>;
  pricingDataYearly?: Array<Pricing>;
};
export type TestimonialsItem = {
  id?: string | boolean | number;
  name?: string;
  designation?: string;
  content?: string;
  image?: string;
  star?: string | number;
};
export type TestimonialsProps = {
  headline?: Header;
  testimonialData?: Array<TestimonialsItem>;
};
export type QuotationCTAProps = {
  bullets: string[];
};
