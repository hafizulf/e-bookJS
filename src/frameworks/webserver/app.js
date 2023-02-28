const express = require('express');

const authRoutes = require('../routes/auth.routes');
const bookRoutes = require('../routes/book.routes');
const userRoutes = require('../routes/user.routes');

const app = express();

// plugins
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/books', bookRoutes);
app.use('/api/v1/users', userRoutes);

app.get('/', (req, res) => {
  res.send('E-bookJS App!');
});

module.exports = app;
