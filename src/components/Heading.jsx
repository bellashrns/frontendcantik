import React from "react";
import logo from "../assets/logo.jpg";

function Heading() {
    return <div className="row border-bottom">
        <div className="col-3 p-5 mt-2">
            <i class="fa-solid fa-bars"></i>
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