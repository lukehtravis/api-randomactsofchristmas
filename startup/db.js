const winston = require("winston");
const mongoose = require("mongoose");
module.exports = function () {
  mongoose
    .connect("mongodb://localhost/randomactsofchristmasdb")
    .then(() => winston.info("Succesfully connected to mongodb"));
};
