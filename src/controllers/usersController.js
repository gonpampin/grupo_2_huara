const path = require('path');
const fs = require('fs');

let jsonUsers = fs.readFileSync(path.resolve(__dirname, '../db/users.json'), 'utf-8');
let usuariosLista = JSON.parse(jsonUsers); 

const { validationResult } = require('express-validator')


let userController = {
 
    login:(req, res) => {
        res.render('./users/login');
    },

    register:(req, res) => {
        res.render('./users/register');
    },

    processRegister: (req,res) => {
        let resultValidation = validationResult(req)

        if (resultValidation.errors.length > 0) {
            return res.render('./users/register', {
                errors: resultValidation.mapped(), 
                oldData: req.body
            })
        }
    } 

}    

module.exports = userController; 