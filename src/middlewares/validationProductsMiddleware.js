const path = require('path');
const { body } = require('express-validator')

const validations = [
    body('name').notEmpty().withMessage('Debes escribir un nombre').isLength({ min: 5 }).withMessage('Debes escribir mínimo 5 caracteres').bail(),
    body('description').notEmpty().withMessage('Debes poner una descripción').bail().isLength({ min: 20 }).withMessage('Debes escribir mínimo 20 caracteres').bail(),
    body('image').custom((value, { req }) =>{
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
        }).bail(),
    body('price').notEmpty().withMessage('Debes ingresar un precio').bail(),
    body('stock').notEmpty().withMessage('Debes ingresar stock').bail().isLength({ min: 8, max: 12 }).withMessage('Debes ingresar entre 8 y 12 caracteres').bail()
    
    

]

module.exports = validations