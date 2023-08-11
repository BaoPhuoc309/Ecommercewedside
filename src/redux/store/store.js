import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../feature/productSlice";
import cartReducer from "../feature/cartSlice";
import userReducer from "../feature/UserSlice";
import orderReducer from "../feature/orderSlice";

const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
    user: userReducer,
    order: orderReducer,
  },
});

export default store;
