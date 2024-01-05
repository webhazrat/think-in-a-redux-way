const { createSlice } = require("@reduxjs/toolkit");
const {
  dynamicCounterActions,
} = require("../dynamicCounter/dynamicCounterSlice");

const initialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count++;
    },
    decrement: (state) => {
      state.count--;
    },
  },
  extraReducers: (builder) => {
    // when dispatch(dynamicCounterActions.increment) then update the counter state
    builder.addCase(dynamicCounterActions.increment, (state, action) => {
      state.count += 1;
    });
  },
});

module.exports = counterSlice.reducer;
module.exports.counterActions = counterSlice.actions;
