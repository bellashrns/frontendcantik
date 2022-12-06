import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Catalog from "./Catalog";
import Dashboard from "./Dashboard";
import DashboardCatalog from "./DashboardCatalog";
import DashboardCategory from "./DashboardCategory";
import DashboardTransaction from "./DashboardTransaction";
import CreateCatalog from "./CreateCatalog";
import CreateCategory from "./CreateCategory";
import DetailPageCatalog from "./DetailPageCatalog";
import DetailPageTransaction from "./DetailPageTransaction";

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
        <Route path="/dashboard/add-catalog" element={<CreateCatalog />}>
        </Route>
        <Route path="/dashboard/add-category" element={<CreateCategory />}>
        </Route>
        <Route path="/dashboard/catalog/details" element={<DetailPageCatalog />}>
        </Route>
        <Route path="/dashboard/transaction/details" element={<DetailPageTransaction />}>
        </Route>
        <Route path="/catalog" element={<Catalog />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);