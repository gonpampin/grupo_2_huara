const express = require('express');
const router = express.Router();
const path = require('path');

const authAdminMiddleware = require('../middlewares/authAdminMiddleware');


//Requerir controlador
const apiController = require('../controllers/apiController');

router.get('/users', apiController.allUsers);
router.get('/users/:id', apiController.singleUser);
router.get('/products', apiController.allProducts);
router.get('/products/:id', apiController.singleProduct);

module.exports = router