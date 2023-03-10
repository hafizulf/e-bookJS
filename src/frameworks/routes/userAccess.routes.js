const express = require('express');

const { save } = require('../../controllers/user-access');

const isLoggedIn = require('../middleware/authentication');
const authorize = require('../middleware/authorization');

const router = express.Router();

router.post('/', isLoggedIn, authorize('admin'), save);

module.exports = router;
