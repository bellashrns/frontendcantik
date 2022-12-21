import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SidebarDataWeb } from "../data/dashboard/SidebarDataWeb";
import ButtonDark from "./dashboard/ButtonDark";
import "../App.css";
import { IconContext } from "react-icons";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import logo from "../assets/logo.jpg";
import login from "../assets/login.png";
import PopUpButton from "./popUpButton";
import LoginPopUp from "./LoginPopUp";
import close from "../assets/close.png";
// import { useState, useEffects } from "react";

function Heading(props) {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const [isOpen, setIsOpen] = useState(false);
    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    const [isOpenLoginPopUp, setIsOpenLoginPopUp] = useState(false);
    const togglePopupLoginPopUp = () => {
        setIsOpenLoginPopUp(!isOpenLoginPopUp);
    }

  return (
    <IconContext.Provider value={{ color: "undefined" }}>
      <div className="row border-bottom">
        <div className="col-3 p-5 mt-2">
          <div className="navbarWeb">
            <a
              className="menuWeb-bars-closed"
              href="#"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasExample"
              aria-controls="offcanvasExample"
            >
              <FaIcons.FaBars onClick={showSidebar} />
            </a>
          </div>

          <div
            class="offcanvas offcanvas-start navWeb-menu"
            data-bs-scroll="true"
            tabindex="-1"
            id="offcanvasExample"
            aria-labelledby="offcanvasExampleLabel"
          >
            <div class="offcanvas-body">
              <ul className="nav-menu-items" onClick={showSidebar}>
                <li className="navbar-toggle"></li>
                <li className="navbar-toggle px-4"></li>
                {SidebarDataWeb.map((item, index) => {
                  return (
                    <li key={index} className={item.cName}>
                      <Link to={item.path}>
                        {item.icon}
                        <span>{item.title}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className="col-6 d-flex justify-content-center">
          <img src={logo} style={{ width: 200 }} />
          </div>
        <div className="col-3 d-flex justify-content-end p-5 mt-2">
        <i class="fa-solid fa-user px-2" onClick={togglePopup}></i>
            {/* <img src={login} style={{width: 14, height: 18, marginRight: 8}}/> */}
               {/* <PopUpButton pict={login} handleClick={togglePopup}/> */}
               {isOpen && <LoginPopUp closeButton={close} handleClose={togglePopup} />}
          <i class="fa-solid fa-cart-shopping px-2"></i>
          <i class="fa-solid fa-magnifying-glass px-2"></i>
        </div>
      </div>
    </IconContext.Provider>
  );
}

export default Heading;
