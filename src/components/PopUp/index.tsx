import React from 'react';
import { IconX } from '@tabler/icons-react';
import CTA from '../Common/CTA';
import { CallToActionType } from '@/types/faq';

interface PopUpProps {
  openPopUp: boolean;
  closePopUp: () => void;
  popUpTextToShow: string;
}

const PopUp: React.FC<PopUpProps> = ({ openPopUp, closePopUp, popUpTextToShow }) => {
  const handleClosePopUp = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = e.target as HTMLElement;
    if (target.id === 'ModelContainer') {
      closePopUp();
    }
  };

  if (!openPopUp) return null;
  const callToAction: CallToActionType = {
    text: 'See Our Blogs',
    href: '/blogs',
  };
  return (
    <div
      id="ModelContainer"
      className="fixed z-50 inset-0 bg-black flex justify-center items-center bg-opacity-20 backdrop-blur-sm"
      onClick={handleClosePopUp}
    >
      <div className="p-2 bg-white w-10/12 md:w-1/3 shadow-inner border-e-emerald-600 rounded-lg py-5 relative">
        <button className="absolute top-0 right-0 m-3" onClick={closePopUp}>
          <IconX />
        </button>
        <div className="w-full p-8 justify-center items-center flex flex-col">
          <h2 className="font-semibold py-3 text-center text-xl">{popUpTextToShow}</h2>
          <CTA
            callToAction={callToAction}
            linkClass="bg-secondary dark:bg-white dark:text-black m-1 px-4 py-2 text-white text-md font-normal shadow-none md:px-6"
          />
        </div>
      </div>
    </div>
  );
};

export default PopUp;
