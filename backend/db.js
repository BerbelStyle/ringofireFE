/** @format */

const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "jorgepg",
  host: "localhost",
  post: 5432,
  database: "ringoffire",
});

module.exports = pool;
