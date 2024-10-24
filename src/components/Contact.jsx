import {
  FaLocationDot,
  FaPhone,
  FaRegCopyright,
  FaUser,
} from "react-icons/fa6";
import { IoIosTime } from "react-icons/io";
import { MdEmail } from "react-icons/md";
export const Contact = () => {
  return (
    <div id="contact" className="bg-amber-500 py-10 px-5 md:py-12 md:px-16">
      <h1 className="text-3xl md:text-6xl font-extrabold text-center text-gray-800">
        Contact Us
      </h1>
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 mt-5 md:mt-10 md:gap-16">
        <div className=" flex items-start justify-center flex-col gap-y-5 md:rounded-lg text-white bg-gray-800 px-5 md:px-10 md:py-8 py-6 ">
          <h1 className=" text-2xl mb-3 md:text-3xl font-bold">
            Visit Our Shop
          </h1>
          <div className="flex items-center justify-center gap-2">
            <span>
              <FaUser size={20} />
            </span>
            <p className="md:ml-1 text-sm md:text-xl font-semibold flex items-start justify-center flex-col">
              <span>Mohammad Amin Rather (peer),</span>
              <span>Younis Rasheed</span>
            </p>
          </div>
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
        <div className="w-full md:w-[45%] h-full">
          <iframe
            className="w-full md:h-[38rem] border border-amber-900 shadow-md shadow-gray-900/90 rounded-md"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1168.936889764604!2d74.86953202862281!3d34.03738566588081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1729702500009!5m2!1sen!2sin"
            width="600"
            height="450"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
