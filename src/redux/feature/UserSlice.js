import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { userApis } from "../../APis/userApis";
import { message } from "antd";
import { globalNavigate } from "../../utility/globalHistory";
import { ROUTER_APP } from "../../constant/Router";

const initialState = {
  isLoading: false,
  users: [],
  errors: {},
  isLoggedIn: JSON.parse(localStorage.getItem("isLoggedIn")) || false,
  userInfor: JSON.parse(localStorage.getItem("userInfor")) || null,
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

export const actLoginUser = createAsyncThunk(
  "user/loginUser",
  async (user, thunkAPI) => {
    const response = await userApis.getAllUsers();
    const users = response.data;
    const { username, password } = user;
    const foundUsers = users.find(
      (u) => u.username === username && u.password === password
    );
    delete foundUsers.password;

    if (foundUsers) {
      thunkAPI.dispatch(loginSuccess(foundUsers));
    } else {
      return thunkAPI.rejectWithValue("Email hoặc mật khẩu không chính xác!");
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },

    loginSuccess: (state, action) => {
      state.isLoading = false;
      state.isLoggedIn = true;
      state.userInfor = action.payload;
      message.success("Đăng Nhập Thành Công");
      localStorage.setItem("isLoggedIn", true);
      localStorage.setItem("userInfor", JSON.stringify(action.payload));
    },

    loginFailure: (state, action) => {
      state.isLoading = false;
      state.isLoggedIn = false;
      state.userInfor = action.payload;
      message.error("Email hoặc mật khẩu không đúng");
      localStorage.setItem("isLoggedIn", false);
      localStorage.setItem("userInfor", JSON.stringify());
    },

    logOut: (state) => {
      state.isLoggedIn = false;
      state.userInfor = null;
      localStorage.setItem("isLoggedOut", false);
      localStorage.setItem("userInfor", JSON.stringify(null));
      globalNavigate(ROUTER_APP.HOME);
    },
    setUserInfor: (state, action) => {
      state.userInfor = action.payload;
    },
  },
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

export const { loginSuccess, loginFailure, logOut, setUserInfor } =
  userSlice.actions;
export default userSlice.reducer;
