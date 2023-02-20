const express = require('express');

const {
  save,
  findAll,
  findOne,
  deleteOne,
  update,
} = require('../../controllers/user');

const cache = require('../middleware/cache');

const router = express.Router();

router
  .post('/', save)
  .get('/', cache.set(300), findAll)
  .get('/:user_id', findOne)
  .delete('/:user_id', deleteOne)
  .put('/:user_id', update);

module.exports = router;
