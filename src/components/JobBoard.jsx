import { useDispatch, useSelector } from "react-redux";
import JobItem from "./JobItem";
import { useEffect, useRef, useState } from "react";
import { fetchJobs } from "../redux/features/jobs/jobsSlice";
import { useSearchParams } from "react-router-dom";
import { search, sort } from "../redux/features/filters/filtersSlice";

export default function JobBoard() {
  const { data, isLoading, isError, error } = useSelector(
    (state) => state.jobs
  );
  const { searchQuery, sortQuery } = useSelector((state) => state.filters);

  let timeoutRef = useRef(null);
  const [searchString, setSearchString] = useState("");
  const [sortString, setSortString] = useState("");

  const [searchParams] = useSearchParams();
  const type = searchParams.get("type");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchJobs(type));
  }, [dispatch, type]);

  useEffect(() => {
    dispatch(sort(sortString));
  }, [dispatch, sortString]);

  const filterBySearch = (job) => {
    if (job.title.toLowerCase().includes(searchQuery.toLowerCase())) {
      return job;
    }
  };

  const sortBySalary = (a, b) => {
    switch (sortQuery) {
      case "Salary (Low to High)":
        return a.salary - b.salary;
      case "Salary (High to Low)":
        return b.salary - a.salary;
      default:
        return 0;
    }
  };

  const handleSort = (e) => {
    setSortString(e.target.value);
  };

  const handleSearch = (e) => {
    setSearchString(e.target.value);
    debounceSearch(e.target.value);
  };

  const debounce = (fn, delay) => {
    return (...args) => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        fn(...args);
      }, delay);
    };
  };

  const debounceSearch = debounce((value) => {
    dispatch(search(value));
  }, 1000);

  return (
    <div className="lg:pl-[14rem] mt-[5.8125rem]">
      <main className="max-w-3xl rounded-lg  mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B] mb-10">
        <div className="md:flex space-y-2 md:space-y-0 justify-between mb-10 ">
          <h1 className="lws-section-title">
            All {type ? type : "Available"} Jobs
          </h1>
          <div className="flex gap-4">
            <div className="search-field group flex-1">
              <i className="fa-solid fa-magnifying-glass search-icon group-focus-within:text-blue-500"></i>
              <input
                type="text"
                name="searchString"
                placeholder="Search Job"
                className="search-input"
                id="lws-searchJob"
                value={searchString}
                onChange={handleSearch}
              />
            </div>
            <select
              id="lws-sort"
              name="sortString"
              autoComplete="sort"
              className="flex-1"
              value={sortString}
              onChange={handleSort}
            >
              <option>Default</option>
              <option>Salary (Low to High)</option>
              <option>Salary (High to Low)</option>
            </select>
          </div>
        </div>

        <div className="jobs-list">
          {isLoading && <p className="loading">Loading...</p>}
          {isError && <p className="error">{error}</p>}
          {!isLoading && !isError && data.length > 0
            ? data
                .filter(filterBySearch)
                .sort(sortBySalary)
                .map((job) => <JobItem key={job.id} job={job} />)
            : "No job found!"}
        </div>
      </main>
    </div>
  );
}
