import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { brandsApis } from "../../APis/brandsApis";

const initialState = {
  brands: [],
  loading: "idle",
  error: null,
};

export const fetchAllBrands = createAsyncThunk(
  "brands/fetchBrandsData",
  async (params) => {
    const response = await brandsApis.getAllBrands(params);
    return response.data;
  }
);

const brandSlice = createSlice({
  name: "brands",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllBrands.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllBrands.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.brands = action.payload;
      })
      .addCase(fetchAllBrands.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default brandSlice.reducer;
