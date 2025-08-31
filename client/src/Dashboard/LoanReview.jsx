import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const LoanReview = () => {
  const [loans, setLoans] = useState([]);
  const [selectedLoan, setSelectedLoan] = useState(null); // loan to update
  const [newStatus, setNewStatus] = useState("");

  // ✅ Fetch all loans when component loads
  useEffect(() => {
    const fetchLoans = async () => {
      try {
        const res = await axios.get("http://localhost:3000/allloans");
        setLoans(res.data.loans);
      } catch (err) {
        console.error("Error fetching loans:", err);
      }
    };
    fetchLoans();
  }, []);

  // ✅ When admin clicks Update
  const updateLoanStatus = async () => {
    try {
      const res = await axios.post("http://localhost:3000/loanreview", {
        email: selectedLoan.email,
        loanType: selectedLoan.loanType,
        status: newStatus,
      });

       toast.success(res.data.message);

      // Update UI instantly without re-fetching
      setLoans((prevLoans) =>
        prevLoans.map((loan) =>
          loan._id === selectedLoan._id
            ? { ...loan, status: newStatus }
            : loan
        )
      );

      setSelectedLoan(null); // close modal
      setNewStatus("");
    } catch (err) {
      console.error("Error updating loan:", err);
       toast.success(" Failed to update loan status");
    }
  };

  return (
    <div className="max-w-5xl mx-auto mt-8 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-teal-700 mb-4">Loan Applications</h2>

      {loans.length === 0 ? (
        <p className="text-gray-600">No loan applications yet.</p>
      ) : (
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-teal-600 text-white">
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Loan Type</th>
              <th className="p-3 text-left">Salary</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {loans.map((loan) => (
              <tr key={loan._id} className="border-b hover:bg-gray-50">
                <td className="p-3">{loan.name}</td>
                <td className="p-3">{loan.email}</td>
                <td className="p-3">{loan.loanType}</td>
                <td className="p-3">{loan.salary} PKR</td>
                <td className="p-3 font-semibold">{loan.status || "Pending"}</td>
                <td className="p-3">
                  <button
                    onClick={() => {
                      setSelectedLoan(loan);
                      setNewStatus(loan.status || "Pending");
                    }}
                    className="bg-teal-600 hover:bg-teal-700 text-white px-3 py-1 rounded"
                  >
                    Review
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* ✅ Popup Modal */}
      {selectedLoan && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h3 className="text-lg font-bold mb-3 text-teal-700">
              Review Loan for {selectedLoan.name}
            </h3>

            <label className="block mb-2 text-gray-700 font-medium">
              Select Status
            </label>
            <select
              value={newStatus}
              onChange={(e) => setNewStatus(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 mb-4"
            >
              <option>Pending</option>
              <option>Accepted</option>
              <option>Rejected</option>
            </select>

            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setSelectedLoan(null)}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={updateLoanStatus}
                className="px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-700"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoanReview;
