const { createStore, applyMiddleware } = require("redux");
const { todosMiddleware, fetchAsyncMiddleware } = require("./middlewares");
const { fetchPosts } = require("./function");
const { TODOS_ADD, TODOS_LOADED, POSTS_LOADED } = require("./constans");
const { thunk } = require("redux-thunk");

const initialState = {
  todos: [],
  posts: [],
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case TODOS_ADD:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: 1,
            title: action.payload.title,
          },
        ],
      };
    case TODOS_LOADED:
      return {
        ...state,
        todos: action.payload.todos,
      };
    case POSTS_LOADED:
      return {
        ...state,
        posts: action.payload.posts,
      };
    default:
      return state;
  }
};
// with custom middlewares

// const store = createStore(
//   todosReducer,
//   applyMiddleware(todosMiddleware, fetchAsyncMiddleware)
// );

// with redux thunk
const store = createStore(todosReducer, applyMiddleware(thunk));

store.subscribe(() => {
  console.log(store.getState());
});

// store.dispatch({
//   type: TODOS_ADD,
//   payload: {
//     title: "New todo added",
//   },
// });

// store.dispatch({
//   type: "TODOS_REQUEST",
// });

store.dispatch(fetchPosts);
