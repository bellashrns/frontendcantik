import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SidebarData } from "../../data/dashboard/SidebarData";
import ButtonDark from "./ButtonDark";
import "../../App.css";
import { IconContext } from "react-icons";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

function Header() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "undefined" }}>
      <div className="navbar">
          <Link to="#" className="menu-bars-closed">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            <li className="navbar-toggle px-4">
              <h1>Dashboard</h1>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
            <li className="navbar-toggle px-4"><ButtonDark name="Logout" type="Button"/></li>
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Header;
