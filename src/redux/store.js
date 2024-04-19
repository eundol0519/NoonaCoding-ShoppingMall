import { configureStore } from "@reduxjs/toolkit";
import authenticateReducer from "./slice/authenticateSlice";
import productReducer from "./slice/productSlice";

const store = configureStore({
    reducer: { auth: authenticateReducer, product: productReducer }
});

export default store;
