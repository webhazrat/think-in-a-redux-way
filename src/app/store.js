import { configureStore } from "@reduxjs/toolkit";
import blogsReducer from "../slices/blogs/blogsSlice";
import blogReducer from "../slices/blog/blogSlice";
import relatedBlogsReducer from "../slices/relatedBlogs/relatedBlogsSlice";
import filtersReducer from "../slices/filters/filtersSlice";

const store = configureStore({
  devTools: true,
  reducer: {
    blogs: blogsReducer,
    blog: blogReducer,
    relatedBlogs: relatedBlogsReducer,
    filters: filtersReducer,
  },
});

export default store;
