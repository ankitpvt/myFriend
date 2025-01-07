import React from "react";
import { Link } from "react-router-dom";

const Pranav = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white">
      <h1 className="text-4xl font-extrabold mb-4 animate-bounce">
        Pranav Beta Khali Click Kar
      </h1>
      <h2 className="text-lg">
        <Link
          to="/Yes"
          className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 rounded-full shadow-lg transition-transform transform hover:scale-110"
        >
          Khare Yacyavar Click Kar
        </Link>
      </h2>
    </div>
  );
};

export default Pranav;
