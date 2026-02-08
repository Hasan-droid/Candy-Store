import Image from "next/image";
import productsData from "../data/productsData";
import Product from "./product";
export default function ProductsShop() {
  return (
    <section className="mb-20">
      <div className="px-3 md:px-7 w-full mx-auto xl:w-4/6">
        <div className="mb-10 font-fredoka text-2xl">
          <div className="flex jusitfy-center -mb-1">
            <Image
              className="h-5"
              src="/heading-icon.svg"
              width={18}
              height={24}
              alt="heading"
            />
          </div>
          <div className="text-center">
            <span className="text-red-500 font-semibold">500 </span>
            <span className="text-custom-purple font-semibold">products</span>
          </div>
        </div>
        <div className="grid gap-3 md:gap-6 grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {productsData.map((product, index) => {
            return (
              <Product
                name={product.name}
                price={product.price}
                image={product.image}
                key={index}
              />
            );
          })}
        </div>
        <div className="flex gap-2 mt-6 justify-center align-middle">
          <div className="bg-pink-300 p-2 rounded-full">
            <Image
              src="/arrow-left.svg"
              width={20}
              height={12}
              alt="left arrow"
            />
          </div>
          <div className="bg-pink-400 p-2 rounded-full">
            <Image
              src="/arrow-right.svg"
              alt="arrow right"
              width={20}
              height={12}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
