import {
  AboutSectionOneProps,
  AboutSectionTwoProps,
  BlogProps,
  ContactProps,
  FeatureProps,
  Icon,
  PricingProps,
  StepsFeatureDataCollectionProps,
  StepsFeatureDataProps,
  TestimonialsProps,
} from '@/types/faq';
import { IconCircleNumber1, IconCircleNumber2, IconCircleNumber3, IconCircleNumber4 } from '@tabler/icons-react';
// Header data
export const headlineDataAboutSectionOne: AboutSectionOneProps = {
  headline: {
    title: `Building trust through transparency and integrity`,
    // subtitle: `There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."`,
    position: 'left',
  },
};
export const headlineDataAboutSectionTwo: AboutSectionTwoProps = {
  headline: {
    title: `Building trust through transparency and integrity`,
    subtitle: `Fuel your business growth and witness immediate results today. Elevate your success with our strategic solutions.`,
    // tagline: 'FAQS',
    position: 'left',
  },
};
export const headlineDataFeatures: FeatureProps = {
  headline: {
    title: `Your One - Stop Destination For Expert Services`,
    subtitle: `Experiences Tax Service Designed To Align With Your Personalized Financial Senerio, ensuring ease and accuracy every step of the way`,
    position: 'center',
  },
};

export const headlineDataBlog: BlogProps = {
  headline: {
    title: `Tax services tailored for you`,
    subtitle: `There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."`,
    position: 'center',
  },
};
export const headlineDataContact: ContactProps = {
  headline: {
    title: `Let Us Help You With Your Taxes`,
    subtitle: `Reserve Your Session, at your Preferred Time`,
    position: 'left',
  },
};
export const headlineDataContact2: ContactProps = {
  headline: {
    title: `Contact With Our Expert Team`,
    subtitle: `Book Free Consultation at a Time Most Suitable for You.`,
    position: 'left',
  },
};

export const headlinePricing: PricingProps = {
  headline: {
    title: `Predictable pricing plans`,
    subtitle: `Whether you are an individual, a small team, or a growing enterprise, we have ITR e-filing plan that aligns perfectly with your goals.`,
    position: 'center',
  },
  pricingDataMonthly: [
    {
      packageName: 'Plus',
      active: true,
      price: {
        isMonthly: 'CA Assisted ITR',
        isYearly: 'TAX AUDIT & TAX NOTICES',
      },
      duration: { isMonthly: 'mo', isYearly: 'yr' },
      title: `Salary And House Property Starting <b>@999/-</b>`,
      subtitle: '',
      offerList: [
        {
          text: 'Salary upto 10Lakhs/- <b>@999/-</b>',
          status: 'active',
        },
        {
          text: 'Salary above 10Lakhs upto 50Lakhs <b>@1999/-</b>',
          status: 'active',
        },
        {
          text: 'Salary above 50Lakhs <b>2999/-</b>',
          status: 'active',
        },
        {
          text: 'Salary from more than one Employer <b>@1999/-</b>',
          status: 'active',
        },
      ],
    },
    {
      packageName: 'Plus',
      active: true,
      price: {
        isMonthly: 'CA Assisted ITR',
        isYearly: 'TAX AUDIT & TAX NOTICES',
      },
      duration: { isMonthly: 'mo', isYearly: 'yr' },
      title: 'Salary, House Property and Capital Gain  Starting <b>@1999/-</b>',
      subtitle: ``,
      offerList: [
        {
          text: 'Salary upto 10 Lakhs <b>@1999/-</b>',
          status: 'active',
        },
        {
          text: 'Salary above 10 Lakhs upto 50Lakhs <b>@2999/-</b>',
          status: 'active',
        },
        {
          text: 'Salary above 50 Lakhs <b>@3999/-</b>',
          status: 'active',
        },
      ],
    },
    {
      packageName: 'Plus',
      active: true,
      price: {
        isMonthly: 'CA Assisted ITR',
        isYearly: 'TAX AUDIT & TAX NOTICES',
      },
      duration: { isMonthly: 'mo', isYearly: 'yr' },
      title: 'Business Income',
      subtitle: `<ol>
      <li>1. Business Income U/s 44AD/ADA/ADE <b>@2499/-</b></li>
      <li>2. Business Income not U/s 44AD/ADA/ADE - <b>Quotation on Demand</b></li>
    </ol>`,
      offerList: [
        {
          text: 'CA Assistance ',
          status: 'active',
        },
        {
          text: 'Computation Of Income ',
          status: 'active',
        },
        {
          text: 'Books Of Accounts ',
          status: 'active',
        },
        {
          text: 'Audited Financial Statements',
          status: 'not-active',
        },
      ],
    },
  ],
  pricingDataYearly: [
    {
      packageName: 'Plus-Prop',
      active: true,
      price: {
        isMonthly: 'CA Assisted ITR',
        isYearly: 'TAX AUDIT & TAX NOTICES',
      },
      duration: { isMonthly: 'mo', isYearly: 'yr' },
      title: `Tax Audit-Profit and Loss and Balance Sheet Available <b>@4999/-</b>`,
      subtitle: ``,
      offerList: [
        {
          text: 'CA Assistance',
          status: 'active',
        },
        {
          text: 'Computation Of Income',
          status: 'active',
        },
        {
          text: 'Books Of Accounts',
          status: 'not-active',
        },
        {
          text: 'Audited Financial Statements',
          status: 'active',
        },
      ],
    },
    {
      packageName: 'Plus-Prop',
      active: true,
      price: {
        isMonthly: 'CA Assisted ITR',
        isYearly: 'TAX AUDIT & TAX NOTICES',
      },
      duration: { isMonthly: 'mo', isYearly: 'yr' },
      title: `Tax Audit - Profit and Loss and Balance Sheet Not Available <b>@9999/-</b>`,
      subtitle: ``,
      offerList: [
        {
          text: 'CA Assistance ',
          status: 'active',
        },
        {
          text: 'Computation Of Income ',
          status: 'active',
        },
        {
          text: 'Books Of Accounts ',
          status: 'active',
        },
        {
          text: 'Audited Financial Statements ',
          status: 'active',
        },
      ],
    },
    {
      packageName: 'Plus-Prop',
      active: true,
      price: {
        isMonthly: 'CA Assisted ITR',
        isYearly: 'TAX AUDIT & TAX NOTICES',
      },
      duration: { isMonthly: 'mo', isYearly: 'yr' },
      title: `Tax Notice – <b>Quotation on Demand</b>`,
      subtitle: ``,
      offerList: [
        {
          text: 'CA Assistance ',
          status: 'active',
        },
        {
          text: 'Computation Of Income ',
          status: 'not-active',
        },
        {
          text: 'Books Of Accounts ',
          status: 'not-active',
        },
        {
          text: 'Audited Financial Statements ',
          status: 'not-active',
        },
      ],
    },
  ],
};
export const headlineTestimonials: TestimonialsProps = {
  headline: {
    title: `Trust In Their Words`,
    subtitle: `The Best Way To Showcase Our Commitment is Through The Experiences and Stories of Those Who
Have Partnered With Us.`,
    position: 'center',
  },
  testimonialData: [
    {
      id: 1,
      name: 'Roshan James',
      designation: 'ITR Filer',
      content:
        'Thanks for the professionalism you guys have and the providing me a perfect experience filling this years and previous year tax.',
      image: '/images/manthan-exprerts/testimonials/leena.png',
      star: 5,
    },
    {
      id: 2,
      name: 'Anu M',
      designation: 'ITR Filer',
      content:
        'I am a salaried person and I was very happy with the services i got for my ITR Filing from Manthan. They handle your queries with patience and come up with best solutions.',
      image: '/images/manthan-exprerts/testimonials/azaz.png',
      star: 5,
    },
    {
      id: 3,
      name: 'Amit Dhiman',
      designation: 'ITR Filer',
      content:
        'My ITR file easily way filed and Thank you Manthan Experts. Best ITR file service company in Delhi. Really Impressed.',
      image: '/images/manthan-exprerts/testimonials/pushotam.jpg',
      star: 5,
    },
    {
      id: 4,
      name: 'Taha Ali',
      designation: 'ITR Filer',
      content:
        "These guys are very professional in the way they talk and they work. Highly Recommended for anyone looking to file his ITR. They handle me and my brother's ITRs.",
      image: '/images/manthan-exprerts/testimonials/rajat.jpg',
      star: 5,
    },
    {
      id: 5,
      name: 'Naresh Yadav',
      designation: 'ITR Filer',
      content:
        'I contacted them for my ITR Filing. The work was done timely and properly. I am highly satisfied with the working.',
      image: '/images/manthan-exprerts/testimonials/rajni.jpg',
      star: 5,
    },
    {
      id: 6,
      name: 'Yasar Ali',
      designation: 'ITR Filer',
      content:
        'Thanks for helping me and clarifying my doubts even after the ITR filing. Looking forward to a long term relationship with your firm.',
      image: '/images/manthan-exprerts/testimonials/shad.png',
      star: 5,
    },
    {
      id: 7,
      name: 'Atif Khan',
      designation: 'ITR Filer',
      content:
        'The team is quite professional and pro at what they do. They are a solution and service oriented bunch of professionals.',
      image: '/images/manthan-exprerts/testimonials/shahbaz.png',
      star: 5,
    },
    {
      id: 8,
      name: 'Payal Bansal',
      designation: 'ITR Filer',
      content:
        'I went to their office to have some queries sorted out. They were very patient and sorted out all my issues realted to ITR.',
      image: '/images/manthan-exprerts/testimonials/shailesh.jpg',
      star: 5,
    },
    {
      id: 9,
      name: 'Abhishek',
      designation: 'ITR Filer',
      content:
        'You provided me good service Manthan Experts team, filed my ITR on call. You are best ITR filing service in Delhi.',
      image: '/images/manthan-exprerts/testimonials/yasar.png',
      star: 5,
    },
    {
      id: 10,
      name: 'Komal Rani',
      designation: 'ITR Filer',
      content: 'Just Filed my ITR in Delhi with Manthan Experts. Very Experienced, Professional & Quick service.',
      image: '/images/manthan-exprerts/testimonials/yasar.png',
      star: 5,
    },
    {
      id: 11,
      name: 'Vikas Gupta',
      designation: 'ITR Filer',
      content: 'Good Experience. Thanks for filing up an audited ITR.',
      image: '/images/manthan-exprerts/testimonials/yasar.png',
      star: 5,
    },
  ],
};

export const stepsfeatureDataCollection: StepsFeatureDataCollectionProps = {
  headline: {
    title: `Our Process: Simple, Transparent, Effective`,
    subtitle: `Taxes can be complex, but We’re On a Mission To Simplify Them For Everyone, Making Compliance and Filings Effortless for Non-Experts.`,
    position: 'center',
  },
  stepsFeatureData: [
    {
      id: 1,
      icon: IconCircleNumber1 as Icon,
      title: 'Initial consultation & assessment ',
      paragraph: 'Comprehensive Consultation and Assessment To Set The Foundation For Success.',
      btn: 'Learn More',
      btnLink: '/#',
    },
    {
      id: 2,
      icon: IconCircleNumber2 as Icon,
      title: 'Tailored strategy development ',
      paragraph: 'Customized Strategies To Meet Your Unique Needs and Goals.',
      btn: 'Learn More',
      btnLink: '/#',
    },
    {
      id: 3,
      icon: IconCircleNumber3 as Icon,
      title: 'Implementation & Filing ',
      paragraph: 'Seamless Implementation and Accurate Filing, Ensuring Compliance with Ease.',
      btn: 'Learn More',
      btnLink: '/#',
    },
    {
      id: 4,
      icon: IconCircleNumber4 as Icon,
      title: 'Ongoing Support & Review ',
      paragraph: 'Continuous Support and Periodic Reviews To Keep You Confidently Compliant.',
      btn: 'Learn More',
      btnLink: '/#',
    },
  ],
};

