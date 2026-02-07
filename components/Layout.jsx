import HeaderMain from "./HeaderMain";
import HeaderSecoundry from "./HeaderSecoundry";
import Footer from "./Footer";

export default function Layout({ children, criteria }) {
  return (
    <div className="bg-custom font-poppins">
      {criteria ? <HeaderMain /> : <HeaderSecoundry />}
      {children}
      <Footer />
    </div>
  );
}
