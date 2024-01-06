import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useMatch, useNavigate } from "react-router-dom";
import { searched } from "../slices/filters/filtersSlice";
export default function Header() {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const match = useMatch("/");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searched(input));
    if (!match) {
      navigate("/");
    }
  };
  return (
    <nav className="bg-slate-100 shadow-md">
      <div className="max-w-7xl mx-auto px-5 lg:px-0 flex justify-between py-3">
        <Link to="/">
          <img className="h-10" src="../lws.svg" alt="Learn with Sumit" />
        </Link>
        <div className="border border-slate-200 flex items-center bg-white h-10 px-5 rounded-lg text-sm ring-emerald-200">
          <form onSubmit={handleSubmit}>
            <input
              className="outline-none border-none mr-2"
              type="search"
              name="search"
              placeholder="Search"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </form>
          <img
            className="inline h-4 cursor-pointer"
            src="../search.svg"
            alt="Search"
          />
        </div>
      </div>
    </nav>
  );
}
