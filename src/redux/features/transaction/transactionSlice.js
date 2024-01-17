import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createTransaction,
  deleteTransaction,
  readTransactions,
  updateTransaction,
} from "./transactionAPI";

const initialState = {
  isLoading: false,
  data: [],
  isError: false,
  error: "",
  editing: {},
};

export const fetchTransactions = createAsyncThunk(
  "transaction/fetchTransactions",
  async () => {
    return await readTransactions();
  }
);

export const addTransaction = createAsyncThunk(
  "transaction/addTransaction",
  async (data) => {
    return await createTransaction(data);
  }
);

export const changeTransaction = createAsyncThunk(
  "transaction/changeTransaction",
  async ({ id, data }) => {
    return await updateTransaction(id, data);
  }
);

export const removeTransaction = createAsyncThunk(
  "transaction/removeTransaction",
  async (id) => {
    return await deleteTransaction(id);
  }
);

const transactionSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    editActive(state, action) {
      state.editing = action.payload;
    },
    editInActive(state) {
      state.editing = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTransactions.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchTransactions.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchTransactions.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
      })
      .addCase(addTransaction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addTransaction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data.push(action.payload);
      })
      .addCase(addTransaction.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
      })
      .addCase(changeTransaction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(changeTransaction.fulfilled, (state, action) => {
        state.isLoading = false;
        const indexToUpdate = state.data.findIndex(
          (t) => t.id === action.payload.id
        );
        state.data[indexToUpdate] = action.payload;
      })
      .addCase(changeTransaction.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
      })
      .addCase(removeTransaction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(removeTransaction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = state.data.filter((t) => t.id !== action.meta.arg);
      })
      .addCase(removeTransaction.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
      });
  },
});

export default transactionSlice.reducer;
export const { editActive, editInActive } = transactionSlice.actions;

// CRUD / AFCR
