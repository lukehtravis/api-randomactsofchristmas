const express = require("express");
const winston = require("winston");
const router = express.Router();
const {
  actOfChristmas,
  createActOfChristmas,
} = require("../models/actOfChristmas");

router.get("/", actOfChristmas);

router.post("/", createActOfChristmas);

module.exports = router;
