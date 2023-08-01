import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carts: JSON.parse(localStorage.getItem("carts")) || [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    actAddToCart: (state, action) => {
      const { id, name, imgURL, price, quantity } = action.payload;
      const exitingItemIndex = state.carts.findIndex((item) => item.id === id);

      if (exitingItemIndex > -1) {
        state.carts[exitingItemIndex].quantity += quantity;
      } else {
        state.carts.push({ id, name, imgURL, price, quantity });
      }
      localStorage.setItem("carts", JSON.stringify(state.carts));
    },

    actRemoveFromCart: (state, action) => {
      state.carts = state.carts.filter((item) => item.id !== action.payload);
      localStorage.setItem("cart", JSON.stringify(state.carts));
    },

    actClearCart: (state, action) => {
      state.carts = [];
      localStorage.setItem("cart", JSON.stringify(state.carts));
    },
  },
});

export const { actAddToCart, actRemoveFromCart, actClearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
