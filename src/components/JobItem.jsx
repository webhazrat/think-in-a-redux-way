import { useDispatch } from "react-redux";
import { removeJob } from "../redux/features/jobs/jobsSlice";
import { useNavigate } from "react-router-dom";

export default function JobItem({ job }) {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  let typeClass;
  if (job.type === "Internship") {
    typeClass = "!text-[#FF5757]";
  } else if (job.type === "Full Time") {
    typeClass = "!text-[#FF8A00]";
  } else {
    typeClass = "!text-[#56E5C4]";
  }

  const handleEdit = () => {
    navigate(`/edit-job/${job.id}`);
  };

  const handleDelete = () => {
    if (confirm("Are you sure to remove?")) {
      dispatch(removeJob(job.id));
    }
  };

  return (
    <div className="lws-single-job">
      <div className="flex-1 min-w-0">
        <h2 className="lws-title">{job.title}</h2>
        <div className="job-footers">
          <div className="lws-type">
            <i className={`fa-solid fa-stop ${typeClass} text-lg mr-1.5`}></i>
            {job.type}
          </div>
          <div className="lws-salary">
            <i className="fa-solid fa-bangladeshi-taka-sign text-slate-400 text-lg mr-1.5"></i>
            BDT {job.salary}
          </div>
          <div className="lws-deadline">
            <i className="fa-regular fa-calendar text-slate-400 text-lg mr-1.5"></i>
            Closing on {job.deadline}
          </div>
        </div>
      </div>
      <div className="mt-5 flex lg:mt-0 lg:ml-4">
        <span className="hidden sm:block">
          <button
            type="button"
            className="lws-edit btn btn-primary"
            onClick={handleEdit}
          >
            <i className="fa-solid fa-pen text-gray-300 -ml-1 mr-2"></i>
            Edit
          </button>
        </span>

        <span className="sm:ml-3">
          <button
            type="button"
            className="lws-delete btn btn-danger"
            onClick={handleDelete}
          >
            <i className="fa-solid fa-trash text-gray-300 -ml-1 mr-2"></i>
            Delete
          </button>
        </span>
      </div>
    </div>
  );
}
