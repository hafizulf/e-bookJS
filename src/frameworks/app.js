const express = require('express');

const bookRoutes = require('./routes/book.routes');

const app = express();

// plugins
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use('/api/v1/books', bookRoutes);

app.get('/', (req, res) => {
  res.send('E-bookJS App!');
});

module.exports = app;
