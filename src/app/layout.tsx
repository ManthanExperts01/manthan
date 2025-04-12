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
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Manthan Experts",
              "url": "https://www.manthanexperts.com/",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://www.manthanexperts.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }),
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
