const express = require('express');

const { save } = require('../../controllers/user');

const router = express.Router();

router.post('/', save);

module.exports = router;
