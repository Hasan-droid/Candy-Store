import Layout from "../components/Layout";
import BestSellers from "../components/BestSellers";
import GetThemNow from "../components/GetThemNow";

export default function Home() {
  return (
    <Layout criteria={true}>
      <BestSellers />
      <GetThemNow />
    </Layout>
  );
}
