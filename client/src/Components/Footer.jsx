import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 ">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* About Section */}
        <div>
          <h2 className="text-2xl font-bold text-blue-500">MicroFinance</h2>
          <p className="mt-3 text-sm">
            Empowering communities with easy micro-loans and secure financial solutions. 
            Join us to make finance accessible for everyone.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-blue-400">Home</Link></li>
            <li><Link to="/apply-loan" className="hover:text-blue-400">Apply Loan</Link></li>
            <li><Link to="/donate-loan" className="hover:text-blue-400">Donate Loan</Link></li>
            <li><Link to="/dashboard" className="hover:text-blue-400">Dashboard</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact Us</h3>
          <p className="text-sm">Email: support@microfinance.com</p>
          <p className="text-sm">Phone: +92 300 1234567</p>
          <p className="text-sm mt-2">Address: Karachi, Pakistan</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 text-center py-4 text-sm text-gray-400">
        © {new Date().getFullYear()} MicroFinance. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
