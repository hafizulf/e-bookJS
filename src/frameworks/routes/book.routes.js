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

const router = express.Router();

router
  .get('/', findAll)
  .get('/:slug', findOne)
  .post('/', upload, save)
  .delete('/:book_id', deleteOne)
  .put('/:book_id', upload, update);

module.exports = router;
