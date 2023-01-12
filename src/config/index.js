require('dotenv').config()

module.exports = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  APP_PORT: process.env.NODE_APP_PORT || 3000
}
