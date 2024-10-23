export const Banner = () => {
  return (
    <div
      className={`relative bg-cover bg-center px-5 py-36 md:px-36 md:py-48 bg-mobile-hero-img md:bg-hero-img`}
    >
      <div className="absolute inset-0 bg-black bg-opacity-35"></div>
      <div className="relative container mx-auto text-center leading-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-5 md:mb-8 text-gray-200">
          <span className="font-extrabold  uppercase text-amber-400 tracking-wider mr-1">
            AR Traders
          </span>
          -Your Trusted Source for Genuine JCB Spare Parts
        </h1>
        <p className="text-lg md:text-2xl mb-8 text-gray-100 italic font-semibold">
          Quality You Can Rely On, Service You Can Trust!
        </p>
        <a
          href="#contact"
          className="bg-amber-400 text-black font-semibold px-5 md:px-8 py-3 tracking-wide md:text-lg rounded-md shadow-md border-2 border-amber-400 hover:bg-transparent/50 hover:text-white duration-300"
        >
          Contact Us Today
        </a>
      </div>
    </div>
  );
};
