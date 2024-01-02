import { ADD, QTY_DECREMENT, QTY_INCREMENT } from "./actionTypes";
import initialState from "./initialState";

const nextId = (products) => {
  const maxId = products.reduce(
    (maxId, product) => Math.max(maxId, product.id),
    0
  );
  return maxId + 1;
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        {
          id: nextId(state),
          ...action.payload,
        },
      ];
    case QTY_INCREMENT:
      return state.map((product) => {
        if (product.id === action.payload.id) {
          return {
            ...product,
            qty: product.qty + action.payload.qty,
          };
        }
        return product;
      });
    case QTY_DECREMENT:
      return state.map((product) => {
        if (product.id === action.payload.id) {
          return {
            ...product,
            qty: product.qty - action.payload.qty,
          };
        }
        return product;
      });
    default:
      return state;
  }
};

export default reducer;
