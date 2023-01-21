const express = require('express')

const app = express()

const { NODE_ENV, APP_PORT } = require('./config')

app.get('/', (req, res) => {
  res.send('E-bookJS App!')
})

if (NODE_ENV !== 'test') {
  app.listen(APP_PORT, () => {
    console.log(`Listening on port http://localhost:${APP_PORT}`)
  })
}

module.exports = app
