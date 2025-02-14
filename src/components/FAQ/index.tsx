import Headline from "../Common/Headline";
import Collapse from "../Common/Collapse";
import { IconMinus, IconPlus } from "@tabler/icons-react";
import { CallToActionType, FAQsProps, Item } from "@/types/faq";
import CTA from "../Common/CTA";
import WidgetWrapper from "../Common/WidgetWrapper";

const FAQ = ({
  header,
  items,
  callToAction,
  id,
  hasBackground = false,
}: FAQsProps) => (
  <WidgetWrapper
    id={id ? id : ""}
    hasBackground={hasBackground}
    containerClass=""
  >
    <div className="flex items-stretch justify-center">
      <div className="grid w-full md:grid-cols-3 items-center md:gap-4">
        <div className="flex flex-col h-full sm:flex sm:items-start sm:justify-between">
          {header && (
            <Headline
              taglineClass=""
              header={header}
              subtitleClass="lg:mt-10"
              titleClass="text-3xl md:text-5xl"
            />
          )}
          {callToAction && (
            <CTA
              callToAction={callToAction as CallToActionType}
              linkClass="btn bg-black dark:bg-white dark:text-black py-4 px-8 text-white text-md font-normal shadow-none md:px-6 mb-4"
            />
          )}
        </div>
        <div className="mt-4 h-fit md:col-span-2 md:mx-4 md:mt-0 md:px-4 ">
          <Collapse
            items={items as Item[]}
            classCollapseItem="py-5 px-5 md:px-7 bg-lightGray mb-4 "
            iconUp={
              <IconMinus className="text-primary-600 h-6 w-6 dark:text-slate-200" />
            }
            iconDown={
              <IconPlus className="text-primary-600 h-6 w-6 dark:text-slate-200" />
            }
          />
        </div>
      </div>
    </div>
  </WidgetWrapper>
);

export default FAQ;
