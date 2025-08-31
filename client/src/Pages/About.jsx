import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="bg-gray-100">
      {/* ✅ About Hero Section */}
      <section className="relative bg-teal-700 text-white text-center py-20">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About Hope Finance
          </h1>
          <p className="text-lg md:text-xl">
            Empowering the needy through interest-free loans for a better future.
          </p>
        </div>
      </section>

      {/* ✅ Our Mission */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
          <img
            src="https://img.freepik.com/free-vector/flat-hand-drawn-people-giving-help_23-2148905555.jpg"
            alt="mission"
            className="w-64 rounded-lg"
          />
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold text-teal-700 mb-4">Our Mission</h2>
            <p className="text-gray-600 text-lg">
              Our mission is to help poor families, students, and patients by
              providing financial support **without any interest**. We aim to
              uplift communities by encouraging education, health, and small
              businesses so that every individual can live a dignified life.
            </p>
          </div>
        </div>
      </section>

      {/* ✅ Why Choose Us */}
      <section className="py-16 bg-teal-50">
        <div className="max-w-6xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold text-teal-700 mb-10">Why Choose Hope Finance?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
              <img
                src="https://img.icons8.com/color/96/charity.png"
                alt="charity"
                className="mx-auto"
              />
              <h3 className="text-xl font-semibold text-teal-700 mt-4">100% Interest-Free</h3>
              <p className="text-gray-600 text-sm mt-2">
                We provide loans without charging any interest, based only on need.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
              <img
                src="https://img.icons8.com/fluency/96/helping-hand.png"
                alt="help"
                className="mx-auto"
              />
              <h3 className="text-xl font-semibold text-teal-700 mt-4">Helping Communities</h3>
              <p className="text-gray-600 text-sm mt-2">
                We focus on improving education, healthcare, and small businesses for the needy.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
              <img
                src="https://img.icons8.com/color/96/trust.png"
                alt="trust"
                className="mx-auto"
              />
              <h3 className="text-xl font-semibold text-teal-700 mt-4">Trusted & Transparent</h3>
              <p className="text-gray-600 text-sm mt-2">
                Every donation and loan is tracked with transparency to ensure fairness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Call to Action */}
      <section className="text-center py-16 bg-white">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Join Us in Making a Difference
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-6">
          Whether you want to donate or need financial help, Hope Finance is
          here to change lives with kindness and trust.
        </p>
        <div className="flex justify-center gap-4">
          <Link to="/apply-loan" className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg text-white font-semibold shadow-md transition">
            Apply for Loan
          </Link>
          <Link to="/donate-loan" className="bg-pink-600 hover:bg-pink-700 px-6 py-3 rounded-lg text-white font-semibold shadow-md transition">
            Donate Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
