import Link from 'next/link';

const Breadcrumb = ({ pageName, description, title }: { pageName: string; description: string; title: string }) => {
  return (
    <>
      <section className="relative z-10 overflow-hidden text-center pt-28 lg:pt-[100px] lg:pb-[350px] lg:-mb-[350px] bg-secondary pb-16">
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4  flex justify-center">
              <div className="mb-8 max-w-[570px] md:mb-0 lg:mb-8">
                <h1 className="mb-5 text-2xl font-medium text-white dark:text-black sm:text-4xl">{title}</h1>
                <p className="text-base font-medium leading-relaxed text-white dark:text-body-color">{description}</p>
              </div>
            </div>
            <div className="w-full px-4 flex justify-center">
              <div className="">
                <ul className="flex items-center ">
                  <li className="flex items-center">
                    <Link
                      href="/"
                      className="pr-1 text-base font-medium text-lightGray dark:text-body-color hover:text-white"
                    >
                      Home
                    </Link>
                    <span className="mr-3 block h-2 w-2 rotate-45 border-r-2 border-t-2 border-white dark:border-body-color"></span>
                  </li>
                  <li className="text-base font-medium text-white">{pageName}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Breadcrumb;
