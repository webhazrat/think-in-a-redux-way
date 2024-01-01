import Todo from "./Todo";
import { useSelector } from "react-redux";

export default function TodoList() {
  const todos = useSelector((state) => state.todos);
  const filters = useSelector((state) => state.filters);

  // todo filter by status
  const filterByStatus = (todo) => {
    const { status } = filters;
    switch (status) {
      case "Complete":
        return todo.completed;
      case "Incomplete":
        return !todo.completed;
      default:
        return todo;
    }
  };

  // todo filter by colors
  const filterByColors = (todo) => {
    const { colors } = filters;
    if (colors.length > 0) {
      return colors.includes(todo?.color);
    }
    return true;
  };

  return (
    <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
      {todos
        .filter(filterByStatus)
        .filter(filterByColors)
        .map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
    </div>
  );
}
