const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const fetchVideo = createAsyncThunk("video/video", async (_, { dispatch }) => {
  const response = await fetch("http://localhost:9000/video");
  const video = await response.json();
  dispatch(fetchRelatedVideos(video.tags));
  return video;
});

const fetchRelatedVideos = createAsyncThunk(
  "video/relatedVideos",
  async (tags) => {
    const query = tags.join("&tags_like=");
    const response = await fetch(
      `http://localhost:9000/videos?tags_like=${query}`
    );
    const videos = await response.json();
    return videos;
  }
);

const converViewsToNumber = (views) => {
  const multiplier = views.endsWith("k") ? 1000 : 1;
  return parseFloat(views) * multiplier;
};

const initialState = {};
const videoSlice = createSlice({
  name: "video",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchVideo.fulfilled, (state, action) => {
      state.video = action.payload;
    });
    builder.addCase(fetchRelatedVideos.fulfilled, (state, action) => {
      const sortedDesc = action.payload.sort(
        (a, b) => converViewsToNumber(b.views) - converViewsToNumber(a.views)
      );
      state.relatedVideos = sortedDesc;
    });
  },
});

module.exports = videoSlice.reducer;
module.exports.fetchVideo = fetchVideo;
