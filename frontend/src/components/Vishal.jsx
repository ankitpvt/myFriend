import React from "react";
import { Link } from "react-router-dom";

const Vishal = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 text-white">
      <h1 className="text-4xl font-bold mb-4 animate-pulse">
        Vishal Beta Khali Click Kar
      </h1>
      <h2 className="text-lg">
        <Link
          to="/Yes"
          className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 rounded-full transition-transform transform hover:scale-105 shadow-md"
        >
          Vishuuu Yacyavar Click Kar
        </Link>
      </h2>
    </div>
  );
};

export default Vishal;
