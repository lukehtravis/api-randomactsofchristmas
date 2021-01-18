const mongoose = require("mongoose");

const actOfChristmasSchema = new mongoose.Schema({
  lat: Number,
  long: Number,
  description: String,
  title: String,
});

const ActOfChristmas = mongoose.model("ActOfChristmas", actOfChristmasSchema);

exports.ActOfChristmas = ActOfChristmas;
