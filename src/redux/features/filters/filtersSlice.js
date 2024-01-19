import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  searchQuery: "",
  sortQuery: "",
};
const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    search: (state, action) => {
      state.searchQuery = action.payload;
    },
    sort: (state, action) => {
      state.sortQuery = action.payload;
    },
  },
});

export default filtersSlice.reducer;
export const { search, sort } = filtersSlice.actions;
