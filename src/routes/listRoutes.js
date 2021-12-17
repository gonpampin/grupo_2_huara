const express = require('express');
const router = express.Router();
const path = require('path');

//Requerir controlador
const listController = require('../controllers/listController');

//listado productos

router.get('/', listController.list);
router.get('/listadoproductos', listController.productList);

module.exports = router