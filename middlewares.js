const todosMiddleware = (store) => (next) => async (action) => {
  if (action.type === "TODOS_REQUEST") {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos?_limit=10"
    );
    const todos = await response.json();
    store.dispatch({
      type: "todos/todosLoaded",
      payload: {
        todos,
      },
    });
    return;
  }
  return next(action);
};

module.exports = {
  todosMiddleware,
};
