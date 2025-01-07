import React from "react";
import { Link } from "react-router-dom";

const Yash = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-500 to-indigo-500 text-white">
      <h1 className="text-4xl font-bold mb-4 animate-bounce">
        Yash Beta Khali Click Kar
      </h1>
      <h2 className="text-xl font-medium">
        <Link
          to="/Yes"
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-all duration-300 shadow-lg"
        >
          Dholya Yacyavar Click Kar
        </Link>
      </h2>
    </div>
  );
};

export default Yash;
