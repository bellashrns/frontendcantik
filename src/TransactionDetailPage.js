import Sidebar from "./components/dashboard/Header";
import { Transaction } from "./data/dashboard/Transaction";
import { Catalogue } from "./data/dashboard/Catalogue";
import { useParams } from 'react-router';
import Items from "./components/Items";
import ButtonLight from './components/dashboard/ButtonLight';
import "./App.css";
import Heading from "./components/Heading";
import Footer from "./components/Footer";

function DetailPageTransaction() {
  const { id } = useParams();
  const data = Transaction[id-1];
  const item = Catalogue[data.itemId];

  return (
    <div>
    <Heading />
    <div className="container my-4">
    <h1><b>Invoice Number:</b> {data.invoiceNumber}</h1>
        <h5><b>Category:</b></h5>
        <form class="form-inline">
          <div  class="input-group">
            <select
              class="form-control my-1 mr-sm-2"
              id="inlineFormCustomSelectPref"
            >
              <option selected>{data.status}</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <button type="submit" class="dashButtonLight">
              Edit Status
            </button>
          </div>
          </form>
          <Items 
          />
        <h4><b>Total: </b>Rp {data.total}</h4>
        <hr />
        <h4><b>Bukti Transfer: </b></h4>
        <img
                style={{width:"250px"}}
                class="border"
                src="https://dummyimage.com/250/ffffff/000000"
              ></img>
    </div>
    <Footer />
  </div>
  );
}

export default DetailPageTransaction;