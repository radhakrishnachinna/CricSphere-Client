import Card from "./Card";
import CardContent from "./CardContent";
import Button from "./Button";
import Input from "./Input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/login", formData);
      console.log("Login Success:", response.data);
      navigate("/profile"); // Redirect to Profile.jsx after successful login
    } catch (error) {
      console.error("Login Error:", error.response?.data || error.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card className="w-96 p-6 shadow-lg">
        <CardContent>
          <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} required />
            <Input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
            <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 shadow-md hover:shadow-lg">
              Login
            </Button>
            <p className="text-center text-sm">
             Don't have an account?{" "}
              <span className="text-blue-500 cursor-pointer" onClick={() => navigate("/")}>Register</span>
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default Login;