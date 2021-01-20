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
  try {
    const { error } = validateActOfChristmas(req.body);
    if (error) return res.status(400).send(error.details[0].message);
  } catch (e) {
    console.log(e);
    res.status(500).send();
  }

  try {
    let act = new ActOfChristmas({
      lat: req.body.lat,
      long: req.body.long,
      description: req.body.description,
      title: req.body.title,
    });

    let saveOfChristmas = await act.save();

    res.send(saveOfChristmas);
  } catch (error) {
    console.log(error);
    res.status(500).send();
  }
});

module.exports = router;
