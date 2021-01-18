const express = require("express");
const mongoose = require("mongoose");
const app = express();
const actsOfChristmas = require("./routes/actsOfChristmas");
const home = require("./routes/home");

app.use("/api/actsofchristmas", actsOfChristmas);
app.use("/", home);

mongoose
  .connect("mongodb://localhost/randomactsofchristmasdb")
  .then(() => console.log("Succesfully connected to mongodb"))
  .catch((err) => console.error("Couldn't connect to mongodb", err));

const port = process.env.PORT || 3000;
app.listen(port, () =>
  console.log(`Listening on port ${port}. Woot woot glory`)
);
