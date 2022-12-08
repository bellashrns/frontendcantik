import Sidebar from "./components/dashboard/Header";
import { Catalogue } from "./data/dashboard/Catalogue";
import { useParams } from 'react-router';
import { Link } from "react-router-dom";
import ButtonLight from "./components/dashboard/ButtonLight";
import "./App.css";

function DetailPageCatalog() {
  const { id } = useParams();
  // const angka = useParams();
  // const test = Catalogue;
  // PENDING!!!
  const data = Catalogue[id-1];

  return (
    <div className="row h-100">
      <div className="col-3">
        <Sidebar />
      </div>
      <div className="col pt-5 px-5">
        <h1>{data.itemName}</h1>
        
        <img
                styles={{width:"250px"}}
                class="border"
                src="https://dummyimage.com/250/ffffff/000000"
              ></img>
        <h5 class="mt-2"><b>Price:</b> Rp {data.price}</h5>
        <h5><b>Category:</b></h5><p>{data.category}</p>
        <h5><b>Description:</b></h5>
        <p>{data.desc}</p>
        <Link to={"/dashboard/catalog/edit/"+data.id}>
          <ButtonLight 
            name="Edit"
            type="Button"
          />
        </Link>
        <span> </span>
        <ButtonLight 
          name="Delete"
          type="Button"
        />
      </div>
    </div>
  );
}

export default DetailPageCatalog;