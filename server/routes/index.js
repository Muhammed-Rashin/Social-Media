const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Yes You are in...");
});

module.exports = router;
