import Image from "next/image";

const Logo = () => (
  <span className="ml-2 self-center whitespace-nowrap text-2xl font-bold text-secondary dark:text-white md:text-xl">
    <div className="w-[9rem] h-auto sm:w-40 sm:h-auto md:w-48 md:h-auto lg:w-56 lg:h-auto xl:w-64 xl:h-auto 2xl:w-72 2xl:h-auto">
      <Image
        src="/images/manthan-exprerts-high-logo-transparent.png"
        alt="author"
        width={300}
        height={200}
      />
    </div>
  </span>
);

export default Logo;
