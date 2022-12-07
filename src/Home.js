import Footer from "./components/Footer";
import Heading from "./components/Heading";
import CCarousel from "./components/Carousel";
import logo from "./assets/logo.jpg";
import FProduct from "./components/FProduct";
import { Outlet, Link } from "react-router-dom";
import "./App.css";

function Home() {

  return (
    <div className="Home">
      <Heading />
      <div>
      <CCarousel />
      <div className="text-center border-top border-bottom p-3">
        <img style={{width: 200}} src={logo} />
        <h5>Arranged With Love</h5>
        <p className="mx-auto w-50">
          Established in 2017, Feodora Florist is known for our beautiful flower arrangement in fresh, preserved dried and artificial flowers. 
          We also provide unique design for any kind of floral products and events. As starting in 2018, we started new fields in bridal bouquet, 
          flower installation and decoration for all events especially wedding.</p>
      </div>
      <FProduct />
      </div>
      <Footer />
      <Outlet />
    </div>
  );
}


export default Home;
