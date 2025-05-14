'use client';

import { useState, useEffect } from 'react';
import { IconRss } from '@tabler/icons-react';
// import ToggleDarkMode from '@/components/Common/ToggleDarkMode';
import Link from 'next/link';
import Logo from '@/components/Common/Logo';
import ToggleMenu from '@/components/Common/ToggleMenu';
import CTA from '../Common/CTA';
import { CallToActionType } from '@/types/faq';
import { useHeaderData } from '@/shared/header.data';
import TopHeader from '../TopHeader';

const Header = () => {
  const headerData = useHeaderData();
  const { links, actions, isSticky, showToggleTheme, showRssFeed, position } = headerData;

  const updatedIsDropdownOpen =
    links &&
    links.map(() => {
      return false;
    });

  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean[]>(updatedIsDropdownOpen as boolean[]);
  const [isToggleMenuOpen, setIsToggleMenuOpen] = useState<boolean>(false);

  const handleMouseEnter = (index: number) => {
    setIsDropdownOpen((prevValues) => {
      const newValues = [...(prevValues as boolean[])];
      newValues[index] = true;
      return newValues;
    });
  };

  const handleMouseLeave = (index: number) => {
    setIsDropdownOpen((prevValues) => {
      const newValues = [...(prevValues as boolean[])];
      newValues[index] = false;
      return newValues;
    });
  };

  const handleToggleMenuOnClick = () => {
    setIsToggleMenuOpen(!isToggleMenuOpen);
  };

  return (
    <>
      <header
        className={`top-0 z-50 mx-auto w-full shadow-sm flex-none bg-white transition-all duration-100 ease-in dark:bg-slate-900 lg:bg-white/90 lg:backdrop-blur-sm dark:lg:bg-slate-900/90 ${
          isSticky ? 'sticky' : 'relative'
        }`}
        id="header"
      >
        <TopHeader />
        <div className="container py-3 lg:flex lg:justify-between lg:px-0 lg:py-3.5 overflow-hidden">
          <div className="flex justify-between">
            <Link
              className="flex items-center"
              href="/"
              onClick={() =>
                isToggleMenuOpen ? handleToggleMenuOnClick() : setIsDropdownOpen(updatedIsDropdownOpen as boolean[])
              }
            >
              <Logo />
            </Link>
            <div className="flex items-center lg:hidden">
              <ToggleMenu handleToggleMenuOnClick={handleToggleMenuOnClick} isToggleMenuOpen={isToggleMenuOpen} />
            </div>
          </div>
          <nav
            className={`${isToggleMenuOpen ? 'block' : 'hidden'} h-screen lg:w-full ${
              position === 'right' ? 'justify-end' : position === 'left' ? 'justify-start' : 'justify-center'
            } w-auto overflow-y-auto dark:text-slate-200 md:mx-5 lg:flex lg:h-auto lg:items-center lg:overflow-visible`}
            aria-label="Main navigation"
          >
            <ul className="flex w-full space-x-8 lg:space-x-0 flex-col pt-8 text-xl lg:w-auto lg:flex-row lg:self-center md:pt-0 md:text-base">
              {links &&
                links.map(({ label, href, icon: Icon, links }, index) => (
                  <li
                    key={`item-link-${index}`}
                    className={links?.length ? 'dropdown' : 'px-4'}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={() => handleMouseLeave(index)}
                  >
                    {links && links.length ? (
                      <>
                        <button className="flex items-center px-4 py-3 font-medium transition text-xl duration-150 ease-in-out hover:text-[#4fa447] hover:font-bold">
                          {label} {Icon && <Icon className="ml-0.5 hidden h-3.5 w-3.5 lg:inline" />}
                        </button>
                        <ul
                          className={`${
                            isDropdownOpen[index] ? 'block' : 'lg:hidden'
                          } rounded pl-4 lg:grid w-full max-w-[80vw] grid-cols-3 grid-rows-2 font-medium drop-shadow-xl lg:absolute top-30
                          lg:left-1/2 lg:-translate-x-1/2 lg:bg-white lg:pl-0 lg:backdrop-blur-md dark:lg:bg-slate-900/90`}
                        >
                          {links.map(({ label: label2, href: href2, iconSrc }, index2) => (
                            <li key={`item-link-${index2}`}
                            className='flex w-full'
                            >
                              <Link
                                className="flex items-center w-full first:rounded-t last:rounded-b text-wrap dark:hover:bg-gray-700 space-x-2 py-3 px-3 lg:p-6 hover:bg-[#4fa447] hover:text-white"
                                href={href2 as string}
                                onClick={() => (isToggleMenuOpen ? handleToggleMenuOnClick() : handleMouseLeave(index))}
                              >
                                <img src={`/images/navbarServices/${iconSrc}.png`} className='w-5' alt='NavIcons'/>
                                <div className="font-bold">
                                  {label2}
                                </div>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </>
                    ) : (
                      <Link
                        className="flex relative items-center py-3 font-medium transition duration-150 ease-in-out hover:text-[#4fa447] hover:font-semibold dark:hover:text-white after:absolute text-xl after:bottom-2 after:block after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:transition after:duration-300 after:content-[''] hover:after:scale-x-100 lg:after:bg-black"
                        href={href as string}
                        onClick={() => (isToggleMenuOpen ? handleToggleMenuOnClick() : handleMouseLeave(index))}
                      >
                        {label}
                      </Link>
                    )}
                  </li>
                ))}
            </ul>
          </nav>
          <div
            className={`${
              isToggleMenuOpen ? 'block' : ''
            } bottom-0 left-0 w-full justify-end pl-1 py- xl:p-3 lg:static lg:mb-0 lg:flex lg:w-auto lg:self-center lg:p-0`}
          >
            <div className="flex w-full items-center justify-between lg:w-auto">
              {/* {showToggleTheme && <ToggleDarkMode />} */}
              {showRssFeed && (
                <Link
                  className="text-muted inline-flex items-center rounded-lg p-2.5 text-sm hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                  aria-label="RSS Feed"
                  href=""
                >
                  <IconRss className="h-5 w-5" />
                </Link>
              )}
              {actions && actions.length > 0 && (
                <>
                  <GlowingButton>Free consultation</GlowingButton>
                </>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export const GlowingButton = ({ children }) => {
  return (
    <Link href={'/contact'} className="bg-[#4fa447] w-full text-white rounded-10px border-none cursor-pointer inline-block font-arial text-lg text-center no-underline animate-glowing px-8 py-3 whitespace-nowrap font-medium">
      <span className="">{children}</span>
    </Link>
  );
};
export default Header;
