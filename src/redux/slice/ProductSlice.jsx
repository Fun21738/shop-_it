import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios";

const url="https://shop-it-d258b-default-rtdb.firebaseio.com/products.json"
const initialState={products:[],status:"idle",error:"null"}

export const addProduct= createAsyncThunk(
    "products/addProduct",
     async (initial)=>{
        const response=await axios.post(url,initial)
          return response.data
     }
) 
export const productSlice = createSlice({
    name:'products',
    initialState,
    reducers:{
        addedProduct:{
            reducer(state,action){
                state.products.push(action.payload);
            },
        }
    },
})

export default productSlice.reducer;