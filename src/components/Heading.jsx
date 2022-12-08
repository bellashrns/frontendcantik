import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SidebarDataWeb } from "../data/dashboard/SidebarDataWeb";
import ButtonDark from "./dashboard/ButtonDark";
import "../App.css";
import { IconContext } from "react-icons";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import logo from "../assets/logo.jpg";

function Heading() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(true);

    return <div className="row border-bottom">
        <div className="col-3 p-5 mt-2">
        <IconContext.Provider value={{ color: "undefined" }}>
      <div className="navbarWeb">
      <p data-bs-toggle="offcanvas" tabindex="-1" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><Link to="#" className="menuWeb-bars-closed">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link></p>
        </div>
        <div class="offcanvas" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div className="offcanvas-body navWeb-menu active">
          <ul className="navWeb-menu-items">
          <li className="navbarWeb-toggle">
              
            </li>
            <li className="navbarWeb-toggle px-5 mt-3">
              
            </li>
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
      </IconContext.Provider>
        </div>
        <div className="col-6 d-flex justify-content-center">
            <img src={logo} style={{width: 200}} />
        </div>
        <div className="col-3 d-flex justify-content-end p-5 mt-2">
            <i class="fa-regular fa-user px-2"></i>
            <i class="fa-solid fa-cart-shopping px-2"></i>
            <i class="fa-solid fa-magnifying-glass px-2"></i>
        </div>
    </div>;
}

export default Heading;