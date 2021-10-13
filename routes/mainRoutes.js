const express = require('express');
const router = express.Router();

const controller = require('../controllers/mainController');


router.get('/', controller.home);

router.get('/productos', controller.product);

router.get('/login', controller.login);

router.get('/registro', controller.register);

router.get('/carrito', controller.productCart);

router.get('/crearproducto', controller.formCreate);

router.get('/editarproducto', controller.formEdit);

module.exports = router;
