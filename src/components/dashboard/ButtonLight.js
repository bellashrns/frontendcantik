import React from "react";
import "../../App.css";

function Button(props) {
  return (
    <>
      <button type={props.type} className="dashButtonLight">{props.name}</button>     
    </>
  );
}

export default Button;