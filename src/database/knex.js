const { NODE_ENV } = require('../config')
const knexfile = require('../knexfile')
const database = require('knex')(knexfile[NODE_ENV])

module.exports = database
