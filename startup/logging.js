const winston = require("winston");
require("winston-mongodb");
require("express-async-errors");
module.exports = function () {
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
};
