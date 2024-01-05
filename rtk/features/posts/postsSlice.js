const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
  isLoading: false,
  posts: [],
  isError: "",
};

const fetchPosts = createAsyncThunk("post/fetchPosts", async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=10"
  );
  const posts = await response.json();
  return posts;
});

const postsSlice = createSlice({
  name: "posts",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state, action) => {
      console.log({ pending: action });
      state.isLoading = true;
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      console.log({ fulfilled: action });
      state.isLoading = false;
      state.posts = action.payload;
    });
    builder.addCase(fetchPosts.rejected, (state, action) => {
      console.log({ rejected: action });
      state.isLoading = false;
      state.isError = action.error.message;
      state.posts = [];
    });
  },
});

module.exports = postsSlice.reducer;
module.exports.fetchPosts = fetchPosts;
