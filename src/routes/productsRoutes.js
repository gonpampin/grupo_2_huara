const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require ('multer');


const productController = require('../controllers/productsController');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve(__dirname, '../../public/images/products'));
    },
    filename: function (req, file, cb) {
        const name = `product-${Date.now()}${path.extname(file.originalname)}`
        cb(null, name)
    }
})
  
const upload = multer({ storage })

// Procesamiento de datos
router.post('/crearproducto', upload.single('image'), productController.store);
router.put('/editarproducto/:id', upload.single('image'), productController.editProduct);
router.delete('/:id', productController.delete);

// Envío de vistas
router.get('/', productController.product);
router.get('/crearproducto', productController.formCreate);
router.get('/editarproducto/:id', productController.formEdit);
router.get('/:id', productController.detail);









module.exports = router