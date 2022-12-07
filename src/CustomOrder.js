import Heading from "./components/Heading";
import Footer from "./components/Footer";
import CCarousel from "./components/Carousel";
import Whatsapp from "./components/Whatsapp";
import "./App.css";

function CustomOrder() {
    return(
    <div className="container">
      <Heading />
      <CCarousel />
      <p class="pt-md-3 pl-md-3 text-center">Request your own flower preference, tone color and budget. 
Contact us for more details</p>
<div className="whatsapp" class="pt-md-3 pl-md-3 text-center">
  <i class="fa-lg fa-brands fa-whatsapp"></i>
  <Whatsapp/>
</div>
    {/* <a
        href="https://wa.me/6281586196863"
        class="whatsapp_float"
        target="_blank"
      >
        <i class="fa fa-whatsapp whatsapp-icon"></i>
      </a> */}
      <Footer/>
    </div>
    );
}

export default CustomOrder;