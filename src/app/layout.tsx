// 'use client';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { GoogleTagManager } from '@next/third-parties/google';
// import ScrollToTop from "@/components/ScrollToTop";
import { DM_Sans } from 'next/font/google';
import 'node_modules/react-modal-video/css/modal-video.css';
import '../styles/index.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import WhatsappButton from '@/components/WhatsappChat';
import { Metadata } from 'next';
import { SITE } from '@/utils/site';
// import Head from 'next/head';
// import GoogleAds from '@/components/GoogleAds';
// import Script from 'next/script';

// Correct usage of DM_Sans with required properties
const inter = DM_Sans({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
});
export const metadata: Metadata = {
  title: {
    template: `%s — ${SITE.name}`,
    default: SITE.title,
  },
  description: SITE.description,
  twitter: {
    card: 'summary_large_image',
  },
};
// Root layout component
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
      <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
            {
              "@context": "https://schema.org",
              "@type": "AccountingService",
              "name": "Manthan Experts",
              "image": "",
              "@id": "",
              "url": "https://www.manthanexperts.com/",
              "telephone": "+91-9643-969-969",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "A-92 C, 2nd Floor, Building 3, Namberdar Estates, New Friends Colony",
                "addressLocality": "New Delhi",
                "postalCode": "110065",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 28.5705492,
                "longitude": 77.2686442
              },
              "sameAs": [
                "https://www.facebook.com/manthanexperts1",
                "https://x.com/ManthanExperts",
                "https://www.instagram.com/manthan_experts",
                "https://www.youtube.com/channel/UCwXMeuaMTCfAIsdLj4iyRjA",
                "https://www.linkedin.com/in/manthan-experts-19a9a31ab/",
                "https://www.manthanexperts.com/"
              ]
            }
            `
          }}
        />
      <link rel="canonical" href="https://www.manthanexperts.com/" />
        {/* Google Tag Manager script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-TG58QM96');
            `,
          }}
        />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-95PPZZR9K8"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-95PPZZR9K8');
            `,
          }}
        />
        {/* End Google Tag Manager script */}

        <script 
          async 
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2836637556511208"
          crossOrigin="anonymous">
        </script>
      </head>
      <body className={`bg-[#FCFCFC] dark:bg-black`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TG58QM96"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        <Header />
        {children}
        <WhatsappButton />
        <Footer />
      </body>
    </html>
  );
}
