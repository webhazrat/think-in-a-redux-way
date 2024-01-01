import { useDispatch, useSelector } from "react-redux";
import { colorsChange, statusChange } from "../redux/filters/actions";

export default function FilterTodo() {
  const todos = useSelector((state) => state.todos);
  const filters = useSelector((state) => state.filters);
  const dispatch = useDispatch();

  // left task
  const remaining = todos.filter((todo) => !todo.completed).length;

  const leftTask = (num) => {
    switch (num) {
      case 0:
        return "No task left";
      case 1:
        return "1 task left";
      default:
        return `${num} tasks left`;
    }
  };

  // filter status handle
  const handleStatusChange = (status) => {
    dispatch(statusChange(status));
  };

  // filter colors handle
  const handleColorsChange = (color) => {
    dispatch(colorsChange(color));
  };

  return (
    <div className="mt-4 flex justify-between text-xs text-gray-500">
      <p>{leftTask(remaining)}</p>
      <ul className="flex space-x-1 items-center text-xs">
        <li
          className={`cursor-pointer ${
            filters.status === "All" && "font-bold"
          }`}
          onClick={() => handleStatusChange("All")}
        >
          All
        </li>
        <li>|</li>
        <li
          className={`cursor-pointer ${
            filters.status === "Incomplete" && "font-bold"
          }`}
          onClick={() => handleStatusChange("Incomplete")}
        >
          Incomplete
        </li>
        <li>|</li>
        <li
          className={`cursor-pointer ${
            filters.status === "Complete" && "font-bold"
          }`}
          onClick={() => handleStatusChange("Complete")}
        >
          Complete
        </li>
        <li></li>
        <li></li>
        <li
          className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${
            filters.colors.includes("green") && "bg-green-500"
          }`}
          onClick={() => handleColorsChange("green")}
        ></li>
        <li
          className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer ${
            filters.colors.includes("yellow") && "bg-yellow-500"
          }`}
          onClick={() => handleColorsChange("yellow")}
        ></li>
        <li
          className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${
            filters.colors.includes("red") && "bg-red-500"
          }`}
          onClick={() => handleColorsChange("red")}
        ></li>
      </ul>
    </div>
  );
}
