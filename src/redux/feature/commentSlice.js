import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { message } from "antd";
import { commentPrApis } from "../../APis/commentPrApis.js";

const initialState = {
  comments: [],
  loading: false,
  error: null,
};

export const actFetchAllComment = createAsyncThunk(
  "comments/fetchAllComment",
  async (params) => {
    const response = await commentPrApis.getAllComments(params);
    return response.data;
  }
);

export const actCreateComment = createAsyncThunk(
  "comments/createComment",
  async (comment) => {
    const response = await commentPrApis.createComment(comment);
    return response.data;
  }
);

export const actUpdateComment = createAsyncThunk(
  "comments/updateComment",
  async ({ id, comment }) => {
    await commentPrApis.updateComment(id, comment);
    return { id, comment };
  }
);

// ... Tạo thêm các action khác tương tự

const commentSlice = createSlice({
  name: "comments",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(actFetchAllComment.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(actFetchAllComment.fulfilled, (state, action) => {
        state.loading = false;
        state.comments = action.payload;
      })
      .addCase(actFetchAllComment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(actCreateComment.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(actCreateComment.fulfilled, (state, action) => {
        state.loading = false;
        state.comments.push(action.payload);
        message.success("Tạo comments thành công");
      })
      .addCase(actCreateComment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        message.error("Tạo comments thất bại");
      })

      .addCase(actUpdateComment.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(actUpdateComment.fulfilled, (state, action) => {
        const { id, comment } = action.payload;
        const existingComment = state.comments.find((c) => c.id === id);
        if (existingComment) {
          existingComment.text = comment.text;
        }
        state.loading = false;
      })
      .addCase(actUpdateComment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        message.error("Cập nhật comment thất bại");
      });
  },
});

export const {} = commentSlice.actions;
export default commentSlice.reducer;
