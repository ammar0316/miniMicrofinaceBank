import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";

const ApplyLoan = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    salary: "",
    familyMembers: "",
    reason: "",
    loan : "",
    status : "Pending",
    loanType: "Education",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      if (Number(formData.salary) > 50000) {
       toast.success("Sorry, only applicants with salary less than 50,000 PKR are eligible.");
      return;
    }
     const respose = await axios.post("http://localhost:3000/applyloan",{
     allData : formData,
     })

    console.log("Loan Application Submitted:", formData);
     toast.success(" Loan Application Submitted Successfully!");

    // Reset form
    setFormData({
      name: "",
      email: "",
      salary: "",
      familyMembers: "",
      reason: "",
      loan : "",
      loanType: "Education",
    });


    }catch(err){
      console.log(err)

    }

    
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center py-10">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-lg">
        <h2 className="text-3xl font-bold text-teal-700 mb-6 text-center">
          Apply for Loan
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Applicant Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Applicant Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your full name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          {/* Gmail */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Gmail</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your this Login gmail only"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          {/* Salary */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Monthly Salary (PKR)
            </label>
            <input
              type="number"
              name="salary"
              value={formData.salary}
              onChange={handleChange}
              required
              placeholder="Enter your salary (must be < 50,000)"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
          {/* required loan */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Required Loan (PKR)
            </label>
            <input
              type="number"
              name="loan"
              value={formData.loan}
              onChange={handleChange}
              required
              placeholder="Enter rquired loan (max loan  150,000)"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          {/* Family Members */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Family Members
            </label>
            <input
              type="number"
              name="familyMembers"
              value={formData.familyMembers}
              onChange={handleChange}
              required
              placeholder="Enter number of family members"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          {/* Loan Type */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Loan Type
            </label>
            <select
              name="loanType"
              value={formData.loanType}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              <option>Education</option>
              <option>Medical</option>
              <option>Business</option>
              <option>Personal</option>
            </select>
          </div>

          {/* Reason */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Reason for Loan
            </label>
            <textarea
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              required
              placeholder="Explain why you need this loan"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              rows="3"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 rounded-lg transition"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default ApplyLoan;
