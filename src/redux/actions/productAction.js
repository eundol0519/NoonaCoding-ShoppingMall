import axios from "axios";
import { productActions } from "../reducer/productReducer";

const getProducts = (searchQuery) => {
  return async (dispatch, getState) => {
    await axios
      .get(
        `https://my-json-server.typicode.com/eundol0519/NoonaCoding-ShoppingMall/products?q=${searchQuery}`,
      )
      .then((res) => dispatch(productActions.getAllProducts(res.data))
      )
      .catch((error) => console.error(error));
  };
};

const getProductDetail = (id) => {
  return async (dispatch, getState) => {
    await axios
      .get(
        `https://my-json-server.typicode.com/eundol0519/NoonaCoding-ShoppingMall/products/${id}`,
      )
      .then((res) => dispatch(productActions.getProductDetail(res.data)))
      .catch((error) => console.error(error));
  }
}

export const productAction = { getProducts, getProductDetail };
