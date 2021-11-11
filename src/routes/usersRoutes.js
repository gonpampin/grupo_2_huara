const express = require('express');
const router = express.Router();
const path = require('path');

const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.resolve(__dirname, '../../public/images/avatars'));

    },
    filename: (req, file, cb) => {
        let fileName = `user-${Date.now()}_img${path.extname(file.originalname)}`
        cb(null, fileName);
    }
})

const uploadFile = multer ({ storage });

const controller = require('../controllers/usersController');

const validations = require('../middlewares/validationRegisterMiddleware');


//Ruta que muestra la vista de registro
router.get('/registro', controller.register);

//Ruta que procesa los datos del registro
router.post('/registro', uploadFile.single('avatar'), validations, controller.processRegister);




//Ruta que muestra la vista del login
router.get('/login', controller.login);


module.exports = router