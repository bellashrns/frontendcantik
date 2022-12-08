import React from "react";
import { Link } from "react-router-dom";
import ButtonLight from "./ButtonLight";
import "../../App.css";

function Card(props) {
  return (
    <>
      <div class="card">
          <img class="card-img-top" src={props.image}></img>
          <div class="card-body text-center">
            <h6 class="card-title"><b>{props.title}</b></h6>
            <small class="card-text">
              {props.text} <br /> <br />
            </small>
            <Link to={props.link}>
                <ButtonLight 
                    name={props.button}
                    type={props.type}
                />
            </Link>
          </div>
        </div>
    </>
  );
}

export default Card;