const express = require('express');
const router = express.Router();
const path = require('path');


const productController = require('../controllers/productsController');

router.get('/', productController.product);

router.get('/crearproducto', productController.formCreate);

router.get('/editarproducto', productController.formEdit);

module.exports = router