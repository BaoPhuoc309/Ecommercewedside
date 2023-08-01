import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../feature/productSlice";
import cartReducer from "../feature/cartSlice";
import userReducer from "../feature/UserSlice";

const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
    user: userReducer,
  },
});

export default store;
