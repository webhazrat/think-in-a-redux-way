import {
  ADDED_BOOK,
  DELETED_BOOK,
  EDITED_BOOK,
  LOADED_BOOKS,
  UPDATED_BOOK,
} from "./actionTypes";

const initialState = [];

const nextId = (books) => {
  const maxId = books.reduce((max, current) => Math.max(max, current.id));
  return maxId + 1;
};

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDED_BOOK:
      return [...state, { id: nextId(state), ...action.payload }];
    case LOADED_BOOKS:
      return [...action.payload.books];
    case EDITED_BOOK: {
      return state.map((book) => {
        if (book.id === action.payload.bookId) {
          return {
            ...book,
            edited: true,
          };
        }
        return book;
      });
    }
    case UPDATED_BOOK:
      return state.map((book) => {
        if (book.id === action.payload.bookId) {
          return {
            ...book,
            ...action.payload,
            edited: false,
          };
        }
        return book;
      });
    case DELETED_BOOK:
      return state.filter((book) => book.id !== action.payload.bookId);
    default:
      return state;
  }
};

export default booksReducer;
