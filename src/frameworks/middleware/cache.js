const NodeCache = require('node-cache');

const cache = new NodeCache();

const set = (duration) => {
  return (req, res, next) => {
    if (req.method !== 'GET') {
      console.error('Cache middleware only works with GET requests');
      return next();
    }

    const key = req.originalUrl;
    const cachedResponse = cache.get(key);

    if (cachedResponse) {
      console.log('Cache hit');
      return res.send(cachedResponse);
    } else {
      console.log('no cache hit');

      res.originalJson = res.json;
      res.json = (body) => {
        cache.set(key, body, duration);
        res.originalJson(body);
      };
      next();
    }
  };
};

const del = (key) => {
  return cache.del(key);
};

module.exports = {
  set,
  del,
};
