import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const TotalLoanPage = () => {
  const [loans, setLoans] = useState([]);
  const [toatal , setTotal] = useState(0)

  // Fetch all donated loans
  useEffect(() => {
    const fetchLoans = async () => {
      try {
        const res = await axios.get("http://localhost:3000/loanDonor");
        setLoans(res.data); 
      } catch (error) {
        console.error(" Error fetching loans:", error);
         toast.success("Failed to load loan data!");
      }
    };
    fetchLoans();
  }, []);

   const totalDonation = loans.reduce((accum, cur) => accum + Number(cur.amount), 0);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-white py-10">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-xl p-6">
        <h1 className="text-2xl font-bold text-blue-600 mb-6 text-center">
          Total Donators Members
        </h1>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-200">
            <thead>
              <tr className="bg-blue-100 text-blue-700">
                <th className="border border-gray-200 px-4 py-2 text-left">Name</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Email</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Loan Amount</th>
              </tr>
            </thead>
            <tbody>
              {loans.length > 0 ? (
                loans.map((loan, index) => (
                  <tr
                    key={index}
                    className="hover:bg-blue-50 transition duration-150"
                  >
                    <td className="border border-gray-200 px-4 py-2">{loan.name}</td>
                    <td className="border border-gray-200 px-4 py-2">{loan.email}</td>
                    <td className="border border-gray-200 px-4 py-2 font-semibold text-green-600">
                      ${loan.amount}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="3"
                    className="text-center py-4 text-gray-500 italic"
                  >
                    No loan data available yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
         

        {/* Total Donation Display */}
        <div className="text-right mb-4 text-lg font-semibold text-green-600">
          Total Donation  : {totalDonation} PKR
        </div>

        </div>
      </div>
    </div>
  );
};

export default TotalLoanPage;
