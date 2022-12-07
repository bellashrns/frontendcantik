import React from "react";
import logo from "../assets/logo.jpg";
import tokped from "../assets/tokped.png";
import shopee from "../assets/shopee.png";
import instagram from "../assets/instagram.png";
import whatsapp from "../assets/whatsapp.png";

function Footer() {
    return <div className="row border-top">
        <div className="col-3 p-4">
            <h5>Address</h5>
            <p>Jl. Flamboyan utama 1 C2 no 9, Kosambi Baru, Cengkareng, Jakarta Barat 11750</p>
        </div>
        <div className="col-6 d-flex justify-content-center">
            <img src={logo} style={{width: 200}} />
        </div>
        <div className="col-3 p-4">
            <h5>Contact Us</h5>
            <img src={instagram} style={{width: 20, marginTop: -6, marginLeft: 7}} />
            <img src={whatsapp} style={{width: 23, marginTop: -5, marginLeft: 5}} />
            <img src={tokped} style={{width: 20, marginTop: -6, marginLeft: 7}} />
            <img src={shopee} style={{width: 23, marginTop: -5, marginLeft: 5}} />
        </div>
    </div>;
}

export default Footer;