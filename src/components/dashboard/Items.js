import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import { Transaction } from "../../data/dashboard/Transaction";
import { Catalogue } from "../../data/dashboard/Catalogue";
import ButtonLight from "./ButtonLight";
import "../../App.css";

function Items() {
  const { id } = useParams();
  const data = Transaction[id-1];
  const catalog = Catalogue;

  return (
    <>
      <div className="row-auto mb-3">
        {data.items.map((item, index) => {
          return (
            <div className="col">
            <div style={{width:"88%"}} class="card mt-3">
              <div class="card-body text-left">
                <div class="row w-100">
                  <div class="col-2">
                  <img
                style={{width:"100px"}}
                class="border"
                src="https://dummyimage.com/250/ffffff/000000"
              ></img>
                  </div>
                  <div class="col-8">
                <h5 class="card-title pt-2">
                  <b>{catalog[item.itemId-1].itemName}</b>
                </h5>
                <div>
                  <small><b>Price: </b>Rp {catalog[item.itemId-1].price}<br />
                  <b>Quantity: </b>{item.quantity}</small>
              </div>
                </div>
                <div class="col-2">
                  <p><b>Rp </b>{catalog[item.itemId-1].price}</p>
                </div>
                </div>
            </div>
            </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Items;
