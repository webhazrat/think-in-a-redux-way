import { deletedBook } from "../actions";

const deleteBook = (bookId) => {
  return async (dispatch) => {
    await fetch(`http://localhost:9000/books/${bookId}`, {
      method: "DELETE",
    });
    dispatch(deletedBook(bookId));
  };
};

export default deleteBook;
