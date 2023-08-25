import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { userApis } from "../../APis/userApis";
import { message } from "antd";
import { globalNavigate } from "../../utility/globalHistory";
import { ROUTER_APP } from "../../constant/Router";
import { actClearCart } from "./cartSlice";

const userInforFromLocalStorage = localStorage.getItem("userInfor");
const userInfor = userInforFromLocalStorage
  ? JSON.parse(userInforFromLocalStorage)
  : null;

const initialState = {
  isLoading: false,
  users: [],
  errors: {},
  isLoggedIn: JSON.parse(localStorage.getItem("isLoggedIn")) || false,
  userInfor: userInfor,
};

export const actCreateNewUser = createAsyncThunk(
  "user/createNewUser",
  async (user) => {
    const response = await userApis.getAllUsers();
    const users = response.data;
    const { username, email, password } = user;
    const foundUser = users.find(
      (u) =>
        u.username === username && u.email === email && u.password === password
    );
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
      return thunkAPI.rejectWithValue("Tên hoặc mật khẩu không chính xác!");
    }
  }
);

export const actUpdateUserById = createAsyncThunk(
  "user/updateUserById",
  async ({ id, updatedUser }, thunkAPI) => {
    await userApis.updateUserById(id, updatedUser);
    thunkAPI.dispatch(actFetchAllUsersById(id));
  }
);

export const actUpdatePasswordUserById = createAsyncThunk(
  "user/UpdatePasswordUserById",
  async ({ id, updatedUser }, thunkAPI) => {
    await userApis.updateUserById(id, updatedUser);
    thunkAPI.dispatch(actClearCart());
    thunkAPI.dispatch(logOut());
  }
);

export const actUpdateUserAvatar = createAsyncThunk(
  "user/uploadImage",
  async ({ id, updatedUser }, thunkAPI) => {
    await userApis.updateUserById(id, updatedUser);
    thunkAPI.dispatch(actFetchAllUsersById(id));
  }
);

export const actFetchAllUsers = createAsyncThunk(
  "user/fetchAllUsers",
  async (params) => {
    const response = await userApis.getAllUsers(params.id);
    return response.data;
  }
);

export const actFetchAllUsersById = createAsyncThunk(
  "user/fetchAllUsersById",
  async (userId) => {
    const user = await userApis.getUserById(userId);
    return user;
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
      message.error("Tên và mật khẩu đăng nhập không đúng");
      localStorage.setItem("isLoggedIn", false);
      localStorage.removeItem("userInfor");
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

    updateUserSuccess: (state, action) => {
      state.userInfor = action.payload.updatedUser;
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
      })
      .addCase(actLoginUser.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(actLoginUser.rejected, (state, action) => {
        console.log(action.payload);
        state.errors = {};
        message.error("Tên Đăng Nhập Hoặc Mật Khẩu Không Đúng");
        state.isLoading = false;
      })
      .addCase(actLoginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        globalNavigate(ROUTER_APP.HOME);
      })
      .addCase(actUpdateUserById.fulfilled, (state, action) => {
        state.isLoading = false;
        message.success("Cập nhật thông tin người dùng thành công");
        state.userInfor = action.payload;
      })
      .addCase(actUpdateUserById.rejected, (state) => {
        state.isLoading = false;
        message.error("Lỗi khi cập nhật thông tin người dùng");
      })

      .addCase(actUpdatePasswordUserById.fulfilled, (state, action) => {
        // Cập nhật trạng thái sau khi thay đổi mật khẩu thành công
        state.isLoading = false;
        state.userInfor.password = action.payload.password;
        state.userInfor.confirmPassword = action.payload.confirmPassword;
        message.success("Thay đổi mật khẩu thành công");
      })
      .addCase(actUpdatePasswordUserById.rejected, (state, action) => {
        // Xử lý khi có lỗi xảy ra trong quá trình thay đổi mật khẩu
        state.isLoading = false;
        message.error("Lỗi khi thay đổi mật khẩu");
      })
      .addCase(actFetchAllUsers.fulfilled, (state, action) => {
        state.userInfor = action.payload;
      })
      .addCase(actFetchAllUsersById.fulfilled, (state, action) => {
        state.userInfor = action.payload;
      })
      .addCase(actUpdateUserAvatar.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userInfor = action.payload; // Cập nhật đường dẫn ảnh avatar mới
        state.errors = {};
        message.success("Cập nhật avatar thành công");
      });
  },
});

export const {
  loginSuccess,
  loginFailure,
  logOut,
  setUserInfor,
  updateUserSuccess,
} = userSlice.actions;
export default userSlice.reducer;
