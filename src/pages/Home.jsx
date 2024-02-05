import HeaderNavigation from "../components/HeaderNavigation";
import Books from "../components/books/books";
import Book from "../components/books/book";
import { useGetBooksQuery } from "../features/api/apiSlice";
import { useDispatch, useSelector } from "react-redux";
import { statusFilter } from "../features/filter/filterSlice";

export default function Home() {
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const { data: books, isLoading, isError } = useGetBooksQuery();

  let content = null;
  if (isLoading) {
    content = <div>Loading...</div>;
  }

  if (!isLoading && isError) {
    content = <div>There was an error</div>;
  }

  if (!isLoading && !isError && books.length === 0) {
    content = <div>No book found</div>;
  }

  const filterByStatus = (book) => {
    const { status } = filter;
    switch (status) {
      case "Featured":
        return book.featured;
      default:
        return book;
    }
  };

  const filterBySearch = (book) => {
    const { search } = filter;
    if (book.name.toLowerCase().includes(search.toLowerCase())) {
      return book;
    }
  };

  if (!isLoading && !isError && books.length > 0) {
    content = books
      .filter(filterByStatus)
      .filter(filterBySearch)
      .map((book) => <Book key={book.id} book={book} />);
  }

  const handleStatus = (type) => {
    dispatch(statusFilter(type));
  };

  return (
    <>
      <HeaderNavigation />
      <main className="py-12 px-6 2xl:px-6 container">
        <div className="order-2 xl:-order-1">
          <div className="flex items-center justify-between mb-12">
            <h4 className="mt-2 text-xl font-bold">Book List</h4>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => handleStatus("All")}
                className={`lws-filter-btn ${
                  filter.status === "All" && "active-filter"
                }`}
              >
                All
              </button>
              <button
                onClick={() => handleStatus("Featured")}
                className={`lws-filter-btn ${
                  filter.status === "Featured" && "active-filter"
                }`}
              >
                Featured
              </button>
            </div>
          </div>
          <Books>{content}</Books>
        </div>
      </main>
    </>
  );
}
