import {
  ADD,
  ADD_COLOR,
  CLEAR_COMPLETED,
  COMPLETED_ALL,
  LOADED,
  REMOVE,
  TOGGLE_COMPLETED,
} from "./actionType";

// action for add todo
export const add = (title) => {
  return {
    type: ADD,
    payload: {
      title,
    },
  };
};

// action for loaded todos
export const loaded = (todos) => {
  return {
    type: LOADED,
    payload: {
      todos,
    },
  };
};

// action for completed all todos
export const completedAll = () => {
  return {
    type: COMPLETED_ALL,
  };
};

// action for clear completed todos
export const clearCompleted = () => {
  return {
    type: CLEAR_COMPLETED,
  };
};

// action for toggle completed todo
export const toggleCompleted = (id) => {
  return {
    type: TOGGLE_COMPLETED,
    payload: {
      id,
    },
  };
};

// action for add color
export const addColor = (id, color) => {
  return {
    type: ADD_COLOR,
    payload: {
      id,
      color,
    },
  };
};

// action for remove a todo
export const remove = (id) => {
  return {
    type: REMOVE,
    payload: {
      id,
    },
  };
};
