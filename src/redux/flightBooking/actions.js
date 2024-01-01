import { BOOK, REMOVE } from "./actionTypes";

export const book = (data) => {
  return {
    type: BOOK,
    payload: {
      ...data,
    },
  };
};

export const remove = (id) => {
  return {
    type: REMOVE,
    payload: {
      id: id,
    },
  };
};
