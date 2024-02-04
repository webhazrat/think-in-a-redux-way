import Edit from "../assets/edit.svg";
import Delete from "../assets/delete.svg";
import { Link, useNavigate } from "react-router-dom";
import { useDeleteVideoMutation } from "../features/api/apiSlice";
import { useEffect } from "react";
import Error from "./ui/Error";
export default function VideoDescription({ video }) {
  const navigate = useNavigate();
  const [deleteVideo, { isSuccess, isError }] = useDeleteVideoMutation();

  const handleDelete = () => {
    if (confirm("Are you sure to delete")) {
      deleteVideo(video.id);
    }
  };

  useEffect(() => {
    if (isSuccess) navigate("/");
  }, [isSuccess, navigate]);

  return (
    <div>
      <h1 className="text-lg font-semibold tracking-tight text-slate-800">
        {video.title}
      </h1>
      <div className="pb-4 flex items-center space-between border-b">
        <h2 className="text-sm leading-[1.7142857] text-slate-600 w-full">
          Uploaded on {video.date}
        </h2>
        <div className="flex gap-10 w-48">
          <Link to={`/videos/edit/${video.id}`}>
            <div className="flex gap-1">
              <div className="shrink-0">
                <img className="w-5 block" src={Edit} alt="Edit" />
              </div>
              <span className="text-sm leading-[1.7142857] text-slate-600">
                Edit
              </span>
            </div>
          </Link>
          <div className="flex gap-1 cursor-pointer" onClick={handleDelete}>
            <div className="shrink-0">
              <img className="w-5 block" src={Delete} alt="Delete" />
            </div>
            <div className="text-sm leading-[1.7142857] text-red-600">
              Delete
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 text-sm text-[#334155] dark:text-slate-400">
        {video.description}
      </div>

      {isError && (
        <div className="mt-4">
          <Error message="There was an error occur!" />
        </div>
      )}
    </div>
  );
}
