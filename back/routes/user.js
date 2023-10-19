const express = require('express');
const router = express.Router();
const { isLoggedIn, isNotLoggedIn } = require('../middleware');
const { login, logout, join } = require('../controllers/user');

router.post('/login', isNotLoggedIn, login);
router.post('/logout', isLoggedIn, logout);
router.post('/join', isNotLoggedIn, join);

module.exports = router;