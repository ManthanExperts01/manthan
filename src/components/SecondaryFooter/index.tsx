import React from "react";
import Headline from "../Common/Headline";
import CTA from "../Common/CTA";
import Link from "next/link";
import { GlowingButton } from "../Header";

const SecondaryFooter = () => {
  const headerData = {
    header: {
      title: `Take The Next Step Towards
Financial Clarity`,
    },
  };
  return (
    <div className="bg-lightGray md:p-3">
      <div className=" left-0 z-20 w-full p-3 shadow md:p-3">
        <div className="container md:flex md:items-center md:justify-between">
          <div className="w-11/12 md:w-1/2 p-3">
            {headerData && (
              <Headline
                taglineClass=""
                header={headerData.header}
                titleClass="text-3xl md:text-5xl text-black "
              />
            )}
          </div>
          <div className="p-3 ">
            <Link href={"/contact"}>
              <GlowingButton>
              Get started
              </GlowingButton>
            </Link>
          </div>
        </div>
      </div>
      <div className="container h-px w-full bg-gradient-to-r from-transparent via-[#D2D8E183] to-transparent dark:via-[#959CB183]"></div>
    </div>
  );
};

export default SecondaryFooter;
