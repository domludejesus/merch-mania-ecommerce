import { createSlice } from "@reduxjs/toolkit"; 

const cartSlice = createSlice({
    name: "cart", 
    initialState: {
        products: [], 
        quantity: 0, 
        total: 0, 
    }, 
    reducers:{
        addProduct:(state, action) => {   // add products in our cart 
        state.quantity += 1;         // update our products // cart total 
        state.products.push(action.payload); // payload is our products 
        state.total += action.payload.price * action.payload.quantity; 
    },
  },
})

export const { addProduct } = cartSlice.actions; 
export default cartSlice.reducer; 