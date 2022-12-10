import Footer from "./components/Footer";
import Heading from "./components/Heading";
import CCarousel from "./components/Carousel";
import logo from "./assets/logo.jpg";
import FProduct from "./components/FProduct";
import { Outlet, Link } from "react-router-dom";
import "./App.css";
import { useEffect, useState } from "react";
import shopee from "./assets/shopee.png";
import PopUpButton from "./components/popUpButton";
import tokped from "./assets/tokped.png";
import LoginPopUp from "./components/LoginPopUp";
import login from "./assets/login.png";

function Home(props) {
    // const [isOpen, setIsOpen] = useState(false);
    // const togglePopup = () => {
    //     setIsOpen(!isOpen);
    // }

    // const [isOpenLoginPopUp, setIsOpenLoginPopUp] = useState(false);
    // const togglePopupLoginPopUp = () => {
    //     setIsOpenLoginPopUp(!isOpenLoginPopUp);
    // }

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
      <div className="text-center pb-4">
        <Link to="/catalog"><button
          className="dashButtonLight p-2"
        >
          SEE ALL
        </button></Link>
      </div>
      <Footer />
      <Outlet />

      {/* <div className="login">
               <PopUpButton pict={login} handleClick={togglePopup}/>
               {isOpen && <LoginPopUp closeButton={tokped} pict={shopee} handleClose={togglePopup} />}
            </div> */}
    </div>
  );
}


export default Home;
