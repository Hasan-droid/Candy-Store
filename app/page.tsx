import Layout from "../components/Layout";
import BestSellers from "../components/BestSellers";
import GetThemNow from "../components/GetThemNow";
import ProductsShop from "../components/ProductsShop";
import DiscoverMore from "../components/DiscoverMore";

export default function Home() {
  return (
    <Layout criteria={true}>
      <BestSellers />
      <GetThemNow />
      <ProductsShop />
      <DiscoverMore />
    </Layout>
  );
}
