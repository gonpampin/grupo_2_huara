const express = require('express');
const router = express.Router();
const path = require('path');

const controller = require('../controllers/usersController');

router.get('/login', controller.login);

router.get('/registro', controller.register);

module.exports = router