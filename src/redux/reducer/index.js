import { combineReducers } from "redux";
import productReducer from "./productReducer";
import authenticateReducer from "./authenticateReducer";

const rootReducer = combineReducers({ auth: authenticateReducer, product: productReducer })

export default rootReducer