import React from "react";
import test1 from "../assets/test1.jpg";
import test2 from "../assets/test2.jpg";
import test3 from "../assets/test3.jpg";
import Product from "./Product";

function FProduct() {
    return (
        <div className="text-center p-3">
            <h5 className="pb-3">Featured Product</h5>
            <div className="row justify-content-md-center">
                <Product src={test1} name="item1" price="10.000" />
                <Product src={test2} name="item2" price="20.000" />
                <Product src={test3} name="item3" price="30.000" />
            </div>
        </div>
    );
}

export default FProduct;