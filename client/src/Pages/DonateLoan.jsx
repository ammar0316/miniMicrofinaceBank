import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const DonateLoan = () => {
  const [donorName, setDonorName] = useState("");
  const [donorEmail, setDonorEmail] = useState("");
  const [donateAmount, setDonateAmount] = useState("");

  const handleDonate = async () => {
    try {
      const res = await axios.post("http://localhost:3000/donate-loan", {
        name: donorName,
        email: donorEmail,
        amount: donateAmount,
      });

      console.log(res.data);
       toast.success(" Donation Submitted Successfully!");
      setDonorName("");
      setDonorEmail("");
      setDonateAmount("");
    } catch (error) {
      console.error(" Error submitting donation:", error);
       toast.success(" Something went wrong!");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-blue-50 to-white">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-blue-600 text-center mb-6">
          Donate a Loan
        </h1>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            value={donorName}
            onChange={(e) => setDonorName(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="email"
            placeholder="Email"
            value={donorEmail}
            onChange={(e) => setDonorEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="number"
            placeholder="Amount to Donate"
            value={donateAmount}
            onChange={(e) => setDonateAmount(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button
            onClick={handleDonate}
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition duration-200"
          >
            Donate Now
          </button>
        </div>

        <p className="text-center text-sm text-gray-600 mt-4">
          Thank you for helping communities grow! 🌱
        </p>
      </div>
    </div>
  );
};

export default DonateLoan;

