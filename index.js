const { counterActions } = require("./rtk/features/counter/counterSlice");
const {
  dynamicCounterActions,
} = require("./rtk/features/dynamicCounter/dynamicCounterSlice");
const { fetchPosts } = require("./rtk/features/posts/postsSlice.js");
const store = require("./rtk/store");

store.subscribe(() => {
  console.log(store.getState());
});

// store.dispatch(counterActions.increment());
// store.dispatch(dynamicCounterActions.increment({ count: 1 }));

store.dispatch(fetchPosts());
