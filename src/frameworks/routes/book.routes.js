const express = require('express');

const {
  findAll,
  findOne,
  save,
  deleteOne,
  update,
} = require('../../controllers/book');

const fileUpload = require('../middleware/fileUpload');
const { cache } = require('../middleware/cache');
const isLoggedIn = require('../middleware/authentication');

const router = express.Router();

router
  .get('/', isLoggedIn, cache(300), findAll)
  .get('/:slug', isLoggedIn, findOne)
  .post('/', isLoggedIn, fileUpload.single('file'), save)
  .delete('/:book_id', isLoggedIn, deleteOne)
  .put('/:book_id', isLoggedIn, fileUpload.single('file'), update);

module.exports = router;
