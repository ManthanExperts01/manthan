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
import React from 'react';

const TopHeader = () => {
  return (
    <div className="bg-white">
      <div className="text-back container mx-auto w-full pt-3 flex justify-end items-center flex-col sm:flex-row">
        <div className="flex items-center space-x-2 ">
          <a href="mailto:info@manthanexperts.com" className="flex items-center space-x-2 font-bold">
            <IconMail stroke={2} size={20} />
            <p>info@manthanexperts.com</p>
          </a>
        </div>
        <div className="flex items-center space-x-2 pl-4">
          <a href="tel:+919643969969" className="flex items-center space-x-2 font-bold">
            <IconPhone stroke={2} size={20} />
            <p>+91-9643-969-969</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
