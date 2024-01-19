import { configureStore } from "@reduxjs/toolkit";
import jobsReducer from "./features/jobs/jobsSlice";
import filtersReducer from "./features/filters/filtersSlice";

const store = configureStore({
  devTools: true,
  reducer: {
    jobs: jobsReducer,
    filters: filtersReducer,
  },
});

export default store;
