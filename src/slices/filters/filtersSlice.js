import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  tags: [],
  search: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    tagsToggle: (state, action) => {
      if (state.tags.includes(action.payload)) {
        const index = state.tags.indexOf(action.payload);
        state.tags.splice(index, 1);
      } else {
        state.tags.push(action.payload);
      }
    },
    searched: (state, action) => {
      state.search = action.payload;
    },
  },
});

export default filtersSlice.reducer;
export const { tagsToggle, searched } = filtersSlice.actions;
