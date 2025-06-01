import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Pandit from "./pages/Pandit";
// ...other imports

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/pandit" element={<Pandit />} />
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
}
