import { useParams } from "react-router-dom";
import HeaderNavigation from "../components/HeaderNavigation";
import From from "../components/edit/Form";
import { useGetBookQuery } from "../features/api/apiSlice";

export default function Edit() {
  const { bookId } = useParams();
  const { data: book, isLoading, isError } = useGetBookQuery(bookId);

  let content = null;
  if (isLoading) {
    content = <div>Loading...</div>;
  }

  if (!isLoading && isError) {
    content = <div>There was an error occur</div>;
  }

  if (!isLoading && !isError && book?.id) {
    content = <From book={book} />;
  }

  return (
    <>
      <HeaderNavigation />
      <main className="py-6 2xl:px-6">
        <div className="container">
          <div className="p-8 overflow-hidden bg-white shadow-cardShadow rounded-md max-w-xl mx-auto">
            <h4 className="mb-8 text-xl font-bold text-center">Edit Book</h4>
            {content}
          </div>
        </div>
      </main>
    </>
  );
}
