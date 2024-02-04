import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddVideo from "./pages/AddVideo";
import Video from "./pages/Video";
import EditVideo from "./pages/EditVideo";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos/add" element={<AddVideo />} />
        <Route path="/videos/:videoId" element={<Video />} />
        <Route path="/videos/edit/:videoId" element={<EditVideo />} />
      </Routes>
    </Router>
  );
}

export default App;
