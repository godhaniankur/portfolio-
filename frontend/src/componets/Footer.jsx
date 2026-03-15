import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaGithub, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900  text-gray-400 py-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {/* Logo and Mission Statement */}
          <div>
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-indigo-500 rounded-full"></div>
              <span className="text-white text-lg font-bold">Your Company</span>
            </div>
            <p className="mt-4 text-sm">
              Making the world a better place through constructing elegant hierarchies.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="hover:text-white"><FaFacebook size={20} /></a>
              <a href="#" className="hover:text-white"><FaInstagram size={20} /></a>
              <a href="#" className="hover:text-white"><FaTwitter size={20} /></a>
              <a href="#" className="hover:text-white"><FaGithub size={20} /></a>
              <a href="#" className="hover:text-white"><FaYoutube size={20} /></a>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-white font-medium mb-4">Project</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Hotel Management System</a></li>
              <li><a href="#" className="hover:text-white">Bike Rental System</a></li>
              <li><a href="#" className="hover:text-white">Basic E-Commerce Website</a></li>
              <li><a href="#" className="hover:text-white">Commerce</a></li>
              <li><a href="#" className="hover:text-white">Insights</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-medium mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Submit Ticket</a></li>
              <li><a href="#" className="hover:text-white">Documentation</a></li>
              <li><a href="#" className="hover:text-white">Guides</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-medium mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
              <li><a href="#" className="hover:text-white">Jobs</a></li>
              <li><a href="#" className="hover:text-white">Press</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-medium mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">License</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm">
          <p>&copy; 2024 Your Company, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
