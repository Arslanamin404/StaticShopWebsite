import aboutImg from "../assets/aboutImg.webp";

export const AboutUs = () => {
  return (
    <div className="bg-amber-500/75 my-10 md:m-14 md:rounded-md shadow shadow-yellow-900">
      <h1 className="text-3xl md:text-5xl font-bold text-center py-4 text-white">
        About Us
      </h1>
      <div className="px-6 pb-10 md:px-20 md:pt-6 md:pb-14 flex items-center justify-between w-full md:gap-x-20">
        <div className="hidden md:block">
          <img
            src={aboutImg}
            alt="AR Traders"
            className="h-80 w-[150rem] rounded-xl shadow-md shadow-black/80 hover:scale-95 duration-500"
          />
        </div>
        <div className="text-slate-900 md:font-semibold">
          <p className=" md:text-xl mb-2">
            At AR Traders, we proudly specialize in providing genuine,
            high-quality JCB spare parts to meet all your machinery needs. With
            years of industry experience, we are dedicated to offering top-tier
            products and services that ensure your equipment continues to
            operate at peak performance. Our commitment to excellence means that
            we understand the importance of minimizing downtime and maximizing
            efficiency for your business.
          </p>
          <p className="md:text-xl">
            Whether you need engine components, hydraulic systems, or electrical
            parts, we carry a comprehensive range of spare parts to support the
            reliability and longevity of your JCB machinery. Our team is always
            ready to assist you in finding the exact parts you need to keep your
            operations running smoothly and efficiently.
          </p>
        </div>
      </div>
    </div>
  );
};
