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

router.get('/', productController.product);

router.get('/crearproducto', productController.formCreate);

router.get('/editarproducto', productController.formEdit);

router.get('/:id', productController.detail);


router.post('/crearproducto', upload.single('image'), productController.store);


module.exports = router