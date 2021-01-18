const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost/randomactsofchristmasdb")
  .then(() => console.log("Succesfully connected to mongodb"))
  .catch((err) => console.error("Couldn't connect to mongodb", err));

async function createActOfChristmas() {
  const actOfChristmasSchema = new mongoose.Schema({
    lat: Number,
    long: Number,
    description: String,
    title: String,
  });

  const ActOfChristmas = mongoose.model("ActOfChristmas", actOfChristmasSchema);
  const actOfChristmas = new ActOfChristmas({
    lat: 37.8614,
    long: 37.8614,
    description:
      "Natural Douglas Fir Draped In A Most Festive Christmas Attire",
    title: "Natural Douglas Fir Draped In A Most Festive Christmas Attire",
  });

  const result = await actOfChristmas.save();
}

async function getActsOfChristmas() {
  const actsOfChristmas = await ActOfChristmas.find();
}

createActOfChristmas();
