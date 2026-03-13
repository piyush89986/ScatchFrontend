import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";              // index.ejs
import Shop from "./pages/Shop";              // shop.ejs
import Cart from "./pages/Card";              // cart.ejs
import Admin from "./pages/Admin";            // admin.ejs
import CreateProduct from "./pages/CreateProduct"; // createproducts.ejs
import OwnerLogin from "./pages/OwnerLogin";  // owner-login.ejs

function App() {
  return (
    <Router>
      <Routes>

        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />

        {/* Admin / Owner Routes */}
        <Route path="/owner-login" element={<OwnerLogin />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/create-product" element={<CreateProduct />} />

        {/* 404 Fallback */}
        <Route
          path="*"
          element={
            <div className="h-screen flex items-center justify-center text-2xl">
              Page Not Found
            </div>
          }
        />

      </Routes>
    </Router>
  );
}

export default App;
