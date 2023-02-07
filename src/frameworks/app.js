const express = require('express');

const bookRoutes = require('./routes/book.routes');

const app = express();

// plugins
app.use(express.json());

// routes
app.use('/books', bookRoutes);

app.get('/', (req, res) => {
  res.send('E-bookJS App!');
});

module.exports = app;
