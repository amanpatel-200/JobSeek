import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="bg-white text-gray-700 py-10 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h2 className='text-2xl font-bold'>Job<span className='text-[#1852d1]'>Nest</span></h2>
          <p className="mt-2 text-gray-600">
            Your ultimate platform to find, apply, and grow in your dream career.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Quick Links</h3>
          <ul>
            <li className="my-1 hover:text-[#28A745] cursor-pointer"><Link to="/">Home</Link></li>
           <li className="my-1  hover:text-[#28A745] cursor-pointer"><Link to="/jobs">Jobs</Link></li>
            <li className="my-1 hover:text-[#28A745] cursor-pointer"><Link to="/browse">Browse</Link></li>
            
          </ul>
        </div>

        {/* Social & Contact */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Connect With Us</h3>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="hover:text-[#28A745]">Facebook</a>
            <a href="#" className="hover:text-[#28A745]">LinkedIn</a>
            <a href="#" className="hover:text-[#28A745]">Twitter</a>
            <a href="#" className="hover:text-[#28A745]">Instagram</a>
          </div>
          <p className="mt-4 text-gray-600">Email: support@jobnest.com</p>
          <p className="text-gray-600">Phone: +91 98765 43210</p>
        </div>
      </div>

      <div className="mt-8 pt-4 text-center text-gray-500 text-sm">
        © 2025 JobNest. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
