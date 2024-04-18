import axios from "axios";

const getProducts = (searchQuery) => {
  return async (dispatch, getState) => {
    await axios
      .get(
        `https://my-json-server.typicode.com/eundol0519/NoonaCoding-ShoppingMall/products?q=${searchQuery}`,
      )
      .then((res) =>
        dispatch({ type: "GET_PRODUCTS_SUCCESS", payload: res.data }),
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
      .then((res) => dispatch({ type: "GET_PRODUCT_DETAIL_SUCCESS", payload: res.data }))
      .catch((error) => console.error(error));
  }
}

export const productAction = { getProducts, getProductDetail };
