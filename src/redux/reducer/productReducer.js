const initialState = {
  productList: [],
  productDetail: {}
};

function productReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_PRODUCTS_SUCCESS":
      return { ...state, productList: action.payload };
    case "GET_PRODUCT_DETAIL_SUCCESS":
      return { ...state, productDetail: action.payload }
    default:
      return state;
  }
}

export default productReducer;
