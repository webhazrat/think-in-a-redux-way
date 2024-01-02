import { ADD, QTY_DECREMENT, QTY_INCREMENT } from "./actionTypes";

// action for add product
export const add = (data) => {
  return {
    type: ADD,
    payload: {
      ...data,
    },
  };
};

// action for qty increment of product
export const qtyIncrement = (id, qty) => {
  return {
    type: QTY_INCREMENT,
    payload: {
      id,
      qty,
    },
  };
};

// action for qty increment of product
export const qtyDecrement = (id, qty) => {
  return {
    type: QTY_DECREMENT,
    payload: {
      id,
      qty,
    },
  };
};
