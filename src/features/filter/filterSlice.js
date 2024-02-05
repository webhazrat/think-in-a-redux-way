import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "All",
  search: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    statusFilter(state, action) {
      state.status = action.payload;
    },
    searchFilter(state, action) {
      state.search = action.payload;
    },
  },
});

export const { statusFilter, searchFilter } = filterSlice.actions;

export default filterSlice.reducer;
