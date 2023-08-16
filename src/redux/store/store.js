import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import productReducer from "../feature/productSlice";
import cartReducer from "../feature/cartSlice";
import userReducer from "../feature/userSlice";
import orderReducer from "../feature/orderSlice";
import commentReducer from "../feature/commentSlice";

const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
    user: userReducer,
    order: orderReducer,
    comment: commentReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;
