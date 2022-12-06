import Heading from "./components/Heading";
import Footer from "./components/Footer";
import CCarousel from "./components/Carousel";

function CustomOrder() {
    return(
    <div className="container">
      <Heading />
      <div>
      <CCarousel />
      <p class="pt-md-3 pl-md-3 text-center">Request your own flower preference, tone color and budget. 
Contact us for more details</p>
    <a
        href="https://wa.me/6281586196863"
        class="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fa fa-whatsapp whatsapp-icon"></i>
      </a>
      </div>
      <Footer/>
    </div>
    );
}

export default CustomOrder;