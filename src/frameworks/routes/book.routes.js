const express = require('express');

const { find, save, deleteOne } = require('../../controllers/book');

const router = express.Router();

router.get('/', find).post('/', save).delete('/:book_id', deleteOne);

module.exports = router;
