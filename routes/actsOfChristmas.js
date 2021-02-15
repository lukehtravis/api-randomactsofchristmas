const express = require("express");
const cors = require("cors");
const winston = require("winston");
const router = express.Router();
const {
  actOfChristmas,
  createActOfChristmas,
} = require("../models/actOfChristmas");

app.use(cors());

router.get("/", actOfChristmas);

router.post("/", createActOfChristmas);

module.exports = router;
