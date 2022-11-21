import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "../redux/slice/CartSlice";
import productsReducer from "../redux/slice/ProductSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart:CartSlice
  },
});
