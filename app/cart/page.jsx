import RecommendedProducts from "../../components/RecommendedProducts";
import Promocode from "./components/Promocode";
import Subtotal from "./components/Subtotal";
import CartItem from "./components/CartItem";
import Layout from "../../components/Layout";

const orderData = [
  { name: "Jelly Candy", image: "/14.png", inStock: true, price: 19.23 },
  { name: "Sugar Gum", image: "/15.png", inStock: true, price: 13.45 },
];

export default function page() {
  return (
    <Layout>
      <div className="bg-custom">
        <div className="px-3 w-full mx-auto xl:w-4/6">
          <div className="grid grid-cols-1 lg:grid-cols-3 mb-24 gap-3">
            <div className="col-span-2">
              <div className="border-2 rounded-3xl border-custom-gray p-5 mb-4 md:mb-0 mr-0 bg-white">
                <div className="mb-6 font-fredoka font-semibold font-24 text-custom-purple">
                  Products
                </div>
                {orderData.map((item, index) => {
                  return (
                    <CartItem
                      key={index}
                      name={item.name}
                      image={item.image}
                      inStock={item.inStock}
                      price={item.price}
                    />
                  );
                })}
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <Promocode />
              <Subtotal />
            </div>
          </div>
          <RecommendedProducts />
        </div>
      </div>
    </Layout>
  );
}
