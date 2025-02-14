// components/GoogleAds.tsx

import Script from "next/script";

const GoogleAds = () => {
    return (
        <>
            {/* Google Ads Script */}
            <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-16616139643" id="google-gtag-script" crossOrigin="anonymous" />
            
            {/* Google Tag Manager Configuration */}
            <Script
                id="google-ads-initialization"
                dangerouslySetInnerHTML={{
                    __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'AW-16616139643');
                    `,
                }}
            />

            {/* Event snippet for Free Consultation Form conversion page */}
            <Script
                id="google-ads-conversion-event"
                crossOrigin="anonymous"
                dangerouslySetInnerHTML={{
                    __html: `
                        function gtag_report_conversion(url) {
                            var callback = function () {
                                if (typeof(url) != 'undefined') {
                                    window.location = url;
                                }
                            };
                            gtag('event', 'conversion', {
                                'send_to': 'AW-16616139643/mu6aCM_mzbsZEPvWmPM9',
                                'event_callback': callback
                            });
                            return false;
                        }
                    `,
                }}
            />

            {/* Configuration for phone number conversions */}
            <Script
                id="google-ads-phone-conversion"
                crossOrigin="anonymous"
                dangerouslySetInnerHTML={{
                    __html: `
                        gtag('config', 'AW-16616139643/4W86CNG81bsZEPvWmPM9', {
                            'phone_conversion_number': '9643969969'
                        });
                    `,
                }}
            />
        </>
    );
};

export default GoogleAds;
