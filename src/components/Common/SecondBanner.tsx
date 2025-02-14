import Link from 'next/link';
import Button from '../Button';

const SecondBanner = () => {
  return (
    <section className="">
      <div className="relative h-[520px] ">
        <div className="absolute inset-0 bg-[url('/images/banners/image-1.png')] bg-cover bg-center z-0"></div>
        {/* <div className="absolute inset-0 bg-[url('/images/banners/image-1.jpg')] bg-cover opacity-75 filter grayscale-50 z-0"></div> */}
        <div className="relative h-full flex items-center justify-center z-10">
          <div className=" flex flex-col gap-6 items-center justify-between">
            <h5 className="mb-2 text-center font-bold text-3xl tracking-tight text-white dark:text-white lg:text-5xl">
              From Notices to Resolutions -
              <br />
              We Handle It All
            </h5>
            <p className="mb-3 font-normal text-lg text-center text-white dark:text-gray-400">
              Years of Trusted Guidance For All Income Tax Matters – Effective,
              <br />
              Efficient, and Reliable
            </p>
            <Link href="/contact" passHref>
              <Button
                className=" border-2 bg-white p-3 text-base font-medium text-black transition duration-300 ease-in-out hover:border-white hover:bg-secondary hover:text-white"
                buttonText=" Free consultation"
              />
            </Link>
            <div className="flex mt-12 items-center flex-wrap text-white font-medium text-lg justify-center gap-16">
              <div className="flex gap-4">
                <div className="flex -space-x-2">
                  <img
                    className="inline-block size-8 rounded-full ring-2 ring-[#4fa447]"
                    src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                    alt="Avatar"
                  />
                  <img
                    className="inline-block size-8 rounded-full ring-2 ring-[#4fa447]"
                    src="https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                    alt="Avatar"
                  />
                  <img
                    className="inline-block size-8 rounded-full ring-2 ring-[#4fa447]"
                    src="https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&&auto=format&fit=facearea&facepad=3&w=300&h=300&q=80"
                    alt="Avatar"
                  />
                </div>
                <p className="flex items-center gap-1 ">
                  Trusted by<span className="text-[#4fa447] font-bold"> 10,000+ </span>Clients
                </p>
              </div>
              <div className="flex gap-4">
                <div className="flex -space-x-2">
                  <div className="relative size-10 p-2 rounded-full bg-[#FF9B05]">
                    <img
                      className="size-6 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                      src="/images/tax-search.png"
                      alt="Avatar"
                    />
                  </div>
                </div>
                <p className="flex items-center gap-1 ">
                  ITR Filled<span className="text-[#FF9B05] font-bold"> 50,000+ </span>Till Now
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondBanner;
