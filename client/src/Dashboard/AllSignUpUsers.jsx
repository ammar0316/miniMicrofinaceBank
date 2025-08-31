import axios from "axios";
import React, { useEffect, useState } from "react";

const AllSignUpUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllData();
  }, []);

  const getAllData = async () => {
    try {
      const res = await axios.get("http://localhost:3000/getAllUser");
      setUsers(res.data.user || []);
      //   if(res){
      //  localStorage.setItem("email",res.data.user.userEmail)
      // }
    } catch (err) {
      console.error("Error fetching users:", err);
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-8 bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-bold text-teal-700 mb-4">All Registered Users</h2>

      {users.length === 0 ? (
        <p className="text-gray-600 text-center">No users found.</p>
      ) : (
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-teal-600 text-white">
              <th className="p-3 text-left">#</th>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr
                key={user._id}
                className="border-b hover:bg-gray-50 transition"
              >
                <td className="p-3">{index + 1}</td>
                <td className="p-3">{user.userName}</td>
                <td className="p-3">{user.userEmail}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AllSignUpUsers;
