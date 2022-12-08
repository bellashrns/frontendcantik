import Sidebar from "./components/dashboard/Header";
import ButtonLight from "./components/dashboard/ButtonLight";
import "./App.css";

function DashboardWebsite() {
  return (
    <div className="row h-100">
      <div className="col-3">
        <Sidebar />
      </div>
      <div className="col pt-5 px-5 mt-5">
        <h1>Edit Homepage Banner</h1>
        <form class="w-50">
          <div class="form-group mt-3">
            <label for="inputFile">Homepage Banner</label>
            <input
              type="file"
              class="form-control"
              id="inputFile"
              multiple="multiple"
              required
            ></input>
          </div>
          <div className="mt-3">
            <ButtonLight name="Submit" type="submit" />
          </div>
        </form>
        <h1 class="mt-3">Edit Custom Order Banner</h1>
        <form class="w-50">
          <div class="form-group mt-3">
            <label for="inputFile">Custom Order Page Banner</label>
            <input
              type="file"
              class="form-control"
              id="inputFile"
              multiple="multiple"
              required
            ></input>
          </div>
          <div className="mt-3">
            <ButtonLight name="Submit" type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default DashboardWebsite;
