require("express-async-errors");
require("winston-mongodb");
const error = require("./middleware/error");
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const actsOfChristmas = require("./routes/actsOfChristmas");
const home = require("./routes/home");
const winston = require("winston");

process.on("uncaughtException", (exception) => {
  console.log("Ah snap!. An uncaught exception. Something broke in node");
  winston.error(exception.message, exception);
  process.exit(1);
});

process.on("unhandledRejection", (rejection) => {
  console.log(
    "Ah snap! We got an unhandled exception. One of our asynchronous functions didn't work"
  );
  winston.error(rejection.message, rejection);
  process.exit(1);
});

winston.add(new winston.transports.File({ filename: "logfile.log" }));
winston.add(
  new winston.transports.MongoDB({
    db: "mongodb://localhost/randomactsofchristmasdb",
  })
);

mongoose
  .connect("mongodb://localhost/randomactsofchristmasdb")
  .then(() => console.log("Succesfully connected to mongodb"))
  .catch((err) => console.error("Couldn't connect to mongodb", err));

app.use(express.json());
app.use("/api/actsofchristmas", actsOfChristmas);
app.use("/", home);

app.use(error);

const port = process.env.PORT || 3000;
app.listen(port, () =>
  console.log(`Listening on port ${port}. Woot woot glory`)
);
