import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  productList: [],
  productDetail: {}
};

const productSlice = createSlice({
  name: 'product',
  initialState: initialState,
  reducers: {
    getAllProducts(state, action) {
      state.productList = action.payload
    },
    getProductDetail(state, action) {
      state.productDetail = action.payload
    }
  }
})

export const productActions = productSlice.actions
export default productSlice.reducer