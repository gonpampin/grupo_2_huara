const express = require('express');
const router = express.Router();
const path = require('path');

//Requerir controlador
const controller = require('../controllers/usersController');

//Requerir middlewares
const validations = require('../middlewares/validationRegisterMiddleware');
const uploadFile = require('../middlewares/multerUsersMiddleware');


//Ruta que muestra la vista de registro
router.get('/registro', controller.register);

//Ruta que procesa los datos del registro
router.post('/registro', uploadFile.single('avatar'), validations, controller.processRegister);

//Ruta que muestra la vista del login
router.get('/login', controller.login);


module.exports = router