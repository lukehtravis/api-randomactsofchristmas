const winston = require("winston");
var Postgres = require("winston-postgres").Postgres;
require("express-async-errors");
module.exports = function () {
  process.on("uncaughtException", (exception) => {
    console.log("Ah snap!. An uncaught exception. Something broke in node");
    console.log(exception);
    winston.error(exception.message, exception);
    process.exit(1);
  });

  process.on("unhandledRejection", (rejection) => {
    console.log(
      "Ah snap! We got an unhandled exception. One of our asynchronous functions didn't work"
    );
    console.log(rejection);
    winston.error(rejection.message, rejection);
    process.exit(1);
  });

  winston.add(new winston.transports.File({ filename: "logfile.log" }));
};
