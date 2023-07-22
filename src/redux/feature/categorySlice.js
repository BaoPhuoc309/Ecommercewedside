import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../../until/Status";
import { BASE_URL } from "../../until/fakeApis";

const initialState = {
  categories: [],
  categoriesStatus: STATUS.IDLE,
  categoryProducts: [],
  categoryProductsStatus: [],
};

const categorySlice = createSlice({
  name: "category",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategory.pending, (state, action) => {
        state.categoriesStatus = STATUS.LOADING;
      })
      .addCase(fetchCategory.fulfilled, (state, action) => {
        state.categories = action.payload;
        state.categoriesStatus = STATUS.SUCCEEDED;
      })
      .addCase(fetchCategory.rejected, (state, action) => {
        state.categoriesStatus = STATUS.FAILED;
      });
  },
});

export const fetchCategory = createAsyncThunk(
  "categories/fetchCategory",
  async () => {
    const response = await fetch(`${BASE_URL}products/categories`);
    const data = await response.json();
    return data;
  }
);

export const getAllCategories = (state) => state.category.categories;
export default categorySlice.reducer;
