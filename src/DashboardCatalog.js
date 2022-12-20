import Sidebar from "./components/dashboard/Header";
import CatalogListBox from "./components/dashboard/CatalogListBox";
import ButtonLight from "./components/dashboard/ButtonLight";
import { Link } from "react-router-dom";

import "./App.css";

function Dashboard() {
  return (
    <div className="row h-100 w-100">
      <div className="col-3">
        <Sidebar />
      </div>
      <div className="col p-5">
        <Link to="/dashboard/add-catalog">
          <ButtonLight name="Add New Catalog" type="Button"/>
        </Link>
        <div className="pt-4">
          <h2>Active Catalog</h2>
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
          <CatalogListBox />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
