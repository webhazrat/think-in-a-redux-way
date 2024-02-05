import "./App.css";
import Add from "./pages/Add";
import Home from "./pages/Home";
import Edit from "./pages/Edit";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books/add" element={<Add />} />
        <Route path="/books/edit/:bookId" element={<Edit />} />
      </Routes>
    </Router>
  );
}

export default App;
