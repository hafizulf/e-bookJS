require('dotenv').config()

let NODE_ENV = process.env.NODE_ENV

if (NODE_ENV == 'test') {
  module.exports = {
    DB_HOST: 'localhost',
    DB_USER: 'root',
    DB_DATABASE: 'ebookjs_dbtest'
  }
} else if (NODE_ENV == 'development') {
  module.exports = {
    DB_HOST: process.env.MYSQL_HOST,
    DB_USER: process.env.MYSQL_USER,
    DB_PASSWORD: process.env.MYSQL_PASSWORD,
    DB_DATABASE: process.env.MYSQL_DATABASE
  }
}
