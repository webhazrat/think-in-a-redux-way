import { COLORS, STATUS } from "./actionType";
import initialState from "./initialState";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STATUS:
      return {
        ...state,
        status: action.payload.status,
      };
    case COLORS:
      if (state.colors.includes(action.payload.color)) {
        return {
          ...state,
          colors: state.colors.filter(
            (color) => color !== action.payload.color
          ),
        };
      }
      return {
        ...state,
        colors: [...state.colors, action.payload.color],
      };
    default:
      return state;
  }
};

export default reducer;
