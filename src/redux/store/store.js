import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "../feature/categorySlice";
import productReducer from "../feature/productSlice";

const store = configureStore({
  reducer: {
    category: categoryReducer,
    product: productReducer,
  },
});

export default store;
