const express = require('express')

const app = express()

// plugin
app.use(express.json())

// routes

app.get('/', (req, res) => {
  res.send('E-bookJS App!')
})

module.exports = app
