import Heading from "./components/Heading";
import Footer from "./components/Footer";
import Product from "./components/Product";
import products from "./components/Assets";

function Catalog() {
  return (
    <div>
      <Heading />
      <div className="pt-3 col-6 mx-auto text-center">
        <button
          style={{ backgroundColor: "transparent", borderColor: "transparent" }}
        >
          <h5>Fresh Flower</h5>
        </button>
        <button
          style={{ backgroundColor: "transparent", borderColor: "transparent" }}
        >
          <h5>Preserved & Dried Flowers</h5>
        </button>
        <button
          style={{ backgroundColor: "transparent", borderColor: "transparent" }}
        >
          <h5>Artificial Flowers</h5>
        </button>
        <button
          style={{ backgroundColor: "transparent", borderColor: "transparent" }}
        >
          <h5>Bloombox</h5>
        </button>
        <button
          style={{ backgroundColor: "transparent", borderColor: "transparent" }}
        >
          <h5>Flower Basket</h5>
        </button>
        <button
          style={{ backgroundColor: "transparent", borderColor: "transparent" }}
        >
          <h5>Vase Arrangement</h5>
        </button>
        <button
          style={{ backgroundColor: "transparent", borderColor: "transparent" }}
        >
          <h5>Money Bouquet</h5>
        </button>
        <button
          style={{ backgroundColor: "transparent", borderColor: "transparent" }}
        >
          <h5>Flower Board</h5>
        </button>
        <button
          style={{ backgroundColor: "transparent", borderColor: "transparent" }}
        >
          <h5>Standing Flower</h5>
        </button>
        <button
          style={{ backgroundColor: "transparent", borderColor: "transparent" }}
        >
          <h5>Frame</h5>
        </button>
      </div>
      <div className="row justify-content-center pt-3">
        {products.map((e) => (
          <Product src={e.src} name={e.name} price={e.price} />
        ))}
        {products.map((e) => (
          <Product src={e.src} name={e.name} price={e.price} />
        ))}
        {products.map((e) => (
            <Product src={e.src} name={e.name} price={e.price} />
          ))}
      </div>
      <Footer />
    </div>
  );
}

export default Catalog;
