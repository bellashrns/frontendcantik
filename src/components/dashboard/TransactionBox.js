import React from "react";
import { Link } from "react-router-dom";
import { Transaction } from "../../data/dashboard/Transaction";
import ButtonLight from "./ButtonLight";
import "../../App.css";

function CatalogListBox() {
  return (
    <>
      <div className="row-auto">
        {Transaction.map((item, index) => {
          return (
            <div className="col">
            <div style={{width:"88%"}} class="card mt-3">
              <div class="card-body text-left">
                <div class="row w-100">
                  <div class="col">
                <h5 class="card-title pt-2">
                  <b>{item.invoiceNumber}</b> (Rp {item.total})
                </h5>
                <p class="card-text">{item.date}</p>
                <p class="transactionStatus">{item.status}</p>
                </div>
                <div class="mt-4 pt-3 col-md-4 .offset-md-4">
                <Link to={"/dashboard/transaction/details/"+item.id}>
                  <ButtonLight 
                    name="Open Details"
                    type="Button"
                  />
                </Link>
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

export default CatalogListBox;
