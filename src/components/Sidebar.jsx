import { useDispatch, useSelector } from "react-redux";
import { filteredBlog, sortedBlog } from "../slices/filters/filtersSlice";
export default function Sidebar() {
  const dispatch = useDispatch();
  const { sorted, filtered } = useSelector((state) => state.filters);

  const handleSort = (value) => {
    dispatch(sortedBlog(value));
  };

  const handleFilter = (value) => {
    dispatch(filteredBlog(value));
  };

  return (
    <aside>
      <div className="sidebar-items">
        <div className="sidebar-content">
          <h4>Sort</h4>
          <select
            name="sort"
            id="lws-sort"
            className="w-full max-w-[150px] border-2 rounded-md text-gray-500"
            value={sorted}
            onChange={(e) => handleSort(e.target.value)}
          >
            <option value="">Default</option>
            <option value="newest">Newest</option>
            <option value="most_liked">Most Liked</option>
          </select>
        </div>
        <div className="sidebar-content">
          <h4>Filter</h4>
          <div className="radio-group">
            <div>
              <input
                type="radio"
                name="filter"
                id="lws-all"
                checked={filtered === "All"}
                className="radio"
                onChange={() => handleFilter("All")}
              />
              <label htmlFor="lws-all">All</label>
            </div>
            <div>
              <input
                type="radio"
                name="filter"
                id="lws-saved"
                className="radio"
                checked={filtered === "Saved"}
                onChange={() => handleFilter("Saved")}
              />
              <label htmlFor="lws-saved">Saved</label>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
