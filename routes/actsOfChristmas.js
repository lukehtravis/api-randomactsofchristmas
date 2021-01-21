const express = require("express");
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
