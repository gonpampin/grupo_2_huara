const express = require('express');
const router = express.Router();
const path = require('path');

//Requerir controlador
const productController = require('../controllers/productsController');

//Requerir middlewares
const uploadFile = require('../middlewares/multerProductsMiddleware');
const authAdminMiddleware = require('../middlewares/authAdminMiddleware');


//Formulario creación productos
router.post('/crearproducto', uploadFile.single('image'), productController.store);
router.put('/editarproducto/:id', uploadFile.single('image'), productController.editProduct);
router.delete('/:id', productController.delete);

// Envío de vistas
router.get('/', productController.products);
router.get('/crearproducto', authAdminMiddleware, productController.formCreate);
router.get('/editarproducto/:id', authAdminMiddleware, productController.formEdit);
router.get('/:id', productController.detail);
router.post('/buscar', productController.search);

 









module.exports = router