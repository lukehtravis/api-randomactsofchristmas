const Pool = require("pg").Pool;

const isProduction = process.env.NODE_ENV === "production";

let pool = {};

if (!isProduction) {
  pool = new Pool({
    user: process.env.USER,
    host: process.env.HOST,
    database: "randomactsofchristmas",
    password: process.env.PASSWORD,
    port: process.env.PORT,
  });
} else {
  pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: false,
  });
}

exports.pool = pool;
