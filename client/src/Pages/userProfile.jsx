import React, { useEffect, useState } from "react";
import axios from "axios";

const UserProfile = () => {
  const [userName, setUserName] = useState("");
  const [loan, setLoan] = useState("");
  const [emails, setEmails] = useState("");
  const [status, setStatus] = useState("");
  const [loanType, setLoanType] = useState("");
  const [salary, setSalary] = useState("");
 

  useEffect(() => {
  const email = localStorage.getItem("email"); 
  setEmails(email);
 

  if (email) {
    fetchUserData(email); 
  }
}, [emails]);

  const fetchUserData = async () => {
    try {
      
      const res = await axios.get("http://localhost:3000/userProfile");
      const matchedUser = res.data.user.find((e) => e.email === emails);

      if (matchedUser) {
        setUserName(matchedUser.name);
        setLoan(matchedUser.loan);
        setStatus(matchedUser.status);
        setLoanType(matchedUser.loanType);
        setSalary(matchedUser.salary);
      } 
     
   
    } catch (err) {
      console.error("Error fetching user profile:", err);
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Accepted":
        return "text-green-600 font-semibold";
      case "Rejected":
        return "text-red-600 font-semibold";
      default:
        return "text-yellow-600 font-semibold";
    }
  };
  

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-6">
        <h2 className="text-3xl font-bold text-teal-700 mb-4">User Profile</h2>
        <p className="text-lg text-gray-700 mb-6">
          Welcome, <span className="font-semibold">{userName}</span>
        </p>

        {!loan ? (
          <p className="text-center text-gray-600">
            You have not applied for any loans yet.
          </p>
        ) : (
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-teal-600 text-white">
                <th className="p-3 text-left">Loan Type</th>
                <th className="p-3 text-left">Loan Amount</th>
                <th className="p-3 text-left">Salary</th>
                <th className="p-3 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50 transition">
                <td className="p-3">{loanType}</td>
                <td className="p-3">{Number(loan)+2} PKR</td>
                <td className="p-3">{salary} PKR</td>
                <td className={`p-3 ${getStatusColor(status)}`}>{status}</td>
              </tr>
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
