import React from "react";

function Checkbox(props) {
    return (
        <div className="p-3 row">
            <div className="col-1 d-flex align-middle">
                <input onChange={props.onChange} checked={props.checked} type="checkbox" />
            </div>
            <div className="col row">
                <img className="col w-25" src={props.src} />
                <div className="col">
                    <h5>{props.label}</h5>
                    <p>quantity : {props.quantity}</p>
                    <h5>Total : Rp {props.totalPrice}</h5>
                </div>
            </div>
            <div className="col-1">
                <button className="btnTrash"><i class="fa-solid fa-trash"></i></button>
            </div>
        </div>
    );
}

export default Checkbox;