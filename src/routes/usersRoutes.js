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



//Ruta que muestra la vista del formulario de registro
router.get('/registro', guestMiddleware, controller.register);
//Ruta que procesa los datos del registro
router.post('/registro', uploadFile.single('avatar'), validations, controller.processRegister);
// Perfil de Usuario
router.get('/perfil/:id', authMiddleware, controller.profile);
router.get('/editarusuario/:id', authMiddleware, controller.formEdit);
// edicion de usuarios
router.put('/editarusuario/:id', uploadFile.single('avatar'), validations, controller.editUser);
router.delete('/delete/:id', controller.delete);
//Ruta que muestra la vista del login
router.get('/login', guestMiddleware, controller.login);
//Ruta que procesa la vista del login
router.post('/login', controller.loginProcess);
// Logout
router.get('/logout', controller.logout);

module.exports = router