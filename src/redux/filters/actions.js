import { FILTER_SEARCH, FILTER_STATUS } from "./actionTypes";

// action for status filter
export const filterStatus = (status) => {
  return {
    type: FILTER_STATUS,
    payload: {
      status,
    },
  };
};

// action for search filter
export const filterSearch = (search) => {
  return {
    type: FILTER_SEARCH,
    payload: {
      search,
    },
  };
};
