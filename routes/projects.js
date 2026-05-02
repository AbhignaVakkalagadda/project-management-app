const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Projects Route Working");
});

router.post("/", (req, res) => {
  res.json({ message: "Project Created" });
});

module.exports = router;