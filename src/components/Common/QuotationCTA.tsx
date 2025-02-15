import { QuotationCTAProps } from '@/types/faq';
import CTA from './CTA';

const QuotationCTA = ({ bullets }: QuotationCTAProps) => {
  return (
    <div className="bg-lightGray ">
      <div className="container flex flex-col md:flex-row items-center justify-center gap-8 mx-auto py-16">
        <div className="w-full">
          <img src="/images/image.png" alt="" width={500}/>
        </div>
        <div className="w-full">
          <div className="bg-white shadow-lg rounded-sm md:w-3/4 mx-auto gap-12 p-12 flex flex-col ">
            <h3 className="text-2xl text-center">
              <span className="font-bold">Quotation</span>
              <br />
              Will be Provided After Analyzing:
            </h3>
            <ul className="font-medium text-xl space-y-4 ">
              {bullets.map((bullet, index) => (
                <li key={index} className="flex gap-2">
                  <img src="/images/list-bullet.svg" alt="" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
            <CTA
              callToAction={{
                text: 'Get Started',
                href: '/contact',
              }}
              linkClass="btn bg-black w-full text-center dark:bg-white dark:text-black py-4 px-8 text-white text-md font-normal shadow-none md:px-6 mb-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default QuotationCTA;
