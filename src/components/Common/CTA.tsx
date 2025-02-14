"use client"
import LinkWithAnimation from "../LinkWithAnimation";
import { twMerge } from 'tailwind-merge';
import { CallToActionType, LinkOrButton } from '@/types/faq';

const CTA = ({ callToAction, containerClass, linkClass }: LinkOrButton) => {
  const { text, href, icon: Icon, targetBlank } = callToAction as CallToActionType;

  return (
    <>
      {href && (text || Icon) && (
        <div className={twMerge('flex w-auto cursor-pointer', containerClass)}>
          <LinkWithAnimation
            href={href}
            className={linkClass}
            LinkText={text}
            icon={Icon}
            targetBlank={targetBlank}
          />
        </div>
      )}
    </>
  );
};

export default CTA;
