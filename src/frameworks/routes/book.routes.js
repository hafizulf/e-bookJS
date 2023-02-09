const express = require('express');

const { findAll, save } = require('../../controllers/book.controller');

const router = express.Router();

router.get('/', findAll).post('/', save);

module.exports = router;
