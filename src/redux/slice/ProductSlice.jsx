import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const url = "https://shop-it-d258b-default-rtdb.firebaseio.com/products.json";
const initialState = { products: [], status: "idle", error: "null", cart: [] };


export const addProduct = createAsyncThunk(
  "products/addProduct",
  async (initial) => {
    const response = await axios.post(url, initial);
    return response.data;
  }
);

export const fetchData = createAsyncThunk(
  "products/fecthData",

  async () => {
    try {
      const response = await axios.get(url);
      const res = response.data;
      const fetchDataArr = [];

      for (let key in res) {
        fetchDataArr.push({
          id: key,
          title: res[key].title,
          body: res[key].body,
          image: res[key].image,
          price: res[key].price,
          discount: res[key].discount,
        });
      }
    //   console.log(response)
      return fetchDataArr;
    } catch (err) {
      console.log(err);
    }
  }
);

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addedProduct: {
      reducer(state, action) {
        state.products.push(action.payload);
      },
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.products = action.payload;
    //   console.log("ff",action.payload)
    });
  },
});

export default productSlice.reducer;
