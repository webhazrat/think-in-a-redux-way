import { add } from "../actions";

const addTodo = (title) => {
  return async (dispatch) => {
    const response = await fetch("http://localhost:8000/todos", {
      method: "POST",
      body: JSON.stringify({
        title,
        completed: false,
      }),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    });
    const todo = await response.json();
    dispatch(add(todo.title));
  };
};

export default addTodo;
