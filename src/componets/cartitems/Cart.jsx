import React from "react";
import { useEffect } from "react";
import { useSelector ,useDispatch } from "react-redux";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import "./Cart.css"
import { getTotals, removeFromCart  ,decreaseCart , increasecart,clearCart} from "../../redux/slice/CartSlice";
// import {  useSelector } from "react-redux";
function Cart() {
  const cart = useSelector((state) => state.cart);
  console.log(cart)
const dispatch=useDispatch()

useEffect(()=>{
dispatch(getTotals()) 
},[cart ,dispatch]);

const handleRemoveFromCart =(cart)=>{
  console.log(cart);
dispatch(removeFromCart(cart));
}

const handleDecreaseFromCart= (cart)=>{
dispatch(decreaseCart(cart));
};

const handleIncreaseCart= (cart)=>{
  dispatch(increasecart(cart));
  }

  const handleClearFromCart= ()=>{
    dispatch(clearCart());
    }



  return (
    <div>
      <Navbar />

      <div className="cart-container">
        <h3>Shopping Cart</h3>
        {cart.cart?.length === 0 ? (
          <div className="cart-empty">
            <p>your cart is currently empty!</p>
            <div className="starting-shopping">
              <Link to="./Products">
                <span>Start shopping with us !!!</span>
              </Link>
            </div>
          </div>
        ) : (
          <div>
            <div className="titles">
              <h4 className="pro">product</h4>
              <h5 className="pri">price</h5>
              <h5 className="dis">discount_rate</h5>
              <h5 className="des">description</h5>
            </div>
            <div className="cart-cards">
              {cart.cart?.map((cartItem) => (
                <div className="cart-Item" key={cartItem.Id}>
                  <div className="product--card">
                    <div className="imaage">
                      <img src={cartItem.image} alt="cartItem.name" />
                    </div>
                    <div className="doc">
                      <h3>{cartItem.title}</h3>
                      <p>{cartItem.body}</p>
                      <p>{cartItem.discountRate}</p>
                      <button onClick={()=>handleRemoveFromCart(cartItem)}>Remove</button> 
                    </div>
                  </div>
                  <div className="product-price">{cartItem.price}</div>
                  <div className="product-quantity">
                    <button onClick={()=>handleDecreaseFromCart(cartItem)}>-</button>
                    <div className="conter">${cartItem.CartQuantity}</div>
                    <button onClick={()=>handleIncreaseCart(cartItem)}>+</button>
                  </div>
                  <div className="total-price">
                    ${cartItem.price * cartItem.CartQuantity}
                  </div>
                </div>
              ))}
            </div>
            <div className="cart-summary">
              <button className="clear-cart" onClick={()=>handleClearFromCart()}>Clear all your cart items</button>
              <div className="cart-checkout">
                <span>Subtotal</span>
                <span className="amount">${cart.cartTotalAmount}</span>
              </div>
              <p>Taxes and shopping calculated at checkout</p>
              <button>Checkout</button>
              <div className="starting-shopping">
                <Link to="./Products">
                  <span>...continue shopping</span> 
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default Cart;
