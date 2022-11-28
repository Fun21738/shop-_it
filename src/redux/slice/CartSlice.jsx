import { createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

// const url = "https://shop-it-d258b-default-rtdb.firebaseio.com/products.json";
const initialState ={
    cart: []
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const existingIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id 
      );

      if (existingIndex >= 0) {
        state.cart[existingIndex] = {
          ...state.cart[existingIndex],
          cartQuantity: state.cart[existingIndex].cartQuantity + 1,
        };
        // toast.info("Increased product quantity", {
        //   position: "bottom-left",
        // });
      } else {
        let tempProductItem = { ...action.payload, cartQuantity: 1 };
        state.cart.push(tempProductItem);
        // toast.success("Product added to cart", {
        //   position: "bottom-left",
        // });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cart));
    },
    decreaseCart(state, action) {
      const existingIndex = state.cart.findIndex(
        (cart)=>cart.id === action.payload.id
      );

      if (state.cart[existingIndex].cartQuantity > 1) {
        state.cart[existingIndex].cartQuantity -= 1;

        // toast.info("Decreased product quantity", {
        //   position: "bottom-left",
        // });
      } else if (state.cart[existingIndex].cartQuantity === 1) {
        const nextCart = state.cart.filter(
          (cart) => cart.id !== action.payload.id 
        );

        state.cart = nextCart;

        // toast.error("Product removed from cart", {
        //   position: "bottom-left",
        // });
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cart));
    },

clearCart(state, action){
  state.cart =[];

  localStorage.setItem("cartItems", JSON.stringify(state.cart));
},




    removeFromCart(state, action) {
      const nextCart = state.cart.filter(
        cart=> cart.id !==action.payload.id
      )
      state.cart =nextCart
     
    },
    getTotals(state, action) { 
      let { total, quantity } = state.cart.reduce(
        (cartTotal, cart) => {
          const { price, cartQuantity } = cart;
          const itemTotal = price * cartQuantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      total = parseFloat(total.toFixed(2));
      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
    },
    // clearCart(state, action) {
    //   state.cartItems = [];
    // //   localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    //   toast.error("Cart cleared", { position: "bottom-left" });
    // },
  },
});

export const { addToCart, decreaseCart, removeFromCart, clearCart , getTotals } =
  cartSlice.actions;

export default cartSlice.reducer;
