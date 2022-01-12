const express = require('express');
const router = express.Router();

const controller = require('../controllers/cartController');

//Requerir middleware
const authAdminMiddleware = require('../middlewares/authAdminMiddleware');


router.get('/', authAdminMiddleware, controller.productCart);


module.exports = router;
