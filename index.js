const store = require("./rtk/store");
const { fetchVideo } = require("./rtk/slices/videoSlice");

store.dispatch(fetchVideo());
// store.dispatch(fetchRelatedVideos());
