require('dotenv').config()

module.exports = {
  DB_HOST: process.env.MYSQL_HOST,
  DB_USER: process.env.MYSQL_USER,
  DB_PASSWORD: process.env.MYSQL_PASSWORD,
  DB_DATABASE: process.env.MYSQL_DATABASE
}
