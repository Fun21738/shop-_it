import React from "react";
import { Link } from "react-router-dom";
import { TfiShoppingCartFull } from "react-icons/tfi";
import "./Navbar.css";
import { useSelector } from 'react-redux';
function Navbar() {
  const { cart } = useSelector((state) => state.cart)
  return (
    <div className="nav-links">
      <ul>
        <li>
          <h1 className="title">shop-it</h1>
        </li>
        <li>
          <Link to="/products">product</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/additems">AddItem</Link>
        </li>
        <li>
          <Link to="/login">logout</Link>
        </li>
        
        <li>
            <div className="counter">
            <Link to="/cartItem">
              <TfiShoppingCartFull />
               <span>
                {cart.length}
               </span>
            </Link>
            </div>
       
        </li>
       
      </ul>
    </div>
  );
}

export default Navbar;
