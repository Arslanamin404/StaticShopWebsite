import { FaRegCopyright } from "react-icons/fa6";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <div className="mt-20 md:mt-28 bg-slate-800/90 text-white text-sm md:text-lg pt-5 pb-2 md:pt-8 md:pb-3">
        <p className="flex items-center justify-center">
          <span className="inline-block mr-1">
            <FaRegCopyright />
          </span>
          {currentYear} <a href="#" className="font-bold mx-1">AR Traders</a>| All
          rights reserved.
        </p>
        <p className="text-center text-xs md:text-lg mt-1">
          Owned by
          <span className="font-bold ml-1">
            Mohammad Amin Rather & Abdul Rasheed
          </span>
        </p>
      </div>
      <div className="bg-slate-800/90 text-green-300 pb-4 text-xs md:text-sm">
        <p className="text-center italic font-semibold">
          Developed By
          <a
            href="https://arsalanrather.vercel.app/"
            target="_blank"
            className="font-extrabold tracking-wider hover:underline ml-1"
          >
            Arsalan Rather
          </a>
        </p>
      </div>
    </>
  );
};
