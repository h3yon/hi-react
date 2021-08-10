const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: process.env.DB_LOCAL_HOST,
  user: process.env.DB_LOCAL_USER,
  port: 3306,
  password: process.env.DB_LOCAL_PASSWORD,
  database: process.env.DB_LOCAL_DATABASE,
});

module.exports = {
  pool: pool,
};
