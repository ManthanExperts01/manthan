const Calendar = () => {
  return (
    <>
      <span className="mr-6 flex h-[100px] w-[100px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="100"
          viewBox="0 0 100 100"
          fill="none"
        >
          <path
            d="M31.9849 25.4706L23.5608 25.2591C22.4071 25.2301 21.4681 26.1811 21.5186 27.3341C21.8312 34.472 22.3041 41.2338 22.135 45.9807C21.9611 52.0967 21.7393 54.6156 21.6859 59.7333C21.6684 67.5488 21.7338 78.4386 22.6381 79.1673C23.5424 79.896 41.8036 79.9896 52.31 79.896C61.3808 79.7611 77.2286 79.3564 77.8119 78.7935C78.3951 78.2306 77.8883 74.603 77.8119 72.5135C77.0603 56.2734 78.09 26.8703 77.1056 25.8366C76.7894 25.5047 73.5985 25.3193 68.9057 25.2299M38.8741 25.3542C46.2089 25.2411 54.8304 25.1442 62.0303 25.1635"
            stroke="white"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M36.5399 32.5412L34.4448 32.5387C33.1206 32.5875 32.0745 31.5393 32.1183 30.1993L31.9839 20.9615C31.9568 19.0943 33.4517 17.5603 35.319 17.5393V17.5393C37.1776 17.5184 38.703 19.0048 38.73 20.8634L38.8647 30.1234C38.8209 31.4634 37.7719 32.5091 36.5399 32.5412Z"
            stroke="white"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M66.3931 32.2505L64.579 32.2906C63.2458 32.3396 62.083 31.2083 62.0175 29.7832L61.8949 20.5837C61.8698 18.6985 63.3798 17.1509 65.2651 17.1296V17.1296C67.1351 17.1086 68.6729 18.598 68.7117 20.4677L68.9027 29.69C68.8586 31.0391 67.7263 32.2014 66.3931 32.2505Z"
            stroke="white"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M34.445 32.5383L34.4461 31.5383C34.4335 31.5383 34.4208 31.5385 34.4082 31.539L34.445 32.5383ZM36.5401 32.5407L36.5389 33.5407C36.548 33.5407 36.557 33.5406 36.5661 33.5404L36.5401 32.5407ZM32.1184 30.1989L33.1179 30.2315C33.1184 30.2158 33.1186 30.2001 33.1183 30.1843L32.1184 30.1989ZM32.0538 25.7538L33.0537 25.7392C33.0498 25.471 32.9382 25.2155 32.7441 25.0303C32.55 24.8451 32.2896 24.7456 32.0215 24.7543L32.0538 25.7538ZM32.0187 25.7549L32.0493 26.7544L32.0511 26.7544L32.0187 25.7549ZM22.226 26.0549L22.1954 25.0553C21.9186 25.0638 21.6577 25.1867 21.4749 25.3948C21.292 25.6028 21.2037 25.8773 21.2309 26.153L22.226 26.0549ZM22.2819 28.4464L23.2773 28.5422C23.279 28.5247 23.2802 28.5071 23.281 28.4894L22.2819 28.4464ZM22.1017 29.9466L21.1125 29.7997C21.1107 29.8122 21.1091 29.8246 21.1077 29.8371L22.1017 29.9466ZM21.8897 32.5199L22.888 32.5782L22.8882 32.5742L21.8897 32.5199ZM22.1642 36.5397L21.1801 36.7173C21.2273 36.9783 21.3761 37.2099 21.594 37.3612C21.8119 37.5124 22.0809 37.5709 22.3419 37.5238L22.1642 36.5397ZM35.4422 35.1437L35.409 34.1442L35.4047 34.1444L35.4422 35.1437ZM48.2682 35.6658L48.3662 34.6706L48.2682 35.6658ZM51.1888 35.9359L51.1087 36.9327L51.1115 36.9329L51.1888 35.9359ZM77.0418 34.8741L77.1962 35.8621C77.4623 35.8205 77.7003 35.6734 77.8565 35.454C78.0126 35.2346 78.0737 34.9615 78.0259 34.6965L77.0418 34.8741ZM76.8933 33.6227L75.9053 33.7777C75.9065 33.7852 75.9078 33.7928 75.9092 33.8003L76.8933 33.6227ZM76.2662 30.9071L75.302 31.1723L75.302 31.1723L76.2662 30.9071ZM75.9663 25.5711L76.9264 25.8507C77.016 25.543 76.9527 25.2111 76.7563 24.958C76.5599 24.7049 76.2541 24.5612 75.9338 24.5716L75.9663 25.5711ZM68.8208 25.7193L68.8107 24.7193C68.5437 24.722 68.2888 24.8314 68.1029 25.0231C67.917 25.2148 67.8155 25.473 67.821 25.74L68.8208 25.7193ZM68.903 29.6903L69.9025 29.7229C69.9031 29.7051 69.9032 29.6873 69.9028 29.6695L68.903 29.6903ZM66.3935 32.2508L66.4156 33.2506C66.4205 33.2504 66.4254 33.2503 66.4303 33.2501L66.3935 32.2508ZM64.5794 32.2909L64.5573 31.2911C64.5524 31.2912 64.5475 31.2914 64.5426 31.2915L64.5794 32.2909ZM62.0179 29.7835L61.018 29.7968C61.0181 29.8077 61.0184 29.8185 61.0189 29.8294L62.0179 29.7835ZM61.9639 25.7334L62.9638 25.72C62.9565 25.1748 62.5138 24.7359 61.9685 24.7334L61.9639 25.7334ZM53.9925 25.663L54.0034 24.6631L53.9925 25.663ZM38.7992 25.6106L38.7882 24.6106C38.5224 24.6136 38.2687 24.7222 38.0831 24.9126C37.8976 25.1029 37.7954 25.3593 37.7993 25.6251L38.7992 25.6106ZM38.8648 30.1229L39.8643 30.1556C39.8648 30.1399 39.865 30.1241 39.8647 30.1084L38.8648 30.1229ZM34.4438 33.5383L36.5389 33.5407L36.5412 31.5407L34.4461 31.5383L34.4438 33.5383ZM31.119 30.1662C31.0566 32.0772 32.57 33.608 34.4817 33.5376L34.4082 31.539C33.6715 31.5661 33.0928 31.0006 33.1179 30.2315L31.119 30.1662ZM31.0539 25.7683L31.1185 30.2134L33.1183 30.1843L33.0537 25.7392L31.0539 25.7683ZM32.0215 24.7543C32.0097 24.7547 31.998 24.7551 31.9863 24.7554L32.0511 26.7544C32.0628 26.754 32.0744 26.7536 32.0861 26.7533L32.0215 24.7543ZM31.9881 24.7554L22.1954 25.0553L22.2567 27.0544L32.0493 26.7544L31.9881 24.7554ZM21.2309 26.153C21.3153 27.0092 21.3105 27.7609 21.2828 28.4033L23.281 28.4894C23.3112 27.7872 23.3177 26.9358 23.2212 25.9567L21.2309 26.153ZM21.2865 28.3505C21.235 28.8851 21.2108 29.1379 21.1125 29.7997L23.0908 30.0934C23.1961 29.3843 23.2242 29.094 23.2773 28.5422L21.2865 28.3505ZM22.1017 29.9466C21.1077 29.8371 21.1077 29.8371 21.1077 29.8372C21.1077 29.8372 21.1077 29.8372 21.1077 29.8373C21.1076 29.8374 21.1076 29.8375 21.1076 29.8376C21.1076 29.8378 21.1076 29.8381 21.1075 29.8385C21.1074 29.8393 21.1073 29.8403 21.1072 29.8417C21.1069 29.8445 21.1064 29.8485 21.1059 29.8537C21.1047 29.8641 21.1031 29.8792 21.101 29.8988C21.0969 29.9379 21.0909 29.9948 21.0835 30.0669C21.0688 30.2111 21.0485 30.4163 21.0259 30.6619C20.981 31.152 20.9269 31.8087 20.8911 32.4656L22.8882 32.5742C22.9221 31.951 22.9739 31.321 23.0176 30.8445C23.0394 30.6068 23.059 30.4087 23.0731 30.2703C23.0802 30.2012 23.0859 30.1471 23.0898 30.1105C23.0917 30.0922 23.0932 30.0783 23.0942 30.0691C23.0947 30.0645 23.0951 30.0611 23.0953 30.0589C23.0955 30.0578 23.0955 30.057 23.0956 30.0565C23.0956 30.0563 23.0956 30.0561 23.0957 30.056C23.0957 30.056 23.0957 30.056 23.0957 30.056C23.0957 30.056 23.0957 30.056 23.0957 30.056C23.0957 30.056 23.0957 30.056 22.1017 29.9466ZM20.8914 32.4616C20.8321 33.476 20.8498 34.8873 21.1801 36.7173L23.1483 36.3621C22.8489 34.7033 22.837 33.4515 22.888 32.5782L20.8914 32.4616ZM22.3419 37.5238C25.3596 36.9791 29.9335 36.3512 35.4797 36.143L35.4047 34.1444C29.7519 34.3566 25.0836 34.9966 21.9866 35.5556L22.3419 37.5238ZM35.4754 36.1431C41.0366 35.9583 44.7449 36.3235 48.1701 36.6609L48.3662 34.6706C44.9195 34.331 41.1054 33.955 35.409 34.1442L35.4754 36.1431ZM48.1701 36.6609C49.1569 36.7582 50.1271 36.8538 51.1087 36.9327L51.2689 34.9391C50.3083 34.8619 49.356 34.7681 48.3662 34.6706L48.1701 36.6609ZM51.1115 36.9329C57.115 37.3984 66.0634 37.6025 77.1962 35.8621L76.8873 33.8861C65.9429 35.597 57.155 35.3955 51.2661 34.9389L51.1115 36.9329ZM78.0259 34.6965C78.0002 34.5541 77.984 34.3843 77.9634 34.1579L75.9716 34.339C75.9903 34.5445 76.0134 34.8065 76.0577 35.0518L78.0259 34.6965ZM77.9634 34.1579C77.9447 33.9524 77.9216 33.6904 77.8774 33.4451L75.9092 33.8003C75.9349 33.9427 75.951 34.1126 75.9716 34.339L77.9634 34.1579ZM77.8812 33.4677C77.7123 32.3912 77.4561 31.4626 77.2303 30.6419L75.302 31.1723C75.5295 31.9996 75.7562 32.827 75.9053 33.7777L77.8812 33.4677ZM77.2303 30.6419C76.7463 28.882 76.4123 27.6163 76.9264 25.8507L75.0061 25.2915C74.3192 27.6505 74.8178 29.412 75.302 31.1723L77.2303 30.6419ZM75.9338 24.5716C73.5154 24.6501 71.1465 24.6959 68.8107 24.7193L68.8308 26.7192C71.1791 26.6956 73.5632 26.6496 75.9987 26.5706L75.9338 24.5716ZM69.9028 29.6695L69.8206 25.6986L67.821 25.74L67.9032 29.711L69.9028 29.6695ZM66.4303 33.2501C68.3047 33.1812 69.8418 31.5807 69.9025 29.7229L67.9036 29.6576C67.8761 30.4981 67.1487 31.2223 66.3568 31.2515L66.4303 33.2501ZM64.6015 33.2906L66.4156 33.2506L66.3714 31.251L64.5573 31.2911L64.6015 33.2906ZM61.0189 29.8294C61.107 31.7461 62.6797 33.3614 64.6162 33.2902L64.5426 31.2915C63.8127 31.3184 63.0597 30.6711 63.0168 29.7375L61.0189 29.8294ZM60.964 25.7467L61.018 29.7968L63.0178 29.7701L62.9638 25.72L60.964 25.7467ZM61.9685 24.7334C59.2981 24.721 56.6526 24.692 54.0034 24.6631L53.9815 26.6629C56.6297 26.6919 59.2815 26.7209 61.9593 26.7333L61.9685 24.7334ZM54.0034 24.6631C48.9979 24.6083 43.9801 24.5534 38.7882 24.6106L38.8102 26.6105C43.9767 26.5535 48.9729 26.6082 53.9815 26.6629L54.0034 24.6631ZM39.8647 30.1084L39.7991 25.596L37.7993 25.6251L37.8649 30.1375L39.8647 30.1084ZM36.5661 33.5404C38.3573 33.4938 39.8042 31.9945 39.8643 30.1556L37.8654 30.0903C37.8379 30.9314 37.1869 31.5236 36.5141 31.5411L36.5661 33.5404Z"
            fill="white"
          />
          <path
            d="M22.4283 37.5869C28.4981 37.0669 35.1177 36.6779 42.0889 36.5709C48.9771 36.4212 51.7913 36.6039 57.7658 36.389C63.8131 36.1608 70.005 35.7421 77.246 35.7421"
            stroke="white"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M38.6766 44.1707C38.6766 44.1707 38.5489 50.7967 38.9386 56.4063C39.3282 62.016 38.8252 62.2488 38.6374 67.6787C38.4496 73.1086 38.3943 75.3905 38.3943 75.3905"
            stroke="white"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M49.6058 43.9022C49.6058 43.9022 49.252 50.569 49.5663 56.1923C49.8805 61.8156 49.3651 61.9796 49.1773 67.4095C48.9895 72.8395 49.2482 75.1357 49.2482 75.1357"
            stroke="white"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M60.9125 43.5653C60.9125 43.5653 60.5586 50.2321 60.8729 55.8554C61.1871 61.4786 60.6717 61.6427 60.4839 67.0726C60.2961 72.5024 60.5549 74.7987 60.5549 74.7987"
            stroke="white"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M71.406 53.3863C71.406 53.3863 55.6273 53.5364 49.4078 54.02C43.2762 54.5587 43.1015 54.0223 37.1092 54.0389C31.1168 54.0555 28.6791 54.3535 28.6791 54.3535"
            stroke="white"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M71.3448 63.8344C71.3448 63.8344 55.566 63.9845 49.3465 64.4682C43.1271 64.9518 43.0402 64.4705 37.0479 64.4871C31.0556 64.5037 28.6178 64.8018 28.6178 64.8018"
            stroke="white"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
        </svg>
      </span>
    </>
  );
};

export default Calendar;
