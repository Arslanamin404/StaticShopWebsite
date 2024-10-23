import React from "react";

export const Navbar = () => {
  return (
    <nav className="py-3 md:py-4 flex items-center justify-between bg-amber-500 shadow-md shadow-yellow-700">
      <div>
        <a href="#">
          <h1 className="font-extrabold uppercase px-3 md:px-6 text-lg md:text-3xl tracking-wider text-[#333333]">
            AR Traders
          </h1>
        </a>
      </div>
      <div>
        <ul className="flex items-center justify-end gap-3 md:gap-x-10 mr-2 md:mr-8">
          <li className="font-semibold text-sm md:text-xl duration-300 active:scale-90 border-2 border-amber-800 rounded-md px-3 md:px-5 py-1 hover:bg-white/85">
            <a href="#">Home</a>
          </li>
          <li className="font-semibold text-sm md:text-xl duration-300 active:scale-90 border-2 border-amber-800 rounded-md px-3 md:px-5 py-1 hover:bg-white/85">
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
