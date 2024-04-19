import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";

const initialState = {
  productList: [],
  productDetail: {},
  isLoading: false,
  error: ''
};

export const getProducts = createAsyncThunk('product/fetchAll', async (searchQuery, thunkAPI) => {
  return await axios
    .get(
      `https://my-json-server.typicode.com/eundol0519/NoonaCoding-ShoppingMall/products?q=${searchQuery}`,
    )
    .then((res) => res.data)
    .catch((error) => thunkAPI.rejectWithValue(error));
})

export const getProductDetail = createAsyncThunk('product/fetchDetail', async (id, thunkAPI) => {
  return await axios
    .get(
      `https://my-json-server.typicode.com/eundol0519/NoonaCoding-ShoppingMall/products/${id}`,
    )
    .then((res) => res.data)
    .catch((error) => thunkAPI.rejectWithValue(error));
})

const productSlice = createSlice({
  name: 'product',
  initialState: initialState,
  // redux에 의해서 바로바로 호출되는 reducer를 모아둔다.
  // actions에서 dispatch를 사용하여 직접 호출하는 경우
  // 즉, 동기적으로 자신의 state를 바꾸는 경우에 사용
  reducers: {},
  // thunk or saga 등 외부 라이브러리에 의해서 호출되는 reducer를 모아둔다.
  // createAsyncThunk에 의해서 상황에 맞게 자동으로 호출되는 경우
  // 즉, 외부로 부터 state가 바뀌는 경우 (비동기 케이스 주로 처리)
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.productList = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload
      })
      .addCase(getProductDetail.pending, (state) => { state.isLoading = true })
      .addCase(getProductDetail.fulfilled, (state, action) => {
        state.isLoading = false;
        state.productDetail = action.payload;
      })
      .addCase(getProductDetail.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
  }
})

export const productActions = productSlice.actions
export default productSlice.reducer