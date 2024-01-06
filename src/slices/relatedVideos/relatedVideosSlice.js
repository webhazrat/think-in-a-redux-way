import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getRelatedVideos from "./relatedVideosAPI";

const initialState = {
  isLoading: false,
  videos: [],
  isError: false,
  error: "",
};

export const fetchRelatedVideos = createAsyncThunk(
  "videos/fetchRelatedVideos",
  async ({ videoId, tags }) => {
    const videos = await getRelatedVideos({ videoId, tags });
    return videos;
  }
);

const relatedVideosSlice = createSlice({
  name: "videos",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchRelatedVideos.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchRelatedVideos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.videos = action.payload;
      })
      .addCase(fetchRelatedVideos.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default relatedVideosSlice.reducer;
