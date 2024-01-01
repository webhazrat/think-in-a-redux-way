import { BOOK, REMOVE } from "./actionTypes";

const bookingReducer = (state = [], action) => {
  switch (action.type) {
    case BOOK:
      return [
        ...state,
        {
          id: state.length > 0 ? state[state.length - 1].id + 1 : 1,
          ...action.payload,
        },
      ];
    case REMOVE:
      return state.toSpliced(
        state.findIndex((item) => item.id === action.payload.id),
        1
      );
    default:
      return state;
  }
};

export default bookingReducer;
