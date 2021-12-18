const express = require('express');
const router = express.Router();
const path = require('path');

//Requerir controlador
const listController = require('../controllers/listController');

//listado productos

router.get('/', listController.list);
router.get('/listadoproductos', listController.productList);
router.get('/listadousuarios', listController.userList);
router.delete('/listadousuarios/delete/:id', listController.delete)
router.get('/listadousuarios/:id', listController.userProfile);

module.exports = router