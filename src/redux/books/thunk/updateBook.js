import { updatedBook } from "../actions";

const updateBook = (bookId, data) => {
  return async (dispatch) => {
    await fetch(`http://localhost:9000/books/${bookId}`, {
      method: "PATCH",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    });
    dispatch(updatedBook(bookId, data));
  };
};
export default updateBook;
