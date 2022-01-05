const path = require('path');
const { body } = require('express-validator')

const validations = [
    body('name').notEmpty().withMessage('Debes escribir tu nombre').bail().isLength({ min: 2}).withMessage('El nombre debe tener al menos dos caracteres').bail(),
    body('lastname').notEmpty().withMessage('Debes escribir tu apellido').bail().isLength({ min: 2}).withMessage('El apellido debe tener al menos dos caracteres').bail(),
    body('email').notEmpty().withMessage('Debes ingresar tu email').bail().isEmail().withMessage('Debes ingresar un mail válido').bail(),
    body('contrasenia').notEmpty().withMessage('Debes ingresar una contraseña').bail().isLength({ min: 8, max: 12 }).withMessage('Debes ingresar entre 8 y 12 caracteres').bail(),
    body('recontrasenia').notEmpty().withMessage('No puede estar vacio').bail().custom((repass, { req }) => {
        if (repass !== req.body.contrasenia) {
          throw new Error('Las contraseñas deben coincidir');
        }
        return true;
      }).bail(),
    body('avatar').custom((value, { req }) =>{
      let file = req.file;
      let acceptedExtensions = ['.jpg', '.png', '.gif','.jpeg'];

      if(!file){
        throw new Error ('Tenés que cargar un archivo de imagen')
      } else{
        let fileExtension = path.extname(file.originalname)
        if (!acceptedExtensions.includes(fileExtension)){
          throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(',')}`);
      }
        }
        return true;
      })
    

]

module.exports = validations

