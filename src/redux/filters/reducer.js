import { FILTER_SEARCH, FILTER_STATUS } from "./actionTypes";

const initialState = {
  status: "All",
  search: "",
};

const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_STATUS:
      return {
        ...state,
        status: action.payload.status,
      };
    case FILTER_SEARCH:
      return {
        ...state,
        search: action.payload.search,
      };
    default:
      return state;
  }
};
export default filtersReducer;
