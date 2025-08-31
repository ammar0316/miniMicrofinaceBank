import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const DashBoard = () => {
  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Left Sidebar */}
      <div className="w-64 bg-teal-700 text-white shadow-lg p-5">
        <h2 className="text-2xl font-bold mb-6 text-center">Admin Panel</h2>
        <ul className="space-y-4">
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `block p-2 rounded-md ${
                  isActive ? "bg-teal-500" : "hover:bg-teal-600"
                }`
              }
            >
              Dashboard Overview
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/all-loan-users"
              className={({ isActive }) =>
                `block p-2 rounded-md ${
                  isActive ? "bg-teal-500" : "hover:bg-teal-600"
                }`
              }
            >
              All Loan Users
            </NavLink>
          </li>
          
          <li>
            <NavLink
              to="/dashboard/total-donate-loan"
              className={({ isActive }) =>
                `block p-2 rounded-md ${
                  isActive ? "bg-teal-500" : "hover:bg-teal-600"
                }`
              }
            >
              All Loan donor
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/all-signup-users"
              className={({ isActive }) =>
                `block p-2 rounded-md ${
                  isActive ? "bg-teal-500" : "hover:bg-teal-600"
                }`
              }
            >
              All Signup Users
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/loan-review"
              className={({ isActive }) =>
                `block p-2 rounded-md ${
                  isActive ? "bg-teal-500" : "hover:bg-teal-600"
                }`
              }
            >
              Loan Review
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Right Content */}
      <div className="flex-1 p-6">
        <h1 className="text-3xl font-bold text-teal-700 mb-4">Dashboard</h1>
        <div className=" p-4">
          <Outlet />
          {/* Nested route content will be displayed here */}
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
