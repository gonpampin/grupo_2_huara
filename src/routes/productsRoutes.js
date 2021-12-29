const express = require('express');
const router = express.Router();
const path = require('path');




//Requerir controlador
const productController = require('../controllers/productsController');

//Requerir middlewares
const productValidations = require('../middlewares/validationProductsMiddleware');
const editProductValidations = require('../middlewares/validationEditProductMiddleware');
const authAdminMiddleware = require('../middlewares/authAdminMiddleware');
const uploadFile = require('../middlewares/multerProductsMiddleware');




// Envío de vistas


router.get('/', productController.products);

router.get('/crearproducto', authAdminMiddleware, productController.formCreate);


router.get('/editarproducto/:id', authAdminMiddleware, productController.formEdit);
router.get('/:id', productController.detail);
router.post('/', productController.search);
router.post('/crearproducto', uploadFile.single('image'), productValidations, productController.store);
 
//Formulario creación productos
router.put('/editarproducto/:id', uploadFile.single('image'), editProductValidations, productController.editProduct);
router.delete('/:id', productController.delete);



module.exports = router
