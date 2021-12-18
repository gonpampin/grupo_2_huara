const express = require('express');
const router = express.Router();
const path = require('path');

//Requerir controlador
const listController = require('../controllers/listController');

const authAdminMiddleware = require('../middlewares/authAdminMiddleware');

//listado productos

router.get('/', authAdminMiddleware, listController.list);
router.get('/listadoproductos', authAdminMiddleware, listController.productList);
router.get('/listadousuarios', authAdminMiddleware, listController.userList);
router.delete('/listadousuarios/delete/:id', listController.delete)
router.get('/listadousuarios/:id', authAdminMiddleware, listController.userProfile);

module.exports = router