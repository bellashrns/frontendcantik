
import React, { useState } from "react";
import Sidebar from "./components/dashboard/Header";
import CategoryBox from "./components/dashboard/CategoryBox";
import ButtonLight from "./components/dashboard/ButtonLight";
import { Link } from "react-router-dom";


import "./App.css";

function Dashboard() {
  const [addCat, setAddCat] = useState("");
  const [message, setMessage] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response2 = await fetch("https://feodoraflo.itshiroto.me/laravel/api/categories/create", {
        method: "POST",
        credentials: "include",
        mode: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: addCat,
        }),
      });
      const data = await response2.json();
      console.log(data);

      if (data.status === "success") {
        setMessage("Category added successfully");
      } else {
        setMessage("Category already exists");
      }



    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="row h-100 w-100">
      <div className="col-3">
        <Sidebar />
      </div>
      <div className="col p-5">
        <h2>Add New Category</h2>

      <form class="form-inline" onSubmit={handleSubmit}>
          <div style={{width:"88%"}} class="input-group">
              <input 
                type="text" 
                id="form1" 
                class="form-control" 
                placeholder="Input your new category here." 
                value={addCat} 
                onChange={(e) => setAddCat(e.target.value)}
              />
            <button type="submit" class="dashButtonLight">
              Add
            </button>
            <div className="message">{message ? <p>{message}</p> : null}</div>
          </div>
      </form>

        <div className="pt-4">
          <h2>All Categories</h2>
        </div>
        <div>
        <form class="form-inline">
          <div style={{width:"88%"}} class="input-group">
              <input type="search" id="form1" class="form-control" placeholder="Search" />
            <button type="submit" class="dashButtonLight">
              <i class="fas fa-search"></i>
            </button>
          </div>
          </form>
        </div>
        <div>
          <CategoryBox />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
