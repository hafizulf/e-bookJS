const mysql = require('mysql2')

const { DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE } = require('../config/db')

const connectionOptions = {
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_DATABASE
}

let connection
try {
  connection = mysql.createConnection(connectionOptions)
  console.log('connected to mysql!')
} catch (error) {
  console.log(error)
}

module.exports = {
  mysql: connection
}
