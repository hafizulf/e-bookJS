const express = require('express');

const { save, findAll, findOne, deleteOne } = require('../../controllers/user');

const cache = require('../middleware/cache');

const router = express.Router();

router
  .post('/', save)
  .get('/', cache.set(300), findAll)
  .get('/:user_id', findOne)
  .delete('/:user_id', deleteOne);

module.exports = router;
