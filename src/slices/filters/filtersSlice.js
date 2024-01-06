import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  sorted: "",
  filtered: "All",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    sortedBlog: (state, action) => {
      state.sorted = action.payload;
    },
    filteredBlog: (state, action) => {
      state.filtered = action.payload;
    },
  },
});

export default filtersSlice.reducer;
export const { sortedBlog, filteredBlog } = filtersSlice.actions;
