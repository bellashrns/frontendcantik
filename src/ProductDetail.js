import React, { useState } from "react";
import Heading from "./components/Heading";
import Footer from "./components/Footer";
import "./App.css";
import { products } from "./components/Assets";
import { useParams } from 'react-router';

function ProductDetail(props) {
    const { id } = useParams();
    const [quantity, setQuantity] = useState(1);

    return (
        <div>
            <Heading />
            {/* <h2>catalogue/{props.category}/{props.itemName}</h2> */}
            <div className="row p-5">
                <div className="col text-lg-center">
                    <img src={products[1].src} />
                </div>
                <div className="col">
                    <h1>{products[1].name}</h1>
                    <h4>{products[1].price}</h4>
                    {/* <p>{products.desc}</p> */}
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <form>
                        <label>Message</label><br />
                        <input type="text" />
                    </form><br />
                    <p>Quantity</p>
                    <div style={{marginTop: -10, marginLeft: -4}} className="row">
                        <button
                            onClick={() => setQuantity(quantity + 1)} 
                            className="dashButtonLight col-1 p-1"
                        ><i class="fa-solid fa-plus"></i></button>
                        <h5 className="col-1 text-center mt-2 me-sm-1">{quantity}</h5>
                        <button 
                            onClick={quantity > 1 ? () => setQuantity(quantity - 1) : undefined} 
                            className="dashButtonLight col-1 p-1"
                        ><i class="fa-solid fa-minus"></i></button>
                    </div>
                    <div className="row pt-3">
                        <button className="dashButtonLight col-lg-3 m-2">Add To Cart</button>
                        <button className="dashButtonLight col-lg-3 m-2">Ask Us</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ProductDetail;