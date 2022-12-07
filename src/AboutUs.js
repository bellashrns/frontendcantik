import Heading from "./components/Heading";
import Footer from "./components/Footer";
import "./App.css";
import Maps from "./components/Maps";
import tokped from "./assets/tokped.png";
import shopee from "./assets/shopee.png";
import instagram from "./assets/instagram.png";
import whatsapp from "./assets/whatsapp.png";

function AboutUs() {
    return(
        <div>
            <Heading/>
            <div class="container">
                <h1 class="pt-md-3 pl-md-3 text-justify">About Us</h1>
                <p>Arranged With Love
Established in 2017, Fedora Florist is known for our beautiful flower 
arrangement in fresh, preserved dried and artificial flowers. 
We also provide unique design for any kind of floral products and events.
As starting in 2018, we started new fields in bridal bouquet, flower installation 
and decoration for all events especially wedding. </p>
            <h1 class="pt-md-3 pl-md-3 text-justify">Address</h1>
            <p>Jl. Flamboyan utama 1 C2 no 9, Kosambi Baru, Cengkareng, Jakarta Barat 11750</p>
            <h1 class="pt-md-3 pl-md-3 text-justify">Contact Us</h1>
            <p>belum tau mau di tulisin apa disini kl pun gaada yaudah</p>
            <h1 class="pt-md-3 pl-md-3 text-justify">Social Media</h1>
            <ul class="ml-pl-2 list-inline">
                <a href="https://www.instagram.com/feodora.florist/" target="_blank" rel="noopener noreferrer">
                <ul class="list-inline">
                <li class="list-inline-item"><img src={instagram} style={{width: 20, marginTop: -6, marginLeft: 7}}></img></li>
                <li class="list-inline-item">Instagram</li>
                </ul>
                </a>
                <a href="https://wa.me/6281586196863" target="_blank" rel="noopener noreferrer">
                <ul class="list-inline">
                <li class="list-inline-item"><img src={whatsapp} style={{width: 20, marginTop: -6, marginLeft: 7}}></img></li>
                <li class="list-inline-item">Whatsapp</li>
                </ul>
                </a>
                <a href="https://www.tokopedia.com/feodoraflorist" target="_blank" rel="noopener noreferrer">
                <ul class="list-inline">
                <li class="list-inline-item"><img src={tokped} style={{width: 20, marginTop: -6, marginLeft: 7}}></img></li>
                <li class="list-inline-item">Tokopedia</li>
                </ul>
                </a>
                <a href="https://shopee.co.id/feodoraflorist" target="_blank" rel="noopener noreferrer">
                <ul class="list-inline">
                <li class="list-inline-item"><img src={shopee} style={{width: 20, marginTop: -6, marginLeft: 7}}></img></li>
                <li class="list-inline-item">Shopee</li>
                </ul>
                </a>
            </ul>
            </div>
            <Footer/>
            {/* <Maps/> */}
            </div>
    );
}

export default AboutUs;