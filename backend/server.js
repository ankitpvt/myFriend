const express = require("express");
const cors = require("cors");
const jokes = require("./jokes.json");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.static("public")); // To serve static cartoon images
app.use(express.json());

// Routes

// Get a random joke
app.get("/api/jokes", (req, res) => {
  const randomIndex = Math.floor(Math.random() * jokes.length);
  res.json(jokes[randomIndex]);
});

// Get a cartoon image for a specific reaction
app.get("/api/cartoon/:reaction", (req, res) => {
  const reaction = req.params.reaction;
  const imagePath = `/cartoons/${reaction}-cartoon.png`;

  if (["laughing", "neutral", "rolling-eyes"].includes(reaction)) {
    res.json({ imageUrl: imagePath });
  } else {
    res.status(404).json({ error: "Cartoon not found for this reaction." });
  }
});

// Start the server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
