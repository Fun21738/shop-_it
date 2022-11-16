// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./componets/login/Login";
import Logout from "./componets/logouts/Logout";
import Navbar from "./componets/Navbar/Navbar";
import AboutUs from "./componets/aboutus/AboutUs";
import Product from "./componets/products/Product";
import Cart from "./componets/cartitems/Cart";
import AddItems from "./componets/additems/AddItems"
// import Logout from "./componets/Logout";




function App() {
  return (
     <BrowserRouter>
    <div>

     <Navbar />
      <Routes>
        <Route>
          <Route path="/" element={<Navigate to="login"/>} />
          <Route path="login" element={<Login/>} />
          <Route path="logout" element={<Logout/>} />
          <Route path="about" element={<AboutUs/>} />
          <Route path="Products" element={<Product />} />
          <Route path="cartItem" element={<Cart/>} />
          <Route path="additems" element={<AddItems/>} />
        </Route>
      </Routes>
    </div>
   </BrowserRouter>
  );
}

export default App;
