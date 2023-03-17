const express = require('express');

const {
  save,
  findAll,
  findOne,
  deleteOne,
  update,
  changePassword,
} = require('../../controllers/user');

const cache = require('../middleware/cache');
const isLoggedIn = require('../middleware/authentication');
const authorize = require('../middleware/authorization');

const router = express.Router();

router
  .post('/change-password/:user_id', isLoggedIn, changePassword)
  .get('/:user_id', isLoggedIn, findOne)
  .put('/:user_id', isLoggedIn, update)
  .get('/', isLoggedIn, authorize('admin'), cache.set(300), findAll)
  .post('/', isLoggedIn, authorize('admin'), save)
  .delete('/:user_id', isLoggedIn, authorize('admin'), deleteOne);

module.exports = router;
