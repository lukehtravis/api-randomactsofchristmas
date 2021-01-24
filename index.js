const express = require("express");
require("./startup/db")();
const app = express();
require("./startup/routes")(app);
require("./startup/logging")();

const port = process.env.PORT || 3000;
app.listen(port, () =>
  console.log(`Listening on port ${port}. Woot woot glory`)
);
