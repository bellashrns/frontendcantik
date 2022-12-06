import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Dashboard from "./Dashboard";
import Catalog from "./Catalog";
import CustomOrder from "./CustomOrder";
import AboutUs from "./AboutUs";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
        </Route>
        <Route path="/dashboard" element={<Dashboard />}>
        </Route>
        <Route path="/catalog" element={<Catalog />}>
        </Route>
        <Route path="/custom" element={<CustomOrder/>}>
        </Route>
        <Route path="/about" element={<AboutUs/>}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);