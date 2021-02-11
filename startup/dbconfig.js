const Pool = require("pg").Pool;
console.log(process.env);
const pool = new Pool({
  user: process.env.USER,
  host: process.env.HOST,
  database: "randomactsofchristmas",
  password: process.env.PASSWORD,
  port: process.env.PORT,
});
exports.pool = pool;
