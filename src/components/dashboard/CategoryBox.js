import React from "react";
import { Link } from "react-router-dom";
import { Categories } from "../../data/dashboard/Categories";
import ButtonLight from "./ButtonLight";
import "../../App.css";

function CatalogListBox() {
  return (
    <>
      <div className="row-auto">
        {Categories.map((item, index) => {
          return (
            <div className="col">
            <div style={{width:"88%"}} class="card mt-3">
              <div class="card-body text-left">
                <div class="row w-100">
                  <div class="col">
                <h5 class="card-title pt-2">
                  <b>{item.name}</b>
                </h5>
                </div>
                <div class="col-md-4 .offset-md-4">
                <Link to={item.path}>
                  <ButtonLight 
                    name="Edit"
                    type="Button"
                  />
                </Link>
                <span class="ml-1"></span>
                <Link to={item.path}>
                  <ButtonLight 
                    name="Delete"
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
