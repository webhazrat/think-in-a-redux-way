import { ADD, QTY_DECREMENT, QTY_INCREMENT, REMOVE } from "./actionTypes";
import initialState from "./initialState";

const nextId = (carts) => {
  const maxId = carts.reduce((maxId, cart) => Math.max(maxId, cart.id), 0);
  return maxId + 1;
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD: {
      const { productId, price, qty } = action.payload;
      const existItem = state.find((cart) => cart.productId === productId);
      if (existItem) {
        return state.map((cart) =>
          cart.productId === productId
            ? {
                ...cart,
                qty: cart.qty + qty,
              }
            : cart
        );
      }
      return [
        ...state,
        {
          id: nextId(state),
          productId,
          price,
          qty,
        },
      ];
    }
    case REMOVE:
      return state.filter((cart) => cart.id !== action.payload.id);
    case QTY_INCREMENT:
      return state.map((cart) => {
        if (cart.id === action.payload.id) {
          return {
            ...cart,
            qty: cart.qty + action.payload.qty,
          };
        }
        return cart;
      });
    case QTY_DECREMENT:
      return state.map((cart) => {
        if (cart.id === action.payload.id) {
          return {
            ...cart,
            qty: cart.qty - action.payload.qty,
          };
        }
        return cart;
      });
    default:
      return state;
  }
};

export default reducer;
