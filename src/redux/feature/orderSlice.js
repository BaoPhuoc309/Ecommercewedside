import { message } from "antd";
import { orderApis } from "../../APis/orderApis";
import { globalNavigate } from "../../utility/globalHistory";
import { ROUTER_APP } from "../../constant/Router";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
  orders: [],
  isLoading: false,
  errors: {},
  customInfor: {},
};

export const actFetchAllOrder = createAsyncThunk(
  "order/fetchAllOrder",
  async (params) => {
    const response = await orderApis.getAllOrders(params);
    return response.data;
  }
);

export const actCreateOrder = createAsyncThunk(
  "orders/createOrder",
  async (order) => {
    const response = await orderApis.createOrders(order);
    return response.data;
  }
);

const orderSlice = createSlice({
  name: "order",
  initialState: initialState,
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    sendOrder: (state, action) => {
      state.isSending = true;
    },
    sendOrderSuccess: (state, action) => {
      state.isSending = false;
      state.orders.push(action.payload);
      message.success("Đặt hàng thành công!");
    },
    sendOrderFailure: (state, action) => {
      state.isSending = false;
      message.error("Đặt hàng Thất Bại!");
    },
    clearOrder: (state, action) => {
      state.orders = [];
      state.customInfor = {};
    },
    sendCustomeInfor: (state, action) => {
      state.customInfor = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(actFetchAllOrder.pending, (state, action) => {
        state.isLoading = true;
      })

      .addCase(actFetchAllOrder.fulfilled, (state, action) => {
        state.isLoading = false;
        state.orders = action.payload;
      })
      .addCase(actFetchAllOrder.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(actCreateOrder.fulfilled, (state, action) => {
        state.orders.push(action.payload);
        state.customInfor = action.payload;
        message.success("Đặt hàng thành công!");
        globalNavigate(ROUTER_APP.SUCCESSCHECKOUT);
      })
      .addCase(actCreateOrder.rejected, (state, action) => {
        state.orders = [];
        state.customInfor = {};
        message.error("Đặt hàng Thất Bại!");
      });
  },
});

export const {
  isLoading,
  sendOrder,
  sendOrderSuccess,
  sendOrderFailure,
  sendCustomeInfor,
  clearOrder,
} = orderSlice.actions;
export default orderSlice.reducer;
