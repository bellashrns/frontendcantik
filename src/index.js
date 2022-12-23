import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Catalog from "./Catalog";
import Dashboard from "./Dashboard";
import DashboardCatalog from "./DashboardCatalog";
import DashboardCategory from "./DashboardCategory";
import DashboardTransaction from "./DashboardTransaction";
import DashboardWebsite from "./DashboardWebsite";
import CreateCatalog from "./CreateCatalog";
import DetailPageCatalog from "./DetailPageCatalog";
import DetailPageTransaction from "./DetailPageTransaction";
import EditCatalog from "./EditCatalog";
import CustomOrder from "./CustomOrder";
import AboutUs from "./AboutUs";
import ProductDetail from './ProductDetail';
import ShoppingCart from './ShoppingCart';
import Transaction from "./Transaction";
import TransactionDetailPage from "./TransactionDetailPage";
import Checkout from './Checkout';
import Register from "./Register";
import Login from "./Login";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
        </Route>
        <Route path="/dashboard" element={<Dashboard />}>
        </Route>
        <Route path="/dashboard/catalog" element={<DashboardCatalog />}>
        </Route>
        <Route path="/dashboard/category" element={<DashboardCategory />}>
        </Route>
        <Route path="/dashboard/transaction" element={<DashboardTransaction />}>
        </Route>
        <Route path="/dashboard/website" element={<DashboardWebsite />}>
        </Route>
        <Route path="/dashboard/add-catalog" element={<CreateCatalog />}>
        </Route>
        <Route path="/dashboard/catalog/details/:id" element={<DetailPageCatalog />}>
        </Route>
        <Route path="/dashboard/catalog/edit/:id" element={<EditCatalog />}>
        </Route>
        <Route path="/dashboard/transaction/details/:id" element={<DetailPageTransaction />}>
        </Route>
        <Route path="/catalog" element={<Catalog />}>
        </Route>
        <Route path="/productdetail" element={<ProductDetail />}>
        </Route>
        <Route path="/shoppingcart" element={<ShoppingCart />}>
        </Route>
        <Route path="/checkout" element={<Checkout />}>
        </Route>
        <Route path="/custom" element={<CustomOrder/>}>
        </Route>
        <Route path="/about" element={<AboutUs/>}>
        </Route>
        <Route path="/transaction" element={<Transaction/>}>
        </Route>
        <Route path="/transaction/details/:id" element={<TransactionDetailPage/>}>
        </Route>
        <Route path="/register" element={<Register/>}>
        </Route>
        <Route path="/login" element={<Login/>}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);