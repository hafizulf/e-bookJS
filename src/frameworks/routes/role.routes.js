const express = require('express');

const { save, findAll, findOne } = require('../../controllers/role');

const isLoggedIn = require('../middleware/authentication');
const authorize = require('../middleware/authorization');
const cache = require('../middleware/cache');

const router = express.Router();

router
  .post('/', isLoggedIn, authorize('admin'), save)
  .get('/', isLoggedIn, authorize('admin'), cache.set(3600), findAll)
  .get('/:role_id', isLoggedIn, authorize('admin'), findOne);

module.exports = router;
