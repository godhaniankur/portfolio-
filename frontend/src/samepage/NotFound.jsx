import React from "react";
import { useNavigate } from "react-router-dom";
import Notfound from '../srcImage/notfound.png'
const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-gray-200 text-center">
      <img
        src={Notfound}
        alt="404 Not Found"
        className="w-64 h-64 mb-6"
      />
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-6">Oops! The page you're looking for doesn't exist.</p>
      <button
        onClick={() => navigate("/")}
        className="px-6 py-2 bg-indigo-500 text-white font-medium rounded-lg hover:bg-indigo-600 transition">
        Go to Homepage
      </button>
    </div>
  );
};

export default NotFound;
