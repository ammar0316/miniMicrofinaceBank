import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


const SignUp = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const navigate = useNavigate()

  const userUploadInfo = async () => {
    try {
      const upload = await axios.post("http://localhost:3000/signup", {
        userName: userName,
        userEmail: userEmail,
        userPassword: userPassword,
      });
      console.log(upload.data);
       toast.success(`User as ${userName} is successfully SignUp`);
      setUserName("");
      setUserEmail("");
      setUserPassword("");
     return navigate("/signIn")
    } catch (error) {
      console.error(" Error uploading user info:", error);
       toast.success(" Something went wrong!");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-blue-50 to-white">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-blue-600 text-center mb-6">
          Create an Account
        </h1>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="email"
            placeholder="Email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="password"
            placeholder="Password"
            value={userPassword}
            onChange={(e) => setUserPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button
            onClick={userUploadInfo}
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Sign Up
          </button>
        </div>

        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{" "}
          <a href="/signIn" className="text-blue-600 hover:underline">
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
