import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Catalogue } from "../../data/dashboard/Catalogue";
import ButtonLight from "./ButtonLight";
import "../../App.css";

function CatalogListBox() {

  return (
    <>
      <div className="row">
        {Catalogue.map((item, index) => {
          return (
            <div className="col-auto">
            <div class="card mt-3">
              <img
                class="card-img-top"
                src="https://dummyimage.com/250/ffffff/000000"
              ></img>
              <div class="card-body text-center">
                <h5 class="card-title">
                  <b>{item.itemName}</b>
                </h5>
                <p class="card-text">Rp {item.price}</p>
                <Link to={"/dashboard/catalog/details/"+item.id}>
                  <ButtonLight 
                    name="Open"
                    type="Button"
                  />
                </Link>
              </div>
            </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default CatalogListBox;
