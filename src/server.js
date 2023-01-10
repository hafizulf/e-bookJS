const express = require('express')
const { NODE_ENV } = require('./config')

const app = express()

app.get('/', (req, res) => {
  res.send('E-bookJS App!')
})

if (NODE_ENV !== 'test') {
  app.listen(3000, () => {
    console.log(`${NODE_ENV} Listening on port http://localhost:3000`)
  })
}

module.exports = app
