import { toggleCompleted } from "../actions";

const updateStatus = (todoId, currentStatus) => {
  return async (dispatch) => {
    const response = await fetch(`http://localhost:8000/todos/${todoId}`, {
      method: "PATCH",
      body: JSON.stringify({
        completed: !currentStatus,
      }),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    });
    const todo = await response.json();
    dispatch(toggleCompleted(todo.id));
  };
};

export default updateStatus;
