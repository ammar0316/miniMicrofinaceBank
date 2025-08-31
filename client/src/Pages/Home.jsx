import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-gray-100">
      {/* ✅ Hero Section */}
      <section className="relative bg-gray-900 text-white text-center py-24 bg-cover bg-center object-cover"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://www.shutterstock.com/image-vector/micro-finance-loan-financing-small-260nw-2278539647.jpg')",
        }}
      >
        <div className="max-w-2xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Interest-Free Micro Finance for the Needy
          </h1>
          <p className="text-lg md:text-xl">
            Helping poor families, students, and patients get loans without any
            interest. Together we can bring hope!
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <Link to="/apply-loan" className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold shadow-md transition">
              Request Loan
            </Link>
            <Link to="/apply-loan" className="bg-pink-600 hover:bg-pink-700 px-6 py-3 rounded-lg font-semibold shadow-md transition">
              Donate Now
            </Link>
          </div>
        </div>
      </section>

      {/* ✅ Loan Categories */}
      <section className="text-center py-16 px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">
          Who Can Apply?
        </h2>
        <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-6 w-72 hover:shadow-2xl transition">
            <img
            
              src="https://www.shutterstock.com/image-vector/poor-people-slum-picture-poverty-260nw-2264744645.jpg"
              alt="poor"
              
              className="mx-auto h-[100px] object-cover"
            />
            <h3 className="text-lg font-semibold text-teal-700 mt-4">
              For Poor Families
            </h3>
            <p className="text-gray-600 mt-2 text-sm">
              Financial help to run small businesses or fulfill basic needs
              without interest.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 w-72 hover:shadow-2xl transition">
            <img
              src="https://img.icons8.com/color/96/graduation-cap.png"
              alt="students"
              className="mx-auto"
            />
            <h3 className="text-lg font-semibold text-teal-700 mt-4">
              For Needy Students
            </h3>
            <p className="text-gray-600 mt-2 text-sm">
              Interest-free loans for education, books, and college/university
              fees.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 w-72 hover:shadow-2xl transition">
            <img
              src="https://img.icons8.com/color/96/hospital-room.png"
              alt="patients"
              className="mx-auto"
            />
            <h3 className="text-lg font-semibold text-teal-700 mt-4">
              For Patients
            </h3>
            <p className="text-gray-600 mt-2 text-sm">
              Help for medical treatment, surgeries, and medicines with no
              repayment stress.
            </p>
          </div>
        </div>
      </section>

      {/* ✅ Donate Section */}
      <section className="bg-teal-50 text-center py-16 px-4">
        <h2 className="text-3xl font-bold text-teal-700 mb-4">
          Become a Donor
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-6">
          Your small contribution can change someone’s life. Be the reason for
          someone’s smile!
        </p>

        <Link to="/apply-loan" className="bg-pink-600 hover:bg-pink-700 px-6 py-3 rounded-lg font-semibold text-white shadow-md transition">
          Donate Now
        </Link>
      </section>
    </div>
  );
};

export default Home;

