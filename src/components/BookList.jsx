import { useDispatch, useSelector } from "react-redux";
import Book from "./Book";
import { useEffect } from "react";
import fetchBooks from "../redux/books/thunk/fetchBook";

export default function BookList() {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);
  const filters = useSelector((state) => state.filters);

  useEffect(() => {
    dispatch(fetchBooks);
  }, [dispatch]);

  const filterByStatus = (book) => {
    const { status } = filters;
    switch (status) {
      case "Featured":
        return book.featured;
      default:
        return book;
    }
  };

  const filterBySearch = (book) => {
    const { search } = filters;
    if (book.name.toLowerCase().includes(search.toLowerCase())) {
      return book;
    }
  };

  return (
    <>
      <div className="lws-bookContainer">
        {books
          .filter(filterByStatus)
          .filter(filterBySearch)
          .map((book) => (
            <Book key={book.id} book={book} />
          ))}
      </div>
    </>
  );
}
