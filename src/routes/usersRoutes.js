const express = require('express');
const router = express.Router();
const path = require('path');



const controller = require('../controllers/usersController');

const validations = require('../middlewares/validationRegisterMiddleware');


//Ruta que muestra la vista de registro
router.get('/registro', controller.register);

//Ruta que procesa los datos del registro
router.post('/registro', validations, controller.processRegister);




//Ruta que muestra la vista del login
router.get('/login', controller.login);


module.exports = router