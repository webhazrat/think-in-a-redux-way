import { configureStore } from "@reduxjs/toolkit";
import videosReducer from "../slices/videos/videosSlice";
import tagsReducer from "../slices/tags/tagsSlice";
import videoReducer from "../slices/video/videoSlice";
import relatedVideosReducer from "../slices/relatedVideos/relatedVideosSlice";
import filtersReducer from "../slices/filters/filtersSlice";

const store = configureStore({
  devTools: true,
  reducer: {
    videos: videosReducer,
    tags: tagsReducer,
    video: videoReducer,
    relatedVideos: relatedVideosReducer,
    filters: filtersReducer,
  },
});

export default store;
