const config = require('../config');

const Redis = require('ioredis');

let client;
if (config.NODE_ENV === 'test') {
  client = new Redis({
    host: config.REDIS_HOST_TEST,
    port: config.REDIS_PORT_TEST,
  });
} else {
  client = new Redis({
    host: config.REDIS_HOST,
    port: config.REDIS_PORT,
  });
}

const cache = (duration) => {
  return (req, res, next) => {
    if (req.method !== 'GET') {
      return next();
    }

    const key = req.originalUrl;

    client.get(key, (err, cachedResponse) => {
      if (cachedResponse !== null) {
        console.log('cached');
        return res.json(JSON.parse(cachedResponse));
      } else {
        res.originalJson = res.json;
        res.json = (body) => {
          client.set(key, JSON.stringify(body), 'EX', duration);
          res.originalJson(body);
        };
        next();
      }
    });
  };
};

const del = (key) => {
  return client.del(key);
};

module.exports = {
  cache,
  del,
};
