'use client'
import { QuotationCTAProps } from '@/types/faq';
import CTA from './CTA';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { GlowingButton } from '../Header';

const QuotationCTA = ({ bullets }: QuotationCTAProps) => {

  const pathname = usePathname();
  const isVisible = pathname.includes("/services/notices-to-resolutions");

  return (
    <div className="bg-lightGray ">
      <div className="container flex flex-col md:flex-row items-center justify-center gap-16 mx-auto py-16">
        <div className="flex justify-end w-full">
          <img src="/images/image.png" alt="" width={450} className=''/>
        </div>
        <div className="w-full">
          <div className="bg-white shadow-lg rounded-sm md:w-3/4 mx-auto gap-12 p-12 flex flex-col ">
            <h3 className="text-2xl text-center">
              <span className="font-bold">Quotation</span>
              <br />
              Will be Provided After {!isVisible && "Analyzing"}:
            </h3>
            <ul className="font-medium text-xl space-y-4 ">
              {bullets.map((bullet, index) => (
                <li key={index} className="flex gap-2">
                  <img src="/images/list-bullet.svg" alt="" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
            <Link href={"/contact"}>
              <GlowingButton>
                Get Started
              </GlowingButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default QuotationCTA;
