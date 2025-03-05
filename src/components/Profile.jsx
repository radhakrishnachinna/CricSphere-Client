import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    if (!userData) {
      navigate("/login");
    } else {
      setUser(userData);
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="w-96 p-6 bg-white shadow-lg rounded-lg relative">
        <button
          className="absolute top-4 right-4 text-xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          &#9776;
        </button>
        {menuOpen && (
          <div className="absolute top-12 right-4 bg-white shadow-md rounded-md p-2 w-40">
            <ul>
              <li className="p-2 hover:bg-gray-200 cursor-pointer">Edit Profile</li>
              <li className="p-2 hover:bg-gray-200 cursor-pointer">Settings</li>
              <li
                className="p-2 hover:bg-red-500 hover:text-white cursor-pointer"
                onClick={handleLogout}
              >
                Logout
              </li>
            </ul>
          </div>
        )}
        <h2 className="text-2xl font-bold text-center mb-4">User Profile</h2>
        {user && (
          <div className="text-center">
            <p><strong>Name:</strong> {user.fullName}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Profile;
