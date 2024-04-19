import { configureStore } from "@reduxjs/toolkit";
import authenticateReducer from "./reducer/authenticateReducer";
import productReducer from "./reducer/productReducer";

const store = configureStore({
    reducer: { auth: authenticateReducer, product: productReducer }
});

export default store;
