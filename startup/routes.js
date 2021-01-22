const actsOfChristmas = require("../routes/actsOfChristmas");
const home = require("../routes/home");
const error = require("../middleware/error");
const express = require("express");

module.exports = function (app) {
  app.use(express.json());
  app.use("/api/actsofchristmas", actsOfChristmas);
  app.use("/", home);
  app.use(error);
};
