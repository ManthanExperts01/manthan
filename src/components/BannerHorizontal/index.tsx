/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Button from '../Button';
import Link from 'next/link';

function BannerHorizontal() {
  return (
    <div className=" bg-secondary ">
      <div className="mx-auto flex w-full flex-col justify-between md:flex-row">
        <div className="flex w-full lg:justify-end">
          <div className="flex w-11/12 flex-col justify-between px-[20px] py-[40px] leading-normal lg:min-h-[700px] lg:max-w-[670px] lg:justify-between lg:py-[90px] xl:pl-0 xl:pr-[120px] ">
            <div>
              {/* eyebrow text */}
              {/* <p className="inline bg-[#FFFFFF12] px-2 py-1 text-white ">
                Proven results
              </p> */}

              <h5 className="mb-2 pt-3 text-3xl font-medium tracking-tight text-white dark:text-white lg:text-5xl">
                A Team of Chartered Accountants with 15+ Years of Experience
              </h5>
            </div>

            <div className="py-6">
              <p className="mb-6 font-normal text-white dark:text-gray-400">
              When you need legal representation in a complex income tax matters, we are here for you.
              </p>
              <Link href="/contact" passHref>
                <Button
                  className=" border-2 bg-white px-6 py-3 text-base font-medium text-black transition duration-300 ease-in-out hover:border-white hover:bg-secondary hover:text-white hover:shadow-signUp"
                  buttonText="Free case evaluation "
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="noteworthy-image min-h-[300px] w-full bg-center object-cover"></div>
      </div>
    </div>
  );
}

export default BannerHorizontal;
