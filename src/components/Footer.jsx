import React from "react";
import logo from "../assets/logo.jpg";
import tokped from "../assets/tokped.png";
import shopee from "../assets/shopee.png";
import instagram from "../assets/instagram.png";
import whatsapp from "../assets/whatsapp.png";

function Footer() {
    return <div className="row border-top">
        <div className="col-3 p-4">
            <div className="addressfooter">
            <h5>Address</h5>
            <p>Jl. Flamboyan Utama 1 C2 no 9, Kosambi Baru, Cengkareng, Jakarta Barat 11750</p>
        </div></div>
        <div className="col-6 d-flex justify-content-center">
            <img src={logo} style={{width: 200}} id="footer-logo" />
        </div>
        <div className="col-3 p-4 d-flex justify-content-end">
            <div className="contactusfooter">
            <h5 className="contactus">Contact Us</h5>
            <a href="https://www.instagram.com/feodora.florist/" target="_blank">
            <img src={instagram} style={{width: 20, marginTop: -6, marginLeft: 7}} />
            </a>
            <a href="https://api.whatsapp.com/send/?phone=62895345960340&text&type=phone_number&app_absent=0" target="_blank">
            <img src={whatsapp} style={{width: 23, marginTop: -5, marginLeft: 5}} />
            </a> 
            <a href="https://www.tokopedia.com/feodoraflorist" target="_blank">
            <img src={tokped} style={{width: 20, marginTop: -6, marginLeft: 7}} />
            </a>
            <a href="https://shopee.co.id/shop/39260709?utm_source=an_11358680000&utm_medium=affiliates&utm_campaign=-&utm_content=39260709----&utm_term=8fbccranrk6k" target="_blank">
            <img src={shopee} style={{width: 23, marginTop: -5, marginLeft: 5}} />
            </a>
            </div>
            </div>
    </div>;
}

export default Footer;