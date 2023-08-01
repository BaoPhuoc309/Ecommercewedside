import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { userApis } from "../../APis/userApis";
import { message } from "antd";
import { globalNavigate } from "../../utility/globalHistory";
import { ROUTER_APP } from "../../constant/Router";

const initialState = {
  isLoading: false,
  users: [],
  errors: {},
};

export const actCreateNewUser = createAsyncThunk(
  "user/createNewUser",
  async (user) => {
    const response = await userApis.getAllUsers();
    const users = response.data;
    const { email } = user;
    const foundUser = users.find((u) => u.email === email);
    if (foundUser) {
      throw new Error("Email đã tồn tại");
    } else {
      await userApis.createUser(user);
      return user;
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {},
  extraReducers: (builed) => {
    builed
      .addCase(actCreateNewUser.pending, (state, action) => {
        state.isLoading = true;
      })

      .addCase(actCreateNewUser.fulfilled, (state, action) => {
        state.isLoading = false;
        message.success("Tạo tài khoản thành công");
        globalNavigate(ROUTER_APP.LOGIN_PAGE);
      })
      .addCase(actCreateNewUser.rejected, (state, action) => {
        state.errors = {};
        message.error("Email đã tồn tại!!");
        state.isLoading = false;
      });
  },
});

export const {} = userSlice.actions;
export default userSlice.reducer;
