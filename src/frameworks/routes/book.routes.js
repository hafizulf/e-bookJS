const express = require('express');

const { findAll } = require('../../controllers/book.controller');

const router = express.Router();

router.get('/', findAll);

module.exports = router;
