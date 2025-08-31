import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const SignIn = () => {
  const [userEmail, setUserEmail] = useState("");

  const [userPassword, setUserPassword] = useState("");

  const navigate = useNavigate();

  const userSignIn = async () => {
    try {
      if (localStorage.getItem("email")) {
        return toast.success(
          `user as ${localStorage.getItem("email")} already logIn`
        );
      }
      const loginUser = await axios.post("http://localhost:3000/signin", {
        userEmail: userEmail,
        userPassword: userPassword,
      });

      console.log("User Email from DB:", loginUser.data.user.userEmail);

      if (loginUser.data) {
        localStorage.setItem("email", loginUser.data.user.userEmail);

        toast.success(
          `User ${userEmail.slice(
            0,
            userEmail.indexOf("@")
          )} logged in successfully`
        );

        setUserEmail("");
        setUserPassword("");
        navigate("/");
        setTimeout(() => {
          window.location.reload();
          
        }, 1300);
       
      } else {
        toast.success(loginUser.data.message || "Invalid credentials");
      }
    } catch (error) {
      console.error(" Error uploading user info:", error);
      toast.success("Something went wrong!");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-blue-50 to-white">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-blue-600 text-center mb-6">
          User LogIn
        </h1>

        <div className="space-y-4">
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
            onClick={userSignIn}
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Sign In
          </button>
        </div>

        <p className="text-center text-sm text-gray-600 mt-4">
          I have'nt an account?{" "}
          <a href="/signUp" className="text-blue-600 hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
