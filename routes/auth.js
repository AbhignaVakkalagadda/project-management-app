const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Auth Route Working");
});

router.post("/signup", (req, res) => {
  res.json({ message: "Signup Success" });
});

router.post("/login", (req, res) => {
  res.json({ message: "Login Success" });
});

module.exports = router;