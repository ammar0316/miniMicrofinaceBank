import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
 const [admin, setAdmin] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
 
  const userFetch = () => {
  const user = localStorage.getItem("email");
  if (user) {
   
    setAdmin(user);
    // window.location.reload()
  } else {
    setAdmin(null);
  }
};

// LogOut Function
const logOut = () => {
  if(admin){
    
    setAdmin(null); 
    localStorage.removeItem("email")
     toast.success(" User logged out successfully!");
     navigate("/signIn"); 

  }else{
     toast.success("user already log out")
  }
};

//  Run only ONCE when page loads
useEffect(() => {
  userFetch();
}, []);







  
  return (
    <nav className="bg-white shadow-md px-6 py-3">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600">Logo</h1>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-blue-600 font-medium">
            Home
          </Link>
          <Link to="/about" className="hover:text-blue-600 font-medium">
            About
          </Link>
          <Link to="/service" className="hover:text-blue-600 font-medium">
            Service
          </Link>
          <Link to="/apply-loan" className="hover:text-blue-600 font-medium">
            Apply Loan
          </Link>
          <Link to="/donate-loan" className="hover:text-blue-600 font-medium">
            Donate Loan
          </Link>
          <Link to="/userprofile" className="hover:text-blue-600 font-medium">
            User Profile
          </Link>
          <Link to="/signUp" className="hover:text-blue-600 font-medium">
            Sign Up
          </Link>
        </div>

        {/* Right Section (Desktop) */}
        <div className="hidden md:flex items-center space-x-4">
          <button
            onClick={logOut}
            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
          >
            Logout
          </button>
          <Link
            to="/dashboard"
            className={`bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 ${
              admin === "admin@gmail.com" ? "block" : "hidden"
            }`}
          >
            Dashboard
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-blue-600 text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-3 space-y-3 px-3 pb-4">
          <Link
            to="/"
            className="block hover:text-blue-600 font-medium"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block hover:text-blue-600 font-medium"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            to="/service"
            className="block hover:text-blue-600 font-medium"
            onClick={() => setIsOpen(false)}
          >
            Service
          </Link>
          <Link
            to="/apply-loan"
            className="block hover:text-blue-600 font-medium"
            onClick={() => setIsOpen(false)}
          >
            Apply Loan
          </Link>
          <Link
            to="/donate-loan"
            className="block hover:text-blue-600 font-medium"
            onClick={() => setIsOpen(false)}
          >
            Donate Loan
          </Link>
          <Link
            to="/userprofile"
            className="block hover:text-blue-600 font-medium"
            onClick={() => setIsOpen(false)}
          >
            User Profile
          </Link>
          <Link
            to="/signUp"
            className="block hover:text-blue-600 font-medium"
            onClick={() => setIsOpen(false)}
          >
            Sign Up
          </Link>
          <button
            onClick={() => {
              logOut();
              setIsOpen(false);
            }}
            className="w-full bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
          >
            Logout
          </button>
          {admin === "admin@gmail.com" && (
            <Link
              to="/dashboard"
              className="block bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
              onClick={() => setIsOpen(false)}
            >
              Dashboard
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
