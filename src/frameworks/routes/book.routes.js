const express = require('express');

const {
  findAll,
  findOne,
  save,
  deleteOne,
  update,
} = require('../../controllers/book');

const fileUpload = require('../middleware/fileUpload');
const upload = fileUpload.single('file');

const cache = require('../middleware/cache');
const isLoggedIn = require('../middleware/authentication');

const router = express.Router();

router
  .get('/', isLoggedIn, cache.set(300), findAll)
  .get('/:slug', findOne)
  .post('/', upload, save)
  .delete('/:book_id', deleteOne)
  .put('/:book_id', upload, update);

module.exports = router;
