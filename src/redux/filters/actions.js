import { COLORS, STATUS } from "./actionType";

// action for status wise filter
export const statusChange = (status) => {
  return {
    type: STATUS,
    payload: {
      status,
    },
  };
};

// action for colors wise filter
export const colorsChange = (color) => {
  return {
    type: COLORS,
    payload: {
      color,
    },
  };
};
