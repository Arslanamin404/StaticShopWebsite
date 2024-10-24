import React from "react";

export const Navbar = () => {
  return (
    <nav className="py-3 md:py-4 flex items-center justify-between bg-amber-500 shadow-md shadow-yellow-700">
      <div>
        <a href="#" className="outline-none">
          <h1 className="font-extrabold uppercase px-3 md:px-6 text-lg md:text-3xl tracking-wider text-[#2b2a2a]">
            AR Traders
          </h1>
        </a>
      </div>
      <div>
        <ul className="flex items-center justify-end gap-3 mr-2 md:mr-8">
          <li className="font-bold text-sm md:text-xl duration-300 active:scale-90 px-3 md:px-5 py-1 hover:scale-110">
            <a href="#" className="outline-none">Home</a>
          </li>
          <li className="font-bold text-sm md:text-xl duration-300 active:scale-90 px-3 md:px-5 py-1 hover:scale-110">
            <a href="#contact" className="outline-none">Contact Us</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
