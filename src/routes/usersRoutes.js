const express = require('express');
const router = express.Router();
const path = require('path');

//Requerir controlador
const controller = require('../controllers/usersController');

//Requerir middlewares
const validations = require('../middlewares/validationRegisterMiddleware');
const uploadFile = require('../middlewares/multerUsersMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');
const guestMiddleware = require('../middlewares/guestMiddleware');


//Ruta que muestra la vista de registro
router.get('/registro', guestMiddleware, controller.register);

//Ruta que procesa los datos del registro
router.post('/registro', uploadFile.single('avatar'), validations, controller.processRegister);

//Ruta que muestra la vista del login
router.get('/login', guestMiddleware, controller.login);
router.post('/login', controller.loginProcess);
router.get('/perfil', authMiddleware, controller.profile);
router.get('/logout', controller.logout);

module.exports = router