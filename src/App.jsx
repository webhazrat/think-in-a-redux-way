import "./App.css";
import FilterTodo from "./components/FilterTodo";
import Header from "./components/Header";
import TodoAddForm from "./components/TodoAddForm";
import TodoList from "./components/TodoList";

function App() {
  return (
    <>
      <div className="grid place-items-center bg-blue-100 h-screen px-6 font-sans">
        <Header />

        <div className="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
          <TodoAddForm />
          <hr className="mt-4" />
          <TodoList />
          <hr className="mt-4" />
          <FilterTodo />
        </div>
      </div>
    </>
  );
}

export default App;
