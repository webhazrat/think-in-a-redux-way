import { Link, useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();
  const handleFilter = (type) => {
    const query = type ? `/?type=${type}` : "/";
    navigate(query);
  };
  return (
    <div className="sidebar">
      <nav>
        <ul className="space-y-4">
          <li>
            <button
              className="main-menu menu-active"
              id="lws-alljobs-menu"
              onClick={() => handleFilter()}
            >
              <i className="fa-solid fa-briefcase"></i> All Available Jobs
            </button>
            <ul className="space-y-6 lg:space-y-2">
              <li>
                <button
                  className="sub-menu"
                  id="lws-internship-menu"
                  onClick={() => handleFilter("Internship")}
                >
                  <i className="fa-solid fa-stop !text-[#FF5757]"></i>{" "}
                  Internship
                </button>
              </li>
              <li>
                <button
                  className="sub-menu"
                  id="lws-fulltime-menu"
                  onClick={() => handleFilter("Full Time")}
                >
                  <i className="fa-solid fa-stop !text-[#FF8A00]"></i> Full Time
                </button>
              </li>
              <li>
                <button
                  className="sub-menu"
                  id="lws-remote-menu"
                  onClick={() => handleFilter("Remote")}
                >
                  <i className="fa-solid fa-stop !text-[#56E5C4]"></i> Remote
                </button>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/add-job" className="main-menu" id="lws-addJob-menu">
              <i className="fa-solid fa-file-circle-plus"></i> Add NewJob
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
