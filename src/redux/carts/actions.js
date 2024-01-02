import { ADD, QTY_DECREMENT, QTY_INCREMENT, REMOVE } from "./actionTypes";

// action for add product to cart
export const add = (productId, price, qty) => {
  return {
    type: ADD,
    payload: {
      productId,
      price,
      qty,
    },
  };
};

// action for remove product from cart
export const remove = (id) => {
  return {
    type: REMOVE,
    payload: {
      id,
    },
  };
};

// action for cart product qty increment
export const qtyIncrement = (id, qty) => {
  return {
    type: QTY_INCREMENT,
    payload: {
      id,
      qty,
    },
  };
};

// action for cart product qty increment
export const qtyDecrement = (id, qty) => {
  return {
    type: QTY_DECREMENT,
    payload: {
      id,
      qty,
    },
  };
};
