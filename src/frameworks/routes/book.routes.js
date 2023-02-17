const express = require('express');

const { find, save, deleteOne, update } = require('../../controllers/book');

const fileUpload = require('../middleware/fileUpload');
const upload = fileUpload.single('file');

const router = express.Router();

router
  .get('/', find)
  .post('/', upload, save)
  .delete('/:book_id', deleteOne)
  .put('/:book_id', upload, update);

module.exports = router;
