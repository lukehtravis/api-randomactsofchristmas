const express = require("express");
const winston = require("winston");
const router = express.Router();
const {
  ActOfChristmas,
  validateActOfChristmas,
} = require("../models/actOfChristmas");

router.get("/", async (req, res) => {
  const actsOfChristmas = await ActOfChristmas.find();
  res.send(actsOfChristmas);
});

router.post("/", async (req, res) => {
  const { error } = validateActOfChristmas(req.body);
  if (error) {
    winston.error(error);
    return res.status(400).send(error.details[0].message);
  }

  let act = new ActOfChristmas({
    lat: req.body.lat,
    long: req.body.long,
    description: req.body.description,
    title: req.body.title,
  });

  let saveOfChristmas = await act.save();

  res.send(saveOfChristmas);
});

module.exports = router;
