import {
  ADDED_BOOK,
  DELETED_BOOK,
  EDITED_BOOK,
  LOADED_BOOKS,
  UPDATED_BOOK,
} from "./actionTypes";

// action for added a book
export const addedBook = (book) => {
  return {
    type: ADDED_BOOK,
    payload: {
      ...book,
    },
  };
};

// action for loaded book from server
export const loadedBooks = (books) => {
  return {
    type: LOADED_BOOKS,
    payload: {
      books,
    },
  };
};

// action for edit a book and send to form
export const editedBook = (bookId) => {
  return {
    type: EDITED_BOOK,
    payload: {
      bookId,
    },
  };
};

// action for updated a book
export const updatedBook = (bookId, book) => {
  return {
    type: UPDATED_BOOK,
    payload: {
      bookId,
      ...book,
    },
  };
};

// action for deleted a book
export const deletedBook = (bookId) => {
  return {
    type: DELETED_BOOK,
    payload: {
      bookId,
    },
  };
};
