import "./App.css";
import Heading from "./components/Heading";
import CCarousel from "./components/Carousel";
import Whatsapp from "./components/Whatsapp";
import Footer from "./components/Footer";

function CustomOrder() {
    return(
    <div>
      <Heading />
      <CCarousel />
      <p class="pt-md-3 pl-md-3 text-center">Request your own flower preference, tone color and budget. 
Contact us for more details</p>
<div className="whatsapp" class="pt-md-3 pl-md-3 text-center">
  <i class="fa-lg fa-brands fa-whatsapp"></i>
  <Whatsapp/>
</div>
      <Footer/>
    </div>
    );
}

export default CustomOrder;