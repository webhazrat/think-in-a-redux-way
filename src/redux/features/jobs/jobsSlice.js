import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createJob, deleteJob, findOne, readJobs, updateJob } from "./jobsAPI";

const initialState = {
  isLoading: false,
  isError: false,
  error: "",
  isSuccess: false,
  data: [],
};

export const fetchJobs = createAsyncThunk(
  "jobs/fetchJobs",
  async (type = "") => {
    return await readJobs(type);
  }
);

export const addJob = createAsyncThunk("jobs/addJob", async (data) => {
  return await createJob(data);
});

export const fetchJob = createAsyncThunk("jobs/fetchJob", async (id) => {
  return await findOne(id);
});

export const changeJob = createAsyncThunk(
  "jobs/changeJob",
  async ({ id, data }) => {
    return await updateJob(id, data);
  }
);

export const removeJob = createAsyncThunk("jobs/removeJob", async (id) => {
  return await deleteJob(id);
});

const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobs.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.data = action.payload;
      })
      .addCase(fetchJobs.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
      })
      .addCase(addJob.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addJob.fulfilled, (state) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
      })
      .addCase(addJob.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
      })
      .addCase(fetchJob.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchJob.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.data = action.payload;
      })
      .addCase(fetchJob.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
      })
      .addCase(changeJob.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(changeJob.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        const index = state.data.findIndex((j) => j.id === action.payload.id);
        state.data[index] = action.payload;
      })
      .addCase(changeJob.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
      })
      .addCase(removeJob.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(removeJob.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.data = state.data.filter((j) => j.id !== action.meta.arg);
      })
      .addCase(removeJob.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
      });
  },
});

export default jobsSlice.reducer;
