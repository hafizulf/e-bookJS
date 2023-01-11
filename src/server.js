const express = require('express')
const { mysql } = require('./db')

const app = express()

const { NODE_ENV } = require('./config')

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
  app.listen(3000, () => {
    console.log(`Listening on port http://localhost:3000`)
  })
}

module.exports = app
