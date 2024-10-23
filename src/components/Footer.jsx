import { FaLocationDot, FaPhone, FaRegCopyright } from "react-icons/fa6";
import { IoIosTime } from "react-icons/io";
import { MdEmail } from "react-icons/md";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <div className="my-10 flex items-center justify-center ">
        <div className="flex items-start justify-center flex-col gap-y-5 md:rounded-lg text-white bg-gray-800 px-5 md:px-10 md:py-8 py-6 mt-5">
          <h1 className=" text-2xl mb-3 md:text-3xl font-bold">
            Visit Our Shop
          </h1>
          <div className="flex items-center justify-center gap-2">
            <span>
              <FaPhone size={20} />
            </span>
            <p className="text-sm md:text-xl font-semibold">
              +919906844314, +917006138730
            </p>
          </div>
          <div className="flex items-center justify-center gap-2">
            <span>
              <MdEmail size={20} />
            </span>
            <p className="text-sm md:text-xl font-semibold">
              <a href="mailto:arslanamin.org@gmail.com">
                arslanamin.org@gmail.com
              </a>
            </p>
          </div>

          <div className="flex items-center justify-center gap-2">
            <span>
              <FaLocationDot size={20} />
            </span>
            <p className="text-sm md:text-xl font-semibold">
              Lasjan, Near Petrol Pump Srinagar, 190015 Kashmir
            </p>
          </div>

          <div className="flex items-center justify-center gap-3">
            <span>
              <IoIosTime size={20} />
            </span>
            <div className="flex flex-col justify-center">
              <p className="text-sm md:text-xl font-semibold">
                Mon–Sat: 7:30AM – 8PM
              </p>
              <p className="text-sm md:text-xl font-semibold">
                Sunday: 09AM – 01PM
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-800/90 text-white text-sm md:text-lg pt-5 pb-2 md:pt-8 md:pb-3">
        <p className="flex items-center justify-center">
          <span className="inline-block mr-1">
            <FaRegCopyright />
          </span>
          {currentYear} <span className="font-bold mx-1">AR Traders</span>| All
          rights reserved.
        </p>
        <p className="text-center text-xs md:text-lg mt-1">
          Owned by <span className="font-bold">Mohammad Amin Rather & Abdul Rasheed</span>
        </p>
      </div>
      <div className="bg-slate-800/90 text-green-300 pb-4 text-xs md:text-sm">
        <p className="text-center italic font-semibold">
          Developed By{" "}
          <a
            href="https://arsalanrather.vercel.app/"
            target="_blank"
            className="font-extrabold tracking-wider hover:underline"
          >
            Arsalan Rather
          </a>
        </p>
      </div>
    </>
  );
};
