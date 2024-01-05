const { configureStore } = require("@reduxjs/toolkit");
const counterReducer = require("./features/counter/counterSlice");
const dynamicCounterReducer = require("./features/dynamicCounter/dynamicCounterSlice");
const postsReducer = require("./features/posts/postsSlice");
const { createLogger } = require("redux-logger");

const logger = createLogger();

const store = configureStore({
  reducer: {
    counter: counterReducer,
    dynamicCounter: dynamicCounterReducer,
    posts: postsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

module.exports = store;
