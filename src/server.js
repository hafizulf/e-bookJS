const express = require('express')

const app = express()

const server = app.listen(3000, () => {
  console.log('App listening on http://localhost:3000')
})

module.exports = server
