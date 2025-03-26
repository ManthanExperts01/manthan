'use client';

import Image from 'next/image';
import LinkWithAnimation from '../LinkWithAnimation';
import { motion } from 'framer-motion';
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandPinterest,
  IconBrandX,
  IconBrandYoutube,
  IconMail,
  IconPhone,
} from '@tabler/icons-react';
import { FaFacebook, FaSquareXTwitter, FaInstagram, FaLinkedin, FaYoutube, FaPinterest } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <footer id="about-section" className=" bg-secondary ">
        <div className="text-surface/75 container bg-secondary text-center text-white dark:bg-neutral-700 dark:text-white/75 lg:text-left">
          <div className="flex items-center justify-center p-6 lg:justify-between">
            <div className="me-12 hidden lg:block">
              <span>Get Connected with Us on Social Networks:</span>
            </div>
            <div className="flex justify-center">
              <motion.a href="https://www.facebook.com/manthanexperts1" className="me-6" target="_blank"
                whileHover={{
                  y: -7
                }}
              >
                <FaFacebook className="text-[#1877F2] text-2xl" />
              </motion.a>
              <motion.a href="https://x.com/ManthanExperts" className="me-6 " target="_blank"
                whileHover={{
                  y: -7
                }}
              >
                <FaSquareXTwitter className="  text-2xl" />
              </motion.a>
              <motion.a href="https://www.instagram.com/manthan_experts" className="me-6" target="_blank"
                whileHover={{
                  y: -7
                }}
              >
                <FaInstagram className="text-[#E1306C] text-2xl" />
              </motion.a>
              <motion.a href="https://www.linkedin.com/in/manthan-experts-19a9a31ab/" className="me-6" target="_blank"
                whileHover={{
                  y: -7
                }}
              >
                <FaLinkedin className="text-[#0077B5] text-2xl" />
              </motion.a>
              <motion.a href="https://www.youtube.com/channel/UCwXMeuaMTCfAIsdLj4iyRjA" className="me-6" target="_blank"
                whileHover={{
                  y: -7
                }}
              >
                <FaYoutube className="text-[#FF0000] text-2xl" />
              </motion.a>
              <motion.a href="https://in.pinterest.com/manthan_experts" className="me-6" target="_blank"
                whileHover={{
                  y: -7
                }}
              >
                <FaPinterest className="text-[#E60023] text-2xl" />
              </motion.a>
            </div>
          </div>
          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D2D8E183] to-transparent dark:via-[#959CB183]" />

          <div className="mx-6 py-10 text-center md:text-left">
            <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="">
                {/* <h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
                  <span className="me-3 [&>svg]:h-4 [&>svg]:w-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 00.372-.648V7.93zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 00.372.648l8.628 5.033z" />
                    </svg>
                  </span>
                  TW Elements
                  
                </h6> */}
                <div className="ml-2 self-center whitespace-nowrap pb-3 text-2xl font-bold text-secondary dark:text-white md:text-xl justify-center md:justify-start flex">
                  <Image
                    src="/images/manthan-exprerts-high-resolution-logo-white.png"
                    alt="author"
                    width={200}
                    height={150}
                  />
                </div>
                <p className="text-justify hyphens-none">
                  Manthan Experts provides expert tax and financial services in India,
                  specializing in ITR e-filing, Income Tax Notices, GST Services, Accounting, Audit, and Payroll.
                  Our skilled team ensures accuracy, compliance, and efficiency, offering tailored solutions for
                  seamless tax filing and financial management to meet the unique needs of businesses and individuals.
                </p>
              </div>
              <div>
                <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">Services</h6>
                <div className="flex justify-center md:justify-start flex-col items-center md:items-start">
                  <p className="mb-4">
                    <LinkWithAnimation
                      href="/services/itr-filing"
                      LinkText="ITR e-Filling "
                      className="text-white after:bg-white"
                    />
                  </p>
                  <p className="mb-4">
                    <LinkWithAnimation
                      href="/services/notices-to-resolutions"
                      LinkText="Income Tax Consultancy"
                      className="text-white after:bg-white"
                    />
                  </p>
                  <p className="mb-4">
                    <LinkWithAnimation href="/services/gst-registration-return-filing-and-notice" LinkText="GST Services" className="text-white after:bg-white" />
                  </p>
                  <p className="mb-4">
                    <LinkWithAnimation
                      href="/services/bookkeeping-and-accounting"
                      LinkText="Bookkeeping & Accounting Services"
                      className="text-white after:bg-white"
                    />
                  </p>
                  <p className="mb-4">
                    <LinkWithAnimation
                      href="/services/audit-and-assurance"
                      LinkText="Audit & Assurance Services"
                      className="text-white after:bg-white"
                    />
                  </p>
                  <p className="mb-4">
                    <LinkWithAnimation
                      href="/services/payroll-pf-esic"
                      LinkText="Payroll Services (PF & ESIC)"
                      className="text-white after:bg-white"
                    />
                  </p>
                </div>
              </div>
              <div>
                <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">Useful links</h6>
                <div className="flex justify-center md:justify-start flex-col items-center md:items-start">
                  <p className="mb-4">
                    <LinkWithAnimation href="/blogs" LinkText="Blogs" className="text-white after:bg-white" />
                  </p>
                  <p className="mb-4">
                    <LinkWithAnimation href="https://incometaxindia.gov.in/Pages/tools/house-rent-allowance-calculator.aspx" LinkText="HRA Calculator" className="text-white after:bg-white" />
                  </p>
                  <p className="mb-4">
                    <LinkWithAnimation href="https://eportal.incometax.gov.in/iec/foservices/#/TaxCalc/calculator" LinkText="Tax Calculator" className="text-white after:bg-white" />
                  </p>
                  <p className="mb-4">
                    <LinkWithAnimation href="https://www.incometax.gov.in/iec/foportal/help/refund_status_user_manual" LinkText="Tax Refund Status" className="text-white after:bg-white" />
                  </p>
                  <p>
                    <LinkWithAnimation
                      href="https://eportal.incometax.gov.in/iec/foservices/#/pre-login/link-aadhaar-status"
                      LinkText="PAN Aadhar Link Status"
                      className="text-white after:bg-white"
                    />
                  </p>
                </div>
              </div>
              <div>
                <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">Contact</h6>
                <p className="mb-4 flex items-center justify-center md:justify-start text-justify hyphens-none">
                  <span className="me-3 [&>svg]:h-5 [&>svg]:w-5">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                      <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                    </svg>
                  </span>
                  Manthan Experts A-92 C, 2nd Floor, Building 3, Namberdar Estates, New Friends Colony Delhi- 110065
                </p>
                <p className="mb-4 flex items-center justify-center md:justify-start">
                  <IconMail stroke={2} size={20} className="me-3" />
                  info@manthanexperts.com
                </p>
                <p className="mb-4 flex items-center justify-center md:justify-start">
                  <IconPhone stroke={2} size={20} className="me-3" />
                  +91-9643-969-969
                </p>
                {/* <p className="flex items-center justify-center md:justify-start">
                  <span className="me-3 [&>svg]:h-5 [&>svg]:w-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M7.875 1.5C6.839 1.5 6 2.34 6 3.375v2.99c-.426.053-.851.11-1.274.174-1.454.218-2.476 1.483-2.476 2.917v6.294a3 3 0 003 3h.27l-.155 1.705A1.875 1.875 0 007.232 22.5h9.536a1.875 1.875 0 001.867-2.045l-.155-1.705h.27a3 3 0 003-3V9.456c0-1.434-1.022-2.7-2.476-2.917A48.716 48.716 0 0018 6.366V3.375c0-1.036-.84-1.875-1.875-1.875h-8.25zM16.5 6.205v-2.83A.375.375 0 0016.125 3h-8.25a.375.375 0 00-.375.375v2.83a49.353 49.353 0 019 0zm-.217 8.265c.178.018.317.16.333.337l.526 5.784a.375.375 0 01-.374.409H7.232a.375.375 0 01-.374-.409l.526-5.784a.373.373 0 01.333-.337 41.741 41.741 0 018.566 0zm.967-3.97a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H18a.75.75 0 01-.75-.75V10.5zM15 9.75a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V10.5a.75.75 0 00-.75-.75H15z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </span>
                  + 01 234 567 89
                </p> */}
              </div>
            </div>
          </div>

          <div className="bg-black/5 p-6 text-center">
            <span>© 2024 Copyright:</span>
            <span> Manthan Experts</span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
