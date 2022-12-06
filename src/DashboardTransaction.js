import Sidebar from "./components/dashboard/Header";
import TransactionBox from "./components/dashboard/TransactionBox";
import ButtonLight from "./components/dashboard/ButtonLight";
import "./App.css";

function Dashboard() {
  return (
    <div className="row h-100 w-100">
      <div className="col-3">
        <Sidebar />
      </div>
      <div className="col p-5">
        <div className="pt-4">
          <h2>All Transactions</h2>
        </div>
        <div>
        <form class="form-inline">
          <div style={{width:"88%"}} class="input-group">
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
        <div>
          <TransactionBox />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
