import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const EnterNumberPage = () => {
  const [inputNumber, setInputNumber] = useState("");
  const [isCorrectNumber, setIsCorrectNumber] = useState(null);
  const navigate = useNavigate();

  const checkNumber = () => {
    if (inputNumber === "9673066960") {
      setIsCorrectNumber(true);
      navigate("/Yash");
    } else if (inputNumber === "9307185364") {
      setIsCorrectNumber(true);
      navigate("/Pranav");
    }else if (inputNumber === "1") {
        setIsCorrectNumber(true);
        navigate("/Pranav");
      }
    else if (inputNumber === "8459465036") {
      setIsCorrectNumber(true);
      navigate("/Vishal");
    } else if (inputNumber === "9145664047") {
      setIsCorrectNumber(true);
      navigate("/Jid");
    } else {
      setIsCorrectNumber(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-purple-500">
      <div className="bg-white shadow-lg rounded-lg p-8 w-96 animate-fade-in">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Enter Your Mobile Number
        </h2>
        <input
          type="text"
          value={inputNumber}
          onChange={(e) => setInputNumber(e.target.value)}
          placeholder="Enter number"
          className="w-full px-4 py-2 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
        />
        <button
          onClick={checkNumber}
          className="w-full mt-4 px-4 py-2 text-lg font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-300 focus:outline-none transition-all duration-300"
        >
          Check Number
        </button>
        {isCorrectNumber === false && (
          <p className="mt-4 text-center text-red-500 font-semibold animate-shake">
            Tuzya number tak na re bho.
          </p>
        )}
      </div>
    </div>
  );
};

export default EnterNumberPage;
