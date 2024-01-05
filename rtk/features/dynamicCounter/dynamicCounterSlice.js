const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  count: 0,
};

const dynamicCounterSlice = createSlice({
  name: "dynamicCounter",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.count += action.payload.count;
    },
    decrement: (state, action) => {
      state.count -= action.payload.count;
    },
  },
});

module.exports = dynamicCounterSlice.reducer;
module.exports.dynamicCounterActions = dynamicCounterSlice.actions;
