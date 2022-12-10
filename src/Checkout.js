import React from "react";
import Heading from "./components/Heading";
import Footer from "./components/Footer";
import "./App.css";
import { cart, products } from "./components/Assets";
import { FormLabel, Form, FormGroup } from "react-bootstrap";

function Checkout() {
  return (
    <div>
      <Heading />
      <div className="border-bottom">
        {cart.map((item, index) => {
          return (
            <div className="row p-3">
              <div className="col-1 text-center my-auto">
                <h2>{index + 1}</h2>
              </div>
              <div className="col row">
                <img className="col-lg-1 col-sm-3" src={products[item.id-1].src} />
                <div className="col">
                  <h5>{products[item.id-1].name}</h5>
                  <p>quantity : {item.quantity}</p>
                  <h5>Total : Rp {item.quantity * products[item.id-1].price}</h5>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="p-3">
        <FormLabel>Address</FormLabel>
        <Form>
            <FormGroup>
                <FormLabel>Street Name</FormLabel>
                <input type="text" className="form-control" id="streetName" />
            </FormGroup>
            <div className="row mt-2">
                <FormGroup className="col">
                    <FormLabel>Kecamatan</FormLabel>
                    <input type="text" className="form-control" id="kecamatan" />
                </FormGroup>
                <FormGroup className="col">
                    <FormLabel>Kelurahan</FormLabel>
                    <input type="text" className="form-control" id="kelurahan" />
                </FormGroup>
                <FormGroup className="col">
                    <FormLabel>Kota</FormLabel>
                    <input type="text" className="form-control" id="kota" />
                </FormGroup>
                <FormGroup className="col">
                    <FormLabel>Provinsi</FormLabel>
                    <input type="text" className="form-control" id="provinsi" />
                </FormGroup>
                <FormGroup className="col">
                    <FormLabel>Zip Code</FormLabel>
                    <input type="text" className="form-control" id="zipCode" />
                </FormGroup>
            </div>
            <FormGroup className="mt-2">
                <FormLabel>Additional Information</FormLabel>
                <input type="text" className="form-control" id="additionalInfo" />
            </FormGroup>
            <div className="row mt-2">
                <FormGroup className="col">
                    <FormLabel>Phone Number</FormLabel>
                    <input type="text" className="form-control" id="phoneNumber" />
                </FormGroup>
                <FormGroup className="col">
                    <FormLabel>Bukti Transfer</FormLabel>
                    <input type="file" className="form-control" id="buktiTF" />
                </FormGroup>
            </div>
            <button type="submit" className="dashButtonLight mt-2">Submit</button>
        </Form>
      </div>
      <Footer />
    </div>
  );
}

export default Checkout;
