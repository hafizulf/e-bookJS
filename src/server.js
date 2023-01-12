const express = require('express')
const { mysql } = require('./db')

const app = express()

const { NODE_ENV, APP_PORT } = require('./config')

app.get('/', (req, res) => {
  res.send('E-bookJS App!')
})

app.get('/koneksi', (req, res) => {
  mysql.query('SELECT * FROM books', (error, results) => {
    if (error) throw error

    res.status(200).json({
      data: results.length > 0 ? results : 'no record found'
    })
  })
})

if (NODE_ENV !== 'test') {
  app.listen(APP_PORT, () => {
    console.log(`Listening on port http://localhost:${APP_PORT}`)
  })
}

module.exports = app
