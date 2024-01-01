import { useDispatch } from "react-redux";
import { addColor, remove, toggleCompleted } from "../redux/todos/actions";

export default function Todo({ todo }) {
  const dispatch = useDispatch();

  // complete the todo
  const handleToggleCompleted = (id) => {
    dispatch(toggleCompleted(id));
  };

  // todo priority change
  const handleAddColor = (id, color) => {
    dispatch(addColor(id, color));
  };

  // todo remove
  const handleRemove = (id) => {
    dispatch(remove(id));
  };
  return (
    <div className="flex justify-start items-center p-2 hover:bg-gray-100 hover:transition-all space-x-4 border-b border-gray-400/20 last:border-0">
      <div
        className={`rounded-full bg-white border-2 border-gray-400 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 ${
          todo.completed && "border-green-500 focus-within:border-green-500"
        }`}
      >
        <input
          type="checkbox"
          checked={todo.completed}
          className="opacity-0 absolute rounded-full cursor-pointer"
          onChange={() => handleToggleCompleted(todo.id)}
        />
        {todo.completed && (
          <svg
            className="fill-current w-3 h-3 text-green-500 pointer-events-none"
            viewBox="0 0 20 20"
          >
            <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
          </svg>
        )}
      </div>

      <div className={`select-none flex-1 ${todo.completed && "line-through"}`}>
        {todo.title}
      </div>

      <div
        className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-green-500 hover:bg-green-500 ${
          todo.color === "green" && "bg-green-500"
        }`}
        onClick={() => handleAddColor(todo.id, "green")}
      ></div>

      <div
        className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-yellow-500 hover:bg-yellow-500 ${
          todo.color === "yellow" && "bg-yellow-500"
        }`}
        onClick={() => handleAddColor(todo.id, "yellow")}
      ></div>

      <div
        className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-red-500 hover:bg-red-500 ${
          todo.color === "red" && "bg-red-500"
        }`}
        onClick={() => handleAddColor(todo.id, "red")}
      ></div>

      <img
        onClick={() => handleRemove(todo.id)}
        src="./cancel.png"
        className="flex-shrink-0 w-4 h-4 ml-2 cursor-pointer"
        alt="Cancel"
      />
    </div>
  );
}
