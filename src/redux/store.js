import { configureStore } from "@reduxjs/toolkit";
import transactionReducer from "./features/transaction/transactionSlice";

const store = configureStore({
  reducer: {
    transactions: transactionReducer,
  },
});

export default store;
