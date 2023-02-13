const express = require('express');

const { find, save, deleteOne, update } = require('../../controllers/book');

const router = express.Router();

router
  .get('/', find)
  .post('/', save)
  .delete('/:book_id', deleteOne)
  .put('/:book_id', update);

module.exports = router;
