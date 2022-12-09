import React from "react";
import { Link } from "react-router-dom";

function Product(props) {
    return (
        <div className="col-auto">
            <Link to="/productdetail">
                <img src={props.src} />
            </Link>
            <h5>{props.name}</h5>
            <p>Rp {props.price}</p>
        </div>
    );
}

export default Product;