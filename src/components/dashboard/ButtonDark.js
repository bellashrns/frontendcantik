import React from "react";
import "../../App.css";

function Button(props) {
  return (
    <>
      <button type={props.type} className="dashButton">{props.name}</button>     
    </>
  );
}

export default Button;