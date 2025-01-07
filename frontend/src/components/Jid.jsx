import React from "react";
import { Link } from "react-router-dom";

const Jid = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 text-white">
      <h1 className="text-4xl font-bold mb-6 animate-pulse">
        Jidnyesh Beta Khali Click Kar
      </h1>
      <h2>
        <Link
          to="/Yes"
          className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-full shadow-md transition-transform transform hover:scale-110"
        >
          Bhendi Yachyavar Click Kar
        </Link>
      </h2>
    </div>
  );
};

export default Jid;
