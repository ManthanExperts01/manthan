import {
  IconBrandTailwind,
  IconComponents,
  IconListCheck,
} from "@tabler/icons-react";
import { FAQsProps, FeaturesProps, Icon } from "@/types/faq";

// Contact data on Contact page *******************
export const faqsData: FAQsProps = {
  id: "faqsThree-on-pricing",
  hasBackground: true,
  header: {
    title: `Got a Question? Get Your Answer`,
    subtitle: `Find Quick Answers to Your Questions. Still Need Help? Reach Out to Us!`,
    // tagline: 'FAQS',
    position: "left",
  },
  items: [
    {
      title: "What is Manthan Experts?",
      description: `Manthan Experts is a trusted provider of comprehensive tax and financial services in India, offering
    expert solutions for businesses and individuals. Our skilled team specializes in ITR e-filing, Income
    Tax Demand and Notice resolution, GST management, Accounting and Bookkeeping, Audit and
    Assurance and Payroll Services. With a commitment to accuracy, compliance, and efficiency, we
    ensure seamless tax filing, regulatory adherence, and financial transparency. Whether you need
    assistance with tax compliance, managing notices, or streamlining your financial operations,
    Manthan Experts delivers tailored, timely, and reliable solutions to meet your unique needs.`,
    },
    {
      title: "What are the services offered by Manthan Experts?",
      description: `Manthan works on the philosophy that ‘YOU’ deserve the best. With this aim, we strive to provide the best income tax solutions to all our clients. which Includes Income Tax Returns (ITR) Filing, Tax planning, Tax Audits, Compliance, Advisory services, and Consultancy on Income Tax Notice.`,
    },
    {
      title: "How Manthan Experts maintains the Confidentiality of the Clients?",
      description: `Manthan Experts strongly believes in building the trust of the clients. Our team understands how important is to keep the security and confidentiality of the client's data and information. We take important measures to ensure the same:
      <ol><li><strong>1. Secure Systems:</strong> Manthan Experts employs advanced technology and secure systems to safeguard client information from unauthorized access or breaches.</li>
      <li><strong>2. Confidentiality Agreements:</strong> All team members at Manthan Experts sign confidentiality agreements, ensuring the protection and non-disclosure of client information.</li>
      <li><strong>3. Limited Access:</strong> Client data is strictly accessed only by authorized personnel, minimizing the risk of unauthorized disclosure or misuse.</li>
      <li><strong>4. Compliance with Laws:</strong> Manthan Experts adheres to all relevant laws and regulations concerning data protection and privacy, ensuring the confidentiality of client information is maintained at all times.</li>
      </ol>
      `,
    },
    {
      title: "How do Manthan Communicate?",
      description: `Effective Communication builds strong relationships. Trust and loyalty are the key factors in any relationship and both are improved by communication i.e. focused on consulting individual needs, delivering important information and providing positive and valuable feedback. Strong relationships with the customers also builds effective communication related to the products, services and company culture and values. Sometimes customers can be a source of great ideas to help in improving the products and services. Our team is skilled & specialized in both written and spoken fluent English and Hindi language. This helps us to communicate well with our clients.`,
    },
    {
      title: "What are the benefits of working with Manthan Experts?",
      description: `It's important to consider the benefits that customers might experience when availing themselves of the company's services. Here are some potential benefits:
      <ol><li><strong>1. Expertise and Knowledge:</strong> Manthan Experts can provide customers with access to experienced professionals who have in-depth knowledge of income tax regulations and can offer expert advice tailored to individual financial situations.</li>
      <li><strong>2. Accurate Tax Filing:</strong> Customers can benefit from accurate and error-free tax filing services, reducing the risk of errors and ensuring compliance with the latest tax laws and regulations.</li>
      <li><strong>3. Time Savings:</strong> By outsourcing income tax-related tasks to Manthan Experts, customers can save valuable time that would otherwise be spent navigating complex tax procedures. This allows them to focus on their core activities.</li>
      <li><strong>4. Maximized Deductions and Savings:</strong> The company's expertise can help customers identify eligible deductions, credits, and exemptions, potentially maximizing their tax savings and optimizing their financial position.</li>
      <li><strong>5. Personalized Tax Planning:</strong> Manthan Experts may offer personalized tax planning services, helping customers strategize for <li>future tax obligations and make informed financial decisions.</li>
      <li><strong>6. Efficient Problem Resolution:</strong> In the event of any tax-related issues or disputes with tax authorities, customers can benefit from Manthan Experts' assistance in efficiently resolving problems and addressing queries.</li>
      <li><strong>7. Comprehensive Services:</strong> Offering a range of services beyond basic tax filing, such as financial planning, investment advice, and compliance services, can provide customers with a one-stop solution for their financial needs.
      <li><strong>8. Transparent Fee Structure:</strong> Customers may appreciate a clear and transparent fee structure, ensuring that they understand the costs associated with the services provided by Manthan Experts.</li>
      <li><strong>9. Technology Integration:</strong> Utilizing advanced technologies for tax-related services can enhance the customer experience, making processes more efficient and providing access to real-time information.</li>
      <li><strong>10. Educational Resources:</strong> Providing customers with educational resources, such as workshops, webinars, or written materials, can empower them with knowledge about tax regulations and financial planning.</li></ol>
      `,
    },
    {
      title: "How to reach us?",
      description: `We value your inquiries and are committed to providing assistance. For any questions, concerns, or information, feel free to reach out to us using the following contact methods:
      <br>
      <strong>Customer Support:</strong>
      <br>
      <strong>Phone:</strong> 9643-969-969
      <br>
      <strong>Email:</strong> info@manthanexperts.com
      <br>
      <strong>Visit Our Office:</strong>
      <br>
      Manthan Experts Private Limited
      A-92 C, 2nd Floor, Building 3,
      Namberdar Estates, New Friends Colony
      Delhi- 110065      
      `,
    },
  ],
  callToAction: {
    text: "Contact us",
    href: "/contact",
  },
};

export const supportTilesData: FeaturesProps = {
  id: "features-on-home",
  hasBackground: false,
  columns: 3,
  items: [
    {
      title: "Knowledge hub",
      description:
        "A comprehensive repository of knowledge designed to address your queries.",
      icon: IconBrandTailwind as Icon,
      callToAction: {
        text: "Discover now",
        href: "/",
      },
    },
    {
      title: "Chat to sales",
      description:
        "Get detailed information about our products, pricing, and any current promotions.",
      icon: IconComponents as Icon,
      callToAction: {
        text: "Discover now",
        href: "/",
      },
    },
    {
      title: "Call for assistance",
      description:
        "Our support team is available to answer your questions, and provide technical help.",
      icon: IconListCheck as Icon,
      callToAction: {
        text: "Discover now",
        href: "/",
      },
    },
  ],
};
