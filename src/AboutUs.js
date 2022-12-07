import Heading from "./components/Heading";
import Footer from "./components/Footer";
import "./App.css";

function AboutUs() {
    return(
        <div className="container">
            <Heading/>
                <h1>About Us</h1>
                <p class="text-justify">Arranged With Love
Established in 2017, Fedora Florist is known for our beautiful flower 
arrangement in fresh, preserved dried and artificial flowers. 
We also provide unique design for any kind of floral products and events.
As starting in 2018, we started new fields in bridal bouquet, flower installation 
and decoration for all events especially wedding. </p>
            <h1>Address</h1>
            <p>Jl. Flamboyan utama 1 C2 no 9, Kosambi Baru, Cengkareng, Jakarta Barat 11750</p>
            <h1>Contact Us</h1>
            <p>belum tau mau di tulisin apa disini kl pun gaada yaudah</p>
            <h1>Social Media</h1>
            
            <Footer/>
        </div>
    );
}

export default AboutUs;