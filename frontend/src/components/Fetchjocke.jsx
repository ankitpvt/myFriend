import React, { useState, useEffect } from "react";

const Fetchjocke = () => {
  const [joke, setJoke] = useState("");
  const [cartoonImage, setCartoonImage] = useState("/cartoons/default-cartoon.png");

  // Fetch a joke from the backend
  const fetchJoke = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/jokes");
      const data = await response.json();
      setJoke(data.joke);
    } catch (error) {
      console.error("Error fetching joke:", error);
    }
  };

  // Fetch cartoon image for a specific reaction
  const fetchCartoon = async (reaction) => {
    try {
      const response = await fetch(`http://localhost:5000/api/cartoon/${reaction}`);
      const data = await response.json();
      setCartoonImage(data.imageUrl);
    } catch (error) {
      console.error("Error fetching cartoon image:", error);
    }
  };

  useEffect(() => {
    fetchJoke(); // Load an initial joke
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-purple-400 to-blue-500 text-white">
      <h1 className="text-4xl font-bold mb-6 animate-pulse">Cartoon Jokes Generator</h1>
      <img
        src={cartoonImage}
        alt="Cartoon"
        className="w-40 h-40 mb-6 rounded-full border-4 border-white shadow-lg transition-transform duration-300 hover:scale-110"
      />
      <div className="bg-white text-black p-6 rounded-lg shadow-md text-center max-w-md w-full">
        <p className="text-lg font-medium mb-4">{joke || "Loading joke..."}</p>
        <button
          onClick={fetchJoke}
          className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md transition duration-300"
        >
          New Joke
        </button>
        <div className="flex justify-center gap-4 mt-4">
          <button
            onClick={() => fetchCartoon("laughing")}
            className="text-3xl transition-transform transform hover:scale-125"
          >
            😂
          </button>
          <button
            onClick={() => fetchCartoon("neutral")}
            className="text-3xl transition-transform transform hover:scale-125"
          >
            😐
          </button>
          <button
            onClick={() => fetchCartoon("rolling-eyes")}
            className="text-3xl transition-transform transform hover:scale-125"
          >
            🙄
          </button>
        </div>
      </div>
    </div>
  );
};

export default Fetchjocke;
