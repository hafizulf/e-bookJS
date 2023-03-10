const express = require('express');

const {
  save,
  findAll,
  findOne,
  deleteOne,
  update,
} = require('../../controllers/role');

const isLoggedIn = require('../middleware/authentication');
const authorize = require('../middleware/authorization');
const cache = require('../middleware/cache');

const router = express.Router();

router
  .post('/', isLoggedIn, authorize('admin'), save)
  .get('/', isLoggedIn, authorize('admin'), cache.set(3600), findAll)
  .get('/:role_id', isLoggedIn, authorize('admin'), findOne)
  .delete('/:role_id', isLoggedIn, authorize('admin'), deleteOne)
  .put('/:role_id', isLoggedIn, authorize('admin'), update);

module.exports = router;
