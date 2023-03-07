require('dotenv').config();

module.exports = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  APP_PORT: process.env.NODE_APP_PORT || 3000,
  REDIS_HOST: process.env.REDIS_HOST || 'redis',
  REDIS_PORT: process.env.REDIS_PORT || 6379,
  REDIS_HOST_TEST: process.env.REDIS_HOST_TEST || 'localhost',
  REDIS_PORT_TEST: process.env.REDIS_PORT_TEST || 6379,
};
