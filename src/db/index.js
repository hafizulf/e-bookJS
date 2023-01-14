const mysql = require('mysql')
require('dotenv').config()

const { NODE_ENV } = require('../config')
const {
  DB_HOST,
  DB_USER,
  DB_PASSWORD,
  DB_DATABASE,
  TEST_DB_HOST,
  TEST_DB_USER,
  TEST_DB_PASSWORD,
  TEST_DB_DATABASE
} = process.env

let connectionOptions
if (NODE_ENV == 'test') {
  connectionOptions = {
    host: TEST_DB_HOST,
    user: TEST_DB_USER,
    password: TEST_DB_PASSWORD,
    database: TEST_DB_DATABASE
  }
} else {
  connectionOptions = {
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE
  }
}

let connection
try {
  connection = mysql.createConnection(connectionOptions)
} catch (error) {
  throw error
}

module.exports = {
  mysql: connection
}
