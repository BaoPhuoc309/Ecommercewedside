import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../../until/Status";
import { BASE_URL } from "../../until/fakeApis";

const initialState = {
  products: [],
  productsStatus: STATUS.IDLE,
  productsSingle: [],
  productsSingleStatus: STATUS.IDLE,
};

const productSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {},
  extraReducers: (builed) => {
    builed
      .addCase(fetchProduct.pending, (state, action) => {
        state.productsStatus = STATUS.LOADING;
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.productsStatus = STATUS.SUCCEEDED;
        state.products = action.payload;
      })

      .addCase(fetchProduct.rejected, (state, action) => {
        state.productsStatus = STATUS.FAILED;
      })

      .addCase(fetchSingleProduct.pending, (state, action) => {
        state.productsSingleStatus = STATUS.LOADING;
      })

      .addCase(fetchSingleProduct.fulfilled, (state, action) => {
        state.productsSingleStatus = STATUS.SUCCEEDED;
        state.productsSingle = action.payload;
      })

      .addCase(fetchSingleProduct.rejected, (state, action) => {
        state.productsSingleStatus = STATUS.FAILED;
      });
  },
});

// getting the products list with limited
export const fetchProduct = createAsyncThunk(
  "product/fetchProduct",
  async (limit) => {
    const response = await fetch(`${BASE_URL}products?limit=${limit}`);
    const data = await response.json();
    return data.products;
  }
);

// getting the single product data
export const fetchSingleProduct = createAsyncThunk(
  "products/fetchSingleProduct",
  async (id) => {
    const response = await fetch(`${BASE_URL}products/${id}`);
    const data = await response.json();
    return data;
  }
);

export default productSlice.reducer;
