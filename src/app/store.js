import { configureStore } from "@reduxjs/toolkit";
import { videosApi } from "../features/api/apiSlice";

const store = configureStore({
  reducer: {
    [videosApi.reducerPath]: videosApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(videosApi.middleware),
});

export default store;
