import Sidebar from "./components/dashboard/Header";
import Card from "./components/dashboard/Card";
import "./App.css";

function Dashboard() {
  return (
    <div className="row h-100">
      <div className="col-3">
        <Sidebar />
      </div>
      <div className="col pt-5 px-5">
        <h1>Welcome, Admin!</h1>
        <p>Please select the menu below:</p>
        <div className="row">
            <div className="col">
                <Card
                title="Manage Catalogue"
                text="Set your product details here!"
                image="https://dummyimage.com/250/ffffff/000000"
                link="/dashboard/catalog"
                button="Open"
                />
            </div>
            <div className="col">
                <Card
                title="Manage Category"
                text="Edit your product category here!"
                image="https://dummyimage.com/250/ffffff/000000"
                link="/dashboard/category"
                button="Open"
                />
            </div>
            <div className="col">
                <Card
                title="Manage Transaction"
                text="You can check all transactions here!"
                image="https://dummyimage.com/250/ffffff/000000"
                link="/dashboard/transaction"
                button="Open"
                />
            </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
