"use client"
import { IconBrandWhatsapp } from '@tabler/icons-react';
import { useEffect, useState } from 'react';

function WhatsappButton() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const userAgent =
      typeof window !== 'undefined' ? navigator.userAgent : '';

    setIsMobile(
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        userAgent
      )
    );
  }, []);

  const whatsappUrl = isMobile
    ? 'https://wa.me/+919643969969'
    : 'https://web.whatsapp.com/send?phone=+919643969969';

  return (
    <a
      href={whatsappUrl}
      className="fixed bottom-4 right-4 md:bottom-20 md:right-10 flex items-center justify-center w-14 h-14 md:w-14 md:h-14 bg-green-500 text-white rounded-full shadow-md z-50"
      target="_blank"
      rel="noopener noreferrer"
    >
      <IconBrandWhatsapp className="w-8 h-8 md:w-8 md:h-8" />
    </a>
  );
}

export default WhatsappButton;
