const express = require('express');
const router = express.Router();

const cartController = require('../controllers/cartController');

//Requerir middleware
const authUserCartMiddleware = require('../middlewares/authUserCartMiddleware');


router.get('/carrito', authUserCartMiddleware, cartController.productCart);
router.post('/carrito', cartController.addToCart);
router.put('/carrito', cartController.removeFromCart);
router.delete('/carrito', cartController.terminarCompra);



module.exports = router;
