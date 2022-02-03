const express = require('express');
const router = express.Router();
const path = require('path');

const authAdminMiddleware = require('../middlewares/authAdminMiddleware');


//Requerir controlador
const apiController = require('../controllers/apiController');

router.get('/users',authAdminMiddleware, apiController.allUsers);
router.get('/users/:id',authAdminMiddleware, apiController.singleUser);
router.get('/products',authAdminMiddleware, apiController.allProducts);
router.get('/products/:id',authAdminMiddleware, apiController.singleProduct);

module.exports = router