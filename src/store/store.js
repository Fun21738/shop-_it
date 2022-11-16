import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../redux/slice/ProductSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});
