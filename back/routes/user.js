const express = require('express');
const router = express.Router();
const { isNotLoggedIn } = require('../middleware');
const { login } = require('../controllers/user');

router.post('/', isNotLoggedIn, login);

module.exports = router;