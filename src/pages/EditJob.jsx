import { useDispatch, useSelector } from "react-redux";
import Navigation from "../components/Navigation";
import Sidebar from "../components/Sidebar";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { changeJob, fetchJob } from "../redux/features/jobs/jobsSlice";

export default function EditJob() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let { id } = useParams();
  const { data: job } = useSelector((state) => state.jobs);

  const [data, setData] = useState({
    title: "",
    type: "",
    salary: "",
    deadline: "",
  });

  useEffect(() => {
    dispatch(fetchJob(id));
  }, [id, dispatch]);

  useEffect(() => {
    setData({
      title: job?.title || "",
      type: job?.type || "",
      salary: job?.salary || "",
      deadline: job?.deadline || "",
    });
  }, [job]);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      changeJob({
        id: job.id,
        data: {
          ...data,
        },
      })
    );
    navigate("/");
  };

  return (
    <>
      <Navigation />
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8">
        <Sidebar />
        <div className="lg:pl-[14rem] mt-[5.8125rem]">
          <main className="max-w-3xl rounded-lg mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
            <h1 className="mb-10 text-center lws-section-title">Edit Job</h1>

            <div className="max-w-3xl mx-auto">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="fieldContainer">
                  <label
                    htmlFor="lws-JobTitle"
                    className="text-sm font-medium text-slate-300"
                  >
                    Job Title
                  </label>
                  <select
                    id="lws-JobTitle"
                    name="title"
                    required
                    value={data.title}
                    onChange={handleChange}
                  >
                    <option value="" hidden>
                      Select Job
                    </option>
                    <option>Software Engineer</option>
                    <option>Software Developer</option>
                    <option>Full Stack Developer</option>
                    <option>MERN Stack Developer</option>
                    <option>DevOps Engineer</option>
                    <option>QA Engineer</option>
                    <option>Product Manager</option>
                    <option>Social Media Manager</option>
                    <option>Senior Executive</option>
                    <option>Junior Executive</option>
                    <option>Android App Developer</option>
                    <option>IOS App Developer</option>
                    <option>Frontend Developer</option>
                    <option>Frontend Engineer</option>
                  </select>
                </div>

                <div className="fieldContainer">
                  <label htmlFor="lws-JobType">Job Type</label>
                  <select
                    id="lws-JobType"
                    name="type"
                    required
                    value={data.type}
                    onChange={handleChange}
                  >
                    <option value="" hidden>
                      Select Job Type
                    </option>
                    <option>Full Time</option>
                    <option>Internship</option>
                    <option>Remote</option>
                  </select>
                </div>

                <div className="fieldContainer">
                  <label htmlFor="lws-JobSalary">Salary</label>
                  <div className="flex border rounded-md shadow-sm border-slate-600">
                    <span className="input-tag">BDT</span>
                    <input
                      type="number"
                      name="salary"
                      id="lws-JobSalary"
                      required
                      className="!rounded-l-none !border-0"
                      placeholder="20,00,000"
                      value={data.salary}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="fieldContainer">
                  <label htmlFor="lws-JobDeadline">Deadline</label>
                  <input
                    type="date"
                    name="deadline"
                    id="lws-JobDeadline"
                    required
                    value={data.deadline}
                    onChange={handleChange}
                  />
                </div>

                <div className="text-right">
                  <button
                    type="submit"
                    id="lws-submit"
                    className="cursor-pointer btn btn-primary w-fit"
                  >
                    Edit
                  </button>
                </div>
              </form>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
