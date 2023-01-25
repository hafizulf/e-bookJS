const path = require('path')
require('dotenv').config({
  path: path.join(__dirname, '../../../.env')
})

const { DB_DIALECT, DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_DATABASE } =
  process.env

const devEnvConfig = {
  client: DB_DIALECT,
  connection: {
    host: DB_HOST,
    port: DB_PORT,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'migrations',
    directory: path.join(__dirname, 'migrations')
  }
}

module.exports = {
  development: devEnvConfig
}
