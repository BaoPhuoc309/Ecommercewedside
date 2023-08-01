import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { productApis } from "../../APis/productApis";
import { converPriceToNumber } from "../../utility/helper";

const initialState = {
  isLoading: false,
  products: [],
  currentProduct: {},
  pagination: {
    currentPage: 1,
    limitPerPage: 8,
    total: 8,
  },
  filter: {
    price: [0, 1790],
    brands: null,
  },
};

export const fetchAllProduct = createAsyncThunk(
  "product/fetchAllProduct",
  async (params = {}) => {
    const response = await productApis.getAllProducts(params);
    return {
      data: response.data,
      total: response.headers.get("X-Total-Count"),
    };
  }
);

export const actfetchProductById = createAsyncThunk(
  "product/fetchProductById",
  async (productId) => {
    const product = await productApis.getProductById(productId);
    return product;
  }
);

const productSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {
    setNewPage: (state, action) => {
      state.pagination = {
        ...state.pagination,
        currentPage: action.payload,
      };
    },

    updateFilter: (state, action) => {
      const { price, ...otherFilter } = action.payload;
      const [minPriceStr, maxPriceStr] = price;

      // const minPrice = converPriceToNumber(minPriceStr);
      // const maxPrice = converPriceToNumber(maxPriceStr);

      // console.log(minPrice, maxPrice, "asdasdasd");

      // if (!isNaN(minPrice) && !isNaN(maxPrice)) {
      state.filter = {
        ...state.filter,
        ...otherFilter,
        price: [minPriceStr, maxPriceStr],
      };
      // }
    },

    setBrandFilter: (state, action) => {
      state.filter.brands = action.payload;
    },
  },

  extraReducers: (builed) => {
    builed
      .addCase(fetchAllProduct.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchAllProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload.data;
        state.pagination.total = action.payload.total;
      })
      .addCase(fetchAllProduct.rejected, (state, action) => {
        state.error = null;
        state.isLoading = false;
      })
      .addCase(actfetchProductById.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(actfetchProductById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.currentProduct = action.payload;
      });
  },
});

export const { updateFilter, setNewPage, setBrandFilter } =
  productSlice.actions;
export default productSlice.reducer;
