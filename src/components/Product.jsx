import React from "react";

function Product(props) {
    return (
        <div className="col-md-auto">
            <img src={props.src} />
            <h5>{props.name}</h5>
            <p>{props.price}</p>
        </div>
    );
}

export default Product;