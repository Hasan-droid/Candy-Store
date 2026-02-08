import recommendedProducts from "../data/recomendedProducts";
import Product from "../components/product";
import Image from "next/image";

export default function RecommendedProducts() {
  return (
    <section className="mb-20">
      <div className="px-3 md:px-7 w-full mx-auto xl:w-4/6">
        <div className="mb-10 font-fredoka text-2xl">
          <div className="flex justify-center -mb-1">
            <Image
              className="h-5"
              src="/heading-icon.svg"
              width={18}
              height={24}
              alt="heading"
            />
          </div>
          <div className="text-center">
            <span className="text-red-500 font-semibold">Recommended </span>
            <span className="text-custom-purple font-semibold">Products</span>
          </div>
        </div>
        <div className="grid gap-3 md:gap-6 grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {recommendedProducts.map((product, index) => {
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
      </div>
    </section>
  );
}
