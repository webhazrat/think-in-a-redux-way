import { remove } from "../actions";

const deleteTodo = (todoId) => {
  return async (dispatch) => {
    await fetch(`http://localhost:8000/todos/${todoId}`, {
      method: "DELETE",
    });
    dispatch(remove(todoId));
  };
};

export default deleteTodo;
