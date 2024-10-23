import { products } from "../utils/productData";

export const ProductSection = () => {
  return (
    <div className="my-10 md:my-14 md:rounded-md">
      <h1 className="text-3xl md:text-5xl font-bold text-center py-4 text-black/85">
        Our Products
      </h1>
        <div
          className="px-6 pb-10 md:px-20 md:pt-6 md:pb-14 flex items-center justify-center flex-col flex-wrap md:flex-row w-full gap-y-5 md:gap-12"
          >
          {products.map((product) => (
          <div key={product.title} className="hover:scale-105 duration-500 md:w-[25rem] bg-slate-900 pb-3 flex flex-col gap-1 rounded-2xl shadow shadow-amber-800">
            <div className="h-48 rounded-t-xl overflow-hidden shadow shadow-gray-400">
              <img src={product.imageUrl} alt={product.title} className="h-full w-full object-fill " />
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col items-center justify-center px-5 gap-y-3 mt-5 mb-8">
                <span className="text-xl font-bold text-gray-100">{product.title}</span>
                <p className="text-sm md:text-base font-semibold text-gray-300 text-center">{product.description}</p>
              </div>
            </div>
          </div>
        ))}
        </div>
    </div>
  );
};
