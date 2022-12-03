const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("we are on posts");
});

router.get("/specific", (req, res) => {
  res.send("we are on specific post");
});

module.exports = router;
