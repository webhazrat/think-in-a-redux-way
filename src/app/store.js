import { configureStore } from "@reduxjs/toolkit";
import { booksApi } from "../features/api/apiSlice";
import filterReducer from "../features/filter/filterSlice";

const store = configureStore({
  reducer: {
    [booksApi.reducerPath]: booksApi.reducer,
    filter: filterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(booksApi.middleware),
});

export default store;
