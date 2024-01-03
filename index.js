const { createStore, applyMiddleware } = require("redux");
const { todosMiddleware } = require("./middlewares");

const TODOS_ADD = "todos/todoAdd";
const TODOS_LOADED = "todos/todosLoaded";

const initialState = {
  todos: [],
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
    default:
      return state;
  }
};

const store = createStore(todosReducer, applyMiddleware(todosMiddleware));

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch({
  type: TODOS_ADD,
  payload: {
    title: "New todo added",
  },
});

store.dispatch({
  type: "TODOS_REQUEST",
});

module.exports = {
  TODOS_LOADED,
};
