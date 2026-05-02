const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// Home Route
app.get("/", (req, res) => {
  res.send("Backend Running Successfully");
});

// Direct Routes (no separate files for now)
app.get("/api/auth", (req, res) => {
  res.send("Auth Route Working");
});

app.get("/api/projects", (req, res) => {
  res.send("Projects Route Working");
});

app.get("/api/tasks", (req, res) => {
  res.send("Tasks Route Working");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});