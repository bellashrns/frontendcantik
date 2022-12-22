import Sidebar from "./components/dashboard/Header";
import ButtonLight from "./components/dashboard/ButtonLight";
import "./App.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";


function CreateCatalog() {
  const [addName, setAddName] = useState("");
  const [addCat, setAddCat] = useState("");
  const [addPrice, setAddPrice] = useState("");
  const [addDesc, setAddDesc] = useState("");
  const [addImg, setAddImg] = useState("");
  const [message, setMessage] = useState("");


  // get all categories
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const getCategories = async () => {
      const response = await fetch(
        "https://feodoraflo.itshiroto.me/laravel/api/categories"
      );
      const data = await response.json();
      setCategories(data);
    };
    getCategories();
  }, []);

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response2 = await fetch("https://feodoraflo.itshiroto.me/laravel/api/products/create", {
        method: "POST",
        credentials: "include",
        mode: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: addName,
          category_id: addCat,
          price: addPrice,
          description: addDesc,
          image: addImg,
        }),
      });
      const data = await response2.json();
      console.log(data);

    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="row h-100">
      <div className="col-3">
        <Sidebar />
      </div>
      <div className="col pt-3 px-5">
        <h1>Create Catalog</h1>
        <form class="w-50" onSubmit={handleSubmit}>
          <div class="form-group">
            <label for="inputItemName">Item Name</label>
            <input
              type="text"
              class="form-control"
              id="inputItemName"
              placeholder="Enter item name"
              required
              onChange={(e) => setAddName(e.target.value)}
            ></input>
          </div>
          <div class="form-group mt-3">
            <label class="my-1 mr-2" for="inlineFormCustomSelectPref">
              Category
            </label>
            <select
              class="form-control my-1 mr-sm-2"
              id="inlineFormCustomSelectPref"
              required
              onChange={(e) => setAddCat(e.target.value)}
            >
              <option selected>Choose...</option>
              {/* get category from api*/}
              {categories.map((category) => (
                <option value={category.id}>{category.name}</option>
              ))}


            </select>
          </div>
          <div class="form-group mt-3">
            <label for="inputPrice">Price</label>
            <div class="input-group">
              <div class="input-group-prepend">
                <div class="input-group-text">Rp</div>
              </div>
              <input
                type="number"
                class="form-control"
                id="inputPrice"
                placeholder="Enter price"
                required
                onChange={(e) => setAddPrice(e.target.value)}
              ></input>
            </div>
          </div>
          <div class="form-group mt-3">
            <label for="inputDesc">Description</label>
            <textarea
              class="form-control"
              id="inputDesc"
              placeholder="Enter description"
              rows="3"
              required
              onChange={(e) => setAddDesc(e.target.value)}
            ></textarea>
          </div>
          <div class="form-group mt-3">
            <label for="inputFile">Product Images</label>
            <input
              type="file"
              class="form-control"
              id="inputFile"
              multiple="multiple"
              required
              onChange={(e) => setAddImg(e.target.files)}

            ></input>
            <small>You can choose more than one file.</small>
          </div>
          <div className="mt-3">
            <ButtonLight name="Submit" type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateCatalog;
