const express = require('express');
const router = express.Router();

const controller = require('../controllers/cartController');

//Requerir middleware
const authAdminMiddleware = require('../middlewares/authAdminMiddleware');


router.get('/carrito', authAdminMiddleware, controller.productCart);
router.post('/carrito', controller.addToCart);



module.exports = router;
