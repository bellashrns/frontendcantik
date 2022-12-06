import React from "react";
import { Link } from "react-router-dom";
import { Catalogue } from "../../data/dashboard/Catalogue";
import "../../App.css";

function CatalogListBox() {
//   const [filteredList, setFilteredList] = new useState(Catalogue);
  return (
    <>
      <div className="text-reset">
        {Catalogue.map((item, index) => {
          return (
            <div class="card mt-3">
              <div class="card-body">
                <h5 class="card-title"><b>{item.itemName}</b></h5>
                <p class="card-text">
                  {item.desc}
                </p>
                <a href="#" class="btn btn-danger">
                  Open Details
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default CatalogListBox;
