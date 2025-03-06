/* eslint-disable react/jsx-no-undef */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../Pages/HomePage"; // Fix path
import Register from "../components/Register";
import Features from "../components/Features";
import Login from "../components/Login";  // Fix path

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Features />} />
        <Route path="/login" element={<Login />} />

      </Routes>
    </Router>
  );
}

export default AppRoutes;
