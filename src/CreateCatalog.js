import Sidebar from "./components/dashboard/Header";
import Card from "./components/dashboard/Card";
import "./App.css";

function CreateCatalog() {
  return (
    <div className="row h-100">
      <div className="col-3">
        <Sidebar />
      </div>
      <div className="col pt-5 px-5">
        <h1>Create Catalog</h1>
      </div>
    </div>
  );
}

export default CreateCatalog;