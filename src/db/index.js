const mysql = require('mysql2')

const {
  NODE_ENV,
  DB_HOST,
  DB_USER,
  DB_PASSWORD,
  DB_DATABASE
} = require('../config/db')

let connectionOptions
if (NODE_ENV == 'test') {
  connectionOptions = {
    host: DB_HOST,
    user: DB_USER,
    database: DB_DATABASE
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
