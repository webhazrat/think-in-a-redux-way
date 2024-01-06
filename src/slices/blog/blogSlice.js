import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getBlog, likeBlog, saveBlog } from "./blogAPI";

const initialState = {
  isLoading: false,
  blog: {},
  isError: false,
  error: "",
};

export const fetchBlog = createAsyncThunk("blog/fetchBlog", async (blogId) => {
  const blog = await getBlog(blogId);
  return blog;
});

export const liked = createAsyncThunk(
  "blog/liked",
  async ({ blogId, likes }) => {
    return await likeBlog(blogId, likes);
  }
);

export const saved = createAsyncThunk(
  "blog/saved",
  async ({ blogId, save }) => {
    return await saveBlog(blogId, save);
  }
);

const blogSlice = createSlice({
  name: "blog",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlog.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchBlog.fulfilled, (state, action) => {
        state.isLoading = false;
        state.blog = action.payload;
      })
      .addCase(fetchBlog.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
      });
    builder.addCase(liked.fulfilled, (state) => {
      state.blog.likes = state.blog.likes + 1;
    });
    builder.addCase(saved.fulfilled, (state) => {
      state.blog.isSaved = !state.blog.isSaved;
    });
  },
});

export default blogSlice.reducer;
