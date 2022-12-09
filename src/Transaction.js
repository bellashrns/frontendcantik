import React, { useState } from "react";
import Heading from "./components/Heading";
import Footer from "./components/Footer";
import TransactionBox from "./components/TransactionBox";
import "./App.css";
import ButtonLight from "./components/dashboard/ButtonLight";

function Catalog() {

  return (
    <div>
      <Heading />
      <div className="container">
        <div className="pt-4">
          <h2>All Transactions</h2>
        </div>
        <div>
        <form class="form-inline">
          <div class="input-group">
              <input type="search" id="form1" class="form-control" placeholder="Search by Invoice Number" />
            <button type="submit" class="dashButtonLight">
              <i class="fas fa-search"></i>
            </button>
          </div>
          </form>
        </div>
        <div class="mt-3">
          <p><b>Filter by Status:</b></p>
        </div>
        <div class="mt-1">
        <ButtonLight 
            name="On Process"
            type="Button"
          />
          <span class="mr-1"></span>
          <ButtonLight 
            name="On Shipping"
            type="Button"
          />
          <span class="mr-1"></span>
          <ButtonLight 
            name="Arrived"
            type="Button"
          />
          </div>
        <div class="mb-5">
          <TransactionBox />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Catalog;