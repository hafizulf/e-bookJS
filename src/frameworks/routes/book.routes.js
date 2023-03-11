const express = require('express');

const {
  findAll,
  findOne,
  save,
  deleteOne,
  update,
  downloadFile,
} = require('../../controllers/book');

const fileUpload = require('../middleware/fileUpload');
const cache = require('../middleware/cache');
const isLoggedIn = require('../middleware/authentication');
const authorize = require('../middleware/authorization');

const router = express.Router();

router
  .get('/', isLoggedIn, authorize('user'), cache.set(300), findAll)
  .get('/:slug', isLoggedIn, authorize('user'), findOne)
  .post('/', isLoggedIn, authorize('admin'), fileUpload.single('file'), save)
  .delete('/:book_id', isLoggedIn, authorize('admin'), deleteOne)
  .put(
    '/:book_id',
    isLoggedIn,
    authorize('admin'),
    fileUpload.single('file'),
    update
  )
  .get('/download/:filename', downloadFile);

module.exports = router;
