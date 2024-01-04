import { useDispatch, useSelector } from "react-redux";
import { filterStatus } from "../redux/filters/actions";

export default function BookFilter() {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters);

  const handleStatus = (status) => {
    dispatch(filterStatus(status));
  };
  return (
    <div className="flex items-center justify-between mb-12">
      <h4 className="mt-2 text-xl font-bold">Book List</h4>

      <div className="flex items-center space-x-4">
        <button
          className={`filter-btn ${
            filters.status === "All" && "active-filter"
          }`}
          id="lws-filterAll"
          onClick={() => handleStatus("All")}
        >
          All
        </button>
        <button
          className={`filter-btn ${
            filters.status === "Featured" && "active-filter"
          }`}
          id="lws-filterFeatured"
          onClick={() => handleStatus("Featured")}
        >
          Featured
        </button>
      </div>
    </div>
  );
}
