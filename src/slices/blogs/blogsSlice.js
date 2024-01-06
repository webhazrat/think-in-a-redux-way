import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getBlogs from "./blogsAPI";

const initialState = {
  isLoading: false,
  blogs: [],
  isError: false,
  error: "",
};

export const fetchBlogs = createAsyncThunk(
  "blogs/fetchBlogs",
  async ({ sorted, filtered }) => {
    const blogs = await getBlogs(sorted, filtered);
    return blogs;
  }
);

const blogsSlice = createSlice({
  name: "blogs",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.blogs = action.payload;
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default blogsSlice.reducer;

// export const fetchBlogs = createAsyncThunk(
//   "blogs/fetchBlogs",
//   async ({ tags, search }) => {
//     const blogs = await getBlogs({ tags, search });
//     return blogs;
//   }
// );
