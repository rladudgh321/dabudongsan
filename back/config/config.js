const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  development: {
    username: "root",
    password: process.env.MYSQL_SECRET,
    database: process.env.MYSQL_DATABASE,
    host: process.env.MYSQL_HOST,
    dialect: "mysql"
  },
  test: {
    username: "root",
    password: process.env.MYSQL_SECRET,
    database: process.env.MYSQL_DATABASE,
    host: process.env.MYSQL_HOST,
    dialect: "mysql"
  },
  production: {
    username: "root",
    password: process.env.MYSQL_SECRET,
    database: process.env.MYSQL_DATABASE,
    host: process.env.MYSQL_HOST,
    dialect: "mysql"
  }
}
