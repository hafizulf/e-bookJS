const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const fs = require('fs');
const path = require('path');
const YAML = require('yaml');
const swaggerUi = require('swagger-ui-express');

const authRoutes = require('../routes/auth.routes');
const bookRoutes = require('../routes/book.routes');
const roleRoutes = require('../routes/role.routes');
const userRoutes = require('../routes/user.routes');
const userAccessRoutes = require('../routes/userAccess.routes');

const app = express();

// plugins
const apiDocsFile = fs.readFileSync(path.join('./swagger.yaml'), 'utf8');
const swaggerDocument = YAML.parse(apiDocsFile);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const limit = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  standardHeaders: true, // Return rate limit info 'RateLimit-*' headers
  legacyHeaders: false, // Disable the 'X-RateLimit-*' headers
});

app.use(cors());
app.use(limit);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/books', bookRoutes);
app.use('/api/v1/roles', roleRoutes);
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/user-access', userAccessRoutes);

app.get('/', (req, res) => {
  res.send('E-bookJS App!');
});

module.exports = app;
