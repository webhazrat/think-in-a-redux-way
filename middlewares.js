const { TODOS_LOADED } = require("./constans");

const todosMiddleware = (store) => (next) => async (action) => {
  if (action.type === "TODOS_REQUEST") {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos?_limit=10"
    );
    const todos = await response.json();
    store.dispatch({
      type: TODOS_LOADED,
      payload: {
        todos,
      },
    });
    return;
  }
  return next(action);
};

const fetchAsyncMiddleware = (store) => (next) => (action) => {
  if (typeof action === "function") {
    action(store.dispatch);
    return;
  }
  return next(action);
};

module.exports = {
  todosMiddleware,
  fetchAsyncMiddleware,
};
