import React, { useState } from "react";
import Heading from "./components/Heading";
import Footer from "./components/Footer";
import Product from "./components/Product";
import { products, categories } from "./components/Assets";
import Collapse from "react-bootstrap/Collapse";
import "./App.css";
import { useParams } from 'react-router';
import { useEffect} from "react";

function Catalog() {
  const { id } = useParams();
  const [open, setOpen] = useState(false);

  // get all categories
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);


  useEffect(() => {
    const getCategories = async () => {
      try {
        var requestOptions = {
          method: 'GET',
          redirect: 'follow',
          credentials: "include",
        };
        fetch("https://feodoraflo.itshiroto.me/laravel/api/categories", requestOptions)
          .then(response => response.json())
          .then(result => setCategories(result))
          .catch(error => console.log('error', error));

      } catch (err) {
        console.log(err);
      }
    };
    getCategories();
  }, []);

  // get all products
  useEffect(() => {
    const getProducts = async () => {
      try {
        var requestOptions = {
          method: 'GET',
          redirect: 'follow',
          credentials: "include",
        };
        fetch("https://feodoraflo.itshiroto.me/laravel/api/products", requestOptions)
          .then(response => response.json())
          .then(result => setProducts(result))
          .catch(error => console.log('error', error));

      } catch (err) {
        console.log(err);
      }
    };
    getProducts();
  }, []);
  

  return (
    <div>
      <Heading />
      <div className="pt-3 col-6 mx-auto text-center">
      {/* get all categories and map them, onclick get products by category */}

        {categories.map((e) => (
          <button
            className="btnCat p-1 pt-2 mx-2"
            onClick={() => setOpen(!open)}
          >
            <h5>{e}</h5>
          </button>
        ))}

        {/* {categories.map((e) => (
            <button
              className="btnCat p-1 pt-2 mx-2"
            >
              <h5>{e}</h5>
            </button>
        ))} */}
      </div>
      <div className="row justify-content-center pt-3">
      {/* map all product */}
        {products.map((e) => (
          <Product src={e.src} name={e.name} price={e.price} />
        ))}


        {/* {products.map((e) => (
          <Product src={e.src} name={e.name} price={e.price} />
        ))}
        {products.map((e) => (
          <Product src={e.src} name={e.name} price={e.price} />
        ))}
        {products.map((e) => (
          <Product src={e.src} name={e.name} price={e.price} />
        ))} */}
      </div>
      <Collapse in={open}>
        <div className="row justify-content-center pt-3">
          {products.map((e) => (
            <Product src={e.src} name={e.name} price={e.price} />
          ))}

          {/* ini nanti untuk see all button gue limit 10 produk aja yg didisplay
        {products.map((e) => e.id < 10 && (
          <Product src={e.src} name={e.name} price={e.price} />
        ))} */}

        </div>
      </Collapse>
      <div className="text-center pb-4">
        <button
          onClick={() => setOpen(!open)} 
          aria-controls="example-collapse-text"
          aria-expanded={open}
          className="dashButtonLight p-2"
        >
          SEE ALL
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default Catalog;