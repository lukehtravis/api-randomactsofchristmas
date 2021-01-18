const express = require("express");
const router = express.Router();
const { ActOfChristmas } = require("../models/actOfChristmas");

router.get("/", async (req, res) => {
  const actsOfChristmas = await ActOfChristmas.find();
  res.send(actsOfChristmas);
});

router.post("/", async (req, res) => {
  let actOfChristmas = new actOfChristmas({
    lat: req.body.lat,
    long: req.body.long,
    description: req.body.description,
    title: req.body.title,
  });
  actOfChristmas = await actOfChristmas.save();

  res.send(actOfChristmas);
});

module.exports = router;
