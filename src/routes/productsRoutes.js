const express = require('express');
const router = express.Router();
const path = require('path');

//Requerir controlador
const productController = require('../controllers/productsController');

//Requerir middlewares
const uploadFile = require('../middlewares/multerProductsMiddleware');


//Formulario creación productos
router.post('/crearproducto', uploadFile.single('image'), productController.store);
router.put('/editarproducto/:id', uploadFile.single('image'), productController.editProduct);
router.delete('/:id', productController.delete);

// Envío de vistas
router.get('/', productController.products);
router.get('/crearproducto', productController.formCreate);
router.get('/editarproducto/:id', productController.formEdit);
router.get('/:id', productController.detail);









module.exports = router