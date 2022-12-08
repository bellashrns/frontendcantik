import React from "react";
import Product from "./Product";
import { products } from "./Assets";

function FProduct() {
    return (
        <div className="p-3">
            <h5 className="text-center pb-3">Featured Product</h5>
            <div className="row justify-content-center">
                {products.map((e) => (
                    <Product src={e.src} name={e.name} price={e.price} />
                ))}
            </div>
        </div>
    );
}

export default FProduct;