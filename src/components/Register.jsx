import Card from "./Card";
import CardContent from "./CardContent";
import Button from "./Button";
import Input from "./Input";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Register() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    email: "",
    phone: "",
    password: "",
    age: "",
    role: "",
    format: "",
    skillLevel: "",
    location: "",
    availability: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/users", formData);
      console.log("Registration Successful:", response.data);
      navigate("/login");
    } catch (error) {
      console.error("Registration Error:", error.response?.data || error.message);
    }
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card className="w-96 p-6 shadow-lg">
        <CardContent>
          <h2 className="text-2xl font-bold text-center mb-4">
            {step === 1 ? "Basic Info" : step === 2 ? "Cricket Profile" : "Booking Preferences"}
          </h2>
          <form onSubmit={handleRegister} className="space-y-4">
            {step === 1 && (
              <>
                <Input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} required />
                <Input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} required />
                <Input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                <Input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
                <Input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
                <Button type="button" onClick={nextStep}>Next: Cricket Profile</Button>
              </>
            )}
            {step === 2 && (
              <>
                <Input type="number" name="age" placeholder="Age" value={formData.age} onChange={handleChange} required />
                <select name="role" value={formData.role} onChange={handleChange} required>
                  <option value="">Preferred Role</option>
                  <option value="Batsman">Batsman</option>
                  <option value="Bowler">Bowler</option>
                  <option value="All-Rounder">All-Rounder</option>
                  <option value="Wicketkeeper">Wicketkeeper</option>
                </select>
                <Button type="button" onClick={prevStep}>Back</Button>
                <Button type="button" onClick={nextStep}>Next: Booking</Button>
              </>
            )}
            {step === 3 && (
              <>
                <Input type="text" name="location" placeholder="Preferred Turf Location" value={formData.location} onChange={handleChange} required />
                <Input type="text" name="availability" placeholder="Availability (e.g. Weekends, Evenings)" value={formData.availability} onChange={handleChange} required />
                <Button type="button" onClick={prevStep}>Back</Button>
                <Button type="submit">Submit Registration</Button>
              </>
            )}
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default Register;
