import Sidebar from "./components/dashboard/Header";
import ButtonLight from "./components/dashboard/ButtonLight";
import { Catalogue } from "./data/dashboard/Catalogue";
import { useParams } from 'react-router';
import "./App.css";

function EditCatalog() {
  const { id } = useParams();
  const data = Catalogue[id-1];

  return (
    <div className="row h-100">
      <div className="col-3">
        <Sidebar />
      </div>
      <div className="col pt-3 px-5">
        <h1>Edit Catalog</h1>
        <form class="w-50">
          <div class="form-group">
            <label for="inputItemName">Item Name</label>
            <input
              type="text"
              class="form-control"
              id="inputItemName"
              placeholder="Enter item name"
              value={data.itemName}
              required
            ></input>
          </div>
          <div class="form-group mt-3">
            <label class="my-1 mr-2" for="inlineFormCustomSelectPref">
              Category
            </label>
            <select
              class="form-control my-1 mr-sm-2"
              id="inlineFormCustomSelectPref"
            >
              <option selected>{data.category}</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
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
                value={data.price}
                required
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
              value={data.desc}
              required
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
            ></input>
            <small>You can choose more than one file.</small>
          </div>
          <div className="mt-3">
            <ButtonLight name="Edit" type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditCatalog;
