// creating a global store to use in every page and components as well 

import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartRedux"; 


export default configureStore({
    reducer: {
        cart: cartReducer, 
    }
}); 