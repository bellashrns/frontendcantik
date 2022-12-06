import React from "react";

function Product(props) {
    return (
        <div className="col-auto">
            <img src={props.src} />
            <h5>{props.name}</h5>
            <p>Rp {props.price}</p>
        </div>
    );
}

export default Product;