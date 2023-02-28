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

const router = express.Router();

router
  .post('/', isLoggedIn, save)
  .get('/', isLoggedIn, cache.set(300), findAll)
  .get('/:user_id', isLoggedIn, findOne)
  .delete('/:user_id', isLoggedIn, deleteOne)
  .put('/:user_id', isLoggedIn, update)
  .post('/change-password/:user_id', isLoggedIn, changePassword);

module.exports = router;
