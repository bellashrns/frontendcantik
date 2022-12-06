import Sidebar from "./components/dashboard/Header";
import CatalogListBox from "./components/dashboard/CatalogListBox";

function Dashboard() {

  return (
    <div className="row h-100">
      <div className="col-3">
        <Sidebar />
       </div>
       <div className="col p-5">
        <button type="button" class="btn btn-danger">Add New Catalog</button>
        <div className="pt-4">
        <h2>Active Catalog</h2>
        </div>
        <div>
          SEARCH DISINI
        </div>
        <div>
          <CatalogListBox />
        </div>
       </div>
     </div>
  );
}

export default Dashboard;
