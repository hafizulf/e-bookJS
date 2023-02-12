const express = require('express');

const { find, save } = require('../../controllers/book');

const router = express.Router();

router.get('/', find).post('/', save);

module.exports = router;
