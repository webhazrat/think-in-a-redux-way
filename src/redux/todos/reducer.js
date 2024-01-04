import {
  ADD,
  ADD_COLOR,
  CLEAR_COMPLETED,
  COMPLETED_ALL,
  LOADED,
  REMOVE,
  TOGGLE_COMPLETED,
} from "./actionType";
import initialState from "./initalState";

const nextId = (todos) => {
  return todos.reduce((maxId, todo) => Math.max(maxId, todo.id), 0) + 1;
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        {
          id: nextId(state),
          title: action.payload.title,
          completed: false,
        },
      ];
    case LOADED:
      return [...action.payload.todos];
    case COMPLETED_ALL:
      return state.map((todo) => {
        return {
          ...todo,
          completed: true,
        };
      });
    case CLEAR_COMPLETED:
      return state.filter((todo) => !todo.completed);
    case TOGGLE_COMPLETED:
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });
    case ADD_COLOR:
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            color: action.payload.color,
          };
        }
        return todo;
      });
    case REMOVE:
      return state.filter((todo) => todo.id !== action.payload.id);
    default:
      return state;
  }
};

export default reducer;
