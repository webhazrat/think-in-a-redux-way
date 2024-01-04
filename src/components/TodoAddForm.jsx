import { useState } from "react";
import { useDispatch } from "react-redux";
import { clearCompleted, completedAll } from "../redux/todos/actions";
import addTodo from "../redux/todos/thunk/addTodo";

export default function TodoAddForm() {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  // todo submit
  const handleAdd = (e) => {
    e.preventDefault();
    dispatch(addTodo(title));
    setTitle("");
  };

  // todo completed all
  const handleCompletedAll = () => {
    dispatch(completedAll());
  };

  // clear completed todo
  const handleClearCompleted = () => {
    dispatch(clearCompleted());
  };
  return (
    <div>
      <form
        className="flex items-center bg-gray-100 px-4 py-4 rounded-md"
        onSubmit={handleAdd}
      >
        <img src="./notes.png" className="w-6 h-6" alt="Add todo" />
        <input
          type="text"
          placeholder="Type your todo"
          className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button
          type="submit"
          className="appearance-none w-8 h-8 bg-[url('./plus.png')] bg-no-repeat bg-contain"
        ></button>
      </form>

      <ul className="flex justify-between my-4 text-xs text-gray-500">
        <li
          className="flex space-x-1 cursor-pointer"
          onClick={handleCompletedAll}
        >
          <img className="w-4 h-4" src="./double-tick.png" alt="Complete" />
          <span>Complete All Tasks</span>
        </li>
        <li className="cursor-pointer" onClick={handleClearCompleted}>
          Clear completed
        </li>
      </ul>
    </div>
  );
}
