const express = require("express");
const router = express.Router();
const member = require("../models/Memebers");

router.get("/", (req, res) => {
  member.find({}, function (err, users) {
    res.send(users);
  });
});

router.post("/create", (req, res) => {
  const post = new member({
    enrollId: req.body.enrollId,
    name: req.body.name,
    address: req.body.address,
    enrollDate: req.body.enrollDate,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
    contactNumber: req.body.contactNumber,
  });

  post
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
