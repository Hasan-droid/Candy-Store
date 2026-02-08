import RecommendedProducts from "../../components/RecommendedProducts";
import Promocode from "./components/Promocode";
import Subtotal from "./components/Subtotal";
import CartItem from "./components/CartItem";

export default function page() {
  return (
    <>
      <CartItem />
      <Promocode />
      <Subtotal />
      <RecommendedProducts />
    </>
  );
}
