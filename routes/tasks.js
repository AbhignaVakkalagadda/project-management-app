const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Tasks Route Working");
});

router.post("/", (req, res) => {
  res.json({ message: "Task Created" });
});

module.exports = router;